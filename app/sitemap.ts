import type { MetadataRoute } from 'next';

import { SITE_URL } from '@/lib/constants';

export const dynamic = 'force-static';

// /activate is intentionally excluded — post-checkout utility page,
// only meaningful with live URL params from Dodo.
const ROUTES = ['/', '/how-it-works', '/pricing', '/terms', '/privacy'];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((path) => ({
    url: `${SITE_URL}${path === '/' ? '' : path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: path === '/' ? 1.0 : 0.7,
  }));
}
