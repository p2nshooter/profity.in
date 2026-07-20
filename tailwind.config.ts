import type { Config } from 'tailwindcss';

// Profity.in — premium editorial finance theme: deep ink green, ivory paper,
// antique gold. Rich but restrained: the ornament carries the luxury, the
// text carries the value.
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0c1f17',
          900: '#11291e',
          800: '#173627',
          700: '#1f4732'
        },
        ivory: {
          50: '#faf7ef',
          100: '#f4eedd',
          200: '#e9dfc4'
        },
        gold: {
          300: '#e8c877',
          400: '#d9b155',
          500: '#c69a3a',
          600: '#a87f2a'
        }
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        deva: ['var(--font-deva)', 'serif']
      },
      maxWidth: {
        prose2: '42rem'
      }
    }
  },
  plugins: []
};

export default config;
