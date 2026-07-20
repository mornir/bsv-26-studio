import { defineField, defineType } from 'sanity'
import { IconTable } from '@tabler/icons-react'

const predefinedTables = [
  { title: 'Nutzergruppen-Gefährdung', value: 'users_risk' },
  { title: 'Nutzercharakteristiken', value: 'users_char' },
  { title: 'Nutzergruppen-Beispiele', value: 'users_examples' },
]

export default defineType({
  name: 'table',
  title: 'Tabelle',
  type: 'document',
  icon: IconTable,
  fields: [
    defineField({
      name: 'article',
      title: 'Artikel',
      type: 'reference',
      to: [{ type: 'article' }],
      validation: (Rule) => Rule.required(),
      description:
        'Verweis auf den zugehörigen Artikel, der diese Tabelle definiert.',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    {
      name: 'type',
      type: 'string',
      title: 'Tabellentyp',
      options: {
        list: [
          { title: 'Vordefinierte Tabelle', value: 'predefined' },
          { title: 'Benutzerdefinierte Tabelle', value: 'custom' },
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
      hidden: ({ parent }) => parent?.type !== 'predefined',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          // @ts-expect-error
          if (context.parent?.type === 'predefined' && !value) {
            return 'Table ID is required'
          }
          return true
        }),
    },
    defineField({
      name: 'customTable',
      title: 'Custom Table',
      type: 'localeCustomTable',
      hidden: ({ parent }) => parent?.type !== 'custom',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          // @ts-expect-error
          if (context.parent?.type === 'custom' && !value) {
            return 'Feld ist leer'
          }
          return true
        }),
    }),
  ],
  preview: {
    select: {
      title: 'name.de',
    },
  },
})
