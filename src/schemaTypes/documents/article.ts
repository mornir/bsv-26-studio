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
        to: [{ type: 'section' }],
        options: {
          filter: ({ document }) => {
            // @ts-expect-error
            if (!document?.title?._ref) {
              return {
                filter: '_id == ""', // No chapters will be shown if no title is selected
              };
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
    defineField({
      title: 'Artikeltitel',
      name: 'name',
      type: 'localeString',
      group: 'law'
    }),
    defineField({
      title: 'Artikelinhalt',
      name: 'law',
      type: 'localeBlockContent',
      group: 'law'
    }),
    defineField({
      title: 'Erläuterungen',
      name: 'exp',
      type: 'localeBlockContent',
      group: 'explanations'
    }),
    defineField({
      name: 'content',
      type: 'object',
      title: 'Sprachauswahl',
      validation: (Rule) => Rule.required(),
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
        ...supportedLanguages.map(lang => defineField({
          title: `Titel (${lang.title})`,
          name: lang.id + 'Title',
          type: 'string',
          group: lang.id,
          validation: (Rule) => lang.isDefault ? Rule.required() : [],
        })),
        ...supportedLanguages.map(lang => defineField({
          title: `Gesetzestext (${lang.title})`,
          name: lang.id + 'Law',
          type: 'blockContent',
          group: lang.id
        })),
        ...supportedLanguages.map(lang => defineField({
          title: `Erläuterung (${lang.title})`,
          name: lang.id + 'Explanation',
          type: 'blockContent',
          group: lang.id
        }))
      ]
    }),
  ],
  preview: {
    select: {
      title: 'content.deTitle',
      number: 'number',
    },
    prepare(selection) {
      const { title, number } = selection
      return { title: `Art.${number} ${title}` }
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