/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBackground: '#1a1a1a',
        darkSurface: '#222',
        lightText: '#eee',
        secondaryText: '#888',
        accentText: '#f5f5f5',
        buttonBg: '#f5f5f5',
        buttonText: '#000',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}