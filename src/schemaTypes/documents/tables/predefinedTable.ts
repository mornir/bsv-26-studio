import { defineField, defineType } from 'sanity'
import { IconTableSpark } from '@tabler/icons-react'

const predefinedTables: Array<{ title: string; value: string }> = [
  { title: 'Nutzergruppen-Gefährdung', value: 'users_risk' },
  { title: 'Nutzercharakteristiken', value: 'users_char' },
  { title: 'Nutzergruppen-Beispiele', value: 'users_examples' },
  {
    title: 'Anforderungen an den Kompetenznachweis',
    value: 'qualifications_required',
  },
]

export default defineType({
  name: 'predefinedTable',
  title: 'Vordefinierte Tabelle',
  type: 'object',
  icon: IconTableSpark,
  fields: [
    defineField({
      name: 'tableId',
      title: 'ID von der Tabelle',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: predefinedTables,
      },
    }),
  ],
  preview: {
    select: {
      name: 'tableId',
    },
    prepare({ name }) {
      const matchedTable = predefinedTables.find(
        (table) => table.value === name,
      )

      return {
        title: matchedTable?.title ?? name ?? 'Unbekannte Tabelle',
      }
    },
  },
})
