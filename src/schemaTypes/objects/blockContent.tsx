import { defineField, defineType, defineArrayMember } from 'sanity'
import {
  TbTableFilled,
  TbMath,
  TbPhoto,
  TbSuperscript,
  TbSubscript,
  TbHomeCheck,
} from 'react-icons/tb'

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      options: { spellCheck: false },
      title: 'Block',
      type: 'block',
      of: [
        defineArrayMember({
          name: 'regulationTable',
          title: 'Anforderungstabelle',
          type: 'reference',
          to: [{ type: 'regulationTable' }],
          icon: TbHomeCheck,
        }),
        defineArrayMember({
          name: 'table',
          title: 'Andere Tabellen',
          type: 'reference',
          to: [{ type: 'table' }],
          icon: TbTableFilled,
        }),
      ],
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [],
      lists: [
        { title: 'Numbered', value: 'number' },
        { title: 'Bullet', value: 'bullet' },
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: 'Fett', value: 'strong' },
          { title: 'Kursiv', value: 'em' },
          {
            title: 'Hochgestellt',
            value: 'sup',
            icon: TbSuperscript,
            component: ({ children }) => <sup>{children}</sup>,
          },
          {
            title: 'Tiefgestellt',
            value: 'sub',
            icon: TbSubscript,
            component: ({ children }) => <sub>{children}</sub>,
          },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          defineField({
            name: 'internalLink',
            type: 'internalLink',
            title: 'Verweis',
          }),
          defineField({
            name: 'link',
            type: 'externalLink',
            title: 'Externer Link',
          }),
          defineField({
            type: 'reference',
            name: 'figure',
            to: [{ type: 'figure' }],
            icon: TbPhoto,
            title: 'Abbildung',
          }),
        ],
      },
    }),
    /* defineArrayMember({ type: 'latex', icon: TbMath, title: 'Math block' }), */
  ],
})
