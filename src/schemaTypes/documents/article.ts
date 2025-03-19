import { defineField, defineType } from 'sanity'


export const article = defineType({
  name: 'article',
  title: 'Artikel',
  type: 'document',
  groups: [
    {
      name: 'de',
      title: 'Deutsch',
      default: true,
    },
    {
      name: 'fr',
      title: 'Französisch',
    },
    {
      name: 'it',
      title: 'Italienisch',
    },
  ],
  fields: [
    defineField({
      title: 'Artikelnummer',
      name: 'number',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Artikeltitel',
      name: 'title',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Gesetzestext',
      name: 'law',
      type: 'localeBlockContent',
    }),
    defineField({
      title: 'Erläuterung',
      name: 'explanation',
      type: 'localeBlockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      number: 'number',
    },
    prepare(selection) {
      const { title, number } = selection
      return { title: `Art.${number} ${title.de}` }
    },
  },
})