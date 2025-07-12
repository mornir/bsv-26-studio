import { defineField, defineType } from 'sanity'
import { TbLink, TbExternalLink } from 'react-icons/tb'

export const internalLink = defineType({
  name: 'internalLink',
  type: 'object',
  icon: TbLink,
  fields: [
    defineField({
      name: 'reference',
      type: 'reference',
      title: 'Verweis',
      validation: (Rule) => Rule.required(),
      to: [{ type: 'article' }, { type: 'title' }, { type: 'chapter' }],
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
