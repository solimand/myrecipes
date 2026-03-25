import { defineCliConfig } from 'sanity/cli';
import * as dotenv from 'dotenv';

dotenv.config();

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.PUBLIC_SANITY_DATASET;

export default defineCliConfig({
  api: {
    projectId: projectId,
    dataset: dataset
  }
});
