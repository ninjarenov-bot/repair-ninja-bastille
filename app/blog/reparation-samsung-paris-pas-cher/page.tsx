// Rôle SEO : "réparation Samsung Paris pas cher" = intent transactionnel Android
import type { Metadata } from 'next'
import Link from 'next/link'
import GoogleReviews from '@/components/GoogleReviews'
import MapSection from '@/components/MapSection'

export const metadata: Metadata = {
  title: 'Réparation Samsung Galaxy Paris Pas Cher — Bastille | Repair Ninja',
  description:
    'Réparation Samsung Galaxy à Paris : écran, batterie, connecteur. À partir de 59€. Moins cher que Samsung Service Center. Diagnostic GRATUIT ✓ 20 min ✓ Bastille Paris 4. ☎ 07.50.00.84.10',
  alternates: { canonical: 'https://www.repairninja.fr/blog/reparation-samsung-paris-pas-cher' },
  openGraph: {
    title: 'Réparation Samsung Paris Pas Cher — Repair Ninja Bastille',
    description: 'Galaxy S24, A54, Z Fold réparés à partir de 59€. Jusqu\'à 40% moins cher que Samsung Service.',
    url: 'https://www.repairninja.fr/blog/reparation-samsung-paris-pas-cher',
  },
}

const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Réparation Samsung Galaxy à Paris pas cher : tarifs, délais et garantie',
  description: 'Guide complet réparation Samsung à Paris. Tarifs par modèle, comparatif Samsung Service Center, pannes fréquentes.',
  author: { '@type': 'Organization', name: 'Repair Ninja Bastille', '@id': 'https://www.repairninja.fr/#organization' },
  publisher: { '@type': 'Organization', name: 'Repair Ninja Bastille', logo: { '@type': 'ImageObject', url: 'https://www.repairninja.fr/logo.png' } },
  datePublished: '2025-03-11',
  dateModified: '2025-03-11',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.repairninja.fr/blog/reparation-samsung-paris-pas-cher' },
  image: 'https://www.repairninja.fr/og-image.jpg',
  keywords: 'réparation Samsung Paris pas cher, réparation écran Samsung Galaxy Paris, remplacement écran Samsung Paris',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.repairninja.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.repairninja.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Réparation Samsung Paris pas cher', item: 'https://www.repairninja.fr/blog/reparation-samsung-paris-pas-cher' },
  ],
}

const tarifsSamsung = [
  { modele: 'Galaxy S24 Ultra', ecran: '229€', batterie: '89€', samsungService: '399€+' },
  { modele: 'Galaxy S24 / S24+', ecran: '199€', batterie: '79€', samsungService: '349€+' },
  { modele: 'Galaxy S23 Ultra', ecran: '209€', batterie: '89€', samsungService: '379€+' },
  { modele: 'Galaxy S23 / S23+', ecran: '189€', batterie: '79€', samsungService: '329€+' },
  { modele: 'Galaxy A54 / A53', ecran: '119€', batterie: '69€', samsungService: '199€+' },
  { modele: 'Galaxy A34 / A33', ecran: '99€', batterie: '59€', samsungService: '169€+' },
  { modele: 'Galaxy Z Fold 5/4', ecran: 'Sur devis', batterie: 'Sur devis', samsungService: '599€+' },
  { modele: 'Galaxy Z Flip 5/4', ecran: '249€', batterie: '89€', samsungService: '449€+' },
]

