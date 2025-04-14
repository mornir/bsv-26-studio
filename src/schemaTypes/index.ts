import blockContent from './objects/blockContent'
import { localeString, localeBlockContent } from './objects/languages'
import { article } from './documents/article'
import title from './documents/title'
import chapter from './documents/chapter'
import section from './documents/section'
import theme from './documents/theme'


// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/schema-types

export const schemaTypes = [article, localeString, blockContent, localeBlockContent, title, chapter, section, theme]
