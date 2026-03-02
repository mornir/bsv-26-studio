import { defineField, defineType } from 'sanity'
import { TbSquareLetterT } from 'react-icons/tb'

export default defineType({
  name: 'title',
  title: 'Titel',
  type: 'document',
  icon: TbSquareLetterT,
  fieldsets: [
    {
      name: 'number',
      title: 'Kennzeichnung',
      options: {
        columns: 2,
      },
    },
  ],
  fields: [
    defineField({
      title: 'Nummer',
      name: 'number',
      type: 'number',
      fieldset: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Link',
      name: 'slug',
      type: 'slug',
      fieldset: 'number',
      options: {
        source: 'number',
        slugify: (input) => input.toString(),
      },
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
      return { title: `${number}. Titel`, subtitle: name }
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
