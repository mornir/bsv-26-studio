import { defineType, defineField } from 'sanity'
import { TbUsersGroup } from 'react-icons/tb'

export default defineType({
  name: 'userGroup',
  title: 'Nutzergruppen',
  type: 'document',
  icon: TbUsersGroup,
  fields: [
    defineField({
      name: 'userGroup',
      title: 'Nutzergruppe',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'attention',
      title: 'Aufmerksamkeit',
      type: 'string',
      options: {
        list: [
          { title: 'ja', value: 'yes' },
          { title: 'nein', value: 'no' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'reactionCapability',
      title: 'Reaktionsfähigkeit',
      type: 'string',
      options: {
        list: [
          { title: 'schnell', value: 'fast' },
          { title: 'langsam', value: 'slow' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'familiarity',
      title: 'Vertrautheit',
      type: 'string',
      options: {
        list: [
          { title: 'ja', value: 'yes' },
          { title: 'nein', value: 'no' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'escapeCapability',
      title: 'Fluchtfähigkeit',
      type: 'string',
      options: {
        list: [
          { title: 'ja', value: 'yes' },
          { title: 'nein', value: 'no' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'walkingSpeed',
      title: 'Gehgeschwindigkeit',
      type: 'string',
      options: {
        list: [
          { title: 'schnell', value: 'fast' },
          { title: 'langsam', value: 'slow' },
        ],
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
})
