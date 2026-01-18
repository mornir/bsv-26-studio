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
      description:
        'Verweis auf einen Artikel, ein Kapitel oder einen Abschnitt.',
      validation: (Rule) => Rule.required(),
      to: [{ type: 'article' }, { type: 'title' }, { type: 'chapter' }],
      options: {
        disableNew: true,
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
      validation: (Rule) => Rule.required(),
    }),
  ],
})
