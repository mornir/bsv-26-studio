import { defineField, defineType } from 'sanity'
import { TbTagFilled } from 'react-icons/tb'

export default defineType({
  name: 'tag',
  title: 'Tags',
  type: 'document',
  icon: TbTagFilled,
  fields: [
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
    },
  },
})
