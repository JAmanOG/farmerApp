/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"], // Include all relevant files
  presets: [require("nativewind/preset")], // Add this line
  theme: {
    extend: {
      colors: {
        greenlight: '#8BC34A',
        greenmodern: '#4CAF50 ',
        brownwarm: '#795548',
        naturalBrown: '#6D4C41 ',
        Bluemodern: '#2196F3',
        Bluecalm: '#42A5F5',
        goldyellowbright: '#FFC107',
        goldyellowwarm: '#FFEB3B ',
        blackbetter: '#524359 ',
        gray: '#8f8593',
        purple: '#6c56f2'
      },
      fontFamily: {
        merriweatherblack: ["MerriweatherBlack", "sans-serif"],
        merriweatherbold: ["MerriweatherBold", "sans-serif"],
        merriweatherbolditalic: ["Merriweather-BoldItalic", "sans-serif"],
      },
    },

    plugins: [],
  }
}