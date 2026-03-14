// Rôle SEO : page achat-revente = rachat iPhone Samsung MacBook Paris
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Achat Revente Téléphone Paris — Vendez votre iPhone, Samsung | Repair Ninja',
  description:
    'Vendez votre téléphone, MacBook ou tablette au meilleur prix à Paris Bastille. Estimation gratuite, paiement cash immédiat. iPhone cassé, Samsung, MacBook acceptés.',
  alternates: { canonical: 'https://www.repairninja.fr/achat-revente' },
  openGraph: {
    title: 'Achat Revente Téléphone Paris — Repair Ninja Bastille',
    description: 'Estimation gratuite, paiement cash immédiat. iPhone, Samsung, MacBook achetés même cassés.',
    url: 'https://www.repairninja.fr/achat-revente',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Rachat de téléphones et appareils reconditionnés — Repair Ninja Bastille',
      description:
        "Repair Ninja Bastille rachète vos iPhones, Samsung, MacBook et tablettes même cassés. Estimation gratuite sur place, paiement cash immédiat. Appareils reconditionnés vendus avec garantie 6 mois.",
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
      areaServed: { '@type': 'City', name: 'Paris' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.repairninja.fr' },
        { '@type': 'ListItem', position: 2, name: 'Achat Revente', item: 'https://www.repairninja.fr/achat-revente' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Acceptez-vous les téléphones cassés ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui ! Nous rachetons les appareils même cassés — écran brisé, dégât des eaux, ne s'allume plus. Le prix varie selon l'état mais nous faisons toujours une proposition.",
          },
        },
        {
          '@type': 'Question',
          name: "Comment se passe l'estimation ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Apportez votre appareil en boutique, nos techniciens l\'évaluent en 5 minutes et vous font une offre. Aucune obligation d\'accepter.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quand est-ce que je suis payé ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Si vous acceptez notre offre, vous êtes payé cash sur place, immédiatement.',
          },
        },
      ],
    },
  ],
}

const APPAREILS = [
  {
    icon: '📱',
    nom: 'iPhone',
    exemples: ['iPhone 16, 15, 14, 13, 12', 'Tous états — même cassé'],
    badge: 'Forte demande',
    badgeColor: 'bg-green-100 text-green-700 border-green-200',
  },
  {
    icon: '🤖',
    nom: 'Samsung & Android',
    exemples: ['Galaxy S / A / Z Fold', 'Google Pixel, OnePlus, Xiaomi'],
    badge: 'Accepté',
    badgeColor: 'bg-blue-100 text-blue-700 border-blue-200',
  },
  {
    icon: '💻',
    nom: 'MacBook',
    exemples: ['MacBook Air M1/M2/M3', 'MacBook Pro Intel & Apple Silicon'],
    badge: 'Bonne côte',
    badgeColor: 'bg-purple-100 text-purple-700 border-purple-200',
  },
  {
    icon: '📟',
    nom: 'iPad & Tablettes',
    exemples: ['iPad Air, Mini, Pro', 'Samsung Galaxy Tab'],
    badge: 'Accepté',
    badgeColor: 'bg-blue-100 text-blue-700 border-blue-200',
  },
  {
    icon: '⌚',
    nom: 'Apple Watch',
    exemples: ['Series 6, 7, 8, 9, Ultra', 'Fonctionnel ou panne batterie'],
    badge: 'Accepté',
    badgeColor: 'bg-blue-100 text-blue-700 border-blue-200',
  },
  {
    icon: '🎮',
    nom: 'Consoles & Accessoires',
    exemples: ['AirPods, EarPods', 'Câbles, chargeurs Apple'],
    badge: 'Selon modèle',
    badgeColor: 'bg-gray-100 text-gray-600 border-gray-200',
  },
]

