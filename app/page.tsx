// Rôle SEO : page d'accueil H1 unique + mots-clés géolocalisés + structure CalFix = top ranking local
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import GoogleReviews from '@/components/GoogleReviews'
import MapSection from '@/components/MapSection'

export const metadata: Metadata = {
  title: 'Réparation Téléphone Bastille Paris 4 — Repair Ninja | 20 min',
  description:
    'Réparation iPhone, Samsung, MacBook à Bastille en 20 min. Écran cassé, batterie, charge. Diagnostic GRATUIT. Garantie 6 mois. 7 Rue de la Cerisaie, Paris 75004. ☎ 07.50.00.84.10',
  alternates: { canonical: 'https://www.repairninja.fr' },
}

// ── FAQ Schema ───────────────────────────────────────────────────────────────
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien de temps dure une réparation chez Repair Ninja Bastille ?',
      acceptedAnswer: { '@type': 'Answer', text: 'La plupart des réparations (écran, batterie) sont réalisées en 20 à 45 minutes au 7 Rue de la Cerisaie, Paris 75004. Vous pouvez rester en boutique ou revenir chercher votre appareil.' },
    },
    {
      '@type': 'Question',
      name: 'Le diagnostic est-il gratuit ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, le diagnostic est 100% gratuit et sans engagement. Nos ninjas examinent votre appareil et vous remettent un devis clair avant toute intervention. Si vous refusez, vous repartez sans payer.' },
    },
    {
      '@type': 'Question',
      name: 'Quelles marques de téléphones réparez-vous ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Nos ninjas réparent iPhone (toutes générations), Samsung Galaxy, Huawei, Xiaomi, OnePlus, Google Pixel, Sony Xperia, MacBook Air/Pro et toutes tablettes iPad et Android.' },
    },
    {
      '@type': 'Question',
      name: 'Repair Ninja est-il ouvert le samedi ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, Repair Ninja Bastille est ouvert du lundi au samedi de 10h à 19h au 7 Rue de la Cerisaie, Paris 75004. Fermé le dimanche.' },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte la réparation d\'un écran iPhone ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Le remplacement d\'écran iPhone commence à 79€. iPhone 15 Pro Max : à partir de 199€. iPhone 13/14 : à partir de 129€. iPhone 11/12 : à partir de 99€. Appelez le 07.50.00.84.10 pour un devis gratuit.' },
    },
    {
      '@type': 'Question',
      name: 'Y a-t-il une garantie sur les réparations ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, toutes nos réparations sont garanties 6 mois pièces et main-d\'œuvre. Si la même panne survient dans les 6 mois, on la répare gratuitement. Nous utilisons des pièces certifiées qualité OEM ou supérieure.' },
    },
    {
      '@type': 'Question',
      name: 'Peut-on venir sans rendez-vous chez Repair Ninja ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, vous pouvez venir directement au 7 Rue de la Cerisaie sans rendez-vous, du lundi au samedi de 10h à 19h. Pour éviter l\'attente, réservez un créneau gratuit en ligne.' },
    },
    {
      '@type': 'Question',
      name: 'Repair Ninja accepte-t-il la carte bancaire ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, nous acceptons carte bancaire (Visa, Mastercard), paiement sans contact, Apple Pay, Google Pay et espèces.' },
    },
    {
      '@type': 'Question',
      name: 'Réparez-vous les téléphones endommagés par l\'eau ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, nos ninjas traitent les dégâts des eaux. Éteignez votre appareil immédiatement et apportez-le le plus vite possible. Après nettoyage et séchage en profondeur, nous évaluons les composants. Le taux de réussite est élevé si le téléphone est amené rapidement.' },
    },
    {
      '@type': 'Question',
      name: 'Où se trouve Repair Ninja Bastille ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Repair Ninja Bastille se trouve au 7 Rue de la Cerisaie, 75004 Paris, à 2 minutes de la station Bastille (lignes 1, 5 et 8). Accessible depuis le Marais, le 11ème et Nation.' },
    },
    {
      '@type': 'Question',
      name: 'Repair Ninja est-il un réparateur agréé Apple ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Repair Ninja Bastille est un réparateur indépendant français spécialisé dans les appareils Apple et Android. Nos techniciens sont formés sur tous les modèles iPhone et MacBook avec des pièces certifiées. Nos prix sont jusqu\'à 50% moins chers que l\'Apple Store.' },
    },
  ],
}

