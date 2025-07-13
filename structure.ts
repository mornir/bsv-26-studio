import type { StructureResolver } from 'sanity/structure'
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Inhalt')
    .items([
      S.documentTypeListItem('title').title('Titel'),
      S.documentTypeListItem('chapter').title('Kapitel'),
      S.documentTypeListItem('section').title('Abschnitte'),
      S.documentTypeListItem('article').title('Artikel'),
      S.divider(),
      S.documentTypeListItem('appendix').title('Anhänge'),
      S.documentTypeListItem('figure').title('Abbildungen'),
      S.documentTypeListItem('table').title('Tabellen'),
      S.divider(),
      S.documentTypeListItem('tag').title('Tags'),
      S.documentTypeListItem('feature').title('Features'),
    ])
