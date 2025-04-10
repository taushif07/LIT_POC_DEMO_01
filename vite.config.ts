import { defineConfig } from "vite";
import path from "path";
import litcss from "vite-plugin-lit-css";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        widget1: path.resolve(__dirname, "src/widgets/widget1/Widget1.ts"),
        widget2: path.resolve(__dirname, "src/widgets/widget2/Widget2.ts"),
      },
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "chunks/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
        format: "es", // Changed to ES modules
        dir: "dist",
      },
    },
    emptyOutDir: true,
    // Add this to prevent code splitting issues
    modulePreload: { polyfill: false },
  },
  plugins: [litcss()],
});