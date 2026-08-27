import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { START_ENVIRONMENT_NAMES } from "@tanstack/start-plugin-core";

if (START_ENVIRONMENT_NAMES) {
  (START_ENVIRONMENT_NAMES as any).server = "nitro";
}

export default defineConfig({
  tanstackStart: {
    prerender: {
      routes: ["/"],
      crawlLinks: true,
    },
  },
  nitro: {
    preset: "node-server",
  },
  vite: {
    environments: {
      nitro: {
        build: {
          rollupOptions: {
            input: "src/server.ts",
          },
        },
      },
    },
  },
});
