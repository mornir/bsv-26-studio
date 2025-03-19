import blockContent from './objects/blockContent'
import { localeString, localeBlockContent } from './objects/languages'
import { article } from './documents/article'
import post from './documents/post'

// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/schema-types

export const schemaTypes = [article, post, blockContent, localeString, localeBlockContent]
