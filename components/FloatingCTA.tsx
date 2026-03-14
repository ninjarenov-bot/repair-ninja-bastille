// Rôle SEO : taux de conversion élevé + signal engagement utilisateur = meilleur CTR et ranking
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 250)
    window.addEventListener('scroll', handleScroll, { passive: true })
    const timer = setTimeout(() => setVisible(true), 3500)
    return () => { window.removeEventListener('scroll', handleScroll); clearTimeout(timer) }
  }, [])

  if (dismissed) return null

  return (
    <div
      className={`fixed bottom-6 right-4 z-50 flex flex-col items-end gap-2
                  transition-all duration-500
                  ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}
    >
      {/* Fermer */}
      <button
        onClick={() => setDismissed(true)}
        className="w-5 h-5 bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-full
                   flex items-center justify-center text-xs self-end mr-1 transition-colors"
        aria-label="Fermer"
      >
        ✕
      </button>

      {/* Avis Google — caché sur très petit mobile */}
      <a
        href="https://g.page/repairninja-bastille"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:flex items-center gap-2 bg-white text-gray-900 font-semibold text-xs sm:text-sm
                   px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl shadow-lg hover:shadow-xl border border-gray-200
                   transition-all hover:-translate-x-0.5"
      >
        <span className="text-amber-400 text-base">⭐</span>
        <span>4,9/5 Google</span>
      </a>

      {/* Téléphone */}
      <a
        href="tel:+33750008410"
        className="flex items-center gap-2 bg-gray-900 text-white font-bold text-xs sm:text-sm
                   px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl shadow-lg hover:bg-gray-700
                   transition-all hover:-translate-x-0.5"
      >
        <span className="text-base">📱</span>
        <span>07.50.00.84.10</span>
      </a>

      {/* RDV — CTA principal */}
      <Link
        href="/contact-rendez-vous"
        className="flex items-center gap-2 bg-ninja-red text-white font-bold text-xs sm:text-sm
                   px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl floating-cta-shadow hover:bg-ninja-accent
                   transition-all hover:-translate-x-0.5"
      >
        <span>🗓</span>
        RDV Gratuit
      </Link>

      {/* Badge pulsant — caché sur mobile */}
      <div className="hidden sm:flex items-center gap-1.5 bg-green-500 text-white text-xs font-semibold
                      px-3 py-1.5 rounded-full shadow-md">
        <span className="w-1.5 h-1.5 bg-white rounded-full inline-block animate-pulse" />
        Réparation en 20 min
      </div>
    </div>
  )
}
