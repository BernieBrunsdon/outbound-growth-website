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
        primary: '#0B63D6',
        accent: '#06A77D',
        ink: '#0F1724',
        muted: '#5B6472',
        bg: '#F7F8FA',
        surface: '#FFFFFF',
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
