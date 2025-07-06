import { defineField, defineType } from 'sanity'
import { TbSquareLetterAFilled } from 'react-icons/tb'

export default defineType({
  name: 'section',
  title: 'Abschnitte',
  type: 'document',
  icon: TbSquareLetterAFilled,
  fields: [
    defineField({
      title: 'Nummer',
      name: 'number',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Titel',
      name: 'title',
      type: 'reference',
      to: [{ type: 'title' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Kapitel',
      name: 'chapter',
      type: 'reference',
      to: [{ type: 'chapter' }],
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
      name: 'name',
      title: 'Name',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name.de',
      number: 'number',
      titleNum: 'title.number',
      chapterNum: 'chapter.number',
    },
    prepare(selection) {
      const { name, number, titleNum, chapterNum } = selection
      const subtitle = chapterNum
        ? `${titleNum}. Titel; ${chapterNum}. Kapitel`
        : `${titleNum}. Titel`
      return {
        title: `${number}. Abschnitt: ${name}`,
        subtitle,
      }
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
