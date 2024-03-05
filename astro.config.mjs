import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  optimize: {
    styles: true,
    scripts: true,
    images: true,
    preload: true,
    http2: true,
    compress: true,
  }
});