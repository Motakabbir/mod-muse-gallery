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

// Copy the entire server build into the function directory
copyDir(distServer, funcOut);

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
      launchTarget: "handler.js",
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

console.log("✓ .vercel/output built successfully");
