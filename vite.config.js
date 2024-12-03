import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import envCompatible from 'vite-plugin-env-compatible';

export default defineConfig({
  plugins: [react(), envCompatible()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    fs: {
      strict: false,
    },
    historyApiFallback: true,
  },
  build: {
    rollupOptions: {
      input: './index.html',
    },
  }
});
