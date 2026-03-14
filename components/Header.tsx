// Rôle SEO : NAP persistant + logo + maillage interne — header style CalFix dark/clean
'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { href: '/reparation-iphone-paris-bastille', label: 'iPhone' },
  { href: '/reparation-smartphone-paris-4', label: 'Smartphone' },
  { href: '/reparation-macbook-bastille', label: 'MacBook' },
  { href: '/reparation-tablette-paris-11', label: 'Tablette' },
  { href: '/achat-revente', label: '💶 Achat-Revente' },
  { href: '/services-pro', label: 'Pro & B2B' },
  { href: '/blog', label: 'Blog' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#0f0f0f]">
      {/* Barre rouge top */}
      <div className="bg-ninja-red text-white text-xs py-1.5 px-4">
        <div className="container-site flex flex-wrap items-center justify-between gap-1">
          <span className="flex items-center gap-2">
            <span className="text-amber-300">★</span>
            <strong>4,9/5 Google</strong>
            <span className="hidden sm:inline text-red-100"> — 650+ avis • Diagnostic GRATUIT</span>
            <span className="hidden md:inline-flex items-center gap-1 bg-white/15 px-2 py-0.5 rounded-full text-xs font-semibold">
              🇫🇷 Réparateur français
            </span>
          </span>
          <a href="tel:+33750008410" className="font-bold hover:underline flex items-center gap-1">
            📱 07.50.00.84.10
            <span className="hidden md:inline text-red-100 font-normal"> • Lun-Sam 10h–19h</span>
          </a>
        </div>
      </div>

      {/* Nav principale */}
      <nav
        className="container-site mx-auto px-4 py-3 flex items-center justify-between"
        aria-label="Navigation principale"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <div className="w-16 h-16 relative flex-shrink-0 rounded-full border-2 border-white shadow-md overflow-hidden">
            <Image
              src="/logo.png"
              alt="Repair Ninja Bastille"
              fill
              className="object-cover"
            />
          </div>
          <span className="font-extrabold text-white text-lg leading-tight">
            Repair<span className="text-ninja-red">Ninja</span>
            <span className="block text-xs font-normal text-gray-400 -mt-0.5">
              Bastille • Paris 4
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-0.5 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-gray-300 hover:text-white font-medium px-4 py-2 rounded-lg
                           hover:bg-white/10 transition-colors text-sm"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Desktop — style CalFix */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+33750008410"
             className="text-gray-300 hover:text-white font-medium text-sm px-3 py-2
                        transition-colors hover:bg-white/10 rounded-lg">
            📞 Appeler
          </a>
          <Link
            href="/contact-rendez-vous"
            className="flex items-center gap-2 bg-white text-gray-900 font-bold
                       text-sm px-5 py-2.5 rounded-full hover:bg-gray-100 transition-all"
          >
            CONTACT
            <span className="w-6 h-6 bg-ninja-red rounded-full flex items-center justify-center text-white text-xs">
              →
            </span>
          </Link>
        </div>

        {/* Burger mobile */}
        <button
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Menu navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </nav>

      {/* Menu mobile */}
      {open && (
        <div className="lg:hidden bg-[#1a1a1a] border-t border-white/10 px-4 pb-4">
          <ul className="flex flex-col gap-1 pt-2 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-gray-300 hover:text-white font-medium py-2.5 px-3
                             rounded-lg hover:bg-white/10 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-2 mt-3 pt-3 border-t border-white/10">
            <a href="tel:+33750008410" className="btn-secondary text-sm py-2.5 flex-1 justify-center">
              📞 Appeler
            </a>
            <Link
              href="/contact-rendez-vous"
              className="btn-primary text-sm py-2.5 flex-1 justify-center"
              onClick={() => setOpen(false)}
            >
              RDV Gratuit
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
