import { defineField, defineType } from 'sanity'
import { IconSectionSign, IconExternalLink } from '@tabler/icons-react'

export const internalLink = defineType({
  name: 'internalLink',
  type: 'object',
  icon: IconSectionSign,
  fields: [
    defineField({
      name: 'reference',
      type: 'reference',
      title: 'Verweis',
      description: 'Verweis auf einen Artikel.',
      validation: (Rule) => Rule.required(),
      to: [{ type: 'article' }],
      options: {
        disableNew: true,
        // @ts-expect-error
        sort: [{ field: 'number', direction: 'asc' }],
      },
    }),
  ],
})

export const externalLink = defineType({
  name: 'externalLink',
  type: 'object',
  icon: IconExternalLink,
  fields: [
    defineField({
      title: 'URL',
      name: 'href',
      type: 'url',
      description: 'Verweis auf eine externe Website',
      validation: (Rule) => Rule.required().uri({ allowRelative: true }),
    }),
  ],
})
