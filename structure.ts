import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list().title('Inhalt').items([
    S.listItem()
      .title('Verzeichnis')
      .child(
        S.list()
          .title('toc')
          .items([
            S.listItem()
              .title('Titel')
              .child(S.documentTypeList('title')),
          ])
      ),
    ...S.documentTypeListItems()] // <= example code goes here
  )