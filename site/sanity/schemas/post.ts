export default {
  name: 'post',
  title: 'Artículo de blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (R: any) => R.required(),
    },
    {
      name: 'slug',
      title: 'URL del artículo',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (R: any) => R.required(),
    },
    {
      name: 'publishedAt',
      title: 'Fecha de publicación',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'author',
      title: 'Autor',
      type: 'string',
      initialValue: 'Sombrero Rosa',
    },
    {
      name: 'excerpt',
      title: 'Resumen (aparece en el listado)',
      type: 'text',
      rows: 3,
      validation: (R: any) => R.max(200),
    },
    {
      name: 'mainImage',
      title: 'Imagen de portada',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Texto alternativo', type: 'string' }],
    },
    {
      name: 'body',
      title: 'Contenido',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', title: 'Texto alternativo', type: 'string' }],
        },
      ],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'publishedAt', media: 'mainImage' },
    prepare({ title, subtitle, media }: any) {
      return { title, subtitle: subtitle?.slice(0, 10), media };
    },
  },
};
