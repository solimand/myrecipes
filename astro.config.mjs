// @ts-check
// import { defineConfig } from 'astro/config';

// import sanity from '@sanity/astro';
// import react from '@astrojs/react';

// // https://astro.build/config
// export default defineConfig({
//   integrations: [sanity(), react()]
// });

import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [
    sanity({
      projectId: process.env.PUBLIC_SANITY_PROJECT_ID, // Your Sanity project ID
      dataset: process.env.PUBLIC_SANITY_DATASET, // Your Sanity dataset
      useCdn: false,
      studioBasePath: '/admin', // Your dashboard will be at /admin
    }),
    react(),
  ],
});
