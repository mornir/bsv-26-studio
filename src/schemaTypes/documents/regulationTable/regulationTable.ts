import { defineField, defineType } from 'sanity'
import { TbHomeCheck } from 'react-icons/tb'

export default defineType({
  name: 'regulationTable',
  title: 'Anforderungstabelle',
  type: 'document',
  icon: TbHomeCheck,
  fields: [
    { name: 'title', type: 'string', title: 'Tabellenname' },
    defineField({
      name: 'desc',
      type: 'localeString',
      title: 'Anforderungsbeschreibung',
    }),
    defineField({
      name: 'requirements',
      title: 'Mögliche Anforderungen',
      type: 'array',
      options: { disableActions: ['duplicate'] },
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
              description:
                'z.B. Rauchverbot, sicherheitsbeleuchtete Kennzeichnung, etc. Aber keine Brandverhaltensgruppen!',
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
    {
      name: 'rows',
      title: 'Zeilen',
      type: 'array',
      of: [{ type: 'regulationRow' }],
    },
  ],
})
