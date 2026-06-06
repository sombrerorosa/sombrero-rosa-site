export default {
  name: 'homePage',
  title: 'Página de inicio',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    /* ---- HERO -------------------------------------------------- */
    {
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        { name: 'pill',      title: 'Etiqueta (pill)',  type: 'string',
          initialValue: 'Agencia boutique de marketing full service' },
        { name: 'headline',  title: 'Titular principal', type: 'string',
          initialValue: 'Creer, Crear & Crecer' },
        { name: 'lead',      title: 'Bajada',           type: 'text', rows: 3 },
        { name: 'quote',     title: 'Cita',             type: 'text', rows: 2 },
        { name: 'quoteAuthor', title: 'Autor de la cita', type: 'string',
          initialValue: '— Carl Jung' },
        { name: 'ctaPrimary',   title: 'CTA principal (texto)',     type: 'string', initialValue: 'Conocer servicios' },
        { name: 'ctaSecondary', title: 'CTA secundario (texto)',    type: 'string', initialValue: 'Empezar proyecto' },
      ],
    },
    /* ---- SERVICES ---------------------------------------------- */
    {
      name: 'services',
      title: 'Servicios (3 tarjetas)',
      type: 'object',
      fields: [
        { name: 'eyebrow', title: 'Eyebrow', type: 'string', initialValue: '01' },
        { name: 'title',   title: 'Título de sección', type: 'string', initialValue: 'Servicios' },
        { name: 'lead',    title: 'Bajada', type: 'text', rows: 2 },
        {
          name: 'items',
          title: 'Tarjetas',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'icon',  title: 'Ícono (nombre Lucide)', type: 'string' },
              { name: 'title', title: 'Título', type: 'string' },
              { name: 'desc',  title: 'Descripción corta', type: 'text', rows: 2 },
              { name: 'expandDesc', title: 'Detalle (al expandir)', type: 'text', rows: 3 },
              {
                name: 'expandItems',
                title: 'Lista de servicios',
                type: 'array',
                of: [{ type: 'string' }],
              },
            ],
            preview: { select: { title: 'title', subtitle: 'desc' } },
          }],
          validation: (R: any) => R.min(1).max(3),
        },
        { name: 'ctaText', title: 'Texto CTA inferior', type: 'string',
          initialValue: '¿Listo para hacer crecer tu negocio?' },
      ],
    },
    /* ---- MANIFESTO --------------------------------------------- */
    {
      name: 'manifesto',
      title: '¿Por qué nosotros? (6 tarjetas)',
      type: 'object',
      fields: [
        { name: 'title', title: 'Título de sección', type: 'string', initialValue: '¿Por qué nosotros?' },
        { name: 'lead',  title: 'Bajada', type: 'text', rows: 2 },
        {
          name: 'items',
          title: 'Tarjetas',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'icon',  title: 'Ícono (nombre Lucide)', type: 'string' },
              { name: 'title', title: 'Título', type: 'string' },
              { name: 'desc',  title: 'Descripción', type: 'text', rows: 2 },
            ],
            preview: { select: { title: 'title' } },
          }],
          validation: (R: any) => R.max(6),
        },
      ],
    },
    /* ---- TOOLS ------------------------------------------------- */
    {
      name: 'tools',
      title: 'Herramientas (marquee)',
      type: 'object',
      fields: [
        { name: 'label', title: 'Título de sección', type: 'string',
          initialValue: 'Herramientas que utilizamos' },
        {
          name: 'items',
          title: 'Herramientas',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'name', title: 'Nombre', type: 'string' },
              { name: 'tag',  title: 'Categoría', type: 'string' },
            ],
            preview: { select: { title: 'name', subtitle: 'tag' } },
          }],
        },
      ],
    },
  ],
  preview: { prepare: () => ({ title: 'Página de inicio' }) },
};
