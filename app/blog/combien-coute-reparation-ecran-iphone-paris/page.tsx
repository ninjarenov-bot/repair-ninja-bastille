// Rôle SEO : article longue traîne "combien coûte réparation écran iPhone" = intent transactionnel
import type { Metadata } from 'next'
import Link from 'next/link'
import GoogleReviews from '@/components/GoogleReviews'
import MapSection from '@/components/MapSection'

export const metadata: Metadata = {
  title: 'Combien Coûte la Réparation d\'Écran iPhone à Paris ? Tarifs 2025 | Repair Ninja',
  description:
    'Tarifs réparation écran iPhone 2025 : de 79€ à 299€ selon le modèle. Comparatif Apple Store vs réparateur indépendant. Diagnostic GRATUIT chez Repair Ninja Bastille Paris 4.',
  alternates: { canonical: 'https://www.repairninja.fr/blog/combien-coute-reparation-ecran-iphone-paris' },
  openGraph: {
    title: 'Tarifs Réparation Écran iPhone Paris 2025 | Repair Ninja Bastille',
    description: 'Prix remplacement écran iPhone par modèle. Jusqu\'à 50% moins cher que l\'Apple Store. Garantie 6 mois.',
    url: 'https://www.repairninja.fr/blog/combien-coute-reparation-ecran-iphone-paris',
  },
}

const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Combien coûte la réparation d\'un écran iPhone à Paris ?',
  description: 'Tarifs complets 2025 de réparation d\'écran iPhone par modèle. Comparatif Apple Store vs réparateur indépendant à Paris.',
  author: { '@type': 'Organization', name: 'Repair Ninja Bastille', '@id': 'https://www.repairninja.fr/#organization' },
  publisher: { '@type': 'Organization', name: 'Repair Ninja Bastille', logo: { '@type': 'ImageObject', url: 'https://www.repairninja.fr/logo.png' } },
  datePublished: '2025-03-11',
  dateModified: '2025-03-11',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.repairninja.fr/blog/combien-coute-reparation-ecran-iphone-paris' },
  image: 'https://www.repairninja.fr/og-image.jpg',
  keywords: 'combien coûte réparation écran iPhone, prix réparation iPhone Paris, tarif remplacement écran iPhone 15',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.repairninja.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.repairninja.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Prix réparation écran iPhone Paris', item: 'https://www.repairninja.fr/blog/combien-coute-reparation-ecran-iphone-paris' },
  ],
}

const tarifsIphone = [
  { modele: 'iPhone 15 Pro Max', technologie: 'OLED ProMotion', repairNinja: '249€', appleStore: '499€+' },
  { modele: 'iPhone 15 Pro', technologie: 'OLED ProMotion', repairNinja: '229€', appleStore: '449€+' },
  { modele: 'iPhone 15 / 15 Plus', technologie: 'OLED', repairNinja: '199€', appleStore: '379€+' },
  { modele: 'iPhone 14 Pro Max', technologie: 'OLED ProMotion', repairNinja: '219€', appleStore: '419€+' },
  { modele: 'iPhone 14 Pro', technologie: 'OLED ProMotion', repairNinja: '199€', appleStore: '389€+' },
  { modele: 'iPhone 14 / 14 Plus', technologie: 'OLED', repairNinja: '169€', appleStore: '329€+' },
  { modele: 'iPhone 13 / 13 mini', technologie: 'OLED', repairNinja: '149€', appleStore: '289€+' },
  { modele: 'iPhone 13 Pro / Max', technologie: 'OLED ProMotion', repairNinja: '189€', appleStore: '369€+' },
  { modele: 'iPhone 12 / 12 mini', technologie: 'OLED', repairNinja: '119€', appleStore: '229€+' },
  { modele: 'iPhone 11', technologie: 'LCD Retina', repairNinja: '99€', appleStore: '199€+' },
  { modele: 'iPhone XS / XS Max', technologie: 'OLED', repairNinja: '109€', appleStore: '209€+' },
  { modele: 'iPhone XR', technologie: 'LCD Retina', repairNinja: '89€', appleStore: '179€+' },
  { modele: 'iPhone SE (2022/2020)', technologie: 'LCD Retina', repairNinja: '79€', appleStore: '149€+' },
]

