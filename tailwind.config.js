/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      height: {
        '15': '60px'
      },
      spacing:{
        "big":"48rem"
      },
      colors: {
        brightYellow: 'rgba(250,226,173,255)',
        brightRed: 'hsl(12, 88%, 59%)',
        brightGoldenBrown: 'rgba(130,81,51,255)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      },
      fontFamily:{
        nunito:['Nunito', 'sans-serif']
      }
    },
  },
  plugins: [],
}
