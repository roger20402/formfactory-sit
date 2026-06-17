// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://formfactory.studio',
  output: 'static',

  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),

  integrations: [sitemap()],
});
