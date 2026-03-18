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
      projectId: 'your_id_here', // This is now in your .env file
      dataset: 'production',
      useCdn: false,
      studioBasePath: '/admin', // Your dashboard will be at /admin
    }),
    react(),
  ],
});
