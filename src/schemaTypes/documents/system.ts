import { defineField, defineType } from 'sanity'
import { TbBuildingCommunity } from 'react-icons/tb'

export default defineType({
  name: 'system',
  title: 'System',
  type: 'document',
  icon: TbBuildingCommunity,
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