const ETATS = [
  { icon: '✅', label: 'Parfait état', desc: 'Écran intact, fonctionnel, avec accessoires', prix: 'Meilleur prix' },
  { icon: '🔲', label: 'Écran fissuré', desc: 'Tactile fonctionne, mais dalle abîmée', prix: 'Bon prix' },
  { icon: '💧', label: 'Dégât des eaux', desc: 'A été en contact avec l\'eau', prix: 'Prix réduit' },
  { icon: '🔴', label: 'Ne s\'allume plus', desc: 'Panne électronique ou batterie morte', prix: 'Sur évaluation' },
]

const ETAPES = [
  {
    num: '1',
    icon: '🛍️',
    title: 'Apportez votre appareil',
    desc: 'Venez avec votre téléphone, MacBook ou tablette — avec ou sans accessoires, quel que soit son état.',
  },
  {
    num: '2',
    icon: '🔍',
    title: 'Estimation gratuite en 5 min',
    desc: 'Nos techniciens évaluent votre appareil sur place. Prix transparent, aucune obligation d\'accepter.',
  },
  {
    num: '3',
    icon: '💶',
    title: 'Paiement cash immédiat',
    desc: 'Si l\'offre vous convient, vous repartez avec votre argent. Zéro attente, zéro paperasse.',
  },
]

