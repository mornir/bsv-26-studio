import { defineField, defineType } from 'sanity'
import { TbTag } from 'react-icons/tb'

export default defineType({
  name: 'tag',
  title: 'Tag',
  type: 'document',
  icon: TbTag,
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
