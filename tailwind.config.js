/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6',
          dark: '#1d4ed8',
          light: '#60a5fa',
        },
        navy: {
          50:  '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#1a2e44',
          900: '#0f1f33',
          950: '#080d14',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float':      'float 5s ease-in-out infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        'shimmer':    'shimmer 2.5s infinite',
        'pulse-ring': 'pulse-ring 2s ease-out infinite',
        'fade-in':    'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-16px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' },
        },
        'pulse-ring': {
          '0%':   { transform: 'scale(1)',   opacity: '0.5' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        fadeIn: {
          '0%':   { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      boxShadow: {
        'glow-primary': '0 0 40px rgba(59,130,246,0.35)',
        'glow-sm':      '0 0 20px rgba(59,130,246,0.2)',
        'card':         '0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)',
        'card-hover':   '0 8px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(59,130,246,0.15)',
      },
    },
  },
  plugins: [],
}

