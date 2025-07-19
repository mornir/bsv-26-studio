import { defineField, defineType } from 'sanity'
import { TbStar } from 'react-icons/tb'

export default defineType({
  name: 'feature',
  title: 'Feature',
  type: 'document',
  icon: TbStar,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Beschreibung',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name.de',
    },
  },
})
