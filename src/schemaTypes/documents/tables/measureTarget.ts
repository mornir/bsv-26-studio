import { defineType, defineField } from 'sanity'
import { TbShield } from 'react-icons/tb'

export default defineType({
  name: 'measureTarget',
  title: 'Schutzgüter nach Massnahmen',
  type: 'document',
  icon: TbShield,
  fields: [
    defineField({
      name: 'measure',
      title: 'Massnahme',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'protectedAssets',
      title: 'Schutzgüter',
      type: 'protectedAssets',
    }),
  ],
  preview: {
    select: {
      title: 'measure.de',
    },
    prepare({ title }) {
      return {
        title,
      }
    },
  },
})
