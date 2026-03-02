import { defineField, defineType } from 'sanity'
import { TbPaperclip } from 'react-icons/tb'

export default defineType({
  name: 'appendix',
  title: 'Anhang',
  type: 'document',
  icon: TbPaperclip,
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
      name: 'body',
      title: 'Text',
      type: 'localeBlockContent',
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
      return { title: `Anhang ${number}`, subtitle: name }
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
