import { defineField, defineType } from 'sanity'

const values = ['RF3', 'RF2', 'RF1', '(cr)']

export default defineType({
  type: 'object',
  name: 'fireReactionRow',
  title: 'Anforderung Zeile',
  fieldsets: [
    {
      name: 'protectedAssets',
      title: 'Schutzgüter',
      options: {
        columns: 2,
      },
    },
  ],
  fields: [
    defineField({ name: 'letter', type: 'string', title: 'Buchstabe' }),
    defineField({
      name: 'system',
      title: 'System',
      type: 'reference',
      to: [{ type: 'system' }],
    }),
    defineField({
      name: 'systemProperty',
      title: 'Systemeigenschaft',
      type: 'localeSimpleEditor',
    }),
    defineField({
      name: 'people',
      type: 'boolean',
      title: 'Personen',
      fieldset: 'protectedAssets',
    }),
    defineField({
      name: 'buildings',
      type: 'boolean',
      title: 'Gebäude',
      fieldset: 'protectedAssets',
    }),
    {
      name: 'requirements',
      title: 'Anforderungen',
      type: 'array',
      of: [
        {
          name: 'requirement',
          type: 'object',
          fields: [
            {
              name: 'type',
              type: 'string',
              title: 'Anforderung',
              options: {
                list: values.map((value) => ({ title: value, value })),
              },
            },
            {
              name: 'criterion',
              title: 'Kriterium',
              type: 'localeSimpleEditor',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      letter: 'letter',
      system: 'system.name.de',
    },
    prepare(selection) {
      const { system, letter } = selection
      return {
        title: `${letter}. ${system}`,
      }
    },
  },
})
