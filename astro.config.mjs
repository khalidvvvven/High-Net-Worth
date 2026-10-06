// @ts-check
import { defineConfig } from 'astro/config';

// Concept prototype for Helen Popich Harris, APLC.
// `site` is the temporary contest/demo deployment; no client domain is assumed.
export default defineConfig({
  site: 'https://high-net-worth.vercel.app',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
  devToolbar: { enabled: false },
});
