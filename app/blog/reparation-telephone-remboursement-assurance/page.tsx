// Rôle SEO : "se faire rembourser réparation téléphone assurance" = intent informationnel + transactionnel
import type { Metadata } from 'next'
import Link from 'next/link'
import GoogleReviews from '@/components/GoogleReviews'
import MapSection from '@/components/MapSection'

export const metadata: Metadata = {
  title: 'Se Faire Rembourser la Réparation de son Téléphone par l\'Assurance | Repair Ninja',
  description:
    'Comment se faire rembourser la réparation de son iPhone ou Samsung par l\'assurance ? Guide complet : documents à fournir, démarches, assurances mobiles. Devis Repair Ninja accepté par toutes les assurances.',
  alternates: { canonical: 'https://www.repairninja.fr/blog/reparation-telephone-remboursement-assurance' },
  openGraph: {
    title: 'Remboursement Assurance Réparation Téléphone — Guide Complet | Repair Ninja Paris',
    description: 'Guide pratique pour se faire rembourser la réparation de son téléphone. Documents, délais, assurances reconnues.',
    url: 'https://www.repairninja.fr/blog/reparation-telephone-remboursement-assurance',
  },
}

const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Comment se faire rembourser la réparation de son téléphone par son assurance ?',
  description: 'Guide complet : identifier sa couverture assurance téléphone, constituer son dossier, obtenir le remboursement de sa réparation iPhone ou Android.',
  author: { '@type': 'Organization', name: 'Repair Ninja Bastille', '@id': 'https://www.repairninja.fr/#organization' },
  publisher: { '@type': 'Organization', name: 'Repair Ninja Bastille', logo: { '@type': 'ImageObject', url: 'https://www.repairninja.fr/logo.png' } },
  datePublished: '2025-03-11',
  dateModified: '2025-03-11',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.repairninja.fr/blog/reparation-telephone-remboursement-assurance' },
  image: 'https://www.repairninja.fr/og-image.jpg',
  keywords: 'remboursement assurance réparation téléphone, se faire rembourser réparation iPhone, assurance smartphone casse, devis réparation assurance',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.repairninja.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.repairninja.fr/blog' },
    { '@type': 'ListItem', position: 3, name: 'Remboursement assurance réparation téléphone', item: 'https://www.repairninja.fr/blog/reparation-telephone-remboursement-assurance' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'L\'assurance rembourse-t-elle la réparation chez un réparateur indépendant ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui, la grande majorité des assurances smartphones acceptent les devis et factures de réparateurs indépendants agréés. L\'important est que la réparation soit documentée avec une facture officielle mentionnant la TVA, le numéro SIRET de l\'entreprise et le détail des pièces remplacées. Repair Ninja Bastille fournit tous les justificatifs nécessaires.' } },
    { '@type': 'Question', name: 'Quel délai pour se faire rembourser par son assurance ?', acceptedAnswer: { '@type': 'Answer', text: 'Le délai moyen est de 2 à 6 semaines après réception du dossier complet. Certaines assurances proposent un virement sous 5 jours ouvrés si le dossier est soumis en ligne avec toutes les pièces.' } },
    { '@type': 'Question', name: 'Faut-il faire un constat de vol ou de casse avant de réparer ?', acceptedAnswer: { '@type': 'Answer', text: 'Pour une casse accidentelle, non. Pour un vol, oui : un dépôt de plainte dans les 48h est généralement exigé. Conservez tous les justificatifs (boîte d\'origine, facture d\'achat) et contactez votre assureur avant d\'envoyer votre téléphone en réparation si vous hésitez.' } },
    { '@type': 'Question', name: 'Repair Ninja fournit-il une facture pour l\'assurance ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui, absolument. Repair Ninja Bastille est une entreprise française enregistrée (SIRET valide) et émet des factures TTC conformes pour toutes les réparations. Cette facture est acceptée par toutes les assurances mobiles françaises.' } },
  ],
}

const assurances = [
  { nom: 'Assurance carte bancaire (Visa Premier, Gold, Infinite)', couverture: 'Casse accidentelle + vol', franchise: '0€ à 100€', conditions: 'Achat payé avec la carte + déclaration dans les délais contractuels' },
  { nom: 'Assurance habitation (option mobile)', couverture: 'Vol à l\'arraché + casse', franchise: 'Variable selon contrat', conditions: 'Option mobile activée + déclaration sous 5 jours' },
  { nom: 'SFR / Orange / Bouygues / Free Mobile Assurance', couverture: 'Casse + vol + panne', franchise: '49€ à 99€', conditions: 'Souscription dans les 90 jours de l\'achat' },
  { nom: 'Darty Max / Fnac+ / Boulanger', couverture: 'Panne + casse', franchise: '0€', conditions: 'Abonnement mensuel actif, téléphone inscrit' },
  { nom: 'Mutuelle / assurance personnelle', couverture: 'Selon contrat', franchise: 'Selon contrat', conditions: 'Vérifier les conditions générales' },
]

