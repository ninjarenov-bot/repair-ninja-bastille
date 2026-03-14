// Rôle SEO : robots.txt autorise Google + pointe le sitemap = crawl optimal
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://www.repairninja.fr/sitemap.xml',
    host: 'https://www.repairninja.fr',
  }
}
