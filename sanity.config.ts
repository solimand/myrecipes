import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { recipeType } from './src/schema/recipe';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET;

export default defineConfig({
  projectId,
  dataset,
  plugins: [structureTool()],
  schema: {
    types: [recipeType],
  },
});
