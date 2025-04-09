import { defineConfig } from "vite";
import path from "path";
import litcss from "vite-plugin-lit-css";
import { fileURLToPath } from "url";

// Get the directory name of the current module
const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        widget1: path.resolve(__dirname, "src/widgets/widget1/Widget1.ts"),
        widget2: path.resolve(__dirname, "src/widgets/widget2/Widget2.ts"),
      },
      output: {
        entryFileNames: "[name]/bundle.js",
        chunkFileNames: "[name]-[hash].js",
        assetFileNames: "[name]-[hash].[ext]",
        format: "es",
        dir: "dist",
      },
    },
  },
  plugins: [litcss()],
});
