import { defineType, defineField } from 'sanity'
import { TbUsersGroup } from 'react-icons/tb'

const speed = [
  { title: 'schnell', value: 'fast' },
  { title: 'langsam', value: 'slow' },
]

const boolean = [
  { title: 'ja', value: 'yes' },
  { title: 'nein', value: 'no' },
]

const letters = 'ABCDEFGHI'

const groups = letters
  .split('')
  .map((letter) => ({ title: letter, value: letter }))

export default defineType({
  name: 'userGroups',
  title: 'Nutzergruppen',
  type: 'document',
  options: {
    singleton: true,
  },
  icon: TbUsersGroup,
  fields: [
    defineField({
      name: 'name',
      title: 'Tabellenname',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rows',
      title: 'Gruppen',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'row',
          title: 'Gruppe',
          fields: [
            defineField({
              name: 'userGroup',
              title: 'Nutzergruppe',
              type: 'string',
              options: {
                list: groups,
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'attention',
              title: 'Aufmerksamkeit',
              type: 'string',
              options: {
                list: boolean,
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'reactionCapability',
              title: 'Reaktionsfähigkeit',
              type: 'string',
              options: {
                list: speed,
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'familiarity',
              title: 'Vertrautheit',
              type: 'string',
              options: {
                list: boolean,
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'escapeCapability',
              title: 'Fluchtfähigkeit',
              type: 'string',
              options: {
                list: boolean,
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'walkingSpeed',
              title: 'Gehgeschwindigkeit',
              type: 'string',
              options: {
                list: speed,
              },
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'userGroup',
            },
            prepare({ title }) {
              return {
                title: `Nutzergruppe ${title}`,
              }
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
