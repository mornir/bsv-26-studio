import { defineField, defineType } from 'sanity'

import regulationTableInput from './regulationTableInput'

export default defineType({
  type: 'object',
  name: 'regulationRow',
  title: 'Anforderung Zeile',
  fieldsets: [
    {
      name: 'protectedAssets',
      title: 'Schutzgüter',
      options: {
        columns: 3,
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
      name: 'firefighters',
      type: 'boolean',
      title: 'Interventionskräfte',
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
              components: {
                input: regulationTableInput,
              },
              options: {
                //@ts-ignore
                listGenerator: ({ document }) => {
                  console.log(document.requirements)
                  return (document.requirements || []).map(
                    (requirement: any) => {
                      return {
                        title: requirement?.name?.de || 'Error: Missing Title',
                        value: requirement?.value || 'Error: Missing Value',
                      }
                    },
                  )
                },
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
