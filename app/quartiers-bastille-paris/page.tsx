// Rôle SEO : page hub géographique — cible les quartiers voisins = backlinks et signaux de proximité
import type { Metadata } from 'next'
import Link from 'next/link'
import MapSection from '@/components/MapSection'
import GoogleReviews from '@/components/GoogleReviews'

export const metadata: Metadata = {
  title: 'Réparation Téléphone Bastille & Quartiers Paris 4, 11, Marais, Bercy | Repair Ninja',
  description:
    'Repair Ninja Bastille répare vos téléphones dans tous les quartiers : Bastille 75004, Paris 11, Le Marais 75003, Bercy 75012, Nation. 20 min • Diagnostic GRATUIT • ☎ 07.50.00.84.10',
  alternates: { canonical: 'https://www.repairninja.fr/quartiers-bastille-paris' },
  openGraph: {
    title: 'Réparation Téléphone Bastille & Quartiers Paris | Repair Ninja',
    description: 'Tous les quartiers proches de Bastille desservis. Repair Ninja Paris 4 — 20 min.',
    url: 'https://www.repairninja.fr/quartiers-bastille-paris',
  },
}

const quartiers = [
  {
    nom: 'Bastille — Paris 4ème (75004)',
    code: '75004',
    icon: '🗼',
    desc: 'Au cœur de notre boutique ! 7 Rue de la Cerisaie, à 2 min de la station Bastille (Lignes 1, 5, 8). Le point de réparation téléphone le plus rapide du 4ème arrondissement.',
    temps: '0 min',
    details: ['Métro Bastille (L1, L5, L8)', 'Parking Bastille à 3 min', 'Bus 29, 86, 87, 91'],
    slug: 'bastille',
  },
  {
    nom: 'Paris 11ème — Oberkampf / Ledru-Rollin',
    code: '75011',
    icon: '🎭',
    desc: 'Repair Ninja Bastille est la boutique de réparation téléphone la plus proche du 11ème arrondissement. Oberkampf, Ledru-Rollin, Richard-Lenoir — à quelques minutes à pied ou en métro.',
    temps: '5 min',
    details: ['Métro Ledru-Rollin (L8)', 'À pied depuis Oberkampf', 'Bus 61, 65, 69'],
    slug: 'paris-11',
  },
  {
    nom: 'Le Marais — Paris 3ème (75003)',
    code: '75003',
    icon: '🏛️',
    desc: 'Pour les habitants et visiteurs du Marais, Repair Ninja Bastille est la solution la plus rapide pour réparer son iPhone ou Samsung. Accessible en quelques minutes depuis la rue de Bretagne ou Beaubourg.',
    temps: '7 min',
    details: ['Métro Saint-Paul (L1)', 'Métro Arts et Métiers (L3)', 'Bus 29, 75, 96'],
    slug: 'marais-paris-3',
  },
  {
    nom: 'Bercy — Paris 12ème (75012)',
    code: '75012',
    icon: '🏟️',
    desc: 'Bercy Village, Gare de Lyon — les habitants du 12ème viennent chez Repair Ninja Bastille pour des réparations express iPhone et Android. Accessible en 10 min depuis la Gare de Lyon.',
    temps: '10 min',
    details: ['Métro Bastille (L1)', 'RER A depuis Gare de Lyon', 'Bus 29, 91'],
    slug: 'bercy-paris-12',
  },
  {
    nom: 'Nation — Paris 12ème / 20ème',
    code: '75020',
    icon: '⭕',
    desc: 'Place de la Nation, les habitants du 20ème et est de Paris rejoignent facilement Repair Ninja Bastille en 15 minutes via le Ligne 1 du métro. Réparation rapide sans attente.',
    temps: '12 min',
    details: ['Métro Nation puis L1 vers Bastille', 'Bus 26, 56, 76'],
    slug: 'nation',
  },
  {
    nom: 'Île Saint-Louis & Notre-Dame (75004)',
    code: '75004',
    icon: '⛪',
    desc: 'L\'Île Saint-Louis et les environs de Notre-Dame font partie du 4ème arrondissement. Nos clients du centre historique de Paris nous rejoignent facilement à pied ou en quelques minutes.',
    temps: '8 min',
    details: ['À pied depuis Saint-Michel', 'Métro Cité (L4)', 'Bus 47, 63, 86'],
    slug: 'ile-saint-louis',
  },
]

