import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://oneconstruction.kg',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  // Performance: ship zero JS by default. Islands opt in via client:* directives.
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
});
