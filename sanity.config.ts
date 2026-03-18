import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { recipeType } from './src/schema/recipe'; // We'll create this next

export default defineConfig({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  plugins: [structureTool()],
  schema: {
    types: [recipeType],
  },
});
