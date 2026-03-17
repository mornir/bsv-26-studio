import { defineField, defineType } from 'sanity'
import { TbSectionSign, TbExternalLink } from 'react-icons/tb'

export const internalLink = defineType({
  name: 'internalLink',
  type: 'object',
  icon: TbSectionSign,
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
  icon: TbExternalLink,
  fields: [
    defineField({
      title: 'URL',
      name: 'href',
      type: 'url',
      description: 'Verweis auf eine externe Website',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
