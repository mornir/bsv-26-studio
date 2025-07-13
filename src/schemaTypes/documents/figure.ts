import { defineField, defineType } from 'sanity'
import { TbPhotoFilled } from 'react-icons/tb'

export default defineType({
  name: 'figure',
  title: 'Abbildung',
  type: 'document',
  icon: TbPhotoFilled,
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Bild',
    }),
  ],
  preview: {
    select: {
      name: 'name.de',
      number: 'number',
      titleNum: 'title.number',
      media: 'image',
    },
    prepare(selection) {
      const { name, number, titleNum, media } = selection
      return {
        title: `Abb. ${titleNum}-${number} ${name}`,
        media,
      }
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
