/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#101820',
        'light': '#C8C8C8',
        'grey': '#423F3E',
      },
      width: {
        'middle': '45%',
      }
    },
  },
  plugins: [],
}
