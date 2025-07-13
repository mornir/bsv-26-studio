import { defineField, defineType } from 'sanity'
import { TbTableFilled } from 'react-icons/tb'

export default defineType({
  name: 'table',
  title: 'Tabelle',
  type: 'document',
  icon: TbTableFilled,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: 'localeText',
      name: 'html',
      title: 'Tabelle (HTML-Code)',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name.de',
    },
  },
})
