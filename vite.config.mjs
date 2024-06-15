import { resolve } from 'path';
import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  plugins: [handlebars()],
  root: resolve(__dirname, 'static'),
  build: {
    outDir: resolve(__dirname, 'dist'),
  },
});