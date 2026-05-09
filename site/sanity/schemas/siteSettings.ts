export default {
  name: 'siteSettings',
  title: 'Configuración general',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    { name: 'siteTitle',   title: 'Nombre del sitio',   type: 'string', initialValue: 'Sombrero Rosa' },
    { name: 'description', title: 'Descripción SEO',    type: 'text', rows: 2 },
    { name: 'email',       title: 'Email de contacto',  type: 'string' },
    { name: 'phone',       title: 'Teléfono',           type: 'string' },
    { name: 'whatsapp',    title: 'Link de WhatsApp',   type: 'url' },
    { name: 'instagram',   title: 'Link de Instagram',  type: 'url' },
    { name: 'tiktok',      title: 'Link de TikTok',     type: 'url' },
    { name: 'address',     title: 'Dirección / ciudad', type: 'string' },
  ],
  preview: { prepare: () => ({ title: 'Configuración general' }) },
};
