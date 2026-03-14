// Rôle SEO : page conversion principale — formulaire structuré + NAP = signal local fort
import type { Metadata } from 'next'
import Link from 'next/link'
import AppointmentForm from '@/components/AppointmentForm'
import MapSection from '@/components/MapSection'

export const metadata: Metadata = {
  title: 'Contact & Prise de RDV — Repair Ninja Bastille Paris 4 | Réparation Téléphone',
  description:
    'Prenez rendez-vous gratuitement chez Repair Ninja Bastille. 7 Rue de la Cerisaie, Paris 75004. ☎ 07.50.00.84.10 — Lun-Sam 10h-19h. Diagnostic GRATUIT. Réponse sous 30 min.',
  alternates: { canonical: 'https://www.repairninja.fr/contact-rendez-vous' },
  openGraph: {
    title: 'Contact & RDV Repair Ninja Bastille — Réparation Téléphone Paris 4',
    description: 'Prenez RDV gratuitement. 7 Rue de la Cerisaie, 75004 Paris. ☎ 07.50.00.84.10',
    url: 'https://www.repairninja.fr/contact-rendez-vous',
  },
}

const contactMethods = [
  {
    icon: '📞',
    title: 'Téléphone',
    value: '07.50.00.84.10',
    action: 'tel:+33750008410',
    label: 'Appeler maintenant',
    desc: 'Réponse immédiate Lun-Sam 10h-19h',
    color: 'bg-ninja-red',
  },
  {
    icon: '📍',
    title: 'En boutique',
    value: '7 Rue de la Cerisaie',
    action: 'https://www.google.com/maps/dir/?api=1&destination=7+Rue+de+la+Cerisaie+Paris+75004',
    label: 'Itinéraire Google Maps',
    desc: 'Paris 75004 — 2 min de Bastille',
    color: 'bg-ninja-gray',
  },
  {
    icon: '🗓',
    title: 'RDV en ligne',
    value: 'Formulaire ci-dessous',
    action: '#form-rdv',
    label: 'Réserver un créneau',
    desc: 'Réponse sous 30 min',
    color: 'bg-green-600',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 border-b border-gray-200 py-14 md:py-18 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(232,0,45,0.06),_transparent_60%)]" />
        <div className="container-site mx-auto relative z-10">
          <nav className="text-gray-400 text-sm mb-6" aria-label="Fil d'Ariane">
            <Link href="/" className="hover:text-ninja-red transition-colors">Accueil</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Contact & Rendez-vous</span>
          </nav>

          <div className="max-w-2xl">
            <h1 className="text-ninja-dark mb-4">
              Contact & RDV —{' '}
              <span className="text-ninja-red">Repair Ninja Bastille</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Prenez rendez-vous gratuitement ou appelez-nous directement.
              Diagnostic <strong className="text-ninja-dark">100% gratuit</strong>, réparation express
              en <strong className="text-ninja-dark">20 minutes</strong>.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="badge-trust">⭐ 4,9/5 Google</span>
              <span className="badge-trust">🕐 Lun-Sam 10h-19h</span>
              <span className="badge-trust">📍 75004 Paris</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── MÉTHODES DE CONTACT ────────────────────────────────────────────── */}
      <section className="py-10 px-4 bg-white">
        <div className="container-site mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {contactMethods.map((method) => (
              <div key={method.title}
                   className="bg-ninja-light rounded-2xl p-6 border border-gray-100
                              hover:shadow-md transition-shadow text-center">
                <div className="text-4xl mb-3">{method.icon}</div>
                <h3 className="font-bold text-ninja-dark text-lg mb-1">{method.title}</h3>
                <p className="text-ninja-red font-semibold mb-1 text-sm">{method.value}</p>
                <p className="text-gray-400 text-xs mb-4">{method.desc}</p>
                <a
                  href={method.action}
                  className={`inline-flex items-center gap-2 ${method.color} text-white
                             font-semibold text-sm px-4 py-2.5 rounded-xl hover:opacity-90
                             transition-opacity`}
                >
                  {method.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORMULAIRE ─────────────────────────────────────────────────────── */}
      <section className="section-pad bg-ninja-light" id="form-rdv">
        <div className="container-site mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-ninja-red font-semibold uppercase tracking-widest text-sm mb-2">
                Rendez-vous
              </p>
              <h2 className="text-ninja-dark mb-3">
                Réserver un créneau <span className="text-ninja-red">gratuit</span>
              </h2>
              <p className="text-gray-500">
                Remplissez le formulaire — nous vous confirmons sous 30 minutes.
              </p>
            </div>

            <AppointmentForm />

            {/* Infos post-form */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-sm">
              <div className="bg-white rounded-xl p-4 border border-gray-100">
                <div className="text-2xl mb-1">🔔</div>
                <p className="font-semibold text-ninja-dark">Confirmation</p>
                <p className="text-gray-500 text-xs">Par SMS ou email sous 30 min</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-100">
                <div className="text-2xl mb-1">🔬</div>
                <p className="font-semibold text-ninja-dark">Diagnostic gratuit</p>
                <p className="text-gray-500 text-xs">Devis avant toute intervention</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-100">
                <div className="text-2xl mb-1">⚡</div>
                <p className="font-semibold text-ninja-dark">Réparation express</p>
                <p className="text-gray-500 text-xs">20 à 45 min sur place</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HORAIRES & NAP ─────────────────────────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="container-site mx-auto max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Horaires */}
            <div>
              <h2 className="text-ninja-dark mb-5 text-2xl">
                Nos <span className="text-ninja-red">horaires</span>
              </h2>
              <div className="space-y-2">
                {[
                  { jour: 'Lundi', h: '10h00 – 19h00', open: true },
                  { jour: 'Mardi', h: '10h00 – 19h00', open: true },
                  { jour: 'Mercredi', h: '10h00 – 19h00', open: true },
                  { jour: 'Jeudi', h: '10h00 – 19h00', open: true },
                  { jour: 'Vendredi', h: '10h00 – 19h00', open: true },
                  { jour: 'Samedi', h: '10h00 – 19h00', open: true },
                  { jour: 'Dimanche', h: 'Fermé', open: false },
                ].map(({ jour, h, open }) => (
                  <div key={jour}
                       className="flex justify-between items-center py-2.5 px-4
                                  rounded-lg bg-ninja-light border border-gray-100">
                    <span className="font-medium text-ninja-dark text-sm">{jour}</span>
                    <span className={`text-sm font-semibold ${open ? 'text-green-600' : 'text-red-500'}`}>
                      {h}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Coordonnées */}
            <div>
              <h2 className="text-ninja-dark mb-5 text-2xl">
                Nous <span className="text-ninja-red">trouver</span>
              </h2>
              <address
                className="not-italic space-y-4"
                itemScope itemType="https://schema.org/LocalBusiness"
              >
                <meta itemProp="name" content="Repair Ninja Bastille" />
                <div className="flex items-start gap-3 bg-ninja-light rounded-xl p-4">
                  <span className="text-2xl">📍</span>
                  <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                    <p className="font-bold text-ninja-dark">Adresse</p>
                    <p className="text-gray-600 text-sm">
                      <span itemProp="streetAddress">7 Rue de la Cerisaie</span><br />
                      <span itemProp="postalCode">75004</span>{' '}
                      <span itemProp="addressLocality">Paris</span>,{' '}
                      <span itemProp="addressCountry">France</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-ninja-light rounded-xl p-4">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="font-bold text-ninja-dark">Téléphone</p>
                    <a href="tel:+33750008410"
                       className="text-ninja-red font-semibold hover:underline"
                       itemProp="telephone">
                      07.50.00.84.10
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-ninja-light rounded-xl p-4">
                  <span className="text-2xl">🚇</span>
                  <div>
                    <p className="font-bold text-ninja-dark">Transports</p>
                    <p className="text-gray-600 text-sm">
                      Métro Bastille — Lignes 1, 5, 8<br />
                      Bus : 29, 69, 86, 87, 91
                    </p>
                  </div>
                </div>
                <a
                  href="https://g.page/repairninja-bastille"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-ninja-red/10 border border-ninja-red/20
                             text-ninja-red font-semibold text-sm rounded-xl px-4 py-3
                             hover:bg-ninja-red hover:text-white transition-colors"
                >
                  <span className="text-ninja-gold">⭐</span>
                  Repair Ninja Bastille — 4,9/5 (650+ avis Google)
                </a>
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP ────────────────────────────────────────────────────────────── */}
      <MapSection />
    </>
  )
}
