import { defineType, defineArrayMember } from 'sanity'

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
            type: 'internalLink',
            title: 'Interne Verlinkung',
          },
        ],
      },
    }),
  ],
})
