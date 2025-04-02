import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/schemaTypes'
import { structure } from './structure'
import { assist } from '@sanity/assist'
import { languageFilter } from '@sanity/language-filter'

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
  plugins: [structureTool(), visionTool(), languageFilter({
    supportedLanguages: [
      { id: 'de', title: 'Deutsch' },
      { id: 'fr', title: 'Französisch' },
      { id: 'it', title: 'Italienisch' }
    ],
    documentTypes: ['article'],
  }),
  assist({
    translate: {
      field: {
        documentTypes: ['article'],
        languages: [
          { id: 'de', title: 'Deutsch' },
          { id: 'fr', title: 'Französisch' },
          { id: 'it', title: 'Italienisch' }
        ],
      },
    },
  })],
  schema: {
    types: schemaTypes,
  },
})
