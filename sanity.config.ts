import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { deDELocale } from '@sanity/locale-de-de'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/schemaTypes'
import { structure } from './structure'
import { languageFilter } from '@sanity/language-filter'
import { latexInput } from 'sanity-plugin-latex-input'
import { singletonTools } from 'sanity-plugin-singleton-management'
import { agentContextPlugin } from '@sanity/agent-context/studio'

// Environment variables for project configuration
const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'your-projectID'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'
const auth_endpoint = process.env.SANITY_STUDIO_AUTH_ENDPOINT || ''

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
  plugins: [
    structureTool({ structure }),
    deDELocale(),
    visionTool(),
    latexInput(),
    singletonTools(),
    languageFilter({
      supportedLanguages: [
        { id: 'de', title: 'Deutsch' },
        { id: 'fr', title: 'Französisch' },
        { id: 'it', title: 'Italienisch' },
      ],
      documentTypes: [
        'article',
        'title',
        'appendix',
        'usersGroup',
        'regulationTable',
      ],
    }),
    agentContextPlugin(),
  ],
  schema: {
    types: schemaTypes,
  },
  auth: {
    redirectOnSingle: false, //  If true, the "Choose login provider" (eg "Google, "GitHub", "E-mail/password") screen will be skipped if only a single provider is configured in the `providers` array
    mode: 'append', // Use 'replace' if you only want this login provider
    loginMethod: 'dual', // Attempt to use cookies where possible, falling back to storing authentication token in `localStorage` otherwise
    providers: [
      {
        name: 'saml',
        title: 'VKG SAML Login',
        url: `https://api.sanity.io/v2021-10-01/auth/saml/login/${auth_endpoint}`,
        logo: 'https://www.vkg.ch/favicon/favicon-32x32.png',
      },
    ],
  },
})
