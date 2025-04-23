import { defineType, defineField } from 'sanity'

export const supportedLanguages = [
  { id: 'de', title: 'Deutsch' },
  { id: 'fr', title: 'Französisch' },
  { id: 'it', title: 'Italienisch' }
]

export const localeString = defineType({
  title: 'Localized string',
  name: 'localeString',
  type: 'object',
  fields: supportedLanguages.map(lang => defineField({
    title: lang.title,
    name: lang.id,
    type: 'string',
    validation: (Rule) => lang.id === 'de' ? Rule.required() : [],
  }))
})

export const localeBlockContent = defineType({
  title: 'Localized block content',
  name: 'localeBlockContent',
  type: 'object',
  fields: supportedLanguages.map(lang => defineField({
    title: lang.title,
    name: lang.id,
    type: 'blockContent',
    validation: (Rule) => lang.id === 'de' ? Rule.required() : [],
  }))
})