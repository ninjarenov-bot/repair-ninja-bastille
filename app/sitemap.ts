// Rôle SEO : sitemap.xml dynamique = indexation complète par Google de toutes les pages
import { MetadataRoute } from 'next'

const BASE_URL = 'https://www.repairninja.fr'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    // Pages principales
    { url: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/reparation-iphone-paris-bastille', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/reparation-smartphone-paris-4', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/reparation-macbook-bastille', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/reparation-tablette-paris-11', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/quartiers-bastille-paris', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/contact-rendez-vous', priority: 0.9, changeFrequency: 'yearly' as const },
    // Page Achat-Revente
    { url: '/achat-revente', priority: 0.8, changeFrequency: 'monthly' as const },
    // Page Fidélité
    { url: '/fidelite', priority: 0.7, changeFrequency: 'monthly' as const },
    // Page Pro & B2B
    { url: '/services-pro', priority: 0.8, changeFrequency: 'monthly' as const },
    // Blog index
    { url: '/blog', priority: 0.7, changeFrequency: 'weekly' as const },
    // Articles de blog
    { url: '/blog/ecran-iphone-casse-que-faire-paris', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/blog/combien-coute-reparation-ecran-iphone-paris', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/blog/reparation-iphone-sans-rendez-vous-paris', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/blog/reparation-samsung-paris-pas-cher', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/blog/macbook-ne-demarre-plus-solution-paris', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/blog/reparation-telephone-remboursement-assurance', priority: 0.6, changeFrequency: 'monthly' as const },
  ]

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE_URL}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
