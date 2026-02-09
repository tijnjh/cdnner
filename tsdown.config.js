import { defineConfig } from "tsdown";

export default defineConfig({
  entry: "src/main.jsx",
  format: "iife",
  minify: true,

  globalName: "sonner",

  alias: {
    react: "preact/compat",
    "react-dom": "preact/compat",
    "react-dom/client": "preact/compat",
  },

  noExternal: [
    "sonner",
    "preact",
    "preact/compat",
    "preact/hooks",
    "preact/jsx-runtime",
  ],
});