// ── Services pour les cards CalFix-style ────────────────────────────────────
const services = [
  {
    icon: '📱',
    title: 'Réparation iPhone',
    badge: 'À partir de 59€',
    badgeColor: 'text-ninja-red',
    desc: 'Écran cassé, batterie, Face ID, connecteur charge. Toutes générations iPhone.',
    href: '/reparation-iphone-paris-bastille',
    bg: 'from-blue-950 to-slate-900',
    emoji: '🍎',
  },
  {
    icon: '🤖',
    title: 'Smartphone Android',
    badge: 'Toutes marques',
    badgeColor: 'text-green-600',
    desc: 'Samsung, Huawei, Xiaomi, OnePlus, Google Pixel — réparation express.',
    href: '/reparation-smartphone-paris-4',
    bg: 'from-green-950 to-slate-900',
    emoji: '📲',
  },
  {
    icon: '💻',
    title: 'MacBook & PC',
    badge: 'Diagnostic offert',
    badgeColor: 'text-purple-600',
    desc: 'Écran, batterie, clavier, carte mère. Jusqu\'à 50% moins cher que l\'Apple Store.',
    href: '/reparation-macbook-bastille',
    bg: 'from-purple-950 to-slate-900',
    emoji: '🖥️',
  },
  {
    icon: '📟',
    title: 'iPad & Tablettes',
    badge: 'Garantie 6 mois',
    badgeColor: 'text-orange-600',
    desc: 'iPad toutes générations, Samsung Galaxy Tab, Huawei MatePad.',
    href: '/reparation-tablette-paris-11',
    bg: 'from-orange-950 to-slate-900',
    emoji: '📊',
  },
]

// ── Étapes processus ─────────────────────────────────────────────────────────
const steps = [
  { num: '01', title: 'Prenez RDV',          desc: 'Appelez ou réservez en ligne. Réponse sous 30 min.',                   icon: '📅' },
  { num: '02', title: 'Diagnostic Ninja',     desc: 'Nos ninjas examinent votre appareil et rendent un verdict clair.',      icon: '🔬' },
  { num: '03', title: 'Frappe Chirurgicale',  desc: 'Intervention en 20 à 45 min — silencieuse, précise, imparable.',        icon: '⚡' },
  { num: '04', title: 'Mission Accomplie',    desc: 'Votre appareil repart réparé, testé, avec garantie 6 mois. 🥷',         icon: '✅' },
]

// ── Avantages features ────────────────────────────────────────────────────────
const features = [
  {
    icon: '🚨',
    title: 'Urgence Jour Même',
    desc: 'Votre téléphone est votre arme secrète. Nos ninjas le restituent le jour même, opérationnel.',
  },
  {
    icon: '🥷',
    title: 'Maîtres Techniciens',
    desc: 'Formés sur iPhone, Samsung, MacBook et bien plus. Précision chirurgicale, résultat garanti.',
  },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ══ HERO — 2 colonnes style Factures TPE ══════════════════════════════ */}
      <section className="bg-white py-10 sm:py-14 md:py-24 px-4 overflow-hidden">
        <div className="container-site mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* ── Colonne gauche : texte + étapes + CTA ── */}
            <div>
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <div className="inline-flex items-center gap-2 bg-ninja-red/8 border border-ninja-red/20
                                text-ninja-red px-4 py-1.5 rounded-full text-sm font-semibold">
                  <span className="w-2 h-2 bg-ninja-red rounded-full animate-pulse" />
                  Réparation express — Paris 4 • Bastille
                </div>
                <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-100
                                text-blue-700 px-3 py-1.5 rounded-full text-sm font-semibold">
                  🇫🇷 Réparateur français indépendant
                </div>
              </div>

              {/* H1 */}
              <h1 className="text-ninja-dark mb-4 leading-[1.1]">
                Votre téléphone réparé,{' '}
                <span className="text-ninja-red">vite.</span>
              </h1>

              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Nos ninjas vous attendent au <strong className="text-ninja-dark">7 Rue de la Cerisaie, Paris 4</strong>.
                Diagnostic gratuit, devis immédiat — votre appareil réparé en 20 minutes chrono.
                <span className="block mt-2 text-sm text-gray-400">
                  Entreprise française indépendante, sans intermédiaire, gérée par des Parisiens passionnés.
                </span>
              </p>

              {/* Étapes numérotées (style Factures TPE) */}
              <div className="space-y-5 mb-10">
                {[
                  { n: '1', title: 'Apportez votre appareil',       desc: 'iPhone, Samsung, MacBook, iPad — toutes marques acceptées.' },
                  { n: '2', title: 'Diagnostic ninja en 5 min',      desc: 'Nos ninjas identifient la panne en silence et vous donnent un devis clair, sans surprise.' },
                  { n: '3', title: 'Mission accomplie en 20 min 🥷', desc: 'Pièces certifiées, garantie 6 mois — votre appareil repart comme neuf.' },
                ].map((s) => (
                  <div key={s.n} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-ninja-red rounded-full flex items-center justify-center
                                    text-white font-bold text-sm flex-shrink-0 mt-0.5">
                      {s.n}
                    </div>
                    <div>
                      <p className="font-semibold text-ninja-dark">{s.title}</p>
                      <p className="text-gray-500 text-sm mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact-rendez-vous" className="btn-primary text-base px-8 py-4">
                  Prendre RDV gratuit →
                </Link>
                <a href="tel:+33750008410"
                   className="flex items-center justify-center gap-2 border-2 border-gray-200
                              text-gray-800 font-bold text-base px-8 py-4 rounded-full
                              hover:bg-gray-50 hover:border-gray-300 transition-all">
                  📞 07.50.00.84.10
                </a>
              </div>

              <p className="text-gray-400 text-sm mt-5 flex flex-wrap items-center gap-x-1.5 gap-y-1">
                <span className="text-ninja-red">📍</span>
                <span>7 Rue de la Cerisaie, 75004 Paris —</span>
                <a href="https://g.page/repairninja-bastille" target="_blank" rel="noopener noreferrer"
                   className="text-ninja-red hover:underline whitespace-nowrap">2 min de Bastille</a>
              </p>
            </div>

            {/* ── Colonne droite : Ticket de suivi de réparation ── */}
            <div className="hidden lg:flex justify-center items-start pt-4">
              <div className="w-full max-w-sm space-y-4">

                {/* ── CARTE SUIVI ── */}
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">

                  {/* Header ticket */}
                  <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-ninja-red/10 rounded-xl flex items-center justify-center text-xl">📱</div>
                      <div>
                        <p className="font-bold text-ninja-dark text-sm">iPhone 15 Pro Max</p>
                        <p className="text-xs text-gray-400">Ticket #REP-2025-047 · Karim</p>
                      </div>
                    </div>
                    <span className="flex items-center gap-1.5 bg-amber-50 text-amber-600 border border-amber-100
                                     text-xs font-bold px-3 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />
                      Mission en cours 🥷
                    </span>
                  </div>

                  {/* Barre de progression */}
                  <div className="px-5 py-5">
                    <div className="flex items-center justify-between mb-2">
                      {[
                        { label: 'Reçu',       done: true  },
                        { label: 'Diagnostic', done: true  },
                        { label: 'Réparation', done: false, active: true },
                        { label: 'Prêt',       done: false },
                      ].map((step, i, arr) => (
                        <div key={step.label} className="flex items-center flex-1">
                          <div className="flex flex-col items-center">
                            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold
                              ${step.done   ? 'bg-green-500 text-white' :
                                step.active ? 'bg-ninja-red text-white ring-4 ring-ninja-red/20' :
                                              'bg-gray-100 text-gray-400'}`}>
                              {step.done ? '✓' : i + 1}
                            </div>
                            <span className={`text-xs mt-1.5 font-medium whitespace-nowrap
                              ${step.done ? 'text-green-600' : step.active ? 'text-ninja-red' : 'text-gray-300'}`}>
                              {step.label}
                            </span>
                          </div>
                          {i < arr.length - 1 && (
                            <div className={`flex-1 h-0.5 mb-4 mx-1 ${step.done ? 'bg-green-400' : 'bg-gray-100'}`} />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Infos réparation */}
                  <div className="px-5 pb-5 space-y-2">
                    <div className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3">
                      <span className="text-sm text-gray-500">Panne détectée</span>
                      <span className="text-sm font-semibold text-ninja-dark">Écran fissuré</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3">
                      <span className="text-sm text-gray-500">Pièce</span>
                      <span className="text-sm font-semibold text-ninja-dark">OLED certifiée ✓</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3">
                      <span className="text-sm text-gray-500">Garantie</span>
                      <span className="text-sm font-semibold text-green-600">6 mois incluse</span>
                    </div>
                  </div>

                  {/* Footer countdown */}
                  <div className="bg-ninja-dark px-5 py-3.5 flex items-center justify-between rounded-b-3xl">
                    <div className="flex items-center gap-2 text-white/70 text-sm">
                      <span className="text-lg">⏱</span> Prêt dans environ
                    </div>
                    <span className="text-white font-extrabold text-lg">~ 20 min</span>
                  </div>
                </div>

                {/* ── MINI AVIS GOOGLE ── */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4
                                flex items-start gap-3">
                  <div className="w-9 h-9 bg-ninja-red rounded-full flex items-center justify-center
                                  text-white font-bold text-sm flex-shrink-0">S</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <p className="text-sm font-bold text-ninja-dark">Sophie M.</p>
                      <div className="flex text-amber-400 text-xs gap-0.5">★★★★★</div>
                    </div>
                    <p className="text-xs text-gray-500 leading-snug">
                      &ldquo;Mon iPhone réparé en 25 min chrono. Accueil super, prix honnêtes. Je reviendrai !&rdquo;
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ STATS BAR (style Factures TPE) ══════════════════════════════════════ */}
      <section className="border-t border-b border-gray-100 py-8 px-4 bg-gray-50">
        <div className="container-site mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { v: '650+',   l: 'avis Google 4,9/5',    c: 'text-ninja-red' },
              { v: '20 min', l: 'réparation express',    c: 'text-ninja-dark' },
              { v: '6 mois', l: 'garantie incluse',      c: 'text-ninja-dark' },
              { v: '0 €',    l: 'diagnostic offert',     c: 'text-ninja-dark' },
            ].map((s) => (
              <div key={s.v}>
                <div className={`text-3xl md:text-4xl font-extrabold ${s.c}`}>{s.v}</div>
                <div className="text-sm text-gray-500 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROCESSUS — style CalFix "Simple Booking" ════════════════════════ */}
      <section className="section-pad bg-white" id="processus">
        <div className="container-site mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Gauche — texte + image tech */}
            <div>
              <p className="section-label mb-3">Comment ça marche</p>
              <h2 className="text-gray-900 mb-4">
                La technique<br />
                <span className="text-ninja-red">ninja 🥷</span>
              </h2>
              <p className="text-gray-500 mb-8 max-w-md">
                Rapides, précis, discrets. Nos ninjas s&apos;occupent de tout en silence.
                Déposez votre appareil — il repart réparé, sans mauvaise surprise sur la facture.
              </p>

              {/* Photo atelier */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md">
                <Image
                  src="/atelier.png"
                  alt="Technicien Repair Ninja en train de réparer un iPhone à Bastille Paris 4"
                  width={1400}
                  height={788}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>

            {/* Droite — 2 feature cards + 4 steps */}
            <div className="space-y-4">
              {features.map((f) => (
                <div key={f.title} className="feature-card flex items-start gap-4">
                  <div className="w-12 h-12 bg-ninja-red/10 rounded-xl flex items-center justify-center
                                  text-2xl flex-shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">{f.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}

              {/* 4 étapes */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                {steps.map((step) => (
                  <div key={step.num}
                       className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                    <div className="text-2xl mb-2">{step.icon}</div>
                    <div className="text-xs font-bold text-ninja-red mb-1">{step.num}</div>
                    <p className="font-bold text-gray-900 text-sm mb-1">{step.title}</p>
                    <p className="text-xs text-gray-500 leading-snug">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SERVICES GRID — style CalFix 2×2 ════════════════════════════════ */}
      <section className="section-pad bg-gray-50" id="services">
        <div className="container-site mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Nos services</p>
            <h2 className="text-gray-900">
              Les spécialités de{' '}
              <span className="text-ninja-red">nos ninjas 🥷</span>
            </h2>
          </div>

          {/* Grid 2×2 style CalFix */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((s) => (
              <Link href={s.href} key={s.href} className="card-repair group block">
                <div className="flex items-stretch">
                  {/* Visuel gauche */}
                  <div className={`bg-gradient-to-br ${s.bg} w-36 flex-shrink-0 flex items-center
                                  justify-center rounded-l-2xl`}>
                    <span className="text-5xl">{s.emoji}</span>
                  </div>
                  {/* Contenu droite */}
                  <div className="p-5 flex-1">
                    <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-ninja-red transition-colors">
                      {s.title}
                    </h3>
                    <p className={`font-bold text-sm mb-2 ${s.badgeColor}`}>{s.badge}</p>
                    <p className="text-gray-500 text-sm leading-relaxed mb-3">{s.desc}</p>
                    <div className="inline-flex items-center gap-2 border border-gray-200 text-gray-700
                                    hover:border-ninja-red hover:text-ninja-red font-semibold text-sm
                                    px-4 py-2 rounded-full transition-colors">
                      RÉSERVER
                      <span className="w-5 h-5 bg-ninja-red rounded-full flex items-center justify-center
                                       text-white text-xs">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ POURQUOI NOUS — icônes claires ═══════════════════════════════════ */}
      <section className="section-pad bg-white" id="avantages">
        <div className="container-site mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Nos engagements</p>
            <h2 className="text-gray-900">
              Pourquoi choisir{' '}
              <span className="text-ninja-red">Repair Ninja Bastille</span> ?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '⚡', t: 'Réparation en 20 min', d: 'Écrans et batteries changés en moins de 20 minutes sur place.' },
              { icon: '🔬', t: 'Diagnostic gratuit', d: '100% gratuit et sans engagement. Devis avant toute intervention.' },
              { icon: '🛡️', t: 'Garantie 6 mois', d: 'Pièces et main-d\'œuvre garanties 6 mois sans conditions.' },
              { icon: '💎', t: 'Pièces premium', d: 'Qualité OEM ou supérieure pour une durabilité maximale.' },
              { icon: '🇫🇷', t: 'Fièrement français', d: 'Entreprise indépendante, fondée à Paris, gérée par des Parisiens. Aucun intermédiaire — vous parlez directement à nos techniciens.' },
              { icon: '📍', t: 'Notre dojo à Bastille', d: '7 Rue de la Cerisaie — 2 min des lignes 1, 5 et 8 du métro. Local 100% parisien.' },
            ].map((item) => (
              <div key={item.t}
                   className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-ninja-red/30
                              hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-ninja-red/10 rounded-xl flex items-center justify-center
                                text-2xl mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.t}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FIDÉLITÉ ══════════════════════════════════════════════════════════ */}
      <section className="section-pad bg-ninja-red text-white">
        <div className="container-site mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Gauche : message */}
            <div className="flex-1">
              <p className="text-red-200 text-sm font-semibold uppercase tracking-wider mb-2">
                🏆 Programme Fidélité — Exclusif Repair Ninja
              </p>
              <h2 className="text-white text-2xl sm:text-3xl font-extrabold mb-3">
                Revenez, on vous récompense
              </h2>
              <p className="text-red-100 text-base leading-relaxed">
                Dès votre <strong className="text-white">2e réparation</strong>,
                profitez de <strong className="text-white text-xl">-30%</strong> sur
                la totalité de votre réparation. Carte gratuite en boutique,
                sans inscription ni application.
              </p>
            </div>
            {/* Centre : tampons visuels */}
            <div className="flex items-center gap-2 flex-shrink-0">
              {[true, false, false, false, false].map((filled, i) => (
                <div key={i}
                     className={`w-11 h-11 rounded-full border-2 flex items-center justify-center text-lg
                     ${filled
                       ? 'bg-white border-white text-ninja-red'
                       : 'border-white/40 text-white/30'}`}>
                  {filled ? '🥷' : '○'}
                </div>
              ))}
              <div className="ml-3 bg-white/20 border border-white/30 rounded-2xl px-4 py-2 text-center">
                <p className="text-white font-extrabold text-xl leading-none">-30%</p>
                <p className="text-red-200 text-xs mt-0.5">dès le 2e</p>
              </div>
            </div>
            {/* Droite : CTA */}
            <div className="flex-shrink-0">
              <Link href="/fidelite"
                    className="inline-flex items-center gap-2 bg-white text-ninja-red font-bold
                               px-6 py-3 rounded-full hover:bg-gray-100 transition-colors text-sm">
                En savoir plus →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ B2B & ACHAT-REVENTE ══════════════════════════════════════════════ */}
      <section className="section-pad bg-gray-900 text-white" id="pro">
        <div className="container-site mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="section-label text-ninja-red mb-3">Professionnels & Entreprises</p>
              <h2 className="text-white mb-5">
                Services Pro, B2B &{' '}
                <span className="text-ninja-red">Achat‑Revente</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Nos ninjas accompagnent les entreprises parisiennes : contrats de maintenance,
                réparation en volume, achat d&apos;appareils d&apos;occasion et revente reconditionnée.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  { icon: '🏢', t: 'Contrats B2B', d: 'Tarifs préférentiels à partir de 5 appareils.' },
                  { icon: '🔄', t: 'Rachat immédiat', d: 'iPhone, Samsung, MacBook — paiement cash.' },
                  { icon: '✨', t: 'Appareils reconditionnés', d: 'Testés et garantis 6 mois.' },
                  { icon: '📦', t: 'Gestion de flotte', d: 'Audit, réparation, remplacement de parc.' },
                ].map((item) => (
                  <div key={item.t} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl flex-shrink-0">{item.icon}</span>
                      <div>
                        <p className="font-bold text-white text-sm mb-0.5">{item.t}</p>
                        <p className="text-gray-400 text-xs leading-relaxed">{item.d}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/services-pro" className="btn-primary">
                Découvrir nos offres Pro →
              </Link>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8">
              <h3 className="text-white font-bold text-xl mb-2">
                💶 Vous avez un appareil à vendre ?
              </h3>
              <p className="text-gray-400 text-sm mb-5">Estimation GRATUITE, paiement immédiat.</p>
              <div className="space-y-3 mb-6">
                {[
                  { icon: '📱', label: 'iPhone (tous états)', note: 'Cassé ou fonctionnel' },
                  { icon: '🤖', label: 'Samsung & Android', note: 'Toutes marques' },
                  { icon: '💻', label: 'MacBook & PC', note: 'Intel & Apple Silicon' },
                  { icon: '📟', label: 'iPad & Tablettes', note: 'Toutes générations' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3">
                    <span className="text-xl">{item.icon}</span>
                    <div className="flex-1">
                      <p className="font-semibold text-white text-sm">{item.label}</p>
                      <p className="text-gray-400 text-xs">{item.note}</p>
                    </div>
                    <span className="text-xs font-semibold text-green-400 bg-green-400/10
                                     px-2 py-0.5 rounded-full border border-green-400/20 whitespace-nowrap">✓ Accepté</span>
                  </div>
                ))}
              </div>
              <a href="tel:+33750008410"
                 className="flex items-center justify-center gap-2 bg-ninja-red text-white
                            font-bold px-6 py-3 rounded-full hover:bg-ninja-accent transition-colors w-full">
                📞 Estimer mon appareil
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ AVIS GOOGLE ══════════════════════════════════════════════════════ */}
      <GoogleReviews />

      {/* ══ FAQ ══════════════════════════════════════════════════════════════ */}
      <section className="section-pad bg-gray-50" id="faq">
        <div className="container-site mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <p className="section-label mb-3">FAQ</p>
            <h2 className="text-gray-900">Questions fréquentes</h2>
          </div>
          <div className="space-y-3">
            {faqSchema.mainEntity.map((faq, i) => (
              <details key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100
                                          shadow-sm group">
                <summary className="flex items-center justify-between cursor-pointer px-6 py-4
                                    font-semibold text-gray-900 hover:text-ninja-red transition-colors list-none">
                  {faq.name}
                  <span className="text-ninja-red text-xl font-bold group-open:rotate-45 transition-transform flex-shrink-0 ml-4">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-50">
                  <p className="pt-3">{faq.acceptedAnswer.text}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MAP ══════════════════════════════════════════════════════════════ */}
      <MapSection />

      {/* ══ CTA FINAL ════════════════════════════════════════════════════════ */}
      <section className="bg-gray-900 text-white section-pad">
        <div className="container-site mx-auto text-center">
          <p className="section-label text-ninja-red mb-3">Prêt à réparer ?</p>
          <h2 className="text-white mb-4">
            Votre appareil cassé ?<br />
            <span className="text-ninja-red">Nos ninjas interviennent aujourd&apos;hui. 🥷</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
            Notre dojo : 7 Rue de la Cerisaie, Paris 75004 — 2 min de Bastille (L1, L5, L8)
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
              🗓 Réserver un créneau gratuit
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
