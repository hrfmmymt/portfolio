import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://hrfmmymt.com',
  output: 'static',
  integrations: [
    react(),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        'next/image': '/src/shims/next/image.tsx',
        'next/link': '/src/shims/next/link.tsx',
      },
    },
    ssr: {
      external: ['node:path', 'node:fs', 'node:url'],
    },
  },
});
