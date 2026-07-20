import { defineField, defineType } from 'sanity'
import { IconMessageQuestion } from '@tabler/icons-react'

export default defineType({
  name: 'faq',
  title: 'Anfrage',
  type: 'document',
  icon: IconMessageQuestion,
  fields: [
    defineField({
      name: 'name',
      title: 'Titel',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name.de',
    },
  },
})
