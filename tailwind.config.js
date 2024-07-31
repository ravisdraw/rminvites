/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily : {
        pattaya : ['"Pattaya"', ...defaultTheme.fontFamily.sans],
        poppins : ['"Poppins"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

