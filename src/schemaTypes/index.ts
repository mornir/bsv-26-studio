// Documents
import { article } from './documents/article'
import title from './documents/title'
import chapter from './documents/chapter'
import section from './documents/section'
import figure from './documents/figure'
import faq from './documents/faq'
import appendix from './documents/appendix'
import table from './documents/table'
import system from './documents/system'
import usersGroup from './documents/usersGroup'
import regulationTable from './documents/regulationTable/regulationTable'
// Objects
import simpleEditor from './objects/simpleEditor'
import { internalLink, externalLink } from './objects/links'
import blockContent from './objects/blockContent'
import regulationRow from './documents/regulationTable/regulationTableRow'
import {
  localeString,
  localeBlockContent,
  localeSimpleEditor,
  localeText,
  localeImage,
} from './objects/localizedFields'

// Tables
import measureTarget from './documents/tables/measureTarget'
import qualifications from './documents/tables/qualifications'

// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/schema-types

export const schemaTypes = [
  internalLink,
  externalLink,
  article,
  usersGroup,
  system,
  regulationTable,
  regulationRow,
  faq,
  table,
  figure,
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
  qualifications,
]
