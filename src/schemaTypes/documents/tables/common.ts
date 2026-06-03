import { defineField, defineType } from 'sanity'

export const protectedAssets = defineType({
  name: 'protectedAssets',
  type: 'object',
  fields: [
    defineField({
      name: 'peopleInBuilding',
      type: 'boolean',
      title: 'Personen im Gebäude',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'firefighters',
      type: 'boolean',
      title: 'Interventionskräfte',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'buildings',
      type: 'boolean',
      title: 'Gebäude',
      validation: (Rule) => Rule.required(),
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
