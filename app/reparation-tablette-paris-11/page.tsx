// Rôle SEO : cible "réparation tablette Paris 11" + iPad = longue traîne géolocalisée
import type { Metadata } from 'next'
import Link from 'next/link'
import GoogleReviews from '@/components/GoogleReviews'
import MapSection from '@/components/MapSection'

export const metadata: Metadata = {
  title: 'Réparation Tablette Paris 11 Bastille — iPad, Samsung Tab | Repair Ninja',
  description:
    'Écran de tablette cassé à Paris 11 ou Bastille ? iPad, Samsung Galaxy Tab réparés par nos ninjas. Diagnostic GRATUIT ✓ Garantie 6 mois ✓ 5 min du 11ème. ☎ 07.50.00.84.10',
  alternates: { canonical: 'https://www.repairninja.fr/reparation-tablette-paris-11' },
  openGraph: {
    title: 'Réparation Tablette iPad & Android Paris 11 Bastille — Repair Ninja',
    description: 'iPad et Samsung Tab réparés à Bastille, à 5 min du 11ème. Diagnostic GRATUIT.',
    url: 'https://www.repairninja.fr/reparation-tablette-paris-11',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Réparation Tablette iPad & Android Paris 11 Bastille',
  description: 'Réparation tablettes iPad (Air, Pro, mini, standard), Samsung Galaxy Tab, Huawei MatePad à Bastille. Écran, batterie, connecteur.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Repair Ninja Bastille',
    '@id': 'https://www.repairninja.fr/#localBusiness',
    address: { '@type': 'PostalAddress', streetAddress: '7 Rue de la Cerisaie', addressLocality: 'Paris', postalCode: '75004' },
    telephone: '+33750008410',
  },
  areaServed: [
    { '@type': 'City', name: 'Paris 4ème', postalCode: '75004' },
    { '@type': 'City', name: 'Paris 11ème', postalCode: '75011' },
  ],
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    lowPrice: '69',
    highPrice: '349',
    offerCount: '8',
  },
  serviceType: 'Réparation Tablette',
  termsOfService: 'Garantie 6 mois pièces et main-d\'œuvre',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.repairninja.fr' },
    { '@type': 'ListItem', position: 2, name: 'Réparation Tablette Paris 11', item: 'https://www.repairninja.fr/reparation-tablette-paris-11' },
  ],
}

const tablettes = [
  { name: 'iPad Air / iPad Pro', detail: 'Toutes générations, écran OLED et Liquid Retina' },
  { name: 'iPad mini', detail: 'iPad mini 4, 5, 6 — écran et batterie' },
  { name: 'iPad standard', detail: 'iPad 8, 9, 10ème génération' },
  { name: 'Samsung Galaxy Tab', detail: 'Tab S8/S9, Tab A8, Tab S6 Lite' },
  { name: 'Huawei MatePad', detail: 'MatePad Pro, MatePad 11' },
  { name: 'Amazon Fire', detail: 'Fire HD 8/10, Fire 7' },
]

export default function TabletPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="bg-gradient-to-br from-ninja-dark via-ninja-gray to-black text-white
                          py-10 sm:py-14 md:py-24 px-4">
        <div className="container-site mx-auto">
          <nav className="text-gray-400 text-sm mb-6" aria-label="Fil d'Ariane">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Réparation Tablette Paris 11</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-white mb-4">
              Réparation Tablette <span className="text-ninja-red">Paris 11 — Bastille</span>
            </h1>
            <h2 className="text-xl font-semibold text-gray-300 mb-6">
              iPad, Samsung Tab, Huawei — Diagnostic GRATUIT • Garantie 6 mois
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Écran de tablette brisé ou batterie qui ne tient plus ? Repair Ninja Bastille,
              situé au <strong className="text-white">7 Rue de la Cerisaie Paris 75004</strong> (à 5 min
              du 11ème arrondissement), répare toutes vos tablettes iPad et Android avec les meilleures
              pièces du marché.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+33750008410" className="btn-primary py-4 px-8">📞 Appeler</a>
              <Link href="/contact-rendez-vous" className="btn-secondary py-4 px-8">🗓 RDV Gratuit</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-site mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-ninja-dark">Tablettes <span className="text-ninja-red">compatibles</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tablettes.map((t) => (
              <div key={t.name} className="bg-ninja-light rounded-2xl p-5 border border-gray-100
                                          hover:border-ninja-red transition-colors">
                <h3 className="font-bold text-ninja-dark mb-2 text-lg">📟 {t.name}</h3>
                <p className="text-gray-500 text-sm">{t.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoogleReviews />
      <MapSection />

      <section className="bg-white section-pad">
        <div className="container-site mx-auto text-center">
          <h2 className="text-ninja-dark mb-6">Autres réparations</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/reparation-iphone-paris-bastille" className="btn-secondary">🍎 iPhone</Link>
            <Link href="/reparation-smartphone-paris-4" className="btn-secondary">📱 Smartphone</Link>
            <Link href="/reparation-macbook-bastille" className="btn-secondary">💻 MacBook</Link>
          </div>
        </div>
      </section>
    </>
  )
}