export default function AssuranceRemboursementArticle() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gray-950 text-white py-10 sm:py-14 md:py-20 px-4">
        <div className="container-site mx-auto max-w-3xl">
          <nav className="text-gray-400 text-sm mb-6" aria-label="Fil d'Ariane">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Remboursement assurance</span>
          </nav>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1 bg-emerald-500/20 border border-emerald-500/30
                             text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold">
              💳 Assurance · Remboursement
            </span>
            <span className="text-gray-400 text-sm">8 min de lecture · Mars 2025</span>
          </div>
          <h1 className="text-white mb-5">
            Se faire rembourser la réparation{' '}
            <span className="text-ninja-red">par son assurance</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Votre iPhone ou Samsung est cassé et vous avez une assurance ? Vous avez peut-être droit
            à un remboursement total ou partiel. Voici le guide complet pour maximiser vos chances
            de remboursement — et comment Repair Ninja vous aide dans vos démarches.
          </p>
        </div>
      </section>

      <article className="bg-white section-pad">
        <div className="container-site mx-auto max-w-3xl">

          {/* Encadré important */}
          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 mb-10 flex gap-4">
            <span className="text-3xl flex-shrink-0">✅</span>
            <div>
              <p className="font-bold text-emerald-800 mb-1">Repair Ninja fournit une facture conforme pour votre assurance</p>
              <p className="text-emerald-700 text-sm leading-relaxed">
                Tous nos devis et factures incluent le numéro SIRET, la TVA, le détail des pièces
                et de la main-d&apos;œuvre — acceptés par toutes les assurances mobiles françaises.
              </p>
            </div>
          </div>

          <h2 className="text-gray-900 mb-5">Étape 1 — Identifier votre couverture assurance</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Avant tout, vérifiez si vous avez déjà une assurance qui couvre votre téléphone.
            Beaucoup de personnes ignorent qu&apos;elles sont couvertes sans le savoir !
          </p>

          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold rounded-tl-2xl">Type d&apos;assurance</th>
                  <th className="text-center px-4 py-3 font-semibold hidden md:table-cell">Couverture</th>
                  <th className="text-center px-4 py-3 font-semibold hidden sm:table-cell">Franchise</th>
                  <th className="text-left px-4 py-3 font-semibold rounded-tr-2xl hidden lg:table-cell">Conditions clés</th>
                </tr>
              </thead>
              <tbody>
                {assurances.map((a, i) => (
                  <tr key={a.nom} className={`border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                    <td className="px-4 py-3 font-medium text-gray-900 text-xs sm:text-sm">{a.nom}</td>
                    <td className="px-4 py-3 text-center text-gray-600 text-xs hidden md:table-cell">{a.couverture}</td>
                    <td className="px-4 py-3 text-center font-semibold text-ninja-red text-xs hidden sm:table-cell">{a.franchise}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs hidden lg:table-cell">{a.conditions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-gray-900 mt-10 mb-5">Étape 2 — Constituer votre dossier de remboursement</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Un dossier incomplet est la principale cause de refus de remboursement. Voici les documents
            généralement demandés par les assurances :
          </p>

          <div className="space-y-3 mb-10">
            {[
              { doc: '📄 Facture originale d\'achat du téléphone', detail: 'Avec le numéro IMEI (15 chiffres), la date et le prix d\'achat. Conservez-la précieusement dès l\'achat.' },
              { doc: '🔧 Devis ou facture de réparation', detail: 'Fournis par Repair Ninja Bastille. Doit inclure : SIRET de l\'entreprise, TVA, détail des pièces et main-d\'œuvre, montant TTC.' },
              { doc: '📱 Relevé IMEI de votre téléphone', detail: 'Composez *#06# sur votre téléphone pour obtenir le numéro IMEI. Indispensable pour l\'assurance.' },
              { doc: '📝 Formulaire de déclaration de sinistre', detail: 'Téléchargeable sur le site de votre assureur. À remplir et signer dans les délais contractuels (souvent 5 jours).' },
              { doc: '🪪 Copie de votre pièce d\'identité', detail: 'Carte nationale d\'identité ou passeport en cours de validité.' },
              { doc: '🚨 Dépôt de plainte (en cas de vol uniquement)', detail: 'À déposer dans les 48h au commissariat ou en ligne sur service-public.fr. Non requis pour la casse accidentelle.' },
            ].map((item) => (
              <div key={item.doc} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
                <span className="text-xl flex-shrink-0">{item.doc.slice(0, 2)}</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-0.5">{item.doc.slice(3)}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-gray-900 mt-10 mb-5">Étape 3 — Comparer franchise et coût de réparation</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Avant de déclarer un sinistre, comparez le coût de réparation chez Repair Ninja
            avec la franchise de votre assurance. Parfois, il vaut mieux payer directement la réparation.
          </p>
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 mb-10">
            <p className="text-amber-800 font-semibold text-sm mb-3">💡 Exemple concret — iPhone 13</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4">
                <p className="text-xs font-bold text-gray-700 mb-2">Scénario A : passer par l&apos;assurance</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Coût réparation écran : 149€</li>
                  <li>• Franchise assurance : 99€</li>
                  <li>• Remboursement : 50€</li>
                  <li className="font-semibold text-amber-700">→ Économie : 50€ mais démarches + risque de malus</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-4">
                <p className="text-xs font-bold text-gray-700 mb-2">Scénario B : payer directement</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Coût réparation écran : 149€</li>
                  <li>• Garantie 6 mois incluse</li>
                  <li>• Réparation en 20 min</li>
                  <li className="font-semibold text-green-700">→ Simple, rapide, sans démarche</li>
                </ul>
              </div>
            </div>
            <p className="text-amber-700 text-xs mt-3">
              ⚠️ Attention : une déclaration de sinistre peut augmenter votre cotisation assurance l&apos;année suivante.
            </p>
          </div>

          <h2 className="text-gray-900 mt-10 mb-5">Étape 4 — Soumettre votre dossier à l&apos;assurance</h2>
          <div className="space-y-3 mb-10">
            {[
              { n: '01', action: 'Contactez votre assureur dans les délais', desc: 'Généralement 5 jours ouvrés après le sinistre. En dehors des délais, le remboursement peut être refusé.' },
              { n: '02', action: 'Obtenez votre devis ou facture chez Repair Ninja', desc: 'Venez au 7 Rue de la Cerisaie. Diagnostic gratuit, devis immédiat avec tous les justificatifs nécessaires pour votre assurance.' },
              { n: '03', action: 'Constituez votre dossier complet', desc: 'Rassemblez tous les documents listés ci-dessus. Un dossier incomplet ralentit considérablement le traitement.' },
              { n: '04', action: 'Envoyez le dossier en RAR ou via l\'espace en ligne', desc: 'Préférez l\'espace client en ligne pour un suivi en temps réel. L\'accusé de réception recommandé crée une preuve en cas de litige.' },
            ].map((step) => (
              <div key={step.n} className="flex items-start gap-4 bg-gray-50 rounded-xl p-4 border border-gray-100">
                <div className="w-8 h-8 bg-ninja-red rounded-full flex items-center justify-center
                                text-white font-bold text-xs flex-shrink-0">
                  {step.n}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm mb-0.5">{step.action}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Repair Ninja */}
          <div className="bg-gray-900 rounded-3xl p-6 sm:p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🥷</span>
              <h2 className="text-white">Devis et facture conformes pour votre assurance</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {[
                { icon: '📄', label: 'Devis GRATUIT', desc: 'Fourni immédiatement sur place' },
                { icon: '🏢', label: 'Entreprise officielle', desc: 'SIRET + TVA — conforme pour assurance' },
                { icon: '🛡️', label: 'Garantie 6 mois', desc: 'Incluse sur toutes les réparations' },
              ].map((item) => (
                <div key={item.label} className="bg-white/10 rounded-xl p-3 text-center">
                  <div className="text-2xl mb-1">{item.icon}</div>
                  <div className="text-sm font-bold text-white">{item.label}</div>
                  <div className="text-xs text-gray-400">{item.desc}</div>
                </div>
              ))}
            </div>
            <p className="text-gray-300 text-sm mb-5">
              <strong className="text-white">7 Rue de la Cerisaie, 75004 Paris</strong> — 2 min de Bastille.
              🇫🇷 Réparateur français indépendant.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact-rendez-vous"
                    className="flex-1 flex items-center justify-center gap-2 bg-ninja-red text-white
                               font-bold px-6 py-3 rounded-full hover:bg-ninja-accent transition-colors">
                🗓 Obtenir mon devis gratuit
              </Link>
              <a href="tel:+33750008410"
                 className="flex-1 flex items-center justify-center gap-2 bg-white text-gray-900
                            font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors">
                📞 07.50.00.84.10
              </a>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-gray-900 mt-12 mb-6">Questions fréquentes — Assurance téléphone</h2>
          <div className="space-y-3">
            {faqSchema.mainEntity.map((faq, i) => (
              <details key={i} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 group">
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

      <section className="bg-gray-50 py-12 px-4 border-t border-gray-100">
        <div className="container-site mx-auto text-center">
          <h2 className="text-gray-900 mb-6">Nos réparations à Paris</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/reparation-iphone-paris-bastille" className="btn-primary">🍎 Réparation iPhone Bastille</Link>
            <Link href="/reparation-smartphone-paris-4" className="btn-secondary">📱 Smartphone Android</Link>
            <Link href="/blog/combien-coute-reparation-ecran-iphone-paris" className="btn-secondary">💶 Tarifs réparation</Link>
          </div>
        </div>
      </section>

      <GoogleReviews />
      <MapSection />
    </>
  )
}
