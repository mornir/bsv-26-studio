import blockContent from './objects/blockContent'
import table from './objects/table'
import { localeString, localeBlockContent, localeText } from './objects/languages'
import { article } from './documents/article'
import title from './documents/title'
import chapter from './documents/chapter'
import section from './documents/section'
import tag from './documents/tag'
import feature from './documents/feature'

// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/schema-types

export const schemaTypes = [article, table, localeString, blockContent, localeBlockContent, localeText, title, chapter, section, tag, feature]
