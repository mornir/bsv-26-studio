import { defineType, defineField } from 'sanity'

const nachweisOptions = [
  { title: 'Selbstdeklaration', value: 'selbstdeklaration' },
  { title: 'Brandschutzfachmann', value: 'fachmann' },
  { title: 'Brandschutzexperte', value: 'experte' },
]

export default defineType({
  name: 'qualifications',
  title: 'Kompetenzennachweis-Tabelle',
  type: 'document',
  options: {
    singleton: true,
  },
  fields: [
    defineField({
      name: 'name',
      title: 'Tabellenname',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rows',
      title: 'Zeilen',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'row',
          title: 'Zeile',
          fields: [
            defineField({
              name: 'funktion',
              title: 'Funktion',
              type: 'string',
              options: {
                list: [
                  { title: 'Fachplanung Brandschutz', value: 'fachplanung' },
                  { title: 'Nachweisführung', value: 'nachweisfuerung' },
                ],
              },
            }),
            defineField({
              name: 'vk1',
              title: 'VK 1',
              type: 'string',
              options: { list: nachweisOptions },
            }),
            defineField({
              name: 'vk2',
              title: 'VK 2',
              type: 'string',
              options: { list: nachweisOptions },
            }),
            defineField({
              name: 'vk3',
              title: 'VK 3',
              type: 'string',
              options: { list: nachweisOptions },
            }),
            defineField({
              name: 'vk4',
              title: 'VK 4',
              type: 'string',
              options: { list: nachweisOptions },
            }),
            defineField({
              name: 'rechnerischerNachweis',
              title: 'Rechnerischer Nachweis (Art. 22)',
              type: 'string',
              options: { list: nachweisOptions },
            }),
            defineField({
              name: 'leistungsbasiert',
              title: 'Leistungs- oder risikobasiert',
              type: 'string',
              options: { list: nachweisOptions },
            }),
          ],
          preview: {
            select: {
              title: 'funktion',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name.de',
    },
  },
})
