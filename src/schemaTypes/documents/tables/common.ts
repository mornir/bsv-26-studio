import { defineField, defineType } from 'sanity'

export const protectedAssets = defineType({
  name: 'protectedAssets',
  type: 'object',
  fields: [
    defineField({
      name: 'peopleInBuilding',
      type: 'boolean',
      title: 'Personen im Gebäude',
      fieldset: 'protectedAssets',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'firefighters',
      type: 'boolean',
      title: 'Interventionskräfte',
      fieldset: 'protectedAssets',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'buildings',
      type: 'boolean',
      title: 'Gebäude',
      fieldset: 'protectedAssets',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
