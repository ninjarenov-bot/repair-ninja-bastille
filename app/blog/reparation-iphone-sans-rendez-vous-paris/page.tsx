// Rôle SEO : "réparation iPhone sans rendez-vous Paris" = intent local urgent
import type { Metadata } from 'next'
import Link from 'next/link'
import GoogleReviews from '@/components/GoogleReviews'
import MapSection from '@/components/MapSection'

export const metadata: Metadata = {
  title: 'Réparation iPhone Sans Rendez-vous à Paris — Bastille | Repair Ninja',
  description:
    'iPhone cassé à Paris ? Venez directement sans RDV au 7 Rue de la Cerisaie, Paris 4. Ouvert lun-sam 10h-19h. Réparation express en 20 min. Diagnostic GRATUIT ✓ Garantie 6 mois.',
  alternates: { canonical: 'https://www.repairninja.fr/blog/reparation-iphone-sans-rendez-vous-paris' },
  openGraph: {
    title: 'Réparation iPhone Sans RDV Paris Bastille — Repair Ninja',
    description: 'Venez directement sans rendez-vous. Repair Ninja Bastille vous accueille lun-sam 10h-19h.',
    url: 'https://www.repairninja.fr/blog/reparation-iphone-sans-rendez-vous-paris',
  },
}

const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Réparation iPhone sans rendez-vous à Paris : venez directement chez Repair Ninja Bastille',
  description: 'Guide complet sur la réparation iPhone sans rendez-vous à Paris. Horaires, délais, types de pannes et accès depuis les quartiers proches.',
  author: { '@type': 'Organization', name: 'Repair Ninja Bastille', '@id': 'https://www.repairninja.fr/#organization' },
  publisher: { '@type': 'Organization', name: 'Repair Ninja Bastille', logo: { '@type': 'ImageObject', url: 'https://www.repairninja.fr/logo.png' } },
  datePublished: '2025-03-11',
  dateModified: '2025-03-11',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.repairninja.fr/blog/reparation-iphone-sans-rendez-vous-paris' },
  image: 'https://www.repairninja.fr/og-image.jpg',
  keywords: 'réparation iPhone sans rendez-vous Paris, réparer iPhone sans RDV, réparateur iPhone ouvert accès direct Bastille',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.repairninja.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.repairninja.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Réparation iPhone sans rendez-vous Paris', item: 'https://www.repairninja.fr/blog/reparation-iphone-sans-rendez-vous-paris' },
  ],
}

const pannesExpress = [
  { icon: '🔲', label: 'Écran cassé', duree: '20 min', dispo: true },
  { icon: '🔋', label: 'Batterie déchargée / HS', duree: '20 min', dispo: true },
  { icon: '⚡', label: 'Connecteur de charge', duree: '30 min', dispo: true },
  { icon: '📷', label: 'Appareil photo', duree: '30–45 min', dispo: true },
  { icon: '🔊', label: 'Haut-parleur / Micro', duree: '30 min', dispo: true },
  { icon: '💧', label: 'Dégât des eaux', duree: 'Devis sur place', dispo: true },
  { icon: '🔧', label: 'Carte mère / Face ID', duree: 'Sur devis', dispo: false },
]

