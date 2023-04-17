/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'xs': '320px',
      ...defaultTheme.screens,
    },
    colors: {
      'downrider': '#071F3F'
    },
    extend: {},
  },
  plugins: [],
};