export default function PrixEcranIphoneArticle() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="bg-gray-950 text-white py-10 sm:py-14 md:py-20 px-4">
        <div className="container-site mx-auto max-w-3xl">
          <nav className="text-gray-400 text-sm mb-6" aria-label="Fil d'Ariane">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Prix réparation écran iPhone</span>
          </nav>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1 bg-blue-500/20 border border-blue-500/30
                             text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">
              📱 iPhone · Tarifs
            </span>
            <span className="text-gray-400 text-sm">6 min de lecture · Mis à jour mars 2025</span>
          </div>
          <h1 className="text-white mb-5">
            Combien coûte la réparation{' '}
            <span className="text-ninja-red">d&apos;écran iPhone à Paris ?</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Tarifs complets 2025, modèle par modèle — et pourquoi passer par un réparateur indépendant
            comme Repair Ninja Bastille vous fait économiser jusqu&apos;à 50% par rapport à l&apos;Apple Store.
          </p>
        </div>
      </section>

      {/* ══ CORPS ════════════════════════════════════════════════════════════ */}
      <article className="bg-white section-pad">
        <div className="container-site mx-auto max-w-3xl">

          {/* Introduction */}
          <p className="text-gray-600 leading-relaxed mb-8 text-lg">
            Le prix de remplacement d&apos;un écran iPhone varie considérablement selon le modèle,
            la technologie de la dalle et le réparateur choisi. Voici le tableau complet des tarifs
            pratiqués chez <strong>Repair Ninja Bastille</strong>, comparés aux prix officiels Apple.
          </p>

          {/* Tableau des tarifs */}
          <h2 className="text-gray-900 mb-5">Tarifs réparation écran iPhone 2025 — Tous modèles</h2>

          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold rounded-tl-2xl">Modèle iPhone</th>
                  <th className="text-left px-4 py-3 font-semibold hidden sm:table-cell">Technologie</th>
                  <th className="text-center px-4 py-3 font-semibold text-ninja-red">Repair Ninja 🥷</th>
                  <th className="text-center px-4 py-3 font-semibold text-gray-400 rounded-tr-2xl">Apple Store</th>
                </tr>
              </thead>
              <tbody>
                {tarifsIphone.map((row, i) => (
                  <tr key={row.modele}
                      className={`border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                    <td className="px-4 py-3 font-medium text-gray-900">{row.modele}</td>
                    <td className="px-4 py-3 text-gray-500 hidden sm:table-cell text-xs">{row.technologie}</td>
                    <td className="px-4 py-3 text-center">
                      <span className="font-bold text-ninja-red">{row.repairNinja}</span>
                    </td>
                    <td className="px-4 py-3 text-center text-gray-400 line-through text-xs">{row.appleStore}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mb-10">
            * Tarifs indicatifs, garantie 6 mois incluse. Prix Apple Store à titre de comparaison (hors programme AppleCare+).
          </p>

          {/* Section 2 */}
          <h2 className="text-gray-900 mt-10 mb-5">Ce qui explique les différences de prix</h2>

          <h3 className="text-gray-800 mt-6 mb-3">La technologie de l&apos;écran : LCD vs OLED</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Les iPhone récents (à partir de l&apos;iPhone X) utilisent des dalles <strong>OLED</strong>,
            plus coûteuses à remplacer que les anciennes dalles LCD. Les modèles Pro intègrent de l&apos;OLED
            ProMotion (120 Hz), encore plus onéreux. C&apos;est la principale raison de l&apos;écart de prix
            entre un iPhone SE et un iPhone 15 Pro Max.
          </p>

          <h3 className="text-gray-800 mt-6 mb-3">Qualité des pièces : OEM, aftermarket ou original</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Chez Repair Ninja Bastille, nous utilisons des pièces de <strong>qualité OEM (Original Equipment Manufacturer)</strong>
            — les mêmes composants que ceux utilisés à l&apos;usine, sans le prix premium Apple. Résultat :
            une qualité d&apos;affichage identique à l&apos;original, à prix réduit.
          </p>

          <h3 className="text-gray-800 mt-6 mb-3">Réparateur indépendant vs Apple Store : jusqu&apos;à 50% d&apos;écart</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            L&apos;Apple Store applique une marge très importante sur les réparations hors garantie.
            Un réparateur indépendant parisien comme Repair Ninja ne supporte pas ces frais de structure
            et peut vous offrir la même qualité de réparation à moitié prix.
          </p>

          {/* Section 3 */}
          <h2 className="text-gray-900 mt-10 mb-5">
            Réparer ou remplacer ? Le calcul économique
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Si votre iPhone a moins de 3 ans, la réparation est presque toujours plus rentable
            qu&apos;un remplacement. Un iPhone reconditionné de même gamme coûte en général
            <strong> 350€ à 600€</strong>, contre 99€ à 249€ pour une réparation d&apos;écran.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-8">
            <p className="text-blue-800 text-sm font-semibold mb-2">💡 Exemple concret</p>
            <p className="text-blue-700 text-sm leading-relaxed">
              iPhone 13 avec écran fissuré : réparation à <strong>149€</strong> chez Repair Ninja,
              vs iPhone 13 reconditionné à <strong>450€ minimum</strong>. L&apos;économie est de 300€.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="text-gray-900 mt-10 mb-5">
            Ce que comprend une réparation chez Repair Ninja Bastille
          </h2>

          <div className="space-y-3 mb-8">
            {[
              { icon: '🔬', title: 'Diagnostic GRATUIT et sans engagement', desc: 'Nos ninjas examinent votre iPhone et vous remettent un devis clair. Vous repartez sans payer si vous refusez.' },
              { icon: '⚡', title: 'Remplacement en 20 minutes chrono', desc: 'Écrans iPhone 11, 12, 13, 14, 15 — tous remplacés sur place en moins de 20 minutes.' },
              { icon: '🛡️', title: 'Garantie 6 mois pièces et main-d\'œuvre', desc: 'Si la même panne survient dans les 6 mois, on la répare gratuitement, sans condition.' },
              { icon: '💳', title: 'Paiement CB, sans contact, Apple Pay', desc: 'Tous les moyens de paiement acceptés. Paiement en plusieurs fois possible pour les grosses réparations.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 bg-gray-50 rounded-2xl p-4 border border-gray-100">
                <div className="w-10 h-10 bg-ninja-red/10 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA final */}
          <div className="bg-gray-900 rounded-3xl p-6 sm:p-8 text-white mt-10">
            <h2 className="text-white mb-3">
              🥷 Obtenez votre devis GRATUIT maintenant
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Repair Ninja Bastille — <strong className="text-white">7 Rue de la Cerisaie, Paris 75004</strong>.
              À 2 min de la station Bastille. 🇫🇷 Réparateur français indépendant.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact-rendez-vous"
                    className="flex-1 flex items-center justify-center gap-2 bg-ninja-red text-white
                               font-bold px-6 py-3 rounded-full hover:bg-ninja-accent transition-colors">
                🗓 RDV Diagnostic Gratuit
              </Link>
              <a href="tel:+33750008410"
                 className="flex-1 flex items-center justify-center gap-2 bg-white text-gray-900
                            font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors">
                📞 07.50.00.84.10
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Liens internes */}
      <section className="bg-gray-50 py-12 px-4 border-t border-gray-100">
        <div className="container-site mx-auto text-center">
          <h2 className="text-gray-900 mb-6">Nos services iPhone à Paris</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/reparation-iphone-paris-bastille" className="btn-primary">🍎 Réparation iPhone Bastille</Link>
            <Link href="/blog/ecran-iphone-casse-que-faire-paris" className="btn-secondary">🔲 Écran cassé : que faire ?</Link>
            <Link href="/contact-rendez-vous" className="btn-secondary">🗓 Prendre RDV</Link>
          </div>
        </div>
      </section>

      <GoogleReviews />
      <MapSection />
    </>
  )
}
