import { defineField, defineType } from 'sanity'
import { TbTable } from 'react-icons/tb'

const predefinedTables = [
  { title: 'Nutzergruppen-Beschreibung', value: 'users_desc' },
  { title: 'Nutzercharakteristiken', value: 'users_char' },
  { title: 'Nutzergruppen-Beispiele', value: 'users_examples' },
]

export default defineType({
  name: 'table',
  title: 'Tabelle',
  type: 'document',
  icon: TbTable,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    {
      name: 'source',
      type: 'string',
      title: 'Tabellentyp',
      options: {
        list: [
          { title: 'Predefined table', value: 'predefined' },
          { title: 'Custom HTML table', value: 'html' },
        ],
        layout: 'radio',
      },
      initialValue: 'predefined',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'tableId',
      type: 'string',
      title: 'Table ID',
      options: {
        list: predefinedTables,
      },
      hidden: ({ parent }) => parent?.source !== 'predefined',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          // @ts-expect-error
          if (context.parent?.source === 'predefined' && !value) {
            return 'Table ID is required'
          }
          return true
        }),
    },
    {
      name: 'html',
      type: 'localeText',
      title: 'HTML-Tabelle',
      hidden: ({ parent }) => parent?.source !== 'html',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          // @ts-expect-error
          if (context.parent?.source === 'html' && !value) {
            return 'HTML is required'
          }
          return true
        }),
    },
  ],
  preview: {
    select: {
      title: 'name.de',
    },
  },
})
