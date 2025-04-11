import { defineConfig } from "vite";
import path from "path";
import litcss from "vite-plugin-lit-css";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

// Get the widget name from an environment variable
const widget = process.env.WIDGET;

if (!widget) {
  throw new Error("Please specify the WIDGET environment variable (e.g., 'widget1' or 'widget2')");
}

// Define the input based on the widget name
const input = path.resolve(__dirname, `src/widgets/${widget}/index.ts`);

export default defineConfig({
  build: {
    rollupOptions: {
      input, // Single entry point for the specified widget
      output: {
        entryFileNames: `${widget}.js`, // Output as widget1.js or widget2.js
        format: "es", // ES module format
        dir: "dist", // Output directory
      },
    },
    assetsInlineLimit: 1000000, // Inline all assets up to 1MB (adjust as needed)
    emptyOutDir: false, // Prevent clearing dist folder between builds
  },
  plugins: [litcss()],
});