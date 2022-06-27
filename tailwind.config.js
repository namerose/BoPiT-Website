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
        'lightgrey': '#D1D1D1',
        'green-light': '#74E75D',
        'purple-light': '#BA7CFA',
        'yellow-light': '#F8F280',
        'orange-light': '#E8976E',
        'dark-sidebar': '#121418',
        'dark-content': '#1B1F24',
        'content-status': '#4B5663',
        'status-true': '#1FFF0D',
        'status-false': '#FF0D0D',
        'white-menu': '#f0f0f0',
      },
      width: {
        'middle': '45%',
      }
    },
  },
  plugins: [],
}
