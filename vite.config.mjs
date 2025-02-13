/* eslint-disable no-undef */
import { resolve } from 'path';
import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  plugins: [handlebars()],
  root: resolve(__dirname, 'src'),
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 3000
  },
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
  },
  resolve: {
    alias: [
      {
        find: "@", replacement: resolve(__dirname, "./src"),
      },
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use './src/styles/variables' as *;
        @use 'node_modules/normalize-scss/sass/normalize' as *;
        `
      },
    },
  },
});
