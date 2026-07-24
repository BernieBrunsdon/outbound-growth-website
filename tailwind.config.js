/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#488080',
          dark: '#356666',
        },
        accent: '#5AA9A8',
        // Deep navy atmosphere (matches hero video)
        navy: '#0B1220',
        ink: '#E8EEF7',
        muted: '#94A3B8',
        bg: '#0B1220',
        surface: '#151F32',
        panel: '#1A2640',
      },
      borderRadius: {
        custom: '10px',
      },
      fontFamily: {
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
        display: ['Sora', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        regular: '400',
        semibold: '600',
        bold: '700',
      },
      animation: {
        'hero-rise': 'heroRise 0.7s ease-out both',
        'hero-fade': 'heroFade 0.9s ease-out 0.15s both',
      },
      keyframes: {
        heroRise: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        heroFade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
