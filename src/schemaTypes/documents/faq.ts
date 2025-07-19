import { defineField, defineType } from 'sanity'
import { TbMessageQuestion } from 'react-icons/tb'

export default defineType({
  name: 'faq',
  title: 'Anfrage',
  type: 'document',
  icon: TbMessageQuestion,
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
