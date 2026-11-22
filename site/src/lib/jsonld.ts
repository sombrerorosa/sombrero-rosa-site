export const SITE_URL = 'https://sombrerorosa.com';
export const ORG_NAME = 'Sombrero Rosa';
export const ORG_DESCRIPTION = 'Agencia de marketing. Hacemos crecer tu marca, negocio y relación con clientes.';

type SiteSettings = {
  email?: string;
  phone?: string;
  instagram?: string;
  tiktok?: string;
  address?: string;
} | null | undefined;

export function organizationSchema(settings: SiteSettings) {
  const sameAs = [
    settings?.instagram || 'https://www.instagram.com/sombrerorosastudio/',
    'https://www.facebook.com/sombrerorosastudio',
    settings?.tiktok,
  ].filter(Boolean);

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: ORG_NAME,
    description: ORG_DESCRIPTION,
    url: SITE_URL,
    logo: `${SITE_URL}/assets/logo-sombrero-rosa.png`,
    email: settings?.email || 'hola@sombrerorosa.com',
    telephone: settings?.phone || '+54 11 7246 5685',
    address: {
      '@type': 'PostalAddress',
      addressLocality: settings?.address || 'Buenos Aires',
      addressCountry: 'AR',
    },
    areaServed: 'AR',
    sameAs,
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: ORG_NAME,
    url: SITE_URL,
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function blogPostingSchema(post: {
  title: string;
  excerpt?: string;
  publishedAt?: string;
  author?: string;
}, url: string, imageUrl?: string | null) {
  const isOrgByline = !post.author || post.author === ORG_NAME;
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    ...(imageUrl ? { image: [imageUrl] } : {}),
    author: isOrgByline
      ? { '@type': 'Organization', name: ORG_NAME, url: SITE_URL }
      : { '@type': 'Person', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: ORG_NAME,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/assets/logo-sombrero-rosa.png` },
    },
    mainEntityOfPage: url,
    url,
  };
}

export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}
