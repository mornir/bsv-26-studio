import { defineField, defineType } from 'sanity'
import { TbSquareLetterT } from 'react-icons/tb'

export default defineType({
  name: 'title',
  title: 'Titel',
  type: 'document',
  icon: TbSquareLetterT,
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
    defineField({
      name: 'desc',
      title: 'Beschreibung',
      type: 'localeSimpleEditor',
    }),
    defineField({
      name: 'color',
      title: 'Farbe',
      type: 'color',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name.de',
      number: 'number',
    },
    prepare(selection) {
      const { name, number } = selection
      return { title: `${number}. Titel: ${name}` }
    },
  },
  orderings: [
    {
      title: 'Nummer',
      name: 'number',
      by: [{ field: 'number', direction: 'asc' }],
    },
  ],
})
