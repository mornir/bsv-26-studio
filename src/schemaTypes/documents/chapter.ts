import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'chapter',
  title: 'Kapitel',
  type: 'document',
  fields: [
    defineField({
      title: 'Nummer',
      name: 'number',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField(
      {
        title: 'Titel',
        name: 'title',
        type: 'reference',
        to: [{ type: 'title' }],
        validation: (Rule) => Rule.required(),
      }
    ),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),

  ],
  preview: {
    select: {
      name: 'name.de',
      number: 'number',
      titleNum: 'title.number'
    },
    prepare(selection) {
      const { name, number, titleNum } = selection
      return { title: `Kapitel ${number} ${name}`, subtitle: `Titel ${titleNum}` }
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