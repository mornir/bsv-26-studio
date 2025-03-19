import { defineConfig } from 'sanity'
import { languageFilter } from '@sanity/language-filter'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/schemaTypes'
import { supportedLanguages } from './src/schemaTypes/documents/article'

// Environment variables for project configuration
const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'your-projectID'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'


export default defineConfig({
  name: 'sanity-template-astro-clean',
  title: 'Sanity Astro Starter',
  projectId,
  dataset,
  document: {
    comments: {
      enabled: false,
    },
  },
  plugins: [structureTool(), visionTool(), languageFilter({
    supportedLanguages,
    defaultLanguages: ['de'],
    documentTypes: ['article'],
  })],
  schema: {
    types: schemaTypes,
  },
})
