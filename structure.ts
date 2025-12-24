import type { StructureResolver } from 'sanity/structure'
export const structure: StructureResolver = (S) =>
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
      S.documentTypeListItem('table').title('Tabellen'),
      S.documentTypeListItem('faq').title('Anfragen'),
      S.divider(),
      S.documentTypeListItem('userGroup').title('Nutzergruppen'),
      S.documentTypeListItem('measureTarget').title('Massnahmen - Schutzgüter'),
      S.divider(),
      S.documentTypeListItem('tag').title('Tags'),
      S.documentTypeListItem('feature').title('Features'),
    ])
