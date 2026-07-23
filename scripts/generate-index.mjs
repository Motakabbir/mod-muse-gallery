/**
 * Post-build script: generates static index.html by running the built
 * SSR server and capturing its output.
 *
 * TanStack Start requires server-rendered HTML with bootstrap data
 * (window.$_TSR) for client hydration. A simple SPA shell won't work.
 * This script starts the built server, fetches each route's HTML, and
 * saves it as static files.
 */
import { spawn } from "child_process";
import { writeFileSync, mkdirSync, existsSync, cpSync } from "fs";
import { resolve, dirname, join } from "path";
import { createServer } from "net";

const CLIENT_DIR = resolve("dist/client");
const ROUTES = [
  "/",
  "/about",
  "/apply",
  "/contact",
  "/design-gallery",
  "/events",
  "/the-build",
];

function getFreePort() {
  return new Promise((resolve, reject) => {
    const server = createServer();
    server.listen(0, () => {
      const port = server.address().port;
      server.close(() => resolve(port));
    });
    server.on("error", reject);
  });
}

async function waitForServer(url, maxAttempts = 30) {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      const res = await fetch(url);
      if (res.ok || res.status < 500) return true;
    } catch {
      // Server not ready yet
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  return false;
}

async function main() {
  const PORT = await getFreePort().catch(() => 4174);
  const BASE_URL = `http://localhost:${PORT}`;

  const SERVER_DIR = resolve("dist/server");
  if (existsSync(join(SERVER_DIR, "index.mjs")) && !existsSync(join(SERVER_DIR, "server.js"))) {
    writeFileSync(join(SERVER_DIR, "server.js"), 'export { default } from "./index.mjs";\n');
  }

  console.log(`Starting preview server on port ${PORT} to capture SSR output...`);

  const server = spawn("npx", ["vite", "preview", "--port", String(PORT), "--strictPort"], {
    cwd: process.cwd(),
    stdio: ["ignore", "pipe", "pipe"],
    env: { ...process.env, NODE_ENV: "production" },
  });

  let serverOutput = "";
  server.stdout.on("data", (d) => (serverOutput += d.toString()));
  server.stderr.on("data", (d) => (serverOutput += d.toString()));

  server.on("error", (err) => {
    console.error("Failed to start preview server:", err);
    process.exit(1);
  });

  const ready = await waitForServer(BASE_URL);
  if (!ready) {
    console.error("Preview server did not start in time.");
    console.error("Server output:", serverOutput);
    server.kill();
    process.exit(1);
  }

  console.log(`✓ Preview server ready on port ${PORT}`);

  let success = 0;
  let failed = 0;

  for (const route of ROUTES) {
    try {
      const res = await fetch(`${BASE_URL}${route}`);
      const html = await res.text();

      if (res.status >= 400 || !html.includes("$_TSR")) {
        console.warn(`  ⚠ ${route} — status ${res.status}, skipping (no SSR data)`);
        failed++;
        continue;
      }

      // Determine output path
      let outPath;
      if (route === "/") {
        outPath = join(CLIENT_DIR, "index.html");
      } else {
        const dir = join(CLIENT_DIR, route.slice(1));
        mkdirSync(dir, { recursive: true });
        outPath = join(dir, "index.html");
      }

      writeFileSync(outPath, html);
      console.log(`  ✓ ${route} → ${outPath.replace(process.cwd() + "/", "")}`);
      success++;
    } catch (err) {
      console.error(`  ✗ ${route} — ${err.message}`);
      failed++;
    }
  }

  // Also create 200.html and 404.html fallbacks for SPA routing
  if (existsSync(join(CLIENT_DIR, "index.html"))) {
    cpSync(join(CLIENT_DIR, "index.html"), join(CLIENT_DIR, "200.html"));
    cpSync(join(CLIENT_DIR, "index.html"), join(CLIENT_DIR, "404.html"));
    console.log(`✓ Created 200.html and 404.html SPA fallbacks`);
  }

  server.kill();
  console.log(`\nDone: ${success} pages generated, ${failed} skipped.`);

  if (success === 0) {
    console.error("No pages were generated! Check server output above.");
    process.exit(1);
  }
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
