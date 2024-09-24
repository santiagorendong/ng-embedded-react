import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: "src/main.tsx",
      preserveEntrySignatures: "exports-only",
      output: {
        exports: "auto",
        format: "system",
        entryFileNames: "bundle.js",
      },
    },
  },
  plugins: [react()],
  base: "http://localhost:3000",
  preview: {
    port: 3000,
  },
  server: {
    host: "localhost",
    port: 3000,
  },
});
