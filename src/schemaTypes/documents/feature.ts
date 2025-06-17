import { defineField, defineType } from 'sanity';
import { TbSparkles } from "react-icons/tb";


export default defineType({
  name: 'feature',
  title: 'Feature',
  type: 'document',
  icon: TbSparkles,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name.de',
    },
  },
});