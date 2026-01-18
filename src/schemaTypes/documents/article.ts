import { defineField, defineType } from 'sanity'
import { TbSectionSign } from 'react-icons/tb'

export const article = defineType({
  name: 'article',
  title: 'Artikel',
  type: 'document',
  icon: TbSectionSign,
  /*   validation: (rule) =>
    rule
      .custom((fields) => {
        // @ts-expect-error
        if (!fields?.law?.fr || !fields?.law?.de) return true
        // @ts-expect-error
        if (fields.law.fr.length !== fields.law.de.length)
          return 'Anzahl Absätze FR entspricht nicht DE'
        return true
      })
      .warning(), */
  groups: [
    {
      name: 'categorization',
      title: 'Kategorisierung',
    },
    {
      name: 'law',
      title: 'Vorschriftentext',
    },
    {
      name: 'exp',
      title: 'Erläuterung',
    },
  ],
  fields: [
    defineField({
      title: 'Artikelnummer',
      name: 'number',
      type: 'number',
      validation: (Rule) => Rule.required(),
      group: 'categorization',
    }),
    defineField({
      title: 'Titel',
      name: 'title',
      type: 'reference',
      to: [{ type: 'title' }],
      validation: (Rule) => Rule.required(),
      group: 'categorization',
    }),
    defineField({
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
            }
          }
          return {
            filter: 'title._ref == $titleId',
            // @ts-expect-error
            params: { titleId: document.title._ref },
          }
        },
      },
    }),
    defineField({
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
            }
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

            params: {
              // @ts-expect-error
              titleId: document.title._ref,
              // @ts-expect-error
              chapterId: document.chapter._ref,
            },
          }
        },
      },
    }),
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
      group: 'exp',
    }),
  ],
  preview: {
    select: {
      name: 'name.de',
      number: 'number',
    },
    prepare(selection) {
      const { name, number } = selection
      return { title: `Art. ${number} ${name}` }
    },
  },
  orderings: [
    {
      title: 'Nummer',
      name: 'number',
      by: [{ field: 'number', direction: 'asc' }],
    },
  ],
})
