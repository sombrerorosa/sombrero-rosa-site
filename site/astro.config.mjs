// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sombrerorosa.com',
  output: 'static',
  vite: {
    css: { preprocessorOptions: {} },
  },
});
