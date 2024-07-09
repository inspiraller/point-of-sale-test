import { defineConfig } from "cypress";
import codeCover from "@cypress/code-coverage/task";
export default defineConfig({
  env: {
    codeCoverage: {
        exclude: ["cypress/**/*.*", "*/**/*.cy.tsx"],
    },
  },
  e2e: {
    baseUrl: "http://localhost:3000",

  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },

  },
});
