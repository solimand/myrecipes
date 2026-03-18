import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { recipeType } from './src/schema/recipe';

export default defineConfig({
  // Use strings directly for now to clear the error, 
  // or check your .env file for these values
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  
  plugins: [structureTool()],
  schema: {
    types: [recipeType],
  },
});
