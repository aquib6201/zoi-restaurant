/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        coral: {
          DEFAULT: '#2d4990',
          hover: '#243d7a',
        },
        dark: '#0b0f1a',
        warmgrey: '#EDF1F8',
        'text-body-light': 'rgba(255, 255, 255, 0.7)',
        'border-light': 'rgba(255, 255, 255, 0.15)',
        'border-dark': 'rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        sans: ['Geist Sans', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'],
        title: ['Playfair Display', 'serif'],
        cursive: ['Satisfy', 'cursive'],
        script: ['Script', 'cursive'],
      },
      maxWidth: {
        container: '1400px',
      },
      borderRadius: {
        pill: '9999px',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
      animation: {
        bounce: 'bounce 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
