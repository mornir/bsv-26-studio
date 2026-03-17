import { defineType, defineField } from 'sanity'
import { TbShield } from 'react-icons/tb'

export default defineType({
  name: 'measureTarget',
  title: 'Massnahme – Schutzgüter',
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
      name: 'peopleInBuilding',
      title: 'Personen im Gebäude',
      type: 'string',
      options: {
        list: [
          { title: 'Zutreffend', value: 'applies' },
          { title: 'Nicht zutreffend', value: 'not_applicable' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'interventionForces',
      title: 'Interventionskräfte',
      type: 'string',
      options: {
        list: [
          { title: 'Zutreffend', value: 'applies' },
          { title: 'Nicht zutreffend', value: 'not_applicable' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'buildingsAndFacilities',
      title: 'Bauten und Anlagen',
      type: 'string',
      options: {
        list: [
          { title: 'Zutreffend', value: 'applies' },
          { title: 'Nicht zutreffend', value: 'not_applicable' },
        ],
      },
      validation: (Rule) => Rule.required(),
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
