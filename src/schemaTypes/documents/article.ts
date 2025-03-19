import { defineField, defineType } from 'sanity'

export const supportedLanguages = [
  { id: 'de', title: 'Deutsch', isDefault: true },
  { id: 'fr', title: 'Französisch' },
  { id: 'it', title: 'Italienisch' }
]

export const article = defineType({
  name: 'article',
  title: 'Artikel',
  type: 'document',
  fields: [
    defineField({
      title: 'Nummer',
      name: 'number',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      type: 'object',
      title: 'Sprachauswahl',
      validation: (Rule) => Rule.required(),
      groups: [
        {
          name: 'de',
          title: 'Deutsch',
          default: true,
        },
        {
          name: 'fr',
          title: 'Französisch',
        },
        {
          name: 'it',
          title: 'Italienisch',
        },
      ],
      fields: [
        ...supportedLanguages.map(lang => defineField({
          title: `Titel (${lang.title})`,
          name: lang.id + 'Title',
          type: 'string',
          group: lang.id,
          validation: (Rule) => lang.isDefault ? Rule.required() : [],
        })),
        ...supportedLanguages.map(lang => defineField({
          title: `Gesetzestext (${lang.title})`,
          name: lang.id + 'Law',
          type: 'blockContent',
          group: lang.id
        })),
        ...supportedLanguages.map(lang => defineField({
          title: `Erläuterung (${lang.title})`,
          name: lang.id + 'Explanation',
          type: 'blockContent',
          group: lang.id
        }))
      ]
    }),
  ],
  preview: {
    select: {
      title: 'content.deTitle',
      number: 'number',
    },
    prepare(selection) {
      const { title, number } = selection
      return { title: `Art.${number} ${title}` }
    },
  },
})