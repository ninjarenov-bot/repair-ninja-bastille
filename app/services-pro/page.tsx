// Rôle SEO : page B2B + achat-revente = cible professionnels Paris + longue traîne locale
import type { Metadata } from 'next'
import Link from 'next/link'
import GoogleReviews from '@/components/GoogleReviews'
import MapSection from '@/components/MapSection'

export const metadata: Metadata = {
  title: 'Services Pro & B2B Paris — Réparation Entreprises & Achat-Revente | Repair Ninja Bastille',
  description:
    'Repair Ninja Bastille accompagne les professionnels et entreprises : réparation en volume, contrats B2B, achat de téléphones et ordinateurs d\'occasion, revente reconditionnée. Paris 4. ☎ 07.50.00.84.10',
  alternates: { canonical: 'https://www.repairninja.fr/services-pro' },
  openGraph: {
    title: 'Services Pro B2B & Achat-Revente | Repair Ninja Bastille Paris',
    description: 'Contrats entreprises, réparation en volume, achat de matériel d\'occasion. Partenaire télécom de confiance à Paris.',
    url: 'https://www.repairninja.fr/services-pro',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Services Professionnels B2B & Achat-Revente Repair Ninja Bastille',
  description: 'Réparation en volume pour entreprises, achat de téléphones et ordinateurs d\'occasion, reconditionnement et revente. Paris 4 Bastille.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Repair Ninja Bastille',
    '@id': 'https://www.repairninja.fr/#localBusiness',
    address: { '@type': 'PostalAddress', streetAddress: '7 Rue de la Cerisaie', addressLocality: 'Paris', postalCode: '75004' },
    telephone: '+33750008410',
  },
  areaServed: { '@type': 'City', name: 'Paris', postalCode: '75004' },
  serviceType: ['Réparation B2B', 'Achat téléphone occasion', 'Reconditionnement smartphone'],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.repairninja.fr' },
    { '@type': 'ListItem', position: 2, name: 'Services Pro & B2B', item: 'https://www.repairninja.fr/services-pro' },
  ],
}

const servicesPro = [
  {
    icon: '🏢',
    title: 'Contrats entreprises & B2B',
    desc: 'Vous gérez un parc de smartphones ou d\'ordinateurs ? Nous proposons des contrats de maintenance adaptés aux PME, startups et grandes entreprises parisiennes.',
    details: [
      'Interventions sur site ou en boutique',
      'Tarifs préférentiels à partir de 5 appareils',
      'Priorité de traitement — délais garantis',
      'Facturation mensuelle ou à la demande',
      'Compte entreprise dédié avec historique des réparations',
    ],
    cta: 'Demander un devis B2B',
    color: 'from-blue-950 to-slate-900',
  },
  {
    icon: '🔄',
    title: 'Achat de téléphones & ordinateurs d\'occasion',
    desc: 'Vous souhaitez vendre votre ancien iPhone, Samsung, MacBook ou iPad ? Nous rachetons vos appareils en bon état comme endommagés, dans les 24h.',
    details: [
      'Estimation immédiate et gratuite en boutique',
      'Paiement cash ou virement le jour même',
      'Toutes marques : Apple, Samsung, Huawei, Xiaomi...',
      'Appareils cassés ou en panne acceptés',
      'Rachat en volume pour les professionnels',
    ],
    cta: 'Estimer mon appareil',
    color: 'from-green-950 to-slate-900',
  },
  {
    icon: '✨',
    title: 'Revente d\'appareils reconditionnés',
    desc: 'Cherchez-vous un iPhone ou un MacBook reconditionné à bon prix ? Nos appareils reconditionnés sont testés, réparés et garantis 6 mois.',
    details: [
      'iPhone reconditionnés (11 à 15) à partir de 249€',
      'MacBook Air/Pro reconditionnés à partir de 499€',
      'Samsung Galaxy reconditionnés à partir de 199€',
      'Tous les appareils testés et certifiés par nos ninjas',
      'Garantie 6 mois pièces et main-d\'œuvre',
    ],
    cta: 'Voir les appareils disponibles',
    color: 'from-purple-950 to-slate-900',
  },
  {
    icon: '📦',
    title: 'Gestion de flotte mobile & IT',
    desc: 'Externalisez la gestion de votre parc informatique mobile. De la réparation à la revente en passant par la remise à niveau, nous gérons tout.',
    details: [
      'Audit de votre parc mobile existant',
      'Remise à niveau et mise à jour des appareils',
      'Remplacement d\'appareils défaillants sous 24h',
      'Rapport mensuel sur l\'état de votre flotte',
      'Conseil sur le renouvellement du parc',
    ],
    cta: 'Nous contacter',
    color: 'from-orange-950 to-slate-900',
  },
]

