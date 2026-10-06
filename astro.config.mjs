// @ts-check
import { defineConfig } from 'astro/config';

// Concept prototype for Helen Popich Harris, APLC.
// `site` is a placeholder until the production domain is confirmed.
export default defineConfig({
  site: 'https://www.harrisaplc.com',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
  devToolbar: { enabled: false },
});
