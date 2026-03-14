// Rôle SEO : page pilier iPhone avec mots-clés locaux denses + Schema Service = top résultats Paris 4
import type { Metadata } from 'next'
import Link from 'next/link'
import GoogleReviews from '@/components/GoogleReviews'
import MapSection from '@/components/MapSection'

export const metadata: Metadata = {
  title: 'Réparation iPhone Bastille Paris 4 — Écran, Batterie, Charge | Repair Ninja',
  description:
    'Réparation iPhone à Bastille Paris 4 en 20 min. Écran cassé, batterie faible, connecteur charge, Face ID. Toutes générations iPhone 6 à 15 Pro Max. Diagnostic GRATUIT • Garantie 6 mois. ☎ 07.50.00.84.10',
  alternates: { canonical: 'https://www.repairninja.fr/reparation-iphone-paris-bastille' },
  openGraph: {
    title: 'Réparation iPhone Bastille — Écran, Batterie, Charge | Repair Ninja',
    description: 'iPhone cassé à Paris 4 ? Réparé en 20 min à Bastille. Diagnostic GRATUIT.',
    url: 'https://www.repairninja.fr/reparation-iphone-paris-bastille',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.repairninja.fr' },
    { '@type': 'ListItem', position: 2, name: 'Réparation iPhone Bastille', item: 'https://www.repairninja.fr/reparation-iphone-paris-bastille' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Réparation iPhone Bastille Paris 4',
  description: 'Réparation express iPhone toutes pannes à Bastille, Paris 4ème. Écran, batterie, charge, caméra.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Repair Ninja Bastille',
    address: { '@type': 'PostalAddress', streetAddress: '7 Rue de la Cerisaie', addressLocality: 'Paris', postalCode: '75004' },
    telephone: '+33750008410',
  },
  areaServed: { '@type': 'City', name: 'Paris', postalCode: '75004' },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    lowPrice: '49',
    highPrice: '299',
    offerCount: '12',
  },
}

const iPhonePannes = [
  { panne: 'Écran cassé / fissuré', prix: 'À partir de 79€', delai: '20 min', icon: '📱' },
  { panne: 'Remplacement batterie', prix: 'À partir de 59€', delai: '20 min', icon: '🔋' },
  { panne: 'Connecteur de charge', prix: 'À partir de 69€', delai: '30 min', icon: '⚡' },
  { panne: 'Caméra arrière/avant', prix: 'À partir de 89€', delai: '45 min', icon: '📷' },
  { panne: 'Face ID / Touch ID', prix: 'Sur devis', delai: '1h', icon: '🔓' },
  { panne: 'Boutons (home, volume)', prix: 'À partir de 49€', delai: '30 min', icon: '🔘' },
  { panne: 'Haut-parleur / Micro', prix: 'À partir de 59€', delai: '30 min', icon: '🔊' },
  { panne: 'Dégât des eaux', prix: 'Sur devis', delai: '2-24h', icon: '💧' },
]

const iPhoneModels = [
  'iPhone 15 / 15 Pro / 15 Pro Max',
  'iPhone 14 / 14 Pro / 14 Pro Max',
  'iPhone 13 / 13 Pro / 13 Pro Max',
  'iPhone 12 / 12 Pro / 12 Pro Max',
  'iPhone 11 / 11 Pro / 11 Pro Max',
  'iPhone XS / XS Max / XR / X',
  'iPhone SE (1ère, 2ème, 3ème gen)',
  'iPhone 8 / 8 Plus / 7 / 7 Plus',
]

