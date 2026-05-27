/**
 * Post-build script: assembles Vercel Build Output API structure
 * from TanStack Start's dist/ output.
 *
 * dist/client/assets/ → .vercel/output/static/assets/
 * dist/server/        → .vercel/output/functions/index.func/
 */
import fs from "fs";
import path from "path";

const root = process.cwd();
const distClient = path.join(root, "dist/client");
const distServer = path.join(root, "dist/server");
const out = path.join(root, ".vercel/output");
const staticOut = path.join(out, "static");
const funcOut = path.join(out, "functions/index.func");

// Clean previous build output
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });


// ── helpers ────────────────────────────────────────────────────────────────
function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// ── 1. Static assets ────────────────────────────────────────────────────────
console.log("Copying static assets...");
copyDir(distClient, staticOut);

// ── 2. Serverless function ──────────────────────────────────────────────────
console.log("Building serverless function...");
fs.mkdirSync(funcOut, { recursive: true });

// Bundle the server + all npm dependencies into a single self-contained file.
// We can't copy dist/server/ raw because it references node_modules packages
// (h3-v2, @tanstack/router-core, etc.) which won't exist in the function dir.
console.log("Bundling server with esbuild...");
const { build } = await import("esbuild");

await build({
  entryPoints: [path.join(distServer, "server.js")],
  bundle: true,
  splitting: true,
  outdir: funcOut,
  format: "esm",
  platform: "node",
  target: "node22",
  // Keep Node.js built-ins external — everything else gets inlined
  external: ["node:*"],
  // Silence noisy "unused import" warnings from TanStack packages
  logLevel: "error",
});

// ESM package.json — required so Node.js treats handler.js as ES modules
fs.writeFileSync(
  path.join(funcOut, "package.json"),
  JSON.stringify({ type: "module" }, null, 2)
);

// Node.js ↔ Web Fetch API adapter
// Vercel Node.js runtime calls handler(req, res), but server.js exports
// a Web fetch handler: server.fetch(request, env, ctx)
const adapterCode = `
import server from './server.js';

export default async function handler(req, res) {
  const protocol = req.headers['x-forwarded-proto'] || 'https';
  const host = req.headers['x-forwarded-host'] || req.headers['host'] || 'localhost';
  const url = new URL(req.url, protocol + '://' + host);

  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (value !== undefined) {
      headers.append(key, Array.isArray(value) ? value.join(', ') : String(value));
    }
  }

  const method = req.method || 'GET';
  let body = undefined;
  if (method !== 'GET' && method !== 'HEAD') {
    const chunks = [];
    for await (const chunk of req) {
      chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
    }
    if (chunks.length > 0) body = Buffer.concat(chunks);
  }

  const request = new Request(url.href, {
    method,
    headers,
    body: body && body.length > 0 ? body : undefined,
  });

  let response;
  try {
    response = await server.fetch(request, {}, {});
  } catch (err) {
    console.error('SSR handler error:', err);
    res.statusCode = 500;
    res.end('Internal Server Error');
    return;
  }

  res.statusCode = response.status;
  response.headers.forEach((value, key) => res.setHeader(key, value));

  if (response.body) {
    const reader = response.body.getReader();
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      res.write(value);
    }
  }
  res.end();
}
`;
fs.writeFileSync(path.join(funcOut, "handler.js"), adapterCode.trimStart());

// Vercel function config — point to handler.js (the adapter)
fs.writeFileSync(
  path.join(funcOut, ".vc-config.json"),
  JSON.stringify(
    {
      runtime: "nodejs22.x",
      handler: "handler.js",
    },
    null,
    2
  )
);

// ── 3. Vercel output config ─────────────────────────────────────────────────
console.log("Writing .vercel/output/config.json...");
fs.writeFileSync(
  path.join(out, "config.json"),
  JSON.stringify(
    {
      version: 3,
      routes: [
        // Static assets served directly
        {
          src: "^/assets/(.*)$",
          dest: "/assets/$1",
        },
        // Everything else → SSR function
        {
          src: "^/(.*)$",
          dest: "index",
        },
      ],
    },
    null,
    2
  )
);

function printDir(dir, prefix = "") {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    console.log(`${prefix}├── ${entry.name}${entry.isDirectory() ? "/" : ""}`);
    if (entry.isDirectory()) {
      printDir(fullPath, prefix + "│   ");
    }
  }
}

console.log("Generated .vercel/output structure:");
printDir(out);

console.log("✓ .vercel/output built successfully");

