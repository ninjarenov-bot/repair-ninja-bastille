// Rôle SEO : programme fidélité = argument de rétention + différenciation vs chaînes
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Programme Fidélité — -30% sur votre 2e réparation | Repair Ninja Bastille',
  description:
    'Profitez de -30% sur votre 2e réparation chez Repair Ninja Bastille. Programme de fidélité gratuit, sans inscription, pour tous nos clients à Paris 4.',
  alternates: { canonical: 'https://www.repairninja.fr/fidelite' },
  openGraph: {
    title: 'Programme Fidélité Repair Ninja — -30% sur votre 2e réparation',
    description: '-30% sur votre 2e réparation. Programme gratuit, sans engagement, pour tous nos clients.',
    url: 'https://www.repairninja.fr/fidelite',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LoyaltyProgram',
      name: 'Programme Fidélité Repair Ninja Bastille',
      description: '-30% sur la 2e réparation et avantages exclusifs pour les clients fidèles.',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Repair Ninja Bastille',
        telephone: '+33750008410',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '7 Rue de la Cerisaie',
          addressLocality: 'Paris',
          postalCode: '75004',
        },
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.repairninja.fr' },
        { '@type': 'ListItem', position: 2, name: 'Programme Fidélité', item: 'https://www.repairninja.fr/fidelite' },
      ],
    },
  ],
}

const NIVEAUX = [
  {
    icon: '🥷',
    nom: 'Ninja Débutant',
    condition: '1re réparation',
    avantages: [
      'Diagnostic 100% gratuit',
      'Devis immédiat sans engagement',
      'Garantie 6 mois pièces & main d\'œuvre',
    ],
    color: 'border-gray-200 bg-white',
    badge: 'bg-gray-100 text-gray-600',
  },
  {
    icon: '⚔️',
    nom: 'Ninja Confirmé',
    condition: '2e réparation',
    avantages: [
      '-30% sur cette réparation',
      'Priorité en boutique',
      'Garantie 6 mois pièces & main d\'œuvre',
    ],
    color: 'border-ninja-red/40 bg-ninja-red/5',
    badge: 'bg-ninja-red text-white',
    highlight: true,
  },
  {
    icon: '🏆',
    nom: 'Ninja Expert',
    condition: '3e réparation et +',
    avantages: [
      '-30% à chaque réparation',
      'Accès prioritaire sans attente',
      'Tarifs préférentiels sur pièces',
    ],
    color: 'border-amber-300/60 bg-amber-50',
    badge: 'bg-amber-500 text-white',
  },
]

const FAQ = [
  {
    q: 'Comment fonctionne la carte de fidélité ?',
    a: 'Demandez simplement votre carte en boutique lors de votre première visite. À chaque réparation, votre ninja tamponn votre carte. À partir de la 2e réparation, vous bénéficiez automatiquement de -30%.',
  },
  {
    q: 'La remise de -30% s\'applique sur quoi exactement ?',
    a: 'Elle s\'applique sur le montant total de la réparation (pièce + main d\'œuvre), pour tout type de réparation et tout appareil.',
  },
  {
    q: 'La carte est-elle nominative ?',
    a: 'Non, la carte n\'est pas nominative. Vous pouvez même la prêter à un ami ou un membre de votre famille pour qu\'il profite de votre avantage fidélité.',
  },
  {
    q: 'Y a-t-il une date d\'expiration ?',
    a: 'Non, votre carte et vos tampons sont valables sans limite de temps.',
  },
  {
    q: 'Peut-on cumuler la remise fidélité avec une autre promotion ?',
    a: 'Les remises ne sont pas cumulables entre elles. La remise la plus avantageuse pour vous sera automatiquement appliquée.',
  },
]