export default function SansRdvArticle() {
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
            <span className="text-white">iPhone sans rendez-vous</span>
          </nav>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1 bg-green-500/20 border border-green-500/30
                             text-green-300 px-3 py-1 rounded-full text-xs font-semibold">
              ✅ Sans RDV · Paris
            </span>
            <span className="text-gray-400 text-sm">5 min de lecture · Mis à jour mars 2025</span>
          </div>
          <h1 className="text-white mb-5">
            Réparation iPhone{' '}
            <span className="text-ninja-red">sans rendez-vous</span>{' '}
            à Paris
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Votre iPhone vient de tomber et vous n&apos;avez pas le temps d&apos;attendre ?
            Repair Ninja Bastille vous accueille <strong className="text-white">sans rendez-vous</strong>,
            du lundi au samedi, de 10h à 19h — diagnostic gratuit, réparation en 20 minutes.
          </p>
        </div>
      </section>

      <article className="bg-white section-pad">
        <div className="container-site mx-auto max-w-3xl">

          {/* Horaires */}
          <div className="bg-green-50 border border-green-100 rounded-2xl p-6 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🕐</span>
              <h2 className="text-green-800 text-xl font-bold">Horaires d&apos;ouverture — Sans rendez-vous</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { jour: 'Lundi – Vendredi', horaire: '10h00 – 19h00', ouvert: true },
                { jour: 'Samedi', horaire: '10h00 – 19h00', ouvert: true },
                { jour: 'Dimanche', horaire: 'Fermé', ouvert: false },
              ].map((h) => (
                <div key={h.jour}
                     className={`flex items-center justify-between rounded-xl px-4 py-3
                                  ${h.ouvert ? 'bg-white border border-green-100' : 'bg-gray-50 border border-gray-100'}`}>
                  <span className="font-medium text-gray-900 text-sm">{h.jour}</span>
                  <span className={`text-sm font-bold ${h.ouvert ? 'text-green-700' : 'text-gray-400'}`}>
                    {h.horaire}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-green-700 text-xs mt-3 flex items-center gap-1.5">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Repair Ninja Bastille — 7 Rue de la Cerisaie, 75004 Paris
            </p>
          </div>

          <h2 className="text-gray-900 mt-10 mb-5">Quelles réparations iPhone sont possibles sans RDV ?</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            La grande majorité des pannes courantes sont traitées immédiatement sur place,
            sans attente. Voici le tableau des réparations express disponibles :
          </p>

          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold rounded-tl-2xl">Type de panne</th>
                  <th className="text-center px-4 py-3 font-semibold">Durée</th>
                  <th className="text-center px-4 py-3 font-semibold rounded-tr-2xl">Sans RDV</th>
                </tr>
              </thead>
              <tbody>
                {pannesExpress.map((p, i) => (
                  <tr key={p.label} className={`border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                    <td className="px-4 py-3 font-medium text-gray-900">
                      {p.icon} {p.label}
                    </td>
                    <td className="px-4 py-3 text-center text-gray-600">{p.duree}</td>
                    <td className="px-4 py-3 text-center">
                      {p.dispo
                        ? <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 px-2 py-0.5 rounded-full text-xs font-semibold border border-green-100">✅ Oui</span>
                        : <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full text-xs font-semibold border border-amber-100">⚠️ Sur devis</span>
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-gray-900 mt-10 mb-5">Comment se déroule une visite sans rendez-vous ?</h2>
          <div className="space-y-4 mb-10">
            {[
              { n: '01', icon: '🚶', title: 'Vous arrivez directement au 7 Rue de la Cerisaie', desc: 'Pas de formulaire, pas d\'attente en ligne. Nos ninjas vous accueillent immédiatement.' },
              { n: '02', icon: '🔬', title: 'Diagnostic express en 5 minutes — GRATUIT', desc: 'Nos techniciens examinent votre iPhone et vous remettent un devis clair et transparent.' },
              { n: '03', icon: '⚡', title: 'Réparation en 20 à 45 minutes', desc: 'Vous pouvez rester en boutique ou faire un tour dans le quartier et revenir.' },
              { n: '04', icon: '🛡️', title: 'Test complet et garantie 6 mois', desc: 'Avant restitution, votre iPhone est testé sous toutes ses fonctions. Garantie 6 mois incluse.' },
            ].map((step) => (
              <div key={step.n} className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100">
                <div className="w-10 h-10 bg-ninja-red rounded-full flex items-center justify-center
                                text-white font-bold text-sm flex-shrink-0">
                  {step.n}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base mb-1">
                    {step.icon} {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-gray-900 mt-10 mb-5">Préférez-vous réserver un créneau ?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Si vous souhaitez être certain de n&apos;avoir aucune attente, vous pouvez réserver
            un créneau gratuit en ligne sur notre page de prise de rendez-vous. Le formulaire
            prend moins de 2 minutes.
          </p>
          <Link href="/contact-rendez-vous"
                className="inline-flex items-center gap-2 btn-secondary mb-10">
            🗓 Réserver un créneau gratuit en ligne →
          </Link>

          <h2 className="text-gray-900 mt-10 mb-5">Comment nous trouver depuis votre quartier ?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              { quartier: '📍 Bastille / Paris 4', acces: 'Métro lignes 1, 5, 8 — station Bastille. 2 minutes à pied.' },
              { quartier: '🗺️ Le Marais (Paris 3)', acces: '8 minutes à pied via la Rue Saint-Antoine.' },
              { quartier: '🛤️ Paris 11 (Oberkampf)', acces: 'Métro ligne 5 → Bastille. 3 stations.' },
              { quartier: '🚇 Nation / Bercy (Paris 12)', acces: 'Métro ligne 1 ou ligne 8 → Bastille. 2 stations.' },
              { quartier: '🌊 Saint-Germain-des-Prés (Paris 6)', acces: 'Bus 86 ou 87. 15 minutes.' },
              { quartier: '🏙️ République (Paris 10)', acces: 'Métro ligne 8 → Bastille. 3 stations.' },
            ].map((q) => (
              <div key={q.quartier} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="font-semibold text-gray-900 text-sm mb-1">{q.quartier}</p>
                <p className="text-gray-500 text-xs">{q.acces}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gray-900 rounded-3xl p-6 sm:p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🥷</span>
              <h2 className="text-white">Venez directement — Nos ninjas vous attendent</h2>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              <strong className="text-white">7 Rue de la Cerisaie, 75004 Paris</strong> — Lun-Sam 10h–19h.
              Sans rendez-vous, diagnostic GRATUIT. 🇫🇷 Réparateur français indépendant.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:+33750008410"
                 className="flex-1 flex items-center justify-center gap-2 bg-ninja-red text-white
                            font-bold px-6 py-3 rounded-full hover:bg-ninja-accent transition-colors">
                📞 Appeler maintenant
              </a>
              <Link href="/contact-rendez-vous"
                    className="flex-1 flex items-center justify-center gap-2 bg-white text-gray-900
                               font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors">
                🗓 Réserver un créneau
              </Link>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-gray-50 py-12 px-4 border-t border-gray-100">
        <div className="container-site mx-auto text-center">
          <h2 className="text-gray-900 mb-6">Nos réparations à Paris</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/reparation-iphone-paris-bastille" className="btn-primary">🍎 iPhone Bastille</Link>
            <Link href="/reparation-smartphone-paris-4" className="btn-secondary">📱 Android Paris 4</Link>
            <Link href="/quartiers-bastille-paris" className="btn-secondary">📍 Quartiers desservis</Link>
          </div>
        </div>
      </section>

      <GoogleReviews />
      <MapSection />
    </>
  )
}
