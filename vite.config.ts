import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "MyGitHubAction",
      formats: ["es"],
      fileName: () => `index.js`,
    },
  },
});