const temoignagesPro = [
  {
    avatar: 'A',
    nom: 'Alexandre P.',
    poste: 'DSI — Cabinet d\'avocats Paris 4',
    texte: 'Repair Ninja gère notre parc de 23 iPhones depuis 18 mois. Interventions rapides, facturation mensuelle propre. Je recommande sans hésiter.',
    color: 'bg-blue-600',
  },
  {
    avatar: 'M',
    nom: 'Marie-Claire D.',
    poste: 'Office Manager — Startup Marais',
    texte: 'Nous avons revendu 8 anciens MacBook et iPhones. Estimation honnête, paiement immédiat. Service impeccable.',
    color: 'bg-green-600',
  },
  {
    avatar: 'J',
    nom: 'Julien R.',
    poste: 'Gérant — Restaurant Paris 11',
    texte: 'Nos iPad de caisse tombent régulièrement. Repair Ninja les répare en 30 min. Indispensable pour notre activité.',
    color: 'bg-purple-600',
  },
]

export default function ServicesProPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-ninja-dark via-ninja-gray to-black text-white
                          py-10 sm:py-14 md:py-24 px-4">
        <div className="container-site mx-auto">
          <nav className="text-gray-400 text-sm mb-6" aria-label="Fil d'Ariane">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Services Pro & B2B</span>
          </nav>
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 bg-ninja-red/20 border border-ninja-red/30
                              text-ninja-red px-4 py-1.5 rounded-full text-sm font-semibold">
                🏢 Professionnels & Entreprises
              </div>
              <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15
                              text-white px-3 py-1.5 rounded-full text-xs font-semibold">
                🇫🇷 Entreprise française indépendante
              </div>
            </div>
            <h1 className="text-white mb-5">
              Services Pro, B2B &{' '}
              <span className="text-ninja-red">Achat‑Revente</span>
            </h1>
            <h2 className="text-xl font-semibold text-gray-300 mb-6">
              Réparation en volume • Rachat d&apos;appareils • Reconditionnement • Gestion de flotte
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8 max-w-2xl">
              Repair Ninja Bastille accompagne les professionnels et entreprises parisiens depuis leur
              création. Contrats sur mesure, délais garantis, facturation claire — nos ninjas s&apos;occupent
              de tout au <strong className="text-white">7 Rue de la Cerisaie, Paris 75004</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+33750008410" className="btn-primary py-4 px-8">📞 Appeler pour un devis Pro</a>
              <Link href="/contact-rendez-vous" className="btn-secondary py-4 px-8">📧 Contact B2B</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CHIFFRES CLÉ ══════════════════════════════════════════════════════ */}
      <section className="border-t border-b border-gray-100 py-8 px-4 bg-gray-50">
        <div className="container-site mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { v: '50+', l: 'entreprises clientes', c: 'text-ninja-red' },
              { v: '24h', l: 'délai intervention pro', c: 'text-ninja-dark' },
              { v: '500+', l: 'appareils rachetés', c: 'text-ninja-dark' },
              { v: '0€', l: 'estimation rachat', c: 'text-ninja-dark' },
            ].map((s) => (
              <div key={s.v}>
                <div className={`text-3xl md:text-4xl font-extrabold ${s.c}`}>{s.v}</div>
                <div className="text-sm text-gray-500 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SERVICES PRO ═════════════════════════════════════════════════════ */}
      <section className="section-pad bg-white">
        <div className="container-site mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Nos offres professionnelles</p>
            <h2 className="text-gray-900">
              4 services <span className="text-ninja-red">sur mesure</span> pour les pros
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicesPro.map((service) => (
              <div key={service.title}
                   className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden
                              hover:shadow-lg transition-all duration-300">
                {/* Header coloré */}
                <div className={`bg-gradient-to-br ${service.color} px-6 py-5 flex items-center gap-4`}>
                  <span className="text-4xl">{service.icon}</span>
                  <h3 className="text-white font-bold text-lg leading-snug">{service.title}</h3>
                </div>
                {/* Corps */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{service.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {service.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="w-4 h-4 bg-ninja-red/10 rounded-full flex items-center justify-center
                                         text-ninja-red text-xs flex-shrink-0 mt-0.5">✓</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                  <a href="tel:+33750008410"
                     className="inline-flex items-center gap-2 btn-secondary text-sm w-full justify-center">
                    📞 {service.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ACHAT-REVENTE SECTION ════════════════════════════════════════════ */}
      <section className="section-pad bg-gray-50">
        <div className="container-site mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-3">Achat & revente</p>
              <h2 className="text-gray-900 mb-5">
                Vous avez un appareil à vendre ?{' '}
                <span className="text-ninja-red">Nous l&apos;achetons.</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Que votre iPhone soit en parfait état ou cassé, que votre MacBook soit obsolète
                ou défaillant — nos ninjas estiment votre appareil gratuitement en boutique et
                vous proposent un rachat immédiat au meilleur prix.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: '📱', title: 'iPhones (tous modèles)', detail: 'Du SE au 15 Pro Max — état cassé ou fonctionnel' },
                  { icon: '🤖', title: 'Samsung, Huawei, Xiaomi', detail: 'Tous modèles Galaxy, Mate, Redmi' },
                  { icon: '💻', title: 'MacBook Air & Pro', detail: 'Intel et Apple Silicon — tous états acceptés' },
                  { icon: '📟', title: 'iPad & tablettes Android', detail: 'Toutes générations iPad, Galaxy Tab' },
                ].map((item) => (
                  <div key={item.title} className="flex items-center gap-4 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{item.title}</p>
                      <p className="text-gray-500 text-xs">{item.detail}</p>
                    </div>
                    <span className="ml-auto text-xs font-semibold text-green-700 bg-green-50
                                     px-2 py-1 rounded-full border border-green-100 whitespace-nowrap">
                      ✓ Accepté
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:+33750008410" className="btn-primary">📞 Estimer mon appareil</a>
                <Link href="/contact-rendez-vous" className="btn-secondary">🗓 RDV Évaluation Gratuite</Link>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-gray-100 shadow-md p-6 sm:p-8">
              <h3 className="font-bold text-gray-900 text-xl mb-2">
                💶 Comment fonctionne le rachat ?
              </h3>
              <p className="text-gray-500 text-sm mb-6">Simple, rapide, sans engagement.</p>
              <div className="space-y-5">
                {[
                  { n: '1', title: 'Apportez votre appareil', desc: 'Au 7 Rue de la Cerisaie — sans rendez-vous, du lun au sam 10h-19h.' },
                  { n: '2', title: 'Diagnostic et estimation GRATUITS', desc: 'Nos ninjas évaluent l\'état de votre appareil en 10 min et vous proposent un prix.' },
                  { n: '3', title: 'Acceptation et paiement immédiat', desc: 'Si vous acceptez l\'offre, nous payons en cash ou par virement le jour même.' },
                ].map((step) => (
                  <div key={step.n} className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-ninja-red rounded-full flex items-center justify-center
                                    text-white font-bold text-sm flex-shrink-0">
                      {step.n}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{step.title}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-ninja-red/5 border border-ninja-red/10 rounded-2xl p-4">
                <p className="text-ninja-red text-xs font-semibold mb-1">💡 Bon à savoir</p>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Les appareils achetés sont reconditionnés et revendus avec garantie 6 mois.
                  Notre engagement : 100% des appareils sont testés et remis en état avant revente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TÉMOIGNAGES PROS ═════════════════════════════════════════════════ */}
      <section className="section-pad bg-white">
        <div className="container-site mx-auto">
          <div className="text-center mb-10">
            <p className="section-label mb-3">Ils nous font confiance</p>
            <h2 className="text-gray-900">
              Ce que disent nos{' '}
              <span className="text-ninja-red">clients professionnels</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {temoignagesPro.map((t) => (
              <div key={t.nom}
                   className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-11 h-11 ${t.color} text-white rounded-full flex items-center
                                   justify-center font-bold text-lg flex-shrink-0`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{t.nom}</p>
                    <p className="text-xs text-gray-400">{t.poste}</p>
                  </div>
                  <div className="ml-auto text-amber-400 text-sm">★★★★★</div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic">
                  &ldquo;{t.texte}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA B2B FINAL ════════════════════════════════════════════════════ */}
      <section className="bg-gray-900 text-white section-pad">
        <div className="container-site mx-auto text-center">
          <p className="section-label text-ninja-red mb-3">Parlons de votre projet</p>
          <h2 className="text-white mb-4">
            Un devis Pro en moins de 24h. 🥷
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Que vous ayez 5 ou 500 appareils, nos ninjas s&apos;adaptent à vos besoins.
            <span className="block mt-2 text-sm">
              🇫🇷 Entreprise française indépendante · 7 Rue de la Cerisaie, Paris 75004
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+33750008410"
               className="flex items-center justify-center gap-2 bg-white text-gray-900
                          font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors">
              📞 07.50.00.84.10
            </a>
            <Link href="/contact-rendez-vous"
               className="flex items-center justify-center gap-2 bg-ninja-red text-white
                          font-bold px-8 py-4 rounded-full hover:bg-ninja-accent transition-colors">
              📧 Envoyer un message
            </Link>
          </div>
        </div>
      </section>

      <GoogleReviews />
      <MapSection />
    </>
  )
}