export default function AchatRevente() {
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
              <span className="text-gray-300">Achat Revente</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="inline-flex items-center gap-1.5 bg-ninja-red/15 border border-ninja-red/30
                                   text-ninja-red text-xs font-bold px-3 py-1.5 rounded-full">
                    💶 Achat-Revente
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-green-500/15 border border-green-500/30
                                   text-green-400 text-xs font-bold px-3 py-1.5 rounded-full">
                    💵 Paiement cash immédiat
                  </span>
                  <span className="inline-flex items-center gap-1 bg-white/10 border border-white/15
                                   text-gray-300 text-xs font-semibold px-2.5 py-1.5 rounded-full">
                    🇫🇷 Réparateur français indépendant
                  </span>
                </div>

                <h1 className="text-white mb-5">
                  Vendez votre téléphone{' '}
                  <span className="text-ninja-red">au meilleur prix</span>
                </h1>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Repair Ninja Bastille rachète vos iPhones, Samsung, MacBook et tablettes —
                  même cassés. Estimation <strong className="text-white">100% gratuite</strong> en 5 minutes,
                  paiement <strong className="text-white">cash sur place</strong>.
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:+33750008410"
                    className="btn-primary"
                  >
                    📞 Estimer mon appareil
                  </a>
                  <Link href="/contact-rendez-vous" className="btn-secondary">
                    Prendre RDV →
                  </Link>
                </div>

                <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-white/10">
                  {[
                    { icon: '🏪', label: '7 Rue de la Cerisaie, Paris 4' },
                    { icon: '🕐', label: 'Lun–Sam 10h–19h' },
                    { icon: '⚡', label: 'Estimation en 5 min' },
                  ].map((item) => (
                    <span key={item.label} className="flex items-center gap-1.5 text-gray-400 text-sm">
                      <span>{item.icon}</span> {item.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats card */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: '500+', label: 'Appareils rachetés', icon: '📱' },
                  { val: '5 min', label: 'Estimation gratuite', icon: '⚡' },
                  { val: 'Cash', label: 'Paiement immédiat', icon: '💶' },
                  { val: '0€', label: 'Frais cachés', icon: '✅' },
                ].map((s) => (
                  <div key={s.label}
                       className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                    <div className="text-3xl mb-1">{s.icon}</div>
                    <div className="text-2xl font-extrabold text-ninja-red">{s.val}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ APPAREILS ACCEPTÉS ══════════════════════════════════════════════ */}
        <section className="section-pad bg-white">
          <div className="container-site mx-auto">
            <div className="text-center mb-10">
              <p className="section-label text-ninja-red">Ce qu'on rachète</p>
              <h2 className="text-ninja-dark">Appareils acceptés</h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto">
                Nous rachetons toutes les marques, tous les modèles — même en mauvais état.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {APPAREILS.map((a) => (
                <div key={a.nom}
                     className="border border-gray-200 rounded-2xl p-5 hover:border-ninja-red/40
                                hover:shadow-md transition-all bg-white">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{a.icon}</span>
                      <h3 className="font-bold text-ninja-dark text-base">{a.nom}</h3>
                    </div>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${a.badgeColor}`}>
                      {a.badge}
                    </span>
                  </div>
                  <ul className="space-y-1">
                    {a.exemples.map((e) => (
                      <li key={e} className="flex items-center gap-2 text-sm text-gray-500">
                        <span className="w-1 h-1 rounded-full bg-ninja-red flex-shrink-0" />
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ ÉTAT DE L'APPAREIL ══════════════════════════════════════════════ */}
        <section className="section-pad bg-gray-50">
          <div className="container-site mx-auto">
            <div className="text-center mb-10">
              <p className="section-label text-ninja-red">Peu importe l'état</p>
              <h2 className="text-ninja-dark">On rachète même les appareils cassés</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {ETATS.map((e) => (
                <div key={e.label}
                     className="bg-white border border-gray-200 rounded-2xl p-5 text-center hover:shadow-md transition-all">
                  <div className="text-4xl mb-3">{e.icon}</div>
                  <h3 className="font-bold text-ninja-dark mb-1 text-sm">{e.label}</h3>
                  <p className="text-gray-500 text-xs mb-3">{e.desc}</p>
                  <span className="inline-block bg-ninja-red/10 text-ninja-red text-xs font-bold
                                   px-3 py-1 rounded-full">
                    {e.prix}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-ninja-red/5 border border-ninja-red/20 rounded-2xl p-6 text-center max-w-2xl mx-auto">
              <p className="text-ninja-dark font-semibold mb-1">
                🎯 Pas sûr de la valeur de votre appareil ?
              </p>
              <p className="text-gray-600 text-sm mb-4">
                Apportez-le simplement — nos techniciens l'évaluent gratuitement en 5 minutes.
                Aucune obligation d'accepter notre offre.
              </p>
              <a href="tel:+33750008410"
                 className="inline-flex items-center gap-2 bg-ninja-red text-white font-bold
                            px-6 py-3 rounded-full hover:bg-ninja-accent transition-colors text-sm">
                📞 Appeler pour une estimation
              </a>
            </div>
          </div>
        </section>

        {/* ══ COMMENT ÇA MARCHE ══════════════════════════════════════════════ */}
        <section className="section-pad bg-white">
          <div className="container-site mx-auto">
            <div className="text-center mb-10">
              <p className="section-label text-ninja-red">Simple & rapide</p>
              <h2 className="text-ninja-dark">Comment ça marche ?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {ETAPES.map((e, i) => (
                <div key={e.num} className="relative text-center">
                  {i < ETAPES.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[40%] h-0.5 bg-gray-200" />
                  )}
                  <div className="w-16 h-16 bg-ninja-red/10 rounded-2xl flex items-center justify-center
                                  text-3xl mx-auto mb-4">
                    {e.icon}
                  </div>
                  <div className="w-7 h-7 bg-ninja-red rounded-full flex items-center justify-center
                                  text-white text-xs font-bold mx-auto mb-3">
                    {e.num}
                  </div>
                  <h3 className="font-bold text-ninja-dark mb-2 text-sm">{e.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ APPAREILS RECONDITIONNÉS ══════════════════════════════════════════════ */}
        <section className="section-pad bg-[#0f0f0f] text-white">
          <div className="container-site mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="section-label text-ninja-red mb-3">✨ On vend aussi</p>
                <h2 className="text-white mb-4">
                  Appareils reconditionnés{' '}
                  <span className="text-ninja-red">garantis 6 mois</span>
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Vous cherchez un iPhone ou Samsung reconditionné pas cher à Paris ?
                  Nos appareils sont testés, remis en état par nos techniciens et vendus
                  avec une garantie 6 mois pièces et main d'œuvre.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Contrôlés par nos techniciens certifiés',
                    'Batterie testée et remplacée si nécessaire',
                    'Garantie 6 mois pièces & main d\'œuvre',
                    'Facture officielle avec TVA',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-300 text-sm">
                      <span className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center
                                       text-green-400 text-xs flex-shrink-0 font-bold">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="tel:+33750008410"
                   className="btn-primary">
                  📞 Voir les disponibilités
                </a>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8">
                <h3 className="text-white font-bold text-lg mb-2">💡 Pourquoi reconditionné ?</h3>
                <p className="text-gray-400 text-sm mb-5">Un appareil reconditionné c'est :</p>
                <div className="space-y-3">
                  {[
                    { icon: '💰', title: '30 à 50% moins cher', desc: 'que le prix neuf' },
                    { icon: '🔧', title: 'Réparé & testé', desc: 'par des techniciens qualifiés' },
                    { icon: '🛡️', title: 'Garanti 6 mois', desc: 'pièces et main d\'œuvre' },
                    { icon: '🌱', title: 'Éco-responsable', desc: 'prolonger la vie des appareils' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3 bg-white/5 rounded-xl px-4 py-3">
                      <span className="text-xl flex-shrink-0">{item.icon}</span>
                      <div>
                        <p className="font-bold text-white text-sm">{item.title}</p>
                        <p className="text-gray-400 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ FAQ ══════════════════════════════════════════════ */}
        <section className="section-pad bg-white">
          <div className="container-site mx-auto max-w-2xl">
            <div className="text-center mb-10">
              <p className="section-label text-ninja-red">FAQ</p>
              <h2 className="text-ninja-dark">Questions fréquentes</h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: 'Faut-il prendre rendez-vous pour vendre son téléphone ?',
                  a: 'Non ! Vous pouvez venir directement en boutique du lundi au samedi de 10h à 19h. L\'estimation prend 5 minutes.',
                },
                {
                  q: 'Acceptez-vous les téléphones sans leur boîte ou accessoires ?',
                  a: 'Oui, la boîte et les accessoires ne sont pas obligatoires. Cependant, les avoir peut améliorer légèrement l\'estimation.',
                },
                {
                  q: 'Comment est calculé le prix de rachat ?',
                  a: 'Nous évaluons le modèle, l\'état cosmétique et fonctionnel de l\'appareil, et la demande actuelle sur le marché. Nous visons toujours le prix le plus juste.',
                },
                {
                  q: 'Rachetez-vous les iPhone avec iCloud activé ?',
                  a: 'Non, l\'iPhone doit être dissocié de votre compte iCloud avant la vente. Nos techniciens peuvent vous aider à le faire sur place si besoin.',
                },
                {
                  q: 'Peut-on déposer son appareil et revenir chercher l\'argent plus tard ?',
                  a: 'Le paiement se fait sur place, au moment de l\'accord. Nous ne proposons pas de dépôt différé.',
                },
              ].map(({ q, a }) => (
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
            <h2 className="text-white mb-4">Prêt à vendre votre appareil ?</h2>
            <p className="text-red-100 text-lg mb-8 max-w-xl mx-auto">
              Passez directement en boutique — pas besoin de rendez-vous.
              Estimation gratuite, paiement cash sur place.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+33750008410"
                 className="flex items-center gap-2 bg-white text-ninja-red font-bold
                            px-7 py-3.5 rounded-full hover:bg-gray-100 transition-colors">
                📞 07.50.00.84.10
              </a>
              <Link href="/contact-rendez-vous"
                    className="flex items-center gap-2 bg-white/15 border border-white/30 text-white
                               font-bold px-7 py-3.5 rounded-full hover:bg-white/25 transition-colors">
                📅 Prendre RDV
              </Link>
            </div>
            <p className="text-red-200 text-sm mt-6">
              📍 7 Rue de la Cerisaie, 75004 Paris • Lun–Sam 10h–19h
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
