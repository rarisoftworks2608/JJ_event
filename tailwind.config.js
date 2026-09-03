/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf3f4',
          100: '#fbe4e7',
          200: '#f7ced4',
          300: '#f0aab5',
          400: '#e37788',
          500: '#d14d64',
          600: '#b8324b',
          700: '#992238',
          800: '#801d30', // Deep Royal Burgundy / Maroon
          900: '#5c1020',
          950: '#380611',
          DEFAULT: '#801d30',
        },
        gold: {
          50: '#fdfcf7',
          100: '#faf7eb',
          200: '#f3eccc',
          300: '#eadea3',
          400: '#dfcc77',
          500: '#d4af37', // Imperial Champagne Gold
          600: '#b89228',
          700: '#94701f',
          800: '#7a5a1e',
          900: '#674a1d',
          DEFAULT: '#d4af37',
        },
        obsidian: {
          800: '#1a1d23',
          900: '#111317',
          950: '#0a0c0e',
          DEFAULT: '#111317',
        },
        pearl: {
          50: '#ffffff',
          100: '#fbf9f6',
          200: '#f5f0e8',
          300: '#ebe2d4',
          DEFAULT: '#fbf9f6',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cinzel"', '"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 35px -5px rgba(212, 175, 55, 0.35)',
        'maroon-glow': '0 0 35px -5px rgba(128, 29, 48, 0.35)',
        'luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.08)',
        'luxury-hover': '0 30px 60px -20px rgba(0, 0, 0, 0.16)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.06)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #f7e7b4 0%, #d4af37 50%, #aa8420 100%)',
        'maroon-gradient': 'linear-gradient(135deg, #801d30 0%, #460914 100%)',
        'dark-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.02) 100%)',
        'light-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)',
      }
    },
  },
  plugins: [],
}
