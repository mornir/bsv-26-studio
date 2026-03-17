import { singletonDocumentListItem } from 'sanity-plugin-singleton-management'
import { TbCertificate, TbUsersGroup } from 'react-icons/tb'

import type { StructureResolver } from 'sanity/structure'
export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Inhalt')
    .items([
      S.documentTypeListItem('article').title('Artikel'),
      S.documentTypeListItem('title').title('Titel'),
      S.documentTypeListItem('chapter').title('Kapitel'),
      S.documentTypeListItem('section').title('Abschnitte'),
      S.divider(),
      S.documentTypeListItem('appendix').title('Anhänge'),
      S.documentTypeListItem('figure').title('Abbildungen'),
      S.documentTypeListItem('faq').title('Anfragen'),
      S.divider().title('Tabellen'),
      S.documentTypeListItem('measureTarget').title('Massnahmen - Schutzgüter'),
      singletonDocumentListItem({
        S,
        context,
        type: 'qualifications',
        title: 'Kompetenzennachweis',
        id: 'qualifications',
        icon: TbCertificate,
      }),
      singletonDocumentListItem({
        S,
        context,
        type: 'userGroups',
        title: 'Nutzergruppen',
        id: 'userGroups',
        icon: TbUsersGroup,
      }),
      S.documentTypeListItem('table').title('HTML-Tabellen'),
      S.divider(),
      S.documentTypeListItem('feature').title('Features'),
    ])