export default function ReparationIPhonePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── HERO clair — style CalFix ───────────────────────────────────────── */}
      <section className="bg-gray-950 text-white py-10 sm:py-14 md:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950/30" />
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-ninja-red/6 to-transparent" />
        <div className="container-site mx-auto relative z-10">
          {/* Breadcrumb SEO */}
          <nav className="text-gray-400 text-sm mb-6" aria-label="Fil d'Ariane">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Réparation iPhone Bastille</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-ninja-red/15 border border-ninja-red/25
                            text-ninja-red px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-ninja-red rounded-full animate-pulse" />
              Spécialiste iPhone — Paris 4 Bastille
            </div>

            <h1 className="text-white mb-4">
              Réparation iPhone Bastille —{' '}
              <span className="text-ninja-red">Écran, Batterie, Charge</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-300 mb-6">
              Réparation iPhone Paris 4 — 20 min • Garantie 6 mois
            </h2>

            <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-2xl">
              Votre <strong className="text-white">iPhone cassé à Bastille</strong> ? Repair Ninja répare
              tous les modèles iPhone en express au cœur de Paris 4ème. Écran fissuré, batterie qui lâche,
              connecteur de charge défaillant — nos techniciens certifiés interviennent{' '}
              <strong className="text-white">en 20 minutes</strong> avec une garantie 6 mois sur
              toutes les pièces et la main-d'œuvre.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <a href="https://g.page/repairninja-bastille" target="_blank" rel="noopener noreferrer"
                 className="badge-trust-white hover:bg-white/20 transition-colors">
                <span className="text-amber-400">⭐</span> <strong>4,9/5</strong> — 650+ avis
              </a>
              <span className="badge-trust-white">⚡ 20 min chrono</span>
              <span className="badge-trust-white">🔬 Diagnostic GRATUIT</span>
              <span className="badge-trust-white">🛡️ Garantie 6 mois</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact-rendez-vous"
                    className="flex items-center justify-center gap-2 bg-white text-gray-900
                               font-bold text-base px-8 py-4 rounded-full hover:bg-gray-100 transition-all">
                PRENDRE RDV GRATUIT
                <span className="w-7 h-7 bg-ninja-red rounded-full flex items-center justify-center text-white text-sm">→</span>
              </Link>
              <a href="tel:+33750008410"
                 className="flex items-center justify-center gap-2 border-2 border-white/30
                            text-white font-bold text-base px-8 py-4 rounded-full
                            hover:bg-white/10 transition-all">
                📞 07.50.00.84.10
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── PANNES & PRIX ──────────────────────────────────────────────────── */}
      <section className="section-pad bg-white" id="pannes">
        <div className="container-site mx-auto">
          <div className="text-center mb-10">
            <p className="text-ninja-red font-semibold uppercase tracking-widest text-sm mb-2">
              Pannes & tarifs
            </p>
            <h2 className="text-ninja-dark">
              Réparations iPhone — <span className="text-ninja-red">Prix transparents</span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Tous nos prix incluent pièces de qualité OEM + main-d'œuvre + garantie 6 mois.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {iPhonePannes.map((item) => (
              <div key={item.panne}
                   className="bg-ninja-light rounded-2xl p-5 border border-gray-100
                              hover:border-ninja-red hover:shadow-md transition-all">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-ninja-dark text-base mb-2">{item.panne}</h3>
                <div className="flex items-center justify-between text-sm mt-3">
                  <span className="font-bold text-ninja-red">{item.prix}</span>
                  <span className="text-gray-400 flex items-center gap-1">
                    ⏱ {item.delai}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-gray-400 mt-6">
            * Prix indicatifs selon le modèle d'iPhone. Devis précis après diagnostic gratuit.
          </p>
        </div>
      </section>

      {/* ── MODÈLES COMPATIBLES ────────────────────────────────────────────── */}
      <section className="section-pad bg-ninja-light" id="modeles">
        <div className="container-site mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-ninja-red font-semibold uppercase tracking-widest text-sm mb-2">
                Compatibilité
              </p>
              <h2 className="text-ninja-dark">
                Tous les modèles iPhone <span className="text-ninja-red">réparés</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {iPhoneModels.map((model) => (
                <div key={model}
                     className="bg-white rounded-xl p-3 flex items-center gap-3
                                shadow-sm border border-gray-100">
                  <span className="text-ninja-red font-bold text-lg">✓</span>
                  <span className="text-ninja-dark font-medium text-sm">{model}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEXTE SEO 500+ MOTS ────────────────────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="container-site mx-auto max-w-3xl">
          <h2 className="text-ninja-dark mb-6">
            Votre spécialiste réparation iPhone à <span className="text-ninja-red">Bastille, Paris 4</span>
          </h2>

          <div className="prose prose-gray max-w-none space-y-5 text-gray-600 leading-relaxed">
            <p>
              Repair Ninja Bastille est <strong>le réparateur iPhone de référence à Paris 4ème</strong>,
              situé au 7 Rue de la Cerisaie, à seulement 2 minutes à pied de la station de métro Bastille
              (lignes 1, 5 et 8). Notre atelier de réparation iPhone accueille les habitants du 4ème
              arrondissement, du Marais, de Paris 11, de Bercy et des quartiers voisins.
            </p>

            <p>
              <strong>Réparation écran iPhone à Bastille</strong> : Un écran fissuré ou cassé ne doit pas
              vous immobiliser. Nos techniciens certifiés remplacent votre écran iPhone en{' '}
              <strong>20 minutes seulement</strong>, avec des dalles OLED de qualité OEM pour garantir
              une restitution des couleurs identique à l'original. Nous proposons des réparations d'écran
              pour tous les iPhone, de l'iPhone 8 au dernier iPhone 15 Pro Max.
            </p>

            <p>
              <strong>Remplacement batterie iPhone Paris 4</strong> : Votre batterie ne tient plus la
              journée ? Une batterie dégradée peut ralentir votre iPhone via le mode de gestion de
              performance d'Apple. Nous remplaçons les batteries iPhone par des cellules de haute
              capacité garantissant une autonomie retrouvée à 100%. Service rapide, propre, sans perte
              de données.
            </p>

            <p>
              <strong>Réparation connecteur de charge iPhone Bastille</strong> : Le port Lightning ou
              USB-C de votre iPhone est bouché ou défaillant ? Nos techniciens nettoient ou remplacent
              le connecteur de charge en 30 minutes. Fini les problèmes de synchronisation et de
              recharge lente.
            </p>

            <h3 className="text-ninja-dark font-bold text-xl">
              Pourquoi choisir Repair Ninja Bastille pour votre iPhone ?
            </h3>

            <ul className="space-y-2 list-none pl-0">
              {[
                'Diagnostic iPhone 100% gratuit et sans engagement',
                'Réparations express en 20 à 45 minutes sur place',
                'Pièces certifiées OEM ou qualité supérieure',
                'Garantie 6 mois sur toutes les réparations',
                'Techniciens formés et certifiés Apple',
                'Note 4,9/5 sur Google avec plus de 650 avis vérifiés',
                'Situé à 2 min de la station Bastille (lignes 1, 5, 8)',
                'Ouvert du lundi au samedi, 10h à 19h',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-ninja-red font-bold mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-ninja-dark font-bold text-xl">
              Témoignages clients — Réparation iPhone Paris 4
            </h3>

            <blockquote className="bg-ninja-light rounded-xl px-6 py-4 border-l-4 border-ninja-red italic">
              &ldquo;Mon iPhone 14 Pro a l&apos;écran complètement fissuré après une chute. En moins de
              25 minutes chez Repair Ninja Bastille, il était comme neuf. Le technicien m&apos;a expliqué
              tout ce qu&apos;il faisait. Je recommande à 200% !&rdquo;
              <footer className="mt-2 text-sm not-italic font-semibold text-ninja-dark">
                — Alexandre K., habitant du Marais ⭐⭐⭐⭐⭐
              </footer>
            </blockquote>

            <p>
              Situé au cœur du 4ème arrondissement de Paris, Repair Ninja Bastille dessert également les
              quartiers de <strong>Paris 11</strong> (Oberkampf, Ledru-Rollin), le <strong>Marais</strong>{' '}
              (75003), <strong>Bercy</strong> (75012) et <strong>Nation</strong>. Notre emplacement
              stratégique à deux pas de Bastille en fait le point de dépôt idéal pour tous les parisiens
              du centre-est.
            </p>
          </div>
        </div>
      </section>

      {/* ── AVIS ───────────────────────────────────────────────────────────── */}
      <GoogleReviews />

      {/* ── SERVICES LIÉS ──────────────────────────────────────────────────── */}
      <section className="section-pad bg-ninja-light">
        <div className="container-site mx-auto text-center">
          <h2 className="text-ninja-dark mb-8">Autres réparations disponibles à Bastille</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/reparation-smartphone-paris-4" className="btn-secondary">📱 Smartphone Android</Link>
            <Link href="/reparation-macbook-bastille" className="btn-secondary">💻 MacBook</Link>
            <Link href="/reparation-tablette-paris-11" className="btn-secondary">📟 Tablette iPad</Link>
          </div>
        </div>
      </section>

      {/* ── MAP ────────────────────────────────────────────────────────────── */}
      <MapSection />
    </>
  )
}
