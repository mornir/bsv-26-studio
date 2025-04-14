import { defineField, defineType } from 'sanity'

export const supportedLanguages = [
  { id: 'de', title: 'Deutsch', isDefault: true },
  { id: 'fr', title: 'Französisch' },
  { id: 'it', title: 'Italienisch' }
]

export const article = defineType({
  name: 'article',
  title: 'Artikel',
  type: 'document',
  groups: [
    {
      name: 'categorization',
      title: 'Kategorisierung',
    },
    {
      name: 'law',
      title: 'Gesetzestext',
      default: true,
    },
    {
      name: 'explanations',
      title: 'Erläuterungen',
    },
  ],
  fields: [
    defineField({
      title: 'Artikelnummer',
      name: 'number',
      type: 'number',
      validation: (Rule) => Rule.required(),
      group: 'categorization'
    }),
    defineField(
      {
        title: 'Titel',
        name: 'title',
        type: 'reference',
        to: [{ type: 'title' }],
        validation: (Rule) => Rule.required(),
        group: 'categorization'
      }
    ),
    defineField(
      {
        title: 'Kapitel',
        name: 'chapter',
        type: 'reference',
        to: [{ type: 'chapter' }],
        group: 'categorization',
        options: {
          filter: ({ document }) => {
            // @ts-expect-error
            if (!document?.title?._ref) {
              return {
                filter: '_id == ""', // No chapters will be shown if no title is selected
              };
            }
            return {
              filter: 'title._ref == $titleId',
              // @ts-expect-error
              params: { titleId: document.title._ref },
            };
          },
        },
      }
    ),
    defineField(
      {
        title: 'Abschnitt',
        name: 'section',
        type: 'reference',
        group: 'categorization',
        to: [{ type: 'section' }],
        options: {
          filter: ({ document }) => {
            // @ts-expect-error
            if (!document?.title?._ref) {
              return {
                filter: '_id == ""', // No sections will be shown if no title is selected
              };
            }

            // @ts-expect-error
            if (!document?.chapter?._ref) {
              return {
                filter: 'title._ref == $titleId',
                // @ts-expect-error
                params: { titleId: document.title._ref },
              }
            }

            return {
              filter: 'title._ref == $titleId && chapter._ref == $chapterId',
              // @ts-expect-error
              params: { titleId: document.title._ref, chapterId: document.chapter._ref },
            };
          },
        },
      }
    ),
    defineField(
      {
        title: 'Thema',
        name: 'theme',
        type: 'reference',
        to: [{ type: 'theme' }],
        group: 'categorization'
      }
    ),
    defineField({
      title: 'Artikeltitel',
      name: 'name',
      type: 'localeString',
      group: 'law',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Artikelinhalt',
      name: 'law',
      type: 'localeBlockContent',
      group: 'law',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Erläuterungen',
      name: 'exp',
      type: 'localeBlockContent',
      group: 'explanations'
    }),
  ],
  preview: {
    select: {
      name: 'name.de',
      number: 'number',
    },
    prepare(selection) {
      const { name, number } = selection
      return { title: `Art.${number} ${name}` }
    },
  },
  orderings: [
    {
      title: 'Nummer',
      name: 'number',
      by: [
        { field: 'number', direction: 'asc' }
      ]
    },
  ]
})