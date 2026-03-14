// Rôle SEO : metadata globaux + Schema.org LocalBusiness sur chaque page = rich snippets Google
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'
import WhatsAppWidget from '@/components/WhatsAppWidget'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// ── Métadonnées globales ──────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL('https://www.repairninja.fr'),
  title: {
    default: 'Repair Ninja Bastille — Réparation Téléphone Paris 4 | 20 min',
    template: '%s | Repair Ninja Bastille',
  },
  description:
    'Réparation téléphone à Bastille en 20 min. iPhone, Samsung, Huawei, MacBook. Diagnostic GRATUIT • Garantie 6 mois. 7 Rue de la Cerisaie, Paris 75004. ☎ 07.50.00.84.10',
  keywords: [
    'réparation téléphone Bastille',
    'réparation iPhone Paris 4',
    'réparation smartphone Bastille',
    'réparation écran Paris',
    'réparation batterie iPhone Paris',
    'Repair Ninja Bastille',
    'réparateur téléphone 75004',
  ],
  authors: [{ name: 'Repair Ninja Bastille' }],
  creator: 'Repair Ninja Bastille',
  publisher: 'Repair Ninja Bastille',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.repairninja.fr',
    siteName: 'Repair Ninja Bastille',
    title: 'Repair Ninja Bastille — Réparation Téléphone Paris 4 en 20 min',
    description:
      'Smartphone cassé ? Réparé en 20 min à Bastille ! Diagnostic GRATUIT • Garantie 6 mois • 4,9/5 sur Google.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Repair Ninja Bastille — Réparation téléphone Paris 4',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Repair Ninja Bastille — Réparation Téléphone Paris 4',
    description: 'Smartphone cassé ? Réparé en 20 min ! Diagnostic GRATUIT.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.repairninja.fr',
  },
  verification: {
    google: 'VOTRE_CODE_VERIFICATION_GOOGLE',
  },
}

// ── Schema.org LocalBusiness JSON-LD ─────────────────────────────────────────
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.repairninja.fr/#localBusiness',
  name: 'Repair Ninja Bastille',
  alternateName: 'Repair Ninja Paris 4',
  description:
    'Réparation téléphone, iPhone, Samsung, MacBook et tablettes à Bastille Paris 4. Diagnostic gratuit, réparation en 20 minutes, garantie 6 mois.',
  url: 'https://www.repairninja.fr',
  telephone: '+33750008410',
  email: 'contact@repairninja.fr',
  image: 'https://www.repairninja.fr/og-image.jpg',
  logo: 'https://www.repairninja.fr/logo.png',
  priceRange: '€€',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Cash, Credit Card, Contactless',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '7 Rue de la Cerisaie',
    addressLocality: 'Paris',
    postalCode: '75004',
    addressRegion: 'Île-de-France',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.853252,
    longitude: 2.367891,
  },
  hasMap: 'https://g.page/repairninja-bastille',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '19:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '650',
    bestRating: '5',
    worstRating: '1',
  },
  sameAs: [
    'https://g.page/repairninja-bastille',
    'https://www.repairninja.fr',
  ],
  areaServed: [
    { '@type': 'City', name: 'Paris', postalCode: '75004' },
    { '@type': 'City', name: 'Paris 11ème', postalCode: '75011' },
    { '@type': 'City', name: 'Le Marais', postalCode: '75003' },
    { '@type': 'City', name: 'Bercy', postalCode: '75012' },
  ],
  serviceType: [
    'Réparation iPhone',
    'Réparation Samsung',
    'Réparation MacBook',
    'Réparation iPad',
    'Remplacement écran',
    'Remplacement batterie',
    'Réparation connecteur charge',
  ],
}

// ── WebSite schema + SearchAction ────────────────────────────────────────────
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.repairninja.fr/#website',
  url: 'https://www.repairninja.fr',
  name: 'Repair Ninja Bastille',
  description: 'Réparation téléphone, iPhone, Samsung, MacBook à Bastille Paris 4. Diagnostic GRATUIT. 07.50.00.84.10',
  publisher: { '@id': 'https://www.repairninja.fr/#localBusiness' },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.repairninja.fr/?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

// ── Organization schema ───────────────────────────────────────────────────────
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.repairninja.fr/#organization',
  name: 'Repair Ninja Bastille',
  url: 'https://www.repairninja.fr',
  logo: {
    '@type': 'ImageObject',
    url: 'https://www.repairninja.fr/logo.png',
    width: 200,
    height: 200,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+33750008410',
    contactType: 'customer service',
    areaServed: 'FR',
    availableLanguage: 'French',
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
      opens: '10:00',
      closes: '19:00',
    },
  },
  sameAs: [
    'https://g.page/repairninja-bastille',
    'https://www.facebook.com/repairninja',
    'https://www.instagram.com/repairninja',
  ],
}

// ── BreadcrumbList global (accueil) ──────────────────────────────────────────
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.repairninja.fr' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        {/* Schema.org LocalBusiness — injecté sur toutes les pages */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        {/* Preconnect Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Canonical + viewport déjà gérés par Next.js metadata */}
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
        <WhatsAppWidget />
      </body>
    </html>
  )
}
