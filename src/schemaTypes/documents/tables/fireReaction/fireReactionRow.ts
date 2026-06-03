import { defineField, defineType } from 'sanity'
import { toPlainText } from '@portabletext/toolkit'
import { letterField } from '../common'

const values = ['RF3', 'RF2', 'RF1', '(cr)']

export default defineType({
  type: 'object',
  name: 'fireReactionRow',
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
