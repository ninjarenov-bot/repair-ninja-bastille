'use client'
import { useState } from 'react'

const WA_NUMBER = '33750008410'
const WA_MESSAGE = encodeURIComponent(
  'Bonjour Repair Ninja 🥷 ! Je souhaite obtenir un devis pour la réparation de mon appareil.'
)
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`

export default function WhatsAppWidget() {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="fixed bottom-6 left-5 z-50 flex items-center gap-3">

      {/* Bulle tooltip */}
      <div
        className={`bg-white text-gray-800 text-sm font-semibold px-4 py-2.5 rounded-2xl
                    shadow-lg border border-gray-100 whitespace-nowrap transition-all duration-300
                    ${hovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 pointer-events-none'}`}
      >
        <span className="text-green-600 mr-1">●</span> Écrire sur WhatsApp
        <span className="block text-xs text-gray-400 font-normal mt-0.5">Réponse rapide garantie 🥷</span>
      </div>

      {/* Bouton WhatsApp */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter Repair Ninja sur WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative w-14 h-14 rounded-full shadow-xl flex items-center justify-center
                   transition-transform duration-200 hover:scale-110 active:scale-95"
        style={{ backgroundColor: '#25D366' }}
      >
        {/* Icône WhatsApp SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="30"
          height="30"
          fill="white"
          aria-hidden="true"
        >
          <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.4 2 7.8L.2 31.6l8-2.2C10.5 30.7 13.2 31.6 16 31.6c8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.5c-2.5 0-5-.7-7.1-2l-.5-.3-5.1 1.4 1.4-4.9-.3-.5C3 20.9 2.2 18.5 2.2 16 2.2 8.4 8.4 2.2 16 2.2S29.8 8.4 29.8 16 23.6 28.9 16 28.9zm8.5-11.5c-.5-.2-2.8-1.4-3.2-1.5-.4-.2-.7-.2-1 .2-.3.4-1.1 1.5-1.4 1.8-.3.3-.5.4-1 .2-.5-.2-2-.7-3.8-2.4-1.4-1.3-2.4-2.8-2.6-3.3-.3-.5 0-.7.2-1 .2-.2.5-.5.7-.8.2-.2.3-.5.4-.7.2-.3.1-.5 0-.8-.1-.2-1-2.4-1.4-3.3-.4-.9-.7-.7-1-.7h-.9c-.3 0-.8.1-1.2.5-.4.4-1.5 1.5-1.5 3.6 0 2.1 1.6 4.2 1.8 4.5.2.3 3.1 4.7 7.5 6.6 1 .5 1.9.7 2.6.9 1.1.3 2.1.3 2.9.2.9-.1 2.8-1.1 3.2-2.2.4-1.1.4-2 .3-2.2-.2-.3-.5-.4-.9-.6z" />
        </svg>

        {/* Pastille pulsante verte */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-white animate-pulse" />
      </a>
    </div>
  )
}
