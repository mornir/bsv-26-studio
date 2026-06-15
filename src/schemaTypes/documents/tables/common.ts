import { defineField, defineType } from 'sanity'

export const protectedAssets = defineType({
  name: 'protectedAssets',
  type: 'object',
  options: {
    columns: 3,
  },
  fields: [
    defineField({
      name: 'peopleInBuilding',
      type: 'boolean',
      title: 'Personen',
      validation: (Rule) => Rule.required(),
      initialValue: false,
    }),
    defineField({
      name: 'buildings',
      type: 'boolean',
      title: 'Gebäude',
      validation: (Rule) => Rule.required(),
      initialValue: false,
    }),
    defineField({
      name: 'firefighters',
      type: 'boolean',
      title: 'Interventionskräfte',
      validation: (Rule) => Rule.required(),
      initialValue: false,
    }),
  ],
})

export const letterField = defineField({
  name: 'letter',
  type: 'string',
  title: 'Buchstabe',
  options: {
    list: ['a', 'b', 'c', 'd', 'e', 'f', 'g'].map((value) => ({
      title: value,
      value,
    })),
  },
})
