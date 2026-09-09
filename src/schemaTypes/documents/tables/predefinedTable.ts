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
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
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
})
