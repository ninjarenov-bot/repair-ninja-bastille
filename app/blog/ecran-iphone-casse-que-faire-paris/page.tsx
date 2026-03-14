// Rôle SEO : article longue traîne "écran iPhone cassé que faire" = intent informationnel → transactionnel
import type { Metadata } from 'next'
import Link from 'next/link'
import GoogleReviews from '@/components/GoogleReviews'
import MapSection from '@/components/MapSection'

export const metadata: Metadata = {
  title: 'Écran iPhone Cassé : Que Faire ? Guide Complet 2025 | Repair Ninja Paris',
  description:
    'Écran iPhone fissuré ou cassé ? Ne paniquez pas. Guide pratique : protéger votre iPhone en urgence, évaluer les dégâts, choisir la meilleure solution. Réparation à Paris 4 en 20 min. Diagnostic GRATUIT.',
  alternates: { canonical: 'https://www.repairninja.fr/blog/ecran-iphone-casse-que-faire-paris' },
  openGraph: {
    title: 'Écran iPhone Cassé : Que Faire ? Guide 2025 | Repair Ninja Paris Bastille',
    description: 'Fissure, écran noir, tactile mort — guide d\'urgence complet. Réparation iPhone en 20 min à Paris 4.',
    url: 'https://www.repairninja.fr/blog/ecran-iphone-casse-que-faire-paris',
  },
}

const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Écran iPhone cassé : que faire ? Les bons réflexes et la meilleure solution à Paris',
  description: 'Guide complet pour gérer un écran iPhone cassé à Paris : réflexes d\'urgence, évaluation des dégâts, solutions et tarifs.',
  author: { '@type': 'Organization', name: 'Repair Ninja Bastille', '@id': 'https://www.repairninja.fr/#organization' },
  publisher: { '@type': 'Organization', name: 'Repair Ninja Bastille', logo: { '@type': 'ImageObject', url: 'https://www.repairninja.fr/logo.png' } },
  datePublished: '2025-03-11',
  dateModified: '2025-03-11',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.repairninja.fr/blog/ecran-iphone-casse-que-faire-paris' },
  image: 'https://www.repairninja.fr/og-image.jpg',
  keywords: 'écran iPhone cassé que faire, iPhone écran fissuré, réparation écran iPhone Paris, écran iPhone brisé solution',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.repairninja.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.repairninja.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Écran iPhone cassé que faire', item: 'https://www.repairninja.fr/blog/ecran-iphone-casse-que-faire-paris' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Que faire quand l\'écran de son iPhone est cassé ?', acceptedAnswer: { '@type': 'Answer', text: 'Protégez d\'abord l\'écran avec du ruban adhésif ou un film de protection temporaire. Sauvegardez vos données sur iCloud immédiatement. Évitez d\'appuyer sur l\'écran fissuré qui peut blesser. Apportez votre iPhone chez un réparateur comme Repair Ninja Bastille pour un diagnostic gratuit.' } },
    { '@type': 'Question', name: 'Combien coûte la réparation d\'un écran iPhone cassé ?', acceptedAnswer: { '@type': 'Answer', text: 'Le prix varie selon le modèle : de 79€ pour un iPhone SE à 299€ pour un iPhone 15 Pro Max. Chez Repair Ninja Bastille, le diagnostic est gratuit et la réparation est réalisée en 20 minutes avec une garantie 6 mois.' } },
    { '@type': 'Question', name: 'Peut-on utiliser un iPhone avec l\'écran cassé ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui mais c\'est risqué. Les fragments de verre peuvent blesser. L\'humidité s\'infiltre par les fissures et endommage les composants internes. Plus vous attendez, plus la réparation peut devenir coûteuse.' } },
    { '@type': 'Question', name: 'L\'assurance téléphone couvre-t-elle les écrans cassés ?', acceptedAnswer: { '@type': 'Answer', text: 'Cela dépend de votre assurance. Beaucoup de contrats couvrent la casse accidentelle mais avec une franchise. Dans tous les cas, un devis chez Repair Ninja Bastille est gratuit et sans engagement, vous permettant de comparer avec votre franchise d\'assurance.' } },
  ],
}

