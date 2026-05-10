import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './sanity/schemas';

export default defineConfig({
  name: 'sombrero-rosa',
  title: 'Sombrero Rosa',
  projectId: '42w8s11j',
  dataset: 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenido')
          .items([
            S.listItem().title('Configuración general').id('siteSettings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.listItem().title('Página de inicio').id('homePage')
              .child(S.document().schemaType('homePage').documentId('homePage')),
            S.divider(),
            S.documentTypeListItem('post').title('Artículos de blog'),
          ]),
    }),
  ],
  schema: { types: schemaTypes },
});