export default function SamsungPasChérArticle() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-gray-950 text-white py-10 sm:py-14 md:py-20 px-4">
        <div className="container-site mx-auto max-w-3xl">
          <nav className="text-gray-400 text-sm mb-6" aria-label="Fil d'Ariane">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Réparation Samsung Paris</span>
          </nav>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1 bg-green-500/20 border border-green-500/30
                             text-green-300 px-3 py-1 rounded-full text-xs font-semibold">
              🤖 Android · Samsung
            </span>
            <span className="text-gray-400 text-sm">6 min de lecture · Mars 2025</span>
          </div>
          <h1 className="text-white mb-5">
            Réparation Samsung Galaxy à Paris{' '}
            <span className="text-ninja-red">pas cher</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Tarifs 2025, pannes fréquentes et comparatif Samsung Service Center.
            Découvrez comment économiser jusqu&apos;à 40% sur la réparation de votre Samsung à Paris.
          </p>
        </div>
      </section>

      <article className="bg-white section-pad">
        <div className="container-site mx-auto max-w-3xl">

          <h2 className="text-gray-900 mb-5">Tarifs réparation Samsung Galaxy 2025</h2>

          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold rounded-tl-2xl">Modèle Samsung</th>
                  <th className="text-center px-4 py-3 font-semibold text-ninja-red">Écran 🥷</th>
                  <th className="text-center px-4 py-3 font-semibold text-ninja-red">Batterie 🥷</th>
                  <th className="text-center px-4 py-3 font-semibold text-gray-400 rounded-tr-2xl">Samsung Service</th>
                </tr>
              </thead>
              <tbody>
                {tarifsSamsung.map((row, i) => (
                  <tr key={row.modele} className={`border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                    <td className="px-4 py-3 font-medium text-gray-900 text-xs sm:text-sm">{row.modele}</td>
                    <td className="px-4 py-3 text-center font-bold text-ninja-red">{row.ecran}</td>
                    <td className="px-4 py-3 text-center font-bold text-ninja-red">{row.batterie}</td>
                    <td className="px-4 py-3 text-center text-gray-400 line-through text-xs">{row.samsungService}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mb-10">* Garantie 6 mois incluse. Diagnostic GRATUIT avant toute intervention.</p>

          <h2 className="text-gray-900 mt-10 mb-5">Les pannes Samsung les plus courantes à Paris</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              { icon: '🔲', panne: 'Écran AMOLED cassé', desc: 'La panne n°1. Les écrans AMOLED Samsung sont fragiles mais remplaçables en 20-30 min.', urgence: 'Urgent' },
              { icon: '🔋', panne: 'Batterie gonflée ou morte', desc: 'Une batterie qui gonfle est dangereuse. Apportez votre Samsung immédiatement.', urgence: 'Très urgent' },
              { icon: '⚡', panne: 'Connecteur USB-C HS', desc: 'Ne charge plus ou charge de façon intermittente. Réparation rapide en 30 min.', urgence: 'Normal' },
              { icon: '📷', panne: 'Caméra floue ou HS', desc: 'Module caméra cassé ou objectif endommagé après chute.', urgence: 'Normal' },
              { icon: '💧', panne: 'Dégât des eaux (IP68)', desc: 'L\'IP68 ne protège pas à 100%. Après contact prolongé avec l\'eau, amenez votre Samsung rapidement.', urgence: 'Urgent' },
              { icon: '📺', panne: 'Écran noir / clignotant', desc: 'Câble de connexion endommagé ou puce graphique défaillante. Diagnostic nécessaire.', urgence: 'À diagnostiquer' },
            ].map((item) => (
              <div key={item.panne} className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">{item.panne}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed mb-2">{item.desc}</p>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      item.urgence === 'Très urgent' ? 'bg-red-50 text-red-700' :
                      item.urgence === 'Urgent' ? 'bg-amber-50 text-amber-700' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {item.urgence}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-gray-900 mt-10 mb-5">
            Pourquoi choisir Repair Ninja plutôt que Samsung Service Center ?
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 rounded-tl-2xl">Critère</th>
                  <th className="text-center px-4 py-3 font-semibold text-ninja-red">Repair Ninja 🥷</th>
                  <th className="text-center px-4 py-3 font-semibold text-gray-500 rounded-tr-2xl">Samsung Service</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { c: 'Prix écran Galaxy S24', rn: '199€', ss: '349€+' },
                  { c: 'Délai de réparation', rn: '20–45 min', ss: '3–7 jours' },
                  { c: 'Rendez-vous', rn: 'Sans RDV', ss: 'RDV obligatoire' },
                  { c: 'Diagnostic', rn: 'GRATUIT', ss: 'Payant' },
                  { c: 'Garantie', rn: '6 mois', ss: '3 mois' },
                ].map((row, i) => (
                  <tr key={row.c} className={`border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                    <td className="px-4 py-3 text-gray-700 font-medium text-xs sm:text-sm">{row.c}</td>
                    <td className="px-4 py-3 text-center font-bold text-ninja-red text-xs sm:text-sm">{row.rn}</td>
                    <td className="px-4 py-3 text-center text-gray-400 text-xs sm:text-sm">{row.ss}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTA */}
          <div className="bg-gray-900 rounded-3xl p-6 sm:p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🥷</span>
              <h2 className="text-white">Réparez votre Samsung en 20 min à Bastille</h2>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              <strong className="text-white">7 Rue de la Cerisaie, 75004 Paris</strong> — Sans rendez-vous.
              🇫🇷 Réparateur français indépendant — toutes séries Galaxy prises en charge.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact-rendez-vous"
                    className="flex-1 flex items-center justify-center gap-2 bg-ninja-red text-white
                               font-bold px-6 py-3 rounded-full hover:bg-ninja-accent transition-colors">
                🗓 Devis Gratuit Samsung
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

      <section className="bg-gray-50 py-12 px-4 border-t border-gray-100">
        <div className="container-site mx-auto text-center">
          <h2 className="text-gray-900 mb-6">Tous nos services Android à Paris</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/reparation-smartphone-paris-4" className="btn-primary">📱 Smartphone Android Paris 4</Link>
            <Link href="/reparation-iphone-paris-bastille" className="btn-secondary">🍎 Aussi expert iPhone</Link>
            <Link href="/contact-rendez-vous" className="btn-secondary">🗓 Prendre RDV</Link>
          </div>
        </div>
      </section>

      <GoogleReviews />
      <MapSection />
    </>
  )
}
