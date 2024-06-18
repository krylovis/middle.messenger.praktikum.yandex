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
  },
});