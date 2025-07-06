import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'table',
  title: 'Tabelle',
  type: 'object',
  fields: [
    defineField({
      type: 'text',
      name: 'html',
      title: 'HTML-Code',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Tabelle' }
    },
  },
})
