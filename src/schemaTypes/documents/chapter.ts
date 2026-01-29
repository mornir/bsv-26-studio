import { defineField, defineType } from 'sanity'
import { TbSquareLetterK } from 'react-icons/tb'

export default defineType({
  name: 'chapter',
  title: 'Kapitel',
  type: 'document',
  icon: TbSquareLetterK,
  fields: [
    defineField({
      title: 'Nummer',
      name: 'number',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Titel',
      name: 'title',
      type: 'reference',
      to: [{ type: 'title' }],
      options: {
        // @ts-expect-error
        sort: [{ field: 'number', direction: 'asc' }],
      },
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
      name: 'name.de',
      number: 'number',
      titleNum: 'title.number',
    },
    prepare(selection) {
      const { name, number, titleNum } = selection
      return {
        title: `${titleNum}. Titel, ${number}. Kapitel`,
        subtitle: name,
      }
    },
  },
  orderings: [
    {
      title: 'Nummer',
      name: 'number',
      by: [
        { field: 'title.number', direction: 'asc' },
        { field: 'number', direction: 'asc' },
      ],
    },
  ],
})