export default function EcranCasseArticle() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="bg-gray-950 text-white py-10 sm:py-14 md:py-20 px-4">
        <div className="container-site mx-auto max-w-3xl">
          <nav className="text-gray-400 text-sm mb-6" aria-label="Fil d'Ariane">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Écran iPhone cassé</span>
          </nav>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1 bg-blue-500/20 border border-blue-500/30
                             text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">
              📱 iPhone
            </span>
            <span className="text-gray-400 text-sm">7 min de lecture · Mis à jour mars 2025</span>
          </div>
          <h1 className="text-white mb-5">
            Écran iPhone cassé :{' '}
            <span className="text-ninja-red">que faire ?</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            La chute fatale. Votre iPhone vient de tomber et l&apos;écran est fissuré, mort, ou le tactile
            ne répond plus. Ne paniquez pas — voici les bons réflexes à adopter et la meilleure
            solution pour le réparer rapidement à Paris.
          </p>
        </div>
      </section>

      {/* ══ CORPS ════════════════════════════════════════════════════════════ */}
      <article className="bg-white section-pad">
        <div className="container-site mx-auto max-w-3xl">

          {/* CTA URGENCE */}
          <div className="bg-ninja-red/5 border-l-4 border-ninja-red rounded-r-2xl p-5 mb-10 flex flex-col sm:flex-row
                          items-start sm:items-center gap-4">
            <div className="text-3xl">🚨</div>
            <div className="flex-1">
              <p className="font-bold text-ninja-dark mb-1">Besoin d&apos;une réparation express ?</p>
              <p className="text-sm text-gray-600">
                Repair Ninja Bastille — <strong>7 Rue de la Cerisaie, Paris 4</strong>.
                Diagnostic GRATUIT, réparation en 20 min, sans RDV.
              </p>
            </div>
            <Link href="/contact-rendez-vous" className="btn-primary text-sm whitespace-nowrap flex-shrink-0">
              RDV Gratuit →
            </Link>
          </div>

          {/* Section 1 */}
          <h2 className="text-gray-900 mt-10 mb-5">
            Première urgence : les réflexes dans les 5 premières minutes
          </h2>

          <h3 className="text-gray-800 mt-6 mb-3">1. Protéger l&apos;écran fissuré immédiatement</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Avant tout, couvrez l&apos;écran cassé avec du <strong>ruban adhésif transparent</strong> ou
            un vieux film de protection. Cela évite que les éclats de verre ne blessent vos doigts et empêche
            la poussière et l&apos;humidité de s&apos;infiltrer dans l&apos;appareil.
          </p>

          <h3 className="text-gray-800 mt-6 mb-3">2. Sauvegarder vos données sans attendre</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Même si l&apos;écran fonctionne encore partiellement, lancez immédiatement une sauvegarde iCloud
            depuis <em>Réglages → [votre nom] → iCloud → Sauvegarde iCloud</em>. Un écran fissuré peut cesser
            de fonctionner à tout moment, et vos données doivent être protégées.
          </p>

          <h3 className="text-gray-800 mt-6 mb-3">3. Ne pas appuyer fort sur l&apos;écran fissuré</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            La pression sur un écran fissuré peut aggraver les dégâts et endommager la dalle LCD ou OLED
            sous-jacente — ce qui double le coût de réparation. Utilisez votre iPhone avec délicatesse
            jusqu&apos;à sa réparation.
          </p>

          {/* Section 2 */}
          <h2 className="text-gray-900 mt-10 mb-5">
            Évaluer les dégâts : simple fissure ou écran mort ?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Tous les écrans cassés ne sont pas équivalents. La nature de la panne détermine
            le type de réparation et son coût.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              { title: '🔲 Fissure superficielle', desc: 'Le tactile fonctionne encore. Seule la vitre de protection est cassée. Réparation la moins chère.', ok: true },
              { title: '💧 Taches liquides visibles', desc: 'Des taches noires ou colorées apparaissent. La dalle LCD/OLED est touchée. Remplacement complet nécessaire.', ok: false },
              { title: '⬛ Écran noir total', desc: 'L\'écran ne s\'allume plus mais le téléphone répond aux vibrations. Câble de connexion ou OLED endommagé.', ok: false },
              { title: '👆 Tactile qui ne répond plus', desc: 'L\'image s\'affiche mais le toucher est mort. Composant tactile à remplacer, souvent en même temps que l\'écran.', ok: false },
            ].map((item) => (
              <div key={item.title}
                   className={`rounded-2xl p-4 border ${item.ok ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'}`}>
                <h3 className={`text-sm font-bold mb-2 ${item.ok ? 'text-green-800' : 'text-red-800'}`}>
                  {item.title}
                </h3>
                <p className={`text-xs leading-relaxed ${item.ok ? 'text-green-700' : 'text-red-700'}`}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Section 3 */}
          <h2 className="text-gray-900 mt-10 mb-5">
            Les 4 solutions pour un écran iPhone cassé
          </h2>

          <div className="space-y-4 mb-8">
            {[
              {
                num: '01',
                title: 'Apple Store (SAV officiel)',
                pros: ['Pièces 100% d\'origine', 'Garantie Apple préservée'],
                cons: ['Prix très élevés (jusqu\'à 499€)', 'Délais de 3 à 10 jours', 'Rendez-vous difficile à obtenir'],
              },
              {
                num: '02',
                title: 'Réparateur indépendant à Paris (meilleur rapport qualité/prix)',
                pros: ['Prix jusqu\'à 50% moins chers', 'Réparation en 20 minutes', 'Garantie 6 mois', 'Sans rendez-vous possible'],
                cons: ['Qualité variable selon le réparateur'],
              },
              {
                num: '03',
                title: 'Réparer soi-même',
                pros: ['Pièce moins chère'],
                cons: ['Risque d\'aggraver la panne', 'Outils spécialisés nécessaires', 'Perte de garantie certaine', 'Résultat souvent insatisfaisant'],
              },
              {
                num: '04',
                title: 'Racheter un iPhone reconditionné',
                pros: ['Option si l\'iPhone est trop vieux'],
                cons: ['Coût élevé (200€ minimum)', 'Perte de toutes vos données si non sauvegardées'],
              },
            ].map((opt) => (
              <div key={opt.num}
                   className={`bg-gray-50 rounded-2xl p-5 border ${opt.num === '02' ? 'border-ninja-red/30 bg-ninja-red/3' : 'border-gray-100'}`}>
                <div className="flex items-start gap-4">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0
                                   ${opt.num === '02' ? 'bg-ninja-red text-white' : 'bg-gray-200 text-gray-600'}`}>
                    {opt.num}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-base mb-3 ${opt.num === '02' ? 'text-ninja-red' : 'text-gray-800'}`}>
                      {opt.title}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <p className="text-xs font-semibold text-green-700 mb-1">✅ Avantages</p>
                        <ul className="space-y-0.5">
                          {opt.pros.map((p) => (
                            <li key={p} className="text-xs text-gray-600">• {p}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-red-600 mb-1">❌ Inconvénients</p>
                        <ul className="space-y-0.5">
                          {opt.cons.map((c) => (
                            <li key={c} className="text-xs text-gray-600">• {c}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Section 4 */}
          <h2 className="text-gray-900 mt-10 mb-5">
            Pourquoi ne pas attendre pour réparer ?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Un écran fissuré qui &quot;fonctionne encore&quot; est une bombe à retardement. Voici pourquoi
            il ne faut pas remettre à plus tard :
          </p>
          <ul className="space-y-3 mb-8">
            {[
              '🌧️ La poussière et l\'humidité s\'infiltrent par les fissures et oxydent les composants internes',
              '🔍 Les microfissures s\'agrandissent à chaque manipulation et finissent par atteindre la dalle',
              '💧 En cas de pluie ou d\'éclaboussure, l\'eau pénètre immédiatement par les fissures',
              '💰 Plus la panne évolue, plus la réparation coûte cher (parfois +150€)',
              '🤕 Les fragments de verre peuvent provoquer des coupures',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                <span className="flex-shrink-0">{item.slice(0, 2)}</span>
                <span>{item.slice(3)}</span>
              </li>
            ))}
          </ul>

          {/* Section 5 - Repair Ninja */}
          <div className="bg-gray-900 rounded-3xl p-6 sm:p-8 text-white mt-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🥷</span>
              <h2 className="text-white text-xl sm:text-2xl font-bold">
                Repair Ninja Bastille — Réparation en 20 min
              </h2>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Nos ninjas réparent votre écran iPhone <strong className="text-white">en 20 minutes chrono</strong>,
              sans rendez-vous, avec des pièces certifiées et une garantie 6 mois.
              <span className="block mt-2 text-sm text-gray-400">
                🇫🇷 Réparateur français indépendant — 7 Rue de la Cerisaie, Paris 75004 · 2 min de Bastille
              </span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {[
                { icon: '🔬', label: 'Diagnostic', val: '100% GRATUIT' },
                { icon: '⚡', label: 'Réparation', val: '20 minutes' },
                { icon: '🛡️', label: 'Garantie', val: '6 mois' },
              ].map((item) => (
                <div key={item.label} className="bg-white/10 rounded-xl p-3 text-center">
                  <div className="text-2xl mb-1">{item.icon}</div>
                  <div className="text-xs text-gray-400">{item.label}</div>
                  <div className="text-sm font-bold text-white">{item.val}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact-rendez-vous"
                    className="flex-1 flex items-center justify-center gap-2 bg-ninja-red text-white
                               font-bold px-6 py-3 rounded-full hover:bg-ninja-accent transition-colors">
                🗓 Prendre RDV Gratuit
              </Link>
              <a href="tel:+33750008410"
                 className="flex-1 flex items-center justify-center gap-2 bg-white text-gray-900
                            font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors">
                📞 07.50.00.84.10
              </a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-gray-900 mt-12 mb-6">Questions fréquentes</h2>
          <div className="space-y-3">
            {faqSchema.mainEntity.map((faq, i) => (
              <details key={i}
                       className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 group">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-4
                                    font-semibold text-gray-900 hover:text-ninja-red transition-colors list-none text-sm">
                  {faq.name}
                  <span className="text-ninja-red text-xl font-bold group-open:rotate-45 transition-transform flex-shrink-0 ml-4">+</span>
                </summary>
                <div className="px-5 pb-4 text-gray-500 text-sm leading-relaxed border-t border-gray-100">
                  <p className="pt-3">{faq.acceptedAnswer.text}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </article>

      {/* ══ LIENS INTERNES ═══════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-12 px-4 border-t border-gray-100">
        <div className="container-site mx-auto text-center">
          <h2 className="text-gray-900 mb-6">Nos services de réparation iPhone à Paris</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/reparation-iphone-paris-bastille" className="btn-primary">🍎 Réparation iPhone Bastille</Link>
            <Link href="/reparation-smartphone-paris-4" className="btn-secondary">📱 Smartphone Android</Link>
            <Link href="/blog/combien-coute-reparation-ecran-iphone-paris" className="btn-secondary">💶 Voir les tarifs</Link>
          </div>
        </div>
      </section>

      <GoogleReviews />
      <MapSection />
    </>
  )
}
