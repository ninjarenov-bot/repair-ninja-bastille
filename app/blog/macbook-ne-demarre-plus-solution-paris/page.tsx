// Rôle SEO : "MacBook qui ne démarre plus" = niche haute valeur, faible concurrence locale
import type { Metadata } from 'next'
import Link from 'next/link'
import GoogleReviews from '@/components/GoogleReviews'
import MapSection from '@/components/MapSection'

export const metadata: Metadata = {
  title: 'MacBook qui ne Démarre Plus : Causes & Solutions à Paris | Repair Ninja',
  description:
    'MacBook qui ne s\'allume plus ? Écran noir, logo Apple figé ? Guide de diagnostic + solutions. Réparation GRATUITE à diagnostiquer à Paris 4 Bastille. Jusqu\'à 50% moins cher que l\'Apple Store.',
  alternates: { canonical: 'https://www.repairninja.fr/blog/macbook-ne-demarre-plus-solution-paris' },
  openGraph: {
    title: 'MacBook qui ne Démarre Plus : Guide Complet | Repair Ninja Paris Bastille',
    description: 'Écran noir, logo Apple figé — guide de diagnostic MacBook. Réparation en express à Paris, jusqu\'à 50% moins cher.',
    url: 'https://www.repairninja.fr/blog/macbook-ne-demarre-plus-solution-paris',
  },
}

const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'MacBook qui ne démarre plus : causes, diagnostics et solutions à Paris',
  description: 'Guide complet pour diagnostiquer et réparer un MacBook qui ne s\'allume plus. Causes fréquentes, solutions logicielles, et réparation à Paris.',
  author: { '@type': 'Organization', name: 'Repair Ninja Bastille', '@id': 'https://www.repairninja.fr/#organization' },
  publisher: { '@type': 'Organization', name: 'Repair Ninja Bastille', logo: { '@type': 'ImageObject', url: 'https://www.repairninja.fr/logo.png' } },
  datePublished: '2025-03-11',
  dateModified: '2025-03-11',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.repairninja.fr/blog/macbook-ne-demarre-plus-solution-paris' },
  image: 'https://www.repairninja.fr/og-image.jpg',
  keywords: 'MacBook qui ne démarre plus, MacBook ne s\'allume plus, MacBook écran noir, réparation MacBook Paris',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.repairninja.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.repairninja.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'MacBook ne démarre plus', item: 'https://www.repairninja.fr/blog/macbook-ne-demarre-plus-solution-paris' },
  ],
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Comment diagnostiquer un MacBook qui ne démarre plus',
  step: [
    { '@type': 'HowToStep', name: 'Vérifier l\'alimentation', text: 'Essayez un autre câble MagSafe ou USB-C. Vérifiez que la prise murale fonctionne.' },
    { '@type': 'HowToStep', name: 'Réinitialiser le SMC', text: 'Sur MacBook Intel, maintenez Maj+Ctrl+Option+Alimentation 10 secondes. Sur M1/M2/M3, éteignez et rallumez après 30 secondes.' },
    { '@type': 'HowToStep', name: 'Réinitialiser la NVRAM', text: 'Au démarrage, maintenez Cmd+Option+P+R pendant 20 secondes. Uniquement sur MacBook Intel.' },
    { '@type': 'HowToStep', name: 'Démarrer en mode sans échec', text: 'Maintenez la touche Maj au démarrage (Intel) ou maintenez Alimentation puis cliquez sur Option pour accéder aux options de démarrage (M1/M2/M3).' },
    { '@type': 'HowToStep', name: 'Consulter un technicien', text: 'Si aucune des solutions ne fonctionne, apportez votre MacBook chez Repair Ninja Bastille pour un diagnostic gratuit.' },
  ],
}

export default function MacBookDemarrePlusArticle() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <section className="bg-gray-950 text-white py-10 sm:py-14 md:py-20 px-4">
        <div className="container-site mx-auto max-w-3xl">
          <nav className="text-gray-400 text-sm mb-6" aria-label="Fil d'Ariane">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">MacBook ne démarre plus</span>
          </nav>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1 bg-purple-500/20 border border-purple-500/30
                             text-purple-300 px-3 py-1 rounded-full text-xs font-semibold">
              💻 MacBook · Diagnostic
            </span>
            <span className="text-gray-400 text-sm">8 min de lecture · Mars 2025</span>
          </div>
          <h1 className="text-white mb-5">
            MacBook qui ne démarre plus :{' '}
            <span className="text-ninja-red">causes & solutions</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Écran noir, logo Apple figé, ventilateur qui tourne sans rien afficher…
            Votre MacBook Air ou Pro refuse de démarrer. Guide complet de diagnostic
            et solutions — et quand appeler nos ninjas à Paris.
          </p>
        </div>
      </section>

      <article className="bg-white section-pad">
        <div className="container-site mx-auto max-w-3xl">

          {/* Identifier les symptômes */}
          <h2 className="text-gray-900 mb-5">Identifier la panne : quel symptôme correspond à votre MacBook ?</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              { symptome: '⬛ Écran noir, ventilateur tourne', cause: 'Problème d\'alimentation ou carte graphique', urgence: 'Urgent' },
              { symptome: '🍎 Bloqué sur logo Apple', cause: 'Disque dur/SSD défaillant ou corruption macOS', urgence: 'Urgent' },
              { symptome: '🌀 Roue qui tourne sans fin', cause: 'macOS corrompu ou SSD défaillant', urgence: 'Normal' },
              { symptome: '🔇 Aucun signe de vie', cause: 'Batterie déchargée, câble HS ou carte mère', urgence: 'Très urgent' },
              { symptome: '🌡️ S\'allume puis s\'éteint', cause: 'Surchauffe — ventilateur ou pasta thermique', urgence: 'Urgent' },
              { symptome: '❓ Dossier clignotant avec ?', cause: 'macOS introuvable — SSD défaillant', urgence: 'Très urgent' },
            ].map((item) => (
              <div key={item.symptome} className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                <p className="font-semibold text-gray-900 text-sm mb-1">{item.symptome}</p>
                <p className="text-gray-500 text-xs mb-2">{item.cause}</p>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                  item.urgence === 'Très urgent' ? 'bg-red-50 text-red-700' :
                  item.urgence === 'Urgent' ? 'bg-amber-50 text-amber-700' :
                  'bg-gray-100 text-gray-600'
                }`}>{item.urgence}</span>
              </div>
            ))}
          </div>

          <h2 className="text-gray-900 mt-10 mb-5">Les 5 causes principales d&apos;un MacBook qui ne démarre plus</h2>

          <div className="space-y-5 mb-10">
            {[
              {
                num: '01', icon: '🔋', title: 'Batterie déchargée ou défaillante (cause n°1)',
                desc: 'La cause la plus fréquente. Si votre MacBook est resté longtemps sans charge, la batterie peut s\'être trop déchargée et ne plus répondre. Branchez-le 30 minutes avant de réessayer. Si la batterie est gonflée, c\'est urgent.',
              },
              {
                num: '02', icon: '⚡', title: 'Câble MagSafe ou USB-C défaillant',
                desc: 'Un câble d\'alimentation endommagé peut simuler une panne grave. Essayez un autre câble ou un autre adaptateur compatible. La lumière verte/orange du MagSafe doit s\'allumer.',
              },
              {
                num: '03', icon: '💾', title: 'Panne de SSD ou RAM (puce mémoire)',
                desc: 'Sur les MacBook Apple Silicon (M1/M2/M3), la RAM est soudée directement sur la puce. Un SSD défaillant peut bloquer le démarrage et nécessite une intervention professionnelle.',
              },
              {
                num: '04', icon: '🍎', title: 'Corruption du système macOS',
                desc: 'Après une mise à jour ratée ou une coupure de courant, macOS peut être endommagé. Cette panne est souvent réparable sans changer de pièces, via une réinstallation en mode récupération.',
              },
              {
                num: '05', icon: '🔧', title: 'Défaillance de la carte mère (logique)',
                desc: 'La panne la plus sérieuse. La puce GPU, le contrôleur d\'alimentation ou d\'autres composants peuvent être défaillants. Nécessite un diagnostic et une réparation de niveau micro-soudure.',
              },
            ].map((cause) => (
              <div key={cause.num} className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100">
                <div className="w-10 h-10 bg-ninja-red rounded-full flex items-center justify-center
                                text-white font-bold text-sm flex-shrink-0">
                  {cause.num}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base mb-2">
                    {cause.icon} {cause.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{cause.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-gray-900 mt-10 mb-5">Ce que vous pouvez tester avant de venir</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Avant d&apos;apporter votre MacBook, essayez ces manipulations dans l&apos;ordre.
            Elles résolvent environ 30% des pannes de démarrage.
          </p>

          <div className="space-y-3 mb-10">
            {[
              {
                n: '1', title: 'Réinitialiser le SMC (System Management Controller)',
                intel: 'MacBook Intel : maintenez Maj + Ctrl gauche + Option gauche + Bouton d\'alimentation pendant 10 secondes.',
                silicon: 'MacBook M1/M2/M3 : éteignez et attendez 30 secondes, puis rallumez.',
              },
              {
                n: '2', title: 'Réinitialiser la NVRAM/PRAM',
                intel: 'MacBook Intel uniquement : au démarrage, maintenez Cmd + Option + P + R pendant 20 secondes.',
                silicon: 'MacBook M1/M2/M3 : non applicable (NVRAM gérée différemment).',
              },
              {
                n: '3', title: 'Démarrer en mode sans échec (Safe Mode)',
                intel: 'MacBook Intel : maintenez la touche Maj au démarrage jusqu\'au logo Apple.',
                silicon: 'MacBook M1/M2/M3 : maintenez le bouton d\'alimentation → Options → Continuer en mode sans échec.',
              },
              {
                n: '4', title: 'Démarrer en mode récupération (macOS Reinstall)',
                intel: 'MacBook Intel : Cmd + R au démarrage pour accéder aux utilitaires macOS.',
                silicon: 'MacBook M1/M2/M3 : maintenez le bouton d\'alimentation → Options de démarrage → macOS Recovery.',
              },
            ].map((step) => (
              <details key={step.n} className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden group">
                <summary className="flex items-center gap-3 cursor-pointer px-5 py-4 list-none">
                  <div className="w-7 h-7 bg-ninja-red rounded-full flex items-center justify-center
                                  text-white font-bold text-xs flex-shrink-0">
                    {step.n}
                  </div>
                  <span className="font-semibold text-gray-900 text-sm">{step.title}</span>
                  <span className="text-ninja-red text-xl font-bold group-open:rotate-45 transition-transform ml-auto flex-shrink-0">+</span>
                </summary>
                <div className="px-5 pb-4 border-t border-gray-100">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                    <div className="bg-blue-50 rounded-xl p-3">
                      <p className="text-xs font-bold text-blue-700 mb-1">🖥️ MacBook Intel</p>
                      <p className="text-xs text-blue-800 leading-relaxed">{step.intel}</p>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-3">
                      <p className="text-xs font-bold text-purple-700 mb-1">⚡ MacBook M1/M2/M3</p>
                      <p className="text-xs text-purple-800 leading-relaxed">{step.silicon}</p>
                    </div>
                  </div>
                </div>
              </details>
            ))}
          </div>

          {/* Tarifs */}
          <h2 className="text-gray-900 mt-10 mb-5">Tarifs réparation MacBook à Paris — Repair Ninja</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold rounded-tl-2xl">Type de réparation</th>
                  <th className="text-center px-4 py-3 font-semibold text-ninja-red">Repair Ninja 🥷</th>
                  <th className="text-center px-4 py-3 font-semibold text-gray-400 rounded-tr-2xl">Apple Store</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'Remplacement batterie Air M1/M2', rn: '149€', apple: '249€+' },
                  { type: 'Remplacement batterie Pro 13"', rn: '159€', apple: '289€+' },
                  { type: 'Remplacement écran', rn: 'À partir de 199€', apple: '499€+' },
                  { type: 'Clavier / touches défaillantes', rn: 'À partir de 129€', apple: '399€+' },
                  { type: 'Connecteur MagSafe / USB-C', rn: 'À partir de 89€', apple: '199€+' },
                  { type: 'SSD / Mise à niveau', rn: 'Sur devis', apple: 'Non disponible' },
                  { type: 'Carte mère / micro-soudure', rn: 'Sur devis', apple: 'Échange complet' },
                ].map((row, i) => (
                  <tr key={row.type} className={`border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                    <td className="px-4 py-3 font-medium text-gray-900 text-xs sm:text-sm">{row.type}</td>
                    <td className="px-4 py-3 text-center font-bold text-ninja-red text-xs sm:text-sm">{row.rn}</td>
                    <td className="px-4 py-3 text-center text-gray-400 line-through text-xs">{row.apple}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTA */}
          <div className="bg-gray-900 rounded-3xl p-6 sm:p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🥷</span>
              <h2 className="text-white">Diagnostic MacBook GRATUIT à Paris</h2>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Nos ninjas identifient la panne en 15 minutes et vous remettent un devis clair.
              MacBook Air M1/M2/M3 et MacBook Pro tous pris en charge.<br />
              <strong className="text-white">7 Rue de la Cerisaie, 75004 Paris</strong> — 2 min de Bastille.
              🇫🇷 Réparateur français, jusqu&apos;à 50% moins cher que l&apos;Apple Store.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact-rendez-vous"
                    className="flex-1 flex items-center justify-center gap-2 bg-ninja-red text-white
                               font-bold px-6 py-3 rounded-full hover:bg-ninja-accent transition-colors">
                🗓 Diagnostic MacBook Gratuit
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
          <h2 className="text-gray-900 mb-6">Nos services MacBook à Paris</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/reparation-macbook-bastille" className="btn-primary">💻 Réparation MacBook Bastille</Link>
            <Link href="/reparation-iphone-paris-bastille" className="btn-secondary">🍎 Aussi experts iPhone</Link>
            <Link href="/contact-rendez-vous" className="btn-secondary">🗓 Prendre RDV</Link>
          </div>
        </div>
      </section>

      <GoogleReviews />
      <MapSection />
    </>
  )
}
