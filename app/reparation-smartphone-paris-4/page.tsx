// Rôle SEO : page ciblant "réparation smartphone Paris 4" + marques Android = longue traîne locale
import type { Metadata } from 'next'
import Link from 'next/link'
import GoogleReviews from '@/components/GoogleReviews'
import MapSection from '@/components/MapSection'

export const metadata: Metadata = {
  title: 'Réparation Smartphone Paris 4 Bastille — Samsung, Huawei, Xiaomi | Repair Ninja',
  description:
    'Samsung Galaxy cassé ? Xiaomi qui ne s\'allume plus ? Nos ninjas réparent votre smartphone Android en 20 min à Paris 4 Bastille. Diagnostic GRATUIT ✓ Garantie 6 mois ✓ Sans RDV. ☎ 07.50.00.84.10',
  alternates: { canonical: 'https://www.repairninja.fr/reparation-smartphone-paris-4' },
  openGraph: {
    title: 'Réparation Smartphone Android Paris 4 Bastille — Repair Ninja',
    description: 'Samsung, Huawei, Xiaomi réparés en 20 min. Diagnostic GRATUIT. 7 Rue de la Cerisaie, Paris 4.',
    url: 'https://www.repairninja.fr/reparation-smartphone-paris-4',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Réparation Smartphone Android Paris 4 Bastille',
  description: 'Réparation express de smartphones Android (Samsung, Huawei, Xiaomi, OnePlus, Google Pixel) à Bastille Paris 4. Écran, batterie, connecteur charge, dégât des eaux.',
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
    lowPrice: '49',
    highPrice: '249',
    offerCount: '10',
  },
  serviceType: 'Réparation Smartphone Android',
  termsOfService: 'Garantie 6 mois pièces et main-d\'œuvre',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.repairninja.fr' },
    { '@type': 'ListItem', position: 2, name: 'Réparation Smartphone Paris 4', item: 'https://www.repairninja.fr/reparation-smartphone-paris-4' },
  ],
}

const brands = [
  { name: 'Samsung', models: ['Galaxy S24/S23/S22', 'Galaxy A53/A54/A34', 'Galaxy Z Fold/Flip'], icon: '📱' },
  { name: 'Huawei', models: ['P60 Pro, P50, P40', 'Mate 50/40/30', 'Nova, Y-Series'], icon: '📱' },
  { name: 'Xiaomi', models: ['Xiaomi 14/13/12', 'Redmi Note 12/13', 'POCO X5/F5'], icon: '📱' },
  { name: 'OnePlus', models: ['OnePlus 12/11/10', 'Nord CE 3/2'], icon: '📱' },
  { name: 'Google Pixel', models: ['Pixel 8/8 Pro', 'Pixel 7/7a', 'Pixel 6'], icon: '📱' },
  { name: 'Sony Xperia', models: ['Xperia 1 V/IV', 'Xperia 5/10'], icon: '📱' },
]

export default function SmartphonePage() {
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
            <span className="text-white">Réparation Smartphone Paris 4</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-white mb-4">
              Réparation Smartphone <span className="text-ninja-red">Paris 4 — Bastille</span>
            </h1>
            <h2 className="text-xl font-semibold text-gray-300 mb-6">
              Samsung, Huawei, Xiaomi réparés en 20 min • Diagnostic GRATUIT • Garantie 6 mois
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Votre <strong className="text-white">smartphone Android cassé à Paris 4</strong> ?
              Repair Ninja Bastille répare toutes les marques Android au 7 Rue de la Cerisaie.
              Écran brisé, batterie morte, connecteur de charge — nos experts interviennent en
              20 à 45 minutes avec une garantie 6 mois.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+33750008410" className="btn-primary py-4 px-8">📞 Appeler</a>
              <Link href="/contact-rendez-vous" className="btn-secondary py-4 px-8">🗓 RDV Gratuit</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Marques */}
      <section className="section-pad bg-white">
        <div className="container-site mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-ninja-dark">Toutes les marques <span className="text-ninja-red">Android</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {brands.map((brand) => (
              <div key={brand.name} className="card-service">
                <h3 className="font-bold text-ninja-dark text-lg mb-3">{brand.icon} {brand.name}</h3>
                <ul className="space-y-1 list-none p-0 m-0">
                  {brand.models.map((model) => (
                    <li key={model} className="text-sm text-gray-500 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-ninja-red rounded-full flex-shrink-0" />
                      {model}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoogleReviews />
      <MapSection />

      <section className="bg-white section-pad">
        <div className="container-site mx-auto text-center">
          <h2 className="text-ninja-dark mb-6">Autres services</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/reparation-iphone-paris-bastille" className="btn-secondary">🍎 iPhone</Link>
            <Link href="/reparation-macbook-bastille" className="btn-secondary">💻 MacBook</Link>
            <Link href="/reparation-tablette-paris-11" className="btn-secondary">📟 Tablette</Link>
          </div>
        </div>
      </section>
    </>
  )
}
