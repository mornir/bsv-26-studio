import { defineField, defineType } from 'sanity';
import { TbSparkles } from "react-icons/tb";


export default defineType({
  name: 'feature',
  title: 'Features',
  type: 'document',
  icon: TbSparkles,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Beschreibung',
      type: 'localeString',

    }),
  ],
  preview: {
    select: {
      title: 'name.de',
    },
  },
});