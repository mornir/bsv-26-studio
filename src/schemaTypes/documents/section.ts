import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'section',
  title: 'Abschnitt',
  type: 'document',
  fields: [
    defineField({
      title: 'Nummer',
      name: 'number',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name.de',
      number: 'number',
    },
    prepare(selection) {
      const { title, number } = selection
      return { title: `Abschnitt ${number} ${title}` }
    },
  },
  orderings: [
    {
      title: 'Nummer',
      name: 'number',
      by: [
        { field: 'number', direction: 'asc' }
      ]
    },
  ]
});