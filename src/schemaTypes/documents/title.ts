import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'title',
  title: 'Titel',
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
      return { title: `Titel ${number} ${title}` }
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