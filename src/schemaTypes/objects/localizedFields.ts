import { defineType, defineField } from 'sanity'

export const supportedLanguages = [
  { id: 'de', title: 'Deutsch' },
  { id: 'fr', title: 'Französisch' },
  { id: 'it', title: 'Italienisch' },
]

export const localeString = defineType({
  title: 'Localized string',
  name: 'localeString',
  type: 'object',
  fields: supportedLanguages.map((lang) =>
    defineField({
      title: lang.title,
      name: lang.id,
      type: 'string',
      validation: (Rule) => (lang.id === 'de' ? Rule.required() : []),
    }),
  ),
})

export const localeBlockContent = defineType({
  title: 'Localized block content',
  name: 'localeBlockContent',
  type: 'object',
  fields: supportedLanguages.map((lang) =>
    defineField({
      title: lang.title,
      name: lang.id,
      type: 'blockContent',
      validation: (Rule) => (lang.id === 'de' ? Rule.required() : []),
    }),
  ),
})

export const localeSimpleEditor = defineType({
  title: 'Localized simple editor',
  name: 'localeSimpleEditor',
  type: 'object',
  fields: supportedLanguages.map((lang) =>
    defineField({
      title: lang.title,
      name: lang.id,
      type: 'simpleEditor',
      validation: (Rule) => (lang.id === 'de' ? Rule.required() : []),
    }),
  ),
})

export const localeText = defineType({
  title: 'Localized text',
  name: 'localeText',
  type: 'object',
  fields: supportedLanguages.map((lang) =>
    defineField({
      title: lang.title,
      name: lang.id,
      type: 'text',
      validation: (Rule) => (lang.id === 'de' ? Rule.required() : []),
    }),
  ),
})

export const localeImage = defineType({
  title: 'Localized Image',
  name: 'localeImage',
  type: 'object',
  fields: supportedLanguages.map((lang) =>
    defineField({
      title: lang.title,
      name: lang.id,
      type: 'image',
      validation: (Rule) => (lang.id === 'de' ? Rule.required() : []),
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternativtext',
          type: 'string',
          description: 'Beschreibt den Bildinhalt für Screenreader',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ),
})
