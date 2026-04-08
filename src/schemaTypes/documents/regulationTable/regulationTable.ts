import { defineField, defineType } from 'sanity'
import { TbHomeCheck } from 'react-icons/tb'

export default defineType({
  name: 'regulationTable',
  title: 'Anforderungstabelle',
  type: 'document',
  icon: TbHomeCheck,
  fields: [
    defineField({ name: 'name', type: 'string', title: 'Tabellenname' }),
    defineField({
      name: 'desc',
      type: 'localeString',
      title: 'Anforderungsbeschreibung',
      description:
        'z.B. Kriterium für die notwendige Feuerwiderstandsdauer der Brandabschnittsbildung',
    }),
    defineField({
      name: 'requirements',
      title: 'Mögliche Anforderungen',
      type: 'array',
      options: { disableActions: ['duplicate'] },
      description:
        'z.B. Rauchverbot, sicherheitsbeleuchtete Kennzeichnung, etc. Aber keine Brandverhaltensgruppen! Falls keine, leer lassen.',
      of: [
        {
          name: 'requirement',
          type: 'object',
          fields: [
            { name: 'value', type: 'string', title: 'ID' },
            {
              name: 'name',
              type: 'localeString',
              title: 'Anforderungsname',
            },
          ],
          preview: {
            select: {
              title: 'name.de',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'rows',
      title: 'Zeilen',
      type: 'array',
      of: [{ type: 'regulationRow' }],
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
})
