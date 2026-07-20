import { defineField, defineType } from 'sanity'
import { IconBuildingCommunity } from '@tabler/icons-react'

export default defineType({
  name: 'system',
  title: 'System',
  type: 'document',
  icon: IconBuildingCommunity,
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
