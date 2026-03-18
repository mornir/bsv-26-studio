import { defineType, defineField } from 'sanity'

const nachweisOptions = [
  { title: 'Selbstdeklaration', value: 'self-declaration' },
  { title: 'Brandschutzfachmann', value: 'specialist' },
  { title: 'Brandschutzexperte', value: 'expert' },
]

const functions = [
  { title: 'Fachplanung Brandschutz', value: 'fire_safety_engineering' },
  { title: 'Nachweisführung', value: 'fire_safety_verification_methods' },
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
      name: 'functions',
      title: 'Funktionen',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'function',
          title: 'Funktion',
          fields: [
            defineField({
              name: 'funktion',
              title: 'Funktion',
              type: 'string',
              options: {
                list: functions,
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
            prepare(selection) {
              const { title } = selection
              return { title: functions.find((f) => f.value === title)?.title }
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
