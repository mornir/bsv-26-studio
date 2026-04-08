import { singletonDocumentListItem } from 'sanity-plugin-singleton-management'
import { TbCertificate } from 'react-icons/tb'
import { AGENT_CONTEXT_SCHEMA_TYPE_NAME } from '@sanity/agent-context/studio'

import type { StructureResolver } from 'sanity/structure'
export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Inhalt')
    .items([
      S.documentTypeListItem('article').title('Artikel'),
      S.documentTypeListItem('appendix').title('Anhänge'),
      S.documentTypeListItem('figure').title('Abbildungen'),
      S.documentTypeListItem('table').title('Tabellen'),
      S.documentTypeListItem('faq').title('Anfragen'),
      S.divider(),
      S.documentTypeListItem('usersGroup').title('Nutzergruppen'),
      S.documentTypeListItem('system').title('Systeme'),
      S.documentTypeListItem('regulationTable').title('Anforderungstabellen'),
      S.documentTypeListItem('measureTarget').title('Massnahmen - Schutzgüter'),
      singletonDocumentListItem({
        S,
        context,
        type: 'qualifications',
        title: 'Kompetenzennachweis',
        id: 'qualifications',
        icon: TbCertificate,
      }),
      S.divider(),
      S.documentTypeListItem('title').title('Titel'),
      S.documentTypeListItem('chapter').title('Kapitel'),
      S.documentTypeListItem('section').title('Abschnitte'),
      S.divider(),
      S.documentTypeListItem(AGENT_CONTEXT_SCHEMA_TYPE_NAME),
    ])
