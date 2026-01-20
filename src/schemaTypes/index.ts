import { internalLink, externalLink } from './objects/links'
import blockContent from './objects/blockContent'
import {
  localeString,
  localeBlockContent,
  localeSimpleEditor,
  localeText,
  localeImage,
} from './objects/localizedFields'
import { article } from './documents/article'
import title from './documents/title'
import chapter from './documents/chapter'
import section from './documents/section'
import feature from './documents/feature'
import figure from './documents/figure'
import faq from './documents/faq'
import appendix from './documents/appendix'
import table from './documents/table'
import simpleEditor from './objects/simpleEditor'

// Tables
import usersGroup from './documents/tables/usersGroup'
import measureTarget from './documents/tables/measureTarget'

// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/schema-types

export const schemaTypes = [
  internalLink,
  externalLink,
  article,
  faq,
  table,
  figure,
  usersGroup,
  measureTarget,
  appendix,
  localeString,
  blockContent,
  localeSimpleEditor,
  simpleEditor,
  localeBlockContent,
  localeText,
  localeImage,
  title,
  chapter,
  section,
  feature,
]