export default function QuartiersPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-ninja-dark via-ninja-gray to-black text-white
                          py-10 sm:py-14 md:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(232,0,45,0.15),_transparent_60%)]" />
        <div className="container-site mx-auto relative z-10">
          <nav className="text-gray-400 text-sm mb-6" aria-label="Fil d'Ariane">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Quartiers desservis</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-ninja-red/20 border border-ninja-red/30
                            text-ninja-red px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-ninja-red rounded-full animate-pulse" />
              Paris 4, 11, 3, 12 et plus
            </div>

            {/* H1 SEO géographique */}
            <h1 className="text-white mb-4">
              Réparation téléphone{' '}
              <span className="text-ninja-red">Bastille & quartiers proches</span>
            </h1>

            <p className="text-gray-300 text-lg mb-8 max-w-2xl leading-relaxed">
              Repair Ninja Bastille est le <strong className="text-white">centre de réparation téléphone
              central de Paris est</strong>. Situé au 7 Rue de la Cerisaie (75004), nous servons tous les
              quartiers proches en moins de 15 minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+33750008410" className="btn-primary text-base py-3 px-7">
                📞 07.50.00.84.10
              </a>
              <Link href="/contact-rendez-vous" className="btn-secondary text-base py-3 px-7">
                🗓 RDV Gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUARTIERS ──────────────────────────────────────────────────────── */}
      <section className="section-pad bg-white" id="quartiers">
        <div className="container-site mx-auto">
          <div className="text-center mb-12">
            <p className="text-ninja-red font-semibold uppercase tracking-widest text-sm mb-2">Zone de chalandise</p>
            <h2 className="text-ninja-dark">
              Quartiers desservis depuis{' '}
              <span className="text-ninja-red">Bastille</span>
            </h2>
          </div>

          {/* H2 avec ancres quartiers */}
          <div className="space-y-6">
            {quartiers.map((q) => (
              <article
                key={q.slug}
                id={q.slug}
                className="bg-ninja-light rounded-2xl p-6 md:p-8 border border-gray-100
                           hover:border-ninja-red hover:shadow-md transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{q.icon}</span>
                      <h2 className="text-ninja-dark text-xl md:text-2xl font-bold">
                        {q.nom}
                      </h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">{q.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {q.details.map((detail) => (
                        <span key={detail}
                              className="bg-white text-gray-600 text-xs font-medium
                                         px-3 py-1.5 rounded-full border border-gray-200">
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2 flex-shrink-0">
                    <div className="bg-ninja-red text-white px-4 py-2 rounded-xl text-center">
                      <div className="text-xl font-extrabold">{q.temps}</div>
                      <div className="text-xs text-red-100">de Bastille</div>
                    </div>
                    <Link href="/contact-rendez-vous" className="btn-secondary text-sm py-2 px-4">
                      RDV depuis {q.code}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEXTE SEO ──────────────────────────────────────────────────────── */}
      <section className="section-pad bg-ninja-light">
        <div className="container-site mx-auto max-w-3xl">
          <h2 className="text-ninja-dark mb-6">
            Repair Ninja Bastille — Le réparateur de téléphone{' '}
            <span className="text-ninja-red">au centre de Paris est</span>
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Idéalement situé au <strong>7 Rue de la Cerisaie dans le 4ème arrondissement de Paris</strong>,
              Repair Ninja Bastille bénéficie d'une position géographique unique pour desservir l'ensemble
              du centre-est parisien. Notre boutique est accessible depuis tous les quartiers historiques
              de Paris en moins de 15 minutes.
            </p>
            <p>
              Que vous soyez au <strong>Marais (75003)</strong>, à <strong>Oberkampf (75011)</strong>,
              près de la <strong>Place de la Bastille (75004)</strong>, à <strong>Bercy (75012)</strong>
              ou à <strong>Nation (75020)</strong>, un seul réparateur téléphone de confiance s'impose :
              Repair Ninja Bastille.
            </p>
            <p>
              Notre équipe de techniciens certifiés intervient sur <strong>tous types d'appareils</strong> :
              iPhone toutes générations, smartphones Android (Samsung, Huawei, Xiaomi, OnePlus), MacBook,
              iPad et tablettes. Avec une note de <strong>4,9/5 sur Google</strong> et plus de 650 avis
              vérifiés, nous sommes le choix numéro un des habitants de Paris est pour la réparation express.
            </p>
          </div>
        </div>
      </section>

      {/* ── AVIS ───────────────────────────────────────────────────────────── */}
      <GoogleReviews />

      {/* ── MAP ────────────────────────────────────────────────────────────── */}
      <MapSection />
    </>
  )
}
