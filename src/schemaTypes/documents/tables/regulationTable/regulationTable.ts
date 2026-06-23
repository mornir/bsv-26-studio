import { defineField, defineType } from 'sanity'
import { TbHomeCheck } from 'react-icons/tb'

export default defineType({
  name: 'regulationTable',
  title: 'Anforderungstabelle',
  type: 'document',
  icon: TbHomeCheck,
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
    defineField({ name: 'name', type: 'localeString', title: 'Tabellenname' }),
    defineField({
      name: 'description',
      type: 'localeString',
      title: 'Anforderungsbeschreibung',
    }),
    defineField({
      name: 'possibleRequirements',
      title: 'Mögliche Anforderungen',
      type: 'array',
      options: { disableActions: ['duplicate'] },
      of: [
        {
          name: 'requirement',
          type: 'object',
          fields: [
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
      title: 'name.de',
    },
  },
})
