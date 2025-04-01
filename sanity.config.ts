import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/schemaTypes'
import { structure } from './structure'

import { table } from '@sanity/table';

// Environment variables for project configuration
const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'your-projectID'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'


export default defineConfig({
  name: 'sanity-template-astro-clean',
  title: 'BSV 2026',
  projectId,
  dataset,
  tasks: { enabled: false },
  document: {
    comments: {
      enabled: false,
    },
  },
  plugins: [structureTool(), visionTool(), table()],
  schema: {
    types: schemaTypes,
  },
})
