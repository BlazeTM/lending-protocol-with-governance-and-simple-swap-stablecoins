/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        '440px': '440px',
        '600px': '600px',
        '700px': '610px',
        '725px': '725px',
        '750px': '825px',
      },
      colors: {
        'blackmy': '#7858A6',
        'second-bg-color': '#5B4B8A',
        'button': '#4C3575',
        'button2': '#371B58',
      },
    },
    
  },
  plugins: [],
}