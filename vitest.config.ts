import { defineConfig } from "vitest/config";

export default defineConfig({
  // Use the automatic JSX runtime so .tsx tests don't need React in scope.
  esbuild: { jsx: "automatic", jsxImportSource: "react" },
  resolve: {
    alias: { "@": new URL("./src", import.meta.url).pathname },
  },
  test: {
    environment: "node",
  },
});
