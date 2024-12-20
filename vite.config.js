import path from 'path';
import sass from 'vite-plugin-sass'
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from 'vite-plugin-pwa';
import envCompatible from 'vite-plugin-env-compatible';

export default defineConfig({
  plugins: [
  react(),
  sass(),
  envCompatible(),
  VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Ensiklopedia Apps',
        short_name: 'Ensiklopedia',
        start_url: '/',
        display: 'standalone',
        background_color: '#05210a',
        theme_color: '#0b2810',
        icons: [
          {
          "src": "/src/assets/dinosaurus.jpg",
          "sizes": "192x192",
          "type": "image/png"
         },
         {
          "src": "/src/assets/dinosaurus.jpg",
          "sizes": "512x512",
          "type": "image/png"
         }
        ]
      }
    })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
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
  },
});