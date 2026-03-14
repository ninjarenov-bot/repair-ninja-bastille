// Rôle SEO : palette de marque + typographie lisible = meilleur Core Web Vitals
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ninja: {
          red:    '#E8002D',
          dark:   '#0F0F0F',
          gray:   '#1A1A2E',
          light:  '#F8F9FA',
          gold:   '#FFD700',
          accent: '#FF4757',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      backgroundOpacity: {
        '8': '0.08',
        '15': '0.15',
      },
    },
  },
  plugins: [],
}

export default config
