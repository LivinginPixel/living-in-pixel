import type { MetadataRoute } from 'next';
import { PROJECT_SLUGS } from '../lib/projects';
import { SITE_URL } from '../lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const projectEntries = PROJECT_SLUGS.map((slug) => ({
    url: `${SITE_URL}/projects/${slug}`,
    lastModified,
    changeFrequency: 'yearly' as const,
    priority: 0.4
  }));

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3
    },
    ...projectEntries
  ];
}
