import { defineType, defineField } from 'sanity'

import { ShieldQuestionMark } from 'lucide-react'

export default defineType({
  name: 'measureTarget',
  title: 'Schutzgüter nach Massnahmen',
  type: 'document',
  icon: ShieldQuestionMark,
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
      name: 'measure',
      title: 'Massnahme',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'protectedAssets',
      title: 'Schutzgüter',
      type: 'protectedAssets',
    }),
  ],
  preview: {
    select: {
      title: 'measure.de',
    },
    prepare({ title }) {
      return {
        title,
      }
    },
  },
})
