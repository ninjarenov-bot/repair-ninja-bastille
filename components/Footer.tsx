// Rôle SEO : NAP cohérent en footer (Name Address Phone) = signal fort Google My Business
import Link from 'next/link'

const serviceLinks = [
  { href: '/reparation-iphone-paris-bastille', label: 'Réparation iPhone Bastille' },
  { href: '/reparation-smartphone-paris-4', label: 'Réparation Smartphone Paris 4' },
  { href: '/reparation-macbook-bastille', label: 'Réparation MacBook Bastille' },
  { href: '/reparation-tablette-paris-11', label: 'Réparation Tablette Paris 11' },
  { href: '/achat-revente', label: '💶 Achat-Revente' },
  { href: '/fidelite', label: '🏆 Programme Fidélité' },
  { href: '/services-pro', label: '🏢 Services Pro & B2B' },
  { href: '/blog', label: '📝 Blog & Guides' },
  { href: '/quartiers-bastille-paris', label: 'Quartiers desservis' },
  { href: '/contact-rendez-vous', label: 'Prendre RDV' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-ninja-dark text-gray-300" itemScope itemType="https://schema.org/LocalBusiness">
      {/* Section principale */}
      <div className="container-site mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Colonne 1 : Brand + NAP */}
        <div>
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <span className="text-3xl">🥷</span>
            <span className="font-extrabold text-white text-xl">
              Repair<span className="text-ninja-red">Ninja</span>
            </span>
          </Link>
          <p className="text-sm text-gray-400 mb-3 leading-relaxed">
            Réparation rapide de téléphones, iPhones, Samsung, MacBook et tablettes
            à Bastille — Paris 4ème.
          </p>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15
                          px-3 py-1.5 rounded-full text-xs font-semibold text-gray-300 mb-4">
            🇫🇷 Entreprise française indépendante
          </div>

          {/* NAP schema.org */}
          <address className="not-italic text-sm space-y-2">
            <div className="flex items-start gap-2" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <span className="mt-0.5">📍</span>
              <span>
                <span itemProp="streetAddress">7 Rue de la Cerisaie</span>,{' '}
                <span itemProp="postalCode">75004</span>{' '}
                <span itemProp="addressLocality">Paris</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span>📞</span>
              <a
                href="tel:+33750008410"
                className="hover:text-white transition-colors"
                itemProp="telephone"
              >
                07.50.00.84.10
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span>🕐</span>
              <span itemProp="openingHours" content="Mo-Sa 10:00-19:00">
                Lun–Sam : 10h–19h
              </span>
            </div>
          </address>

          {/* Google avis */}
          <a
            href="https://g.page/repairninja-bastille"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 bg-white/10 hover:bg-white/20
                       px-3 py-2 rounded-lg text-sm transition-colors"
          >
            <span className="text-ninja-gold">★★★★★</span>
            <span className="font-semibold text-white">4,9/5</span>
            <span className="text-gray-400">• 650+ avis</span>
          </a>
        </div>

        {/* Colonne 2 : Services */}
        <div>
          <h3 className="font-bold text-white mb-4 text-base uppercase tracking-wide">
            Nos Services
          </h3>
          <ul className="space-y-2 list-none m-0 p-0">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm hover:text-white hover:underline transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Colonne 3 : Marques + Map mini */}
        <div>
          <h3 className="font-bold text-white mb-4 text-base uppercase tracking-wide">
            Marques Réparées
          </h3>
          <ul className="grid grid-cols-2 gap-1.5 list-none m-0 p-0 text-sm mb-6">
            {['iPhone / Apple', 'Samsung', 'Huawei', 'Xiaomi', 'OnePlus', 'Google Pixel', 'Sony', 'MacBook'].map((brand) => (
              <li key={brand} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-ninja-red rounded-full flex-shrink-0" />
                {brand}
              </li>
            ))}
          </ul>

          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            <span className="badge-trust">✅ Garantie 6 mois</span>
            <span className="badge-trust">🔬 Diagnostic GRATUIT</span>
            <span className="badge-trust">⚡ 20 min chrono</span>
          </div>
        </div>
      </div>

      {/* Barre de bas */}
      <div className="border-t border-white/10">
        <div className="container-site mx-auto px-4 py-4 flex flex-col md:flex-row
                        items-center justify-between gap-2 text-xs text-gray-500">
          <span className="flex items-center gap-2 flex-wrap">
            🇫🇷
            <span>© {currentYear}{' '}
              <span itemProp="name" className="font-semibold text-gray-400">
                Repair Ninja Bastille
              </span>{' '}
              — Réparateur français indépendant • 7 Rue de la Cerisaie, 75004 Paris
            </span>
          </span>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <Link href="/contact-rendez-vous" className="hover:text-white transition-colors">Contact</Link>
            <a href="https://www.repairninja.fr" className="hover:text-white transition-colors">
              repairninja.fr
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
