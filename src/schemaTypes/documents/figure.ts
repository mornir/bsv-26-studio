import { defineField, defineType } from 'sanity'
import { IconPhoto } from '@tabler/icons-react'

export default defineType({
  name: 'figure',
  title: 'Abbildung',
  type: 'document',
  icon: IconPhoto,
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
      title: 'Titel',
      name: 'title',
      type: 'reference',
      description: 'BSV-Titel, zu dem die Abbildung gehört.',
      to: [{ type: 'title' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'localeImage',
      title: 'Bild',
    }),
  ],
  preview: {
    select: {
      name: 'name.de',
      number: 'number',
      titleNum: 'title.number',
      media: 'image.de',
    },
    prepare(selection) {
      const { name, number, titleNum, media } = selection
      return {
        title: `Abbildung ${titleNum}-${number}`,
        subtitle: name,
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
