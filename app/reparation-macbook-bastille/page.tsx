// Rôle SEO : cible "réparation MacBook Bastille" — niche haute valeur, faible concurrence locale
import type { Metadata } from 'next'
import Link from 'next/link'
import GoogleReviews from '@/components/GoogleReviews'
import MapSection from '@/components/MapSection'

export const metadata: Metadata = {
  title: 'Réparation MacBook Bastille Paris 4 — Écran, Batterie, Clavier | Repair Ninja',
  description:
    'MacBook cassé à Paris 4 ? Jusqu\'à 50% moins cher que l\'Apple Store. Nos ninjas réparent MacBook Air & Pro (M1/M2/M3) en express. Diagnostic GRATUIT ✓ Garantie 6 mois ✓ ☎ 07.50.00.84.10',
  alternates: { canonical: 'https://www.repairninja.fr/reparation-macbook-bastille' },
  openGraph: {
    title: 'Réparation MacBook Paris 4 Bastille — Repair Ninja | -50% vs Apple Store',
    description: 'MacBook Air/Pro réparés à Bastille. Diagnostic GRATUIT. Jusqu\'à 50% moins cher que l\'Apple Store.',
    url: 'https://www.repairninja.fr/reparation-macbook-bastille',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Réparation MacBook Bastille Paris 4',
  description: 'Réparation MacBook Air et Pro (tous modèles Intel et Apple Silicon M1/M2/M3) à Bastille Paris 4. Écran, batterie, clavier, carte mère, SSD. Jusqu\'à 50% moins cher que l\'Apple Store.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Repair Ninja Bastille',
    '@id': 'https://www.repairninja.fr/#localBusiness',
    address: { '@type': 'PostalAddress', streetAddress: '7 Rue de la Cerisaie', addressLocality: 'Paris', postalCode: '75004' },
    telephone: '+33750008410',
  },
  areaServed: { '@type': 'City', name: 'Paris', postalCode: '75004' },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    lowPrice: '89',
    highPrice: '599',
    offerCount: '6',
  },
  serviceType: 'Réparation MacBook',
  termsOfService: 'Garantie 6 mois pièces et main-d\'œuvre',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.repairninja.fr' },
    { '@type': 'ListItem', position: 2, name: 'Réparation MacBook Bastille', item: 'https://www.repairninja.fr/reparation-macbook-bastille' },
  ],
}

const macbookPannes = [
  { panne: 'Écran cassé / pixels morts', prix: 'À partir de 199€', icon: '🖥️' },
  { panne: 'Remplacement batterie', prix: 'À partir de 149€', icon: '🔋' },
  { panne: 'Clavier (touches, spill)', prix: 'À partir de 129€', icon: '⌨️' },
  { panne: 'Connecteur MagSafe / USB-C', prix: 'À partir de 89€', icon: '⚡' },
  { panne: 'SSD / RAM upgrade', prix: 'Sur devis', icon: '💾' },
  { panne: 'Carte mère / logique', prix: 'Sur devis', icon: '🔧' },
]

export default function MacBookPage() {
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
            <span className="text-white">Réparation MacBook Bastille</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-white mb-4">
              Réparation MacBook <span className="text-ninja-red">Bastille — Paris 4</span>
            </h1>
            <h2 className="text-xl font-semibold text-gray-300 mb-6">
              MacBook Air & Pro réparés • Diagnostic GRATUIT • Moins cher que l'Apple Store
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              MacBook qui ne s'allume plus, écran fissuré ou clavier défaillant ?
              <strong className="text-white"> Repair Ninja Bastille répare votre MacBook</strong> Air et Pro
              (Intel et Apple Silicon M1/M2/M3) au 7 Rue de la Cerisaie Paris 75004.
              Devis gratuit, jusqu'à 50% moins cher que l'Apple Store.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+33750008410" className="btn-primary py-4 px-8">📞 Diagnostic GRATUIT</a>
              <Link href="/contact-rendez-vous" className="btn-secondary py-4 px-8">🗓 RDV</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-site mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-ninja-dark">Pannes MacBook — <span className="text-ninja-red">Tarifs</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {macbookPannes.map((item) => (
              <div key={item.panne} className="card-service">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-ninja-dark mb-2">{item.panne}</h3>
                <p className="text-ninja-red font-bold">{item.prix}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">
            * Modèles MacBook Air M1/M2/M3, MacBook Pro 13/14/16 po, MacBook Pro Intel tous pris en charge.
          </p>
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
            <Link href="/reparation-tablette-paris-11" className="btn-secondary">📟 Tablette</Link>
          </div>
        </div>
      </section>
    </>
  )
}
