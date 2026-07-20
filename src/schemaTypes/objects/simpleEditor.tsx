import { defineType, defineArrayMember } from 'sanity'

import { IconSuperscript, IconSubscript } from '@tabler/icons-react'

export default defineType({
  title: 'Block Content',
  name: 'simpleEditor',
  type: 'array',
  of: [
    defineArrayMember({
      options: { spellCheck: false },
      title: 'Block',
      type: 'block',
      styles: [],
      lists: [],
      marks: {
        decorators: [
          { title: 'Fett', value: 'strong' },
          { title: 'Kursiv', value: 'em' },
          {
            title: 'Hochgestellt',
            value: 'sup',
            icon: IconSuperscript,
            component: ({ children }) => <sup>{children}</sup>,
          },
          {
            title: 'Tiefgestellt',
            value: 'sub',
            icon: IconSubscript,
            component: ({ children }) => <sub>{children}</sub>,
          },
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
