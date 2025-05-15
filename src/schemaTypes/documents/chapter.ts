import { defineField, defineType } from 'sanity';
import { TbSquareLetterKFilled } from "react-icons/tb";

export default defineType({
  name: 'chapter',
  title: 'Kapitel',
  type: 'document',
  icon: TbSquareLetterKFilled,
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
      return { title: `${number}. Kapitel: ${name}`, subtitle: `${titleNum}. Titel` }
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