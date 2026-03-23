// Rôle SEO : E-E-A-T (preuves sociales locales) + Schema Review = rich snippets Google
import Link from 'next/link'

interface Review {
  author: string
  rating: number
  date: string
  text: string
  avatar: string
  service: string
}

const reviews: Review[] = [
  {
    author: 'Maxime D.',
    rating: 5,
    date: 'Il y a 2 semaines',
    text: "Écran iPhone 14 Pro cassé un vendredi soir, réparé le samedi matin en moins de 20 min ! Prix honnête, technicien ultra-pro. Je recommande à tous les habitants du 4ème.",
    avatar: 'M',
    service: 'Réparation écran iPhone',
  },
  {
    author: 'Sophie L.',
    rating: 5,
    date: 'Il y a 1 mois',
    text: "Batterie Samsung Galaxy gonflée, j'avais peur pour ma sécurité. Repair Ninja a tout réparé en urgence. Diagnostic gratuit, explication claire. Merci !",
    avatar: 'S',
    service: 'Remplacement batterie',
  },
  {
    author: 'Thomas B.',
    rating: 5,
    date: 'Il y a 3 semaines',
    text: "MacBook Pro qui ne s'allumait plus. Réparé en 1h alors que l'Apple Store m'avait dit 3 semaines. Deux fois moins cher. À 5 minutes de la Bastille.",
    avatar: 'T',
    service: 'Réparation MacBook',
  },
  {
    author: 'Léa M.',
    rating: 5,
    date: 'Il y a 1 semaine',
    text: "Connecteur de charge de mon iPhone 13 changé en 30 min chrono. Garantie 6 mois incluse. La meilleure adresse du Marais/Bastille !",
    avatar: 'L',
    service: 'Connecteur de charge',
  },
]

const avatarColors = ['bg-ninja-red', 'bg-blue-600', 'bg-green-600', 'bg-purple-600']

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Note : ${rating}/5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < rating ? 'text-amber-400 text-base' : 'text-gray-200 text-base'}>★</span>
      ))}
    </div>
  )
}

export default function GoogleReviews() {
  return (
    <section className="section-pad bg-white" aria-label="Avis Google Repair Ninja Bastille">
      <div className="container-site mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-label mb-3">Ils nous font confiance</p>
          <h2 className="text-gray-900 mb-6">
            Repair Ninja Bastille —{' '}
            <span className="text-ninja-red">4,9/5</span>{' '}
            (650+ avis Google)
          </h2>

          {/* Score global */}
          <div className="inline-flex items-center gap-3 sm:gap-4 bg-gray-50 border border-gray-200
                          rounded-2xl px-4 sm:px-8 py-4 sm:py-5 shadow-sm">
            <div className="text-center">
              <div className="text-5xl font-extrabold text-gray-900 leading-none">4,9</div>
              <div className="text-xs text-gray-400 mt-1">sur 5</div>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div>
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-2xl">★</span>
                ))}
              </div>
              <div className="text-sm text-gray-600 font-medium">650+ avis vérifiés</div>
              <div className="text-xs text-gray-400">Google Business Profile</div>
            </div>
          </div>
        </div>

        {/* Grille d'avis */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {reviews.map((review, idx) => (
            <article
              key={idx}
              className="bg-gray-50 rounded-2xl p-5 border border-gray-100
                         hover:shadow-md hover:border-gray-200 transition-all"
              itemScope
              itemType="https://schema.org/Review"
            >
              {/* itemReviewed : objet évalué (LocalBusiness) */}
              <div itemProp="itemReviewed" itemScope itemType="https://schema.org/LocalBusiness">
                <meta itemProp="name" content="Repair Ninja Bastille" />
                <meta itemProp="url" content="https://www.reparation-iphone-bastille.fr" />
              </div>

              {/* Header avis */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 ${avatarColors[idx]} text-white rounded-full
                                flex items-center justify-center font-bold text-sm flex-shrink-0`}>
                  {review.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm" itemProp="author" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">{review.author}</span>
                  </div>
                  <div className="text-xs text-gray-400">{review.date}</div>
                </div>
              </div>

              {/* Étoiles + service */}
              <div className="flex items-center justify-between mb-3"
                   itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                <meta itemProp="ratingValue" content={String(review.rating)} />
                <meta itemProp="bestRating" content="5" />
                <StarRating rating={review.rating} />
                <span className="text-xs text-ninja-red font-medium bg-ninja-red/8 px-2 py-0.5 rounded-full">
                  {review.service}
                </span>
              </div>

              {/* Texte */}
              <p className="text-sm text-gray-600 leading-relaxed" itemProp="reviewBody">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Badge vérifié */}
              <div className="mt-3 flex items-center gap-1.5 text-xs text-green-600 font-medium">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Avis Google vérifié
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://g.page/repairninja-bastille"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900 text-white font-bold
                       px-8 py-4 rounded-full hover:bg-gray-700 transition-colors shadow-md"
          >
            <span className="text-amber-400">⭐</span>
            Voir tous les avis sur Google
          </a>
          <p className="text-xs text-gray-400 mt-3">
            Repair Ninja Bastille — 7 Rue de la Cerisaie, 75004 Paris
          </p>
        </div>
      </div>
    </section>
  )
}
