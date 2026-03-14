// Rôle SEO : index blog = maillage interne + indexation longue traîne + signal fraîcheur contenu
import type { Metadata } from 'next'
import Link from 'next/link'
import GoogleReviews from '@/components/GoogleReviews'

export const metadata: Metadata = {
  title: 'Blog Réparation Téléphone Paris — Conseils & Guides | Repair Ninja Bastille',
  description:
    'Guides pratiques sur la réparation iPhone, Samsung et MacBook à Paris. Tarifs 2025, conseils d\'urgence et astuces de nos techniciens Repair Ninja Bastille.',
  alternates: { canonical: 'https://www.repairninja.fr/blog' },
  openGraph: {
    title: 'Blog Repair Ninja Bastille — Conseils Réparation Téléphone Paris',
    description: 'Guides pratiques, tarifs et conseils sur la réparation iPhone, Samsung et MacBook à Paris.',
    url: 'https://www.repairninja.fr/blog',
  },
}

const articles = [
  {
    slug: 'ecran-iphone-casse-que-faire-paris',
    title: 'Écran iPhone cassé : que faire ? Les bons réflexes',
    description: 'Fissure, écran noir, tactile mort — guide d\'urgence étape par étape pour protéger votre iPhone et choisir la meilleure solution de réparation à Paris.',
    category: 'iPhone',
    icon: '📱',
    readTime: '7 min',
    popular: true,
  },
  {
    slug: 'combien-coute-reparation-ecran-iphone-paris',
    title: 'Combien coûte la réparation d\'écran iPhone à Paris ?',
    description: 'Tarifs complets 2025 par modèle : de l\'iPhone SE au 15 Pro Max. Comparatif Apple Store vs réparateur indépendant.',
    category: 'iPhone',
    icon: '💶',
    readTime: '6 min',
    popular: false,
  },
  {
    slug: 'reparation-iphone-sans-rendez-vous-paris',
    title: 'Réparation iPhone sans rendez-vous à Paris — Bastille',
    description: 'Peut-on réparer son iPhone sans RDV à Paris ? Oui ! Repair Ninja Bastille vous accueille du lundi au samedi, sans attente.',
    category: 'iPhone',
    icon: '🗓',
    readTime: '5 min',
    popular: false,
  },
  {
    slug: 'reparation-samsung-paris-pas-cher',
    title: 'Réparation Samsung Galaxy à Paris pas cher',
    description: 'Tarifs réparation Samsung 2025 : Galaxy S24, A53, Z Fold. Jusqu\'à 40% moins cher que le Samsung Service Center.',
    category: 'Android',
    icon: '🤖',
    readTime: '6 min',
    popular: false,
  },
  {
    slug: 'macbook-ne-demarre-plus-solution-paris',
    title: 'MacBook qui ne démarre plus : causes & solutions',
    description: 'Écran noir, logo Apple figé, ventilateur seul… Guide de diagnostic + réparation MacBook Air/Pro à Paris. Jusqu\'à 50% moins cher que l\'Apple Store.',
    category: 'MacBook',
    icon: '💻',
    readTime: '8 min',
    popular: false,
  },
  {
    slug: 'reparation-telephone-remboursement-assurance',
    title: 'Se faire rembourser la réparation de son téléphone par son assurance',
    description: 'Guide complet : identifier votre couverture, constituer votre dossier et obtenir le remboursement. Repair Ninja fournit une facture conforme pour toutes les assurances.',
    category: 'Conseils',
    icon: '💳',
    readTime: '8 min',
    popular: true,
  },
]

const categoryColors: Record<string, string> = {
  iPhone: 'bg-blue-50 text-blue-700 border-blue-100',
  Android: 'bg-green-50 text-green-700 border-green-100',
  MacBook: 'bg-purple-50 text-purple-700 border-purple-100',
  Conseils: 'bg-emerald-50 text-emerald-700 border-emerald-100',
}

export default function BlogIndex() {
  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="bg-gray-950 text-white py-10 sm:py-14 md:py-20 px-4">
        <div className="container-site mx-auto max-w-4xl">
          <nav className="text-gray-400 text-sm mb-6" aria-label="Fil d'Ariane">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Blog</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-ninja-red/20 border border-ninja-red/30
                          text-ninja-red px-3 py-1.5 rounded-full text-xs font-semibold mb-5">
            Conseils & Guides
          </div>
          <h1 className="text-white mb-4">
            Blog Repair Ninja —{' '}
            <span className="text-ninja-red">Guides Réparation</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            Nos techniciens partagent leurs conseils pour gérer une panne, comprendre les tarifs
            et choisir le meilleur réparateur à Paris. 🇫🇷 Rédigé par des experts parisiens.
          </p>
        </div>
      </section>

      {/* ══ GRILLE D'ARTICLES ════════════════════════════════════════════════ */}
      <section className="section-pad bg-white">
        <div className="container-site mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm
                           hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Image placeholder */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 h-40 flex items-center justify-center">
                  <span className="text-6xl">{article.icon}</span>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  {/* Badges */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${categoryColors[article.category]}`}>
                      {article.category}
                    </span>
                    {article.popular && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
                        ⭐ Populaire
                      </span>
                    )}
                    <span className="text-xs text-gray-400 ml-auto">{article.readTime}</span>
                  </div>

                  <h2 className="text-base font-bold text-gray-900 mb-2 leading-snug
                                 group-hover:text-ninja-red transition-colors line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">
                    {article.description}
                  </p>

                  <div className="mt-4 inline-flex items-center gap-1 text-ninja-red text-sm font-semibold">
                    Lire l'article
                    <span className="w-5 h-5 bg-ninja-red rounded-full flex items-center justify-center
                                     text-white text-xs group-hover:translate-x-0.5 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA CENTRAL ═════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 border-t border-gray-100 py-12 px-4">
        <div className="container-site mx-auto text-center max-w-xl">
          <div className="text-4xl mb-4">🥷</div>
          <h2 className="text-gray-900 mb-3">Votre appareil est en panne ?</h2>
          <p className="text-gray-500 mb-6">
            Nos ninjas sont au <strong>7 Rue de la Cerisaie, Paris 4</strong> — diagnostic GRATUIT, sans RDV.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact-rendez-vous" className="btn-primary">🗓 Prendre RDV Gratuit</Link>
            <a href="tel:+33750008410" className="btn-secondary">📞 07.50.00.84.10</a>
          </div>
        </div>
      </section>

      <GoogleReviews />
    </>
  )
}
