import { defineType, defineField } from 'sanity'

export const supportedLanguages = [
  { id: 'de', title: 'Deutsch', isDefault: true },
  { id: 'fr', title: 'Französisch' },
  { id: 'it', title: 'Italienisch' }
]


export const localeString = defineType({
  title: 'Localized string',
  name: 'localeString',
  type: 'object',
  fieldsets: [
    {
      title: 'Übersetzungen',
      name: 'translations',
      options: { collapsible: true }
    }
  ],
  fields: supportedLanguages.map(lang => defineField({
    title: lang.title,
    name: lang.id,
    type: 'string',
    fieldset: lang.isDefault ? undefined : 'translations',
    validation: (Rule) => lang.isDefault ? Rule.required() : [],
  }))
})

export const localeBlockContent = defineType({
  title: 'Localized block content',
  name: 'localeBlockContent',
  type: 'object',
  fieldsets: [
    {
      title: 'Übersetzungen',
      name: 'translations',
      options: { collapsible: false }
    }
  ],
  fields: supportedLanguages.map(lang => defineField({
    title: lang.title,
    name: lang.id,
    type: 'blockContent',
    fieldset: lang.isDefault ? undefined : 'translations',
    validation: (Rule) => lang.isDefault ? Rule.required() : [],
  }))
})