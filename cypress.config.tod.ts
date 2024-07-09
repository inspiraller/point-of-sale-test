import { defineConfig } from "cypress";
import { options as customViteConfig } from "./vite.config";

import { mount } from 'cypress/react';

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
      dataCy(value: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}

export default defineConfig({
  component: {
    // devServer: {
    //   framework: "next",
    //   bundler: "webpack",
    // },
    devServer: {
      framework: "react",
      bundler: "vite",
      viteConfig: async () => {
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve(true);
          }, 100);
        });
        const modifiedConfig = {
          ...customViteConfig,
          output: {
            // fix coverage meta
            uniqueName: "MyProj",
            publicPath: "auto",
            scriptType: "text/javascript",
          },
          resolve: {}, // fix problem
        };
        console.log("mo", modifiedConfig);
        return modifiedConfig;
      },
    },
    // setupNodeEvents(on, config) {
    //   require("@cypress/code-coverage/task")(on, config);
    //   return config;
    // },
    // specPattern: ["**/*.cy.{js,ts,jsx,tsx}"],
  },
  e2e: {
    baseUrl: "http://localhost:3000",
    // setupNodeEvents(on, config) {
    //   require("@cypress/code-coverage/task")(on, config);
    //   return config;
    // },
    specPattern: ["**/*.cy.{js,jsx,ts,tsx}"],
  },
});
