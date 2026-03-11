/**
 * Sanity CLI Configuration
 * This file configures the Sanity CLI tool with project-specific settings
 * and customizes the Vite bundler configuration.
 * Learn more: https://www.sanity.io/docs/cli
 */

import { defineCliConfig } from 'sanity/cli'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || '<your project ID>'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'
const appId = process.env.SANITY_STUDIO_APP_ID || '<your app ID>'

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
  deployment: { autoUpdates: false, appId },
  typegen: {
    path: '../bsv-26-web/src/sanity/queries.ts', // glob pattern to your typescript files. Can also be an array of paths
    schema: 'schema.json', // path to your schema file, generated with 'sanity schema extract' command
    generates: '../bsv-26-web/src/types/sanity.types.ts', // path to the output file for generated type definitions
    overloadClientMethods: true, // set to false to disable automatic overloading the sanity client
  },
})
