import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { recipeType } from './src/schema/recipe';

export default defineConfig({
  // Use strings directly for now to clear the error, 
  // or check your .env file for these values
  projectId: 'your_actual_project_id', 
  dataset: 'production',
  
  plugins: [structureTool()],
  schema: {
    types: [recipeType],
  },
});
