import { defineType, defineArrayMember } from 'sanity'
import { TbLink } from 'react-icons/tb'

export default defineType({
  title: 'Block Content',
  name: 'simpleEditor',
  type: 'array',
  of: [
    defineArrayMember({
      options: { spellCheck: false, oneLine: true },
      title: 'Block',
      type: 'block',
      styles: [],
      lists: [],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        annotations: [
          {
            name: 'internalLink',
            type: 'object',
            title: 'Interne Verlinkung',
            icon: TbLink,
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Verweis',
                validation: (Rule) => Rule.required(),
                to: [
                  { type: 'article' },
                  { type: 'title' },
                  { type: 'chapter' },
                ],
              },
            ],
          },
        ],
      },
    }),
  ],
})
