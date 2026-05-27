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

// Vercel function config
fs.writeFileSync(
  path.join(funcOut, ".vc-config.json"),
  JSON.stringify(
    {
      runtime: "nodejs22.x",
      handler: "server.js",
      launchTarget: "server.js",
      environment: {},
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
