import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vite.dev/config/
export default defineConfig({
  base: "/kapenya",
  server: {
    host: true,
  },
  plugins: [
    react(),
    tailwindcss(),
    viteStaticCopy({
      targets: [
        {
          src: "dist/index.html",
          dest: "dist",
          rename: "404.html",
        },
      ],
    }),
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
    ],
  },
  assetsInclude: ["**/*.JPG", "**/*.PNG"],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "index.html",
    },
  },
});
