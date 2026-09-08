import { defineField, defineType } from 'sanity'
import { IconTable } from '@tabler/icons-react'

export default defineType({
  name: 'customTable',
  title: 'Tabelle',
  type: 'document',
  icon: IconTable,
  fields: [
    defineField({
      name: 'article',
      title: 'Artikel',
      type: 'reference',
      to: [{ type: 'article' }],
      validation: (Rule) => Rule.required(),
      description:
        'Verweis auf den zugehörigen Artikel, der diese Tabelle definiert.',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'table',
      title: 'Tabelle',
      type: 'localeCustomTable',
      validation: (rule) => rule.skip(),
    }),
  ],
  preview: {
    select: {
      title: 'name.de',
    },
  },
})
