import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { deDELocale } from '@sanity/locale-de-de'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/schemaTypes'
import { structure } from './structure'
import { languageFilter } from '@sanity/language-filter'
import { embeddingsIndexDashboard } from '@sanity/embeddings-index-ui'

// Environment variables for project configuration
const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'your-projectID'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'


export default defineConfig({
  title: 'BSV 2026',
  projectId,
  dataset,
  tasks: { enabled: false },
  document: {
    comments: {
      enabled: false,
    },
  },
  plugins: [structureTool(), deDELocale(), visionTool(), embeddingsIndexDashboard(), languageFilter({
    supportedLanguages: [
      { id: 'de', title: 'Deutsch' },
      { id: 'fr', title: 'Französisch' },
      { id: 'it', title: 'Italienisch' }
    ],
    documentTypes: ['article'],
  })],
  schema: {
    types: schemaTypes,
  },
})
