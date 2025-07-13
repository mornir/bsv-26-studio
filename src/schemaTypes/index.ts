import { internalLink, externalLink } from './objects/links'
import blockContent from './objects/blockContent'
import {
  localeString,
  localeBlockContent,
  localeSimpleEditor,
  localeText,
} from './objects/languages'
import { article } from './documents/article'
import title from './documents/title'
import chapter from './documents/chapter'
import section from './documents/section'
import tag from './documents/tag'
import feature from './documents/feature'
import figure from './documents/figure'
import table from './documents/table'
import simpleEditor from './objects/simpleEditor'

// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/schema-types

export const schemaTypes = [
  internalLink,
  externalLink,
  article,
  table,
  figure,
  localeString,
  blockContent,
  localeSimpleEditor,
  simpleEditor,
  localeBlockContent,
  localeText,
  title,
  chapter,
  section,
  tag,
  feature,
]
