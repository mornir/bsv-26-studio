import { defineField, defineType } from 'sanity'
import { toPlainText } from '@portabletext/toolkit'
import { letterField } from '../common'

import regulationTableInput from './regulationTableInput'

export default defineType({
  type: 'object',
  name: 'regulationRow',
  title: 'Anforderung Zeile',
  fields: [
    letterField,
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
      name: 'protectedAssets',
      title: 'Schutzgüter',
      type: 'protectedAssets',
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
                        value: requirement?.name?.de || 'Error: Missing Value',
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
          preview: {
            select: { criterion: 'criterion.de' },
            prepare({ criterion }) {
              return {
                title: (criterion && toPlainText(criterion)) || null,
              }
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      letter: 'letter',
      system: 'system.name.de',
      systemProperty: 'systemProperty.de',
    },
    prepare(selection) {
      const { system, letter, systemProperty } = selection
      return {
        title: `${letter}. ${system}`,
        subtitle: (systemProperty && toPlainText(systemProperty)) || null,
      }
    },
  },
})