export default function Fidelite() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />

      <main>
        {/* ══ HERO ══════════════════════════════════════════════ */}
        <section className="section-pad bg-[#0f0f0f] text-white">
          <div className="container-site mx-auto">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-8" aria-label="Fil d'Ariane">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-300">Programme Fidélité</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="inline-flex items-center gap-1.5 bg-ninja-red/15 border border-ninja-red/30
                                   text-ninja-red text-xs font-bold px-3 py-1.5 rounded-full">
                    🏆 Programme Fidélité
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-green-500/15 border border-green-500/30
                                   text-green-400 text-xs font-bold px-3 py-1.5 rounded-full">
                    ✅ Gratuit & sans inscription
                  </span>
                </div>

                <h1 className="text-white mb-4">
                  Revenez, on vous{' '}
                  <span className="text-ninja-red">récompense</span>
                </h1>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Dès votre <strong className="text-white">2e réparation</strong>, profitez de{' '}
                  <strong className="text-ninja-red text-2xl">-30%</strong>{' '}
                  sur la totalité de votre réparation. Carte gratuite en boutique, sans inscription en ligne.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link href="/contact-rendez-vous" className="btn-primary">
                    📅 Prendre RDV
                  </Link>
                  <a href="tel:+33750008410" className="btn-secondary">
                    📞 Nous appeler
                  </a>
                </div>
              </div>

              {/* Carte de fidélité visuelle */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-sm">
                  {/* Carte principale */}
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10
                                  rounded-3xl p-6 shadow-2xl">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <p className="text-white font-extrabold text-xl">Repair<span className="text-ninja-red">Ninja</span></p>
                        <p className="text-gray-400 text-xs">Bastille • Paris 4</p>
                      </div>
                      <span className="text-4xl">🥷</span>
                    </div>

                    <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">Carte de Fidélité</p>
                    <p className="text-white font-bold text-lg mb-6">
                      À partir de la <span className="text-ninja-red">2e réparation</span>
                    </p>

                    {/* Tampons */}
                    <div className="grid grid-cols-5 gap-2 mb-6">
                      {[true, false, false, false, false].map((filled, i) => (
                        <div key={i}
                             className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-lg
                             ${filled
                               ? 'bg-ninja-red border-ninja-red text-white'
                               : 'border-white/20 text-white/20'
                             }`}>
                          {filled ? '🥷' : '○'}
                        </div>
                      ))}
                    </div>

                    <div className="bg-ninja-red/15 border border-ninja-red/30 rounded-2xl px-4 py-3 text-center">
                      <p className="text-ninja-red font-extrabold text-2xl">-30%</p>
                      <p className="text-gray-400 text-xs">dès le 2e tampon</p>
                    </div>
                  </div>

                  {/* Badge flottant */}
                  <div className="absolute -top-3 -right-3 bg-ninja-red text-white
                                  text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    Gratuit en boutique
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ NIVEAUX ══════════════════════════════════════════════ */}
        <section className="section-pad bg-white">
          <div className="container-site mx-auto">
            <div className="text-center mb-10">
              <p className="section-label text-ninja-red">Les niveaux</p>
              <h2 className="text-ninja-dark">Plus vous revenez, plus vous économisez</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {NIVEAUX.map((n) => (
                <div key={n.nom}
                     className={`border-2 rounded-3xl p-6 relative ${n.color} ${n.highlight ? 'shadow-lg scale-105' : ''} transition-all`}>
                  {n.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-ninja-red text-white
                                    text-xs font-bold px-4 py-1 rounded-full">
                      ⭐ Le plus populaire
                    </div>
                  )}
                  <div className="text-4xl mb-3">{n.icon}</div>
                  <div className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${n.badge}`}>
                    {n.condition}
                  </div>
                  <h3 className="font-extrabold text-ninja-dark text-lg mb-4">{n.nom}</h3>
                  <ul className="space-y-2">
                    {n.avantages.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-green-500 font-bold flex-shrink-0 mt-0.5">✓</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ COMMENT ÇA MARCHE ══════════════════════════════════════════════ */}
        <section className="section-pad bg-gray-50">
          <div className="container-site mx-auto">
            <div className="text-center mb-10">
              <p className="section-label text-ninja-red">Ultra simple</p>
              <h2 className="text-ninja-dark">Comment ça marche ?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { num: '1', icon: '🛍️', title: 'Venez en boutique', desc: 'Pour votre première réparation, demandez votre carte fidélité gratuite.' },
                { num: '2', icon: '🥷', title: 'On tamponle votre carte', desc: 'À chaque réparation, votre ninja tamponle votre carte sur place.' },
                { num: '3', icon: '🔄', title: 'Revenez', desc: 'Dès votre 2e visite, présentez votre carte tamponée.' },
                { num: '4', icon: '💰', title: '-30% automatique', desc: 'La remise est appliquée immédiatement sur votre réparation.' },
              ].map((e, i) => (
                <div key={e.num} className="text-center relative">
                  {i < 3 && (
                    <div className="hidden md:block absolute top-8 left-[65%] w-[35%] h-0.5 bg-gray-200" />
                  )}
                  <div className="w-16 h-16 bg-ninja-red/10 rounded-2xl flex items-center justify-center
                                  text-3xl mx-auto mb-3">
                    {e.icon}
                  </div>
                  <div className="w-7 h-7 bg-ninja-red rounded-full flex items-center justify-center
                                  text-white text-xs font-bold mx-auto mb-3">
                    {e.num}
                  </div>
                  <h3 className="font-bold text-ninja-dark text-sm mb-1">{e.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ AVANTAGES VS CONCURRENTS ══════════════════════════════════════════════ */}
        <section className="section-pad bg-white">
          <div className="container-site mx-auto max-w-3xl">
            <div className="text-center mb-10">
              <p className="section-label text-ninja-red">Pourquoi Repair Ninja ?</p>
              <h2 className="text-ninja-dark">Un réparateur qui vous connaît</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="py-3 text-left text-gray-500 font-semibold"></th>
                    <th className="py-3 text-center">
                      <span className="inline-flex items-center gap-1 bg-ninja-red text-white
                                       px-3 py-1 rounded-full text-xs font-bold">
                        🥷 Repair Ninja
                      </span>
                    </th>
                    <th className="py-3 text-center text-gray-400 text-xs">Grande chaîne</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { label: 'Programme fidélité', ninja: '-30% dès la 2e répa', chain: '❌ Aucun' },
                    { label: 'Diagnostic', ninja: '✅ Gratuit', chain: 'Souvent payant' },
                    { label: 'Garantie réparation', ninja: '✅ 6 mois', chain: '1 à 3 mois' },
                    { label: 'Technicien dédié', ninja: '✅ Toujours le même', chain: 'Rotation des équipes' },
                    { label: 'Pièces qualité', ninja: '✅ Sélectionnées', chain: 'Variable selon stock' },
                    { label: 'Suivi personnalisé', ninja: '✅ On vous connaît', chain: 'Numéro de ticket' },
                  ].map((row) => (
                    <tr key={row.label}>
                      <td className="py-3 text-gray-700 font-medium">{row.label}</td>
                      <td className="py-3 text-center text-ninja-red font-semibold text-sm">{row.ninja}</td>
                      <td className="py-3 text-center text-gray-400 text-xs">{row.chain}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ══ FAQ ══════════════════════════════════════════════ */}
        <section className="section-pad bg-gray-50">
          <div className="container-site mx-auto max-w-2xl">
            <div className="text-center mb-10">
              <p className="section-label text-ninja-red">FAQ</p>
              <h2 className="text-ninja-dark">Questions fréquentes</h2>
            </div>

            <div className="space-y-3">
              {FAQ.map(({ q, a }) => (
                <details key={q}
                         className="group border border-gray-200 rounded-2xl overflow-hidden">
                  <summary
                    className="flex items-center justify-between px-5 py-4 bg-white cursor-pointer
                               hover:bg-gray-50 transition-colors font-semibold text-ninja-dark text-sm"
                  >
                    {q}
                    <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-3"
                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 bg-white border-t border-gray-100">
                    <p className="text-gray-600 text-sm leading-relaxed pt-3">{a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CTA FINAL ══════════════════════════════════════════════ */}
        <section className="section-pad bg-ninja-red text-white text-center">
          <div className="container-site mx-auto">
            <div className="text-6xl mb-4">🥷</div>
            <h2 className="text-white mb-3">Commencez à accumuler vos avantages</h2>
            <p className="text-red-100 text-lg mb-8 max-w-lg mx-auto">
              Venez en boutique et repartez avec votre carte fidélité — c'est gratuit, sans inscription, sans engagement.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact-rendez-vous"
                    className="flex items-center gap-2 bg-white text-ninja-red font-bold
                               px-7 py-3.5 rounded-full hover:bg-gray-100 transition-colors">
                📅 Réserver un créneau
              </Link>
              <a href="tel:+33750008410"
                 className="flex items-center gap-2 bg-white/15 border border-white/30 text-white
                            font-bold px-7 py-3.5 rounded-full hover:bg-white/25 transition-colors">
                📞 07.50.00.84.10
              </a>
            </div>
            <p className="text-red-200 text-sm mt-6">
              📍 7 Rue de la Cerisaie, 75004 Paris • Lun–Sam 10h–19h • Carte disponible en boutique
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
