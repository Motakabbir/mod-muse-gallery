import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    server: {
      entry: "server",
      preset: "vercel",
      vercel: {
        functions: {
          runtime: "nodejs22.x",
        },
      },
      output: {
        dir: ".vercel/output",
        serverDir: ".vercel/output/functions/__server.func",
        publicDir: ".vercel/output/static",
      },
    },
  },
});
