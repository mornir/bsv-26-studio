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

const risk = [
  { title: 'Niedrig', value: 'low' },
  { title: 'Mittlere', value: 'moderate' },
  { title: 'Hoch', value: 'high' },
  { title: 'Sehr Hoch', value: 'very_high' },
]

export default defineType({
  name: 'usersGroup',
  title: 'Nutzergruppen',
  type: 'document',
  icon: TbUsersGroup,
  fields: [
    defineField({
      name: 'designation',
      title: 'Bezeichnung',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: groups,
      },
    }),
    defineField({
      name: 'desc',
      title: 'Beschreibung',
      type: 'localeText',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'examples',
      title: 'Beispiele',
      type: 'localeText',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'riskLevel',
      title: 'Gefährdung',
      type: 'string',
      options: {
        list: risk,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'attention',
      title: 'Aufmerksamkeit',
      type: 'string',
      options: {
        list: boolean,
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'reactionCapability',
      title: 'Reaktionsfähigkeit',
      type: 'string',
      options: {
        list: speed,
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'familiarity',
      title: 'Vertrautheit',
      type: 'string',
      options: {
        list: boolean,
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'escapeCapability',
      title: 'Fluchtfähigkeit',
      type: 'string',
      options: {
        list: boolean,
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'walkingSpeed',
      title: 'Gehgeschwindigkeit',
      type: 'string',
      options: {
        list: speed,
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'designation',
    },
    prepare({ title }) {
      return {
        title: `Nutzergruppe ${title}`,
      }
    },
  },
})
