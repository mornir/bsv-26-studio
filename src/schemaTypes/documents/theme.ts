import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'theme',
  title: 'Thema',
  type: 'document',
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
});