import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        night: {
          950: '#070c1a',
          900: '#0f172a',
          800: '#141f38',
          700: '#1b2a4a',
          600: '#233457',
        },
        gold: {
          200: '#fbe7a1',
          300: '#f6d76a',
          400: '#f2c94c',
          500: '#e0ac1f',
          600: '#b8860b',
        },
        sand: {
          100: '#f8fafc',
          300: '#cbd5e1',
          400: '#94a3b8',
        },
      },
      fontFamily: {
        display: ['var(--font-sora)', 'sans-serif'],
        body: ['var(--font-manrope)', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #f6d76a 0%, #e0ac1f 45%, #b8860b 100%)',
        'night-radial': 'radial-gradient(circle at 50% -10%, #1b2a4a 0%, #0f172a 45%, #070c1a 100%)',
      },
      boxShadow: {
        gold: '0 8px 30px -8px rgba(224, 172, 31, 0.45)',
        'gold-lg': '0 20px 60px -15px rgba(224, 172, 31, 0.35)',
        card: '0 10px 40px -12px rgba(0,0,0,0.55)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(var(--tilt, 0deg))' },
          '50%': { transform: 'translateY(-18px) rotate(var(--tilt, 0deg))' },
        },
        drift: {
          '0%': { transform: 'translateX(-6%) translateY(0)' },
          '50%': { transform: 'translateX(4%) translateY(-3%)' },
          '100%': { transform: 'translateX(-6%) translateY(0)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.15' },
          '50%': { opacity: '0.9' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        drift: 'drift 14s ease-in-out infinite',
        twinkle: 'twinkle 3.2s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
