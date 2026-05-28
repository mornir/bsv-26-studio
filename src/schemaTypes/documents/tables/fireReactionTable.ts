import { defineField, defineType } from 'sanity'
import { BrickWallFire } from 'lucide-react'

export default defineType({
  name: 'fireReactionTable',
  title: 'Brandverhalten',
  type: 'document',
  icon: BrickWallFire,
  fields: [
    defineField({
      name: 'article',
      title: 'Artikel',
      type: 'reference',
      to: [{ type: 'article' }],
      description:
        'Verweis auf den zugehörigen Artikel, der diese Tabelle definiert.',
    }),
    defineField({ name: 'name', type: 'localeString', title: 'Tabellenname' }),
    defineField({
      name: 'description',
      type: 'localeString',
      title: 'Anforderungsbeschreibung',
      description:
        'z.B. Kriterium für die notwendige Feuerwiderstandsdauer der Brandabschnittsbildung',
    }),
    defineField({
      name: 'rows',
      title: 'Zeilen',
      type: 'array',
      of: [{ type: 'fireReactionRow' }],
    }),
  ],
  preview: {
    select: {
      title: 'name.de',
    },
  },
})
