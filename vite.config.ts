import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import istanbul from "vite-plugin-istanbul";
import path from "path";
export const options = {
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true,
    port: 3000,
  },
  build: {
    sourcemap: true,
  },
};

export default defineConfig(options);
