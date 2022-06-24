module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      adelia: ["ADELIA", "cursive"],
      varela: ['"Varela Round"', "sans-serif"],
      sendflower: ['"Send Flowers"', "cursive"],
      oswald: ["Oswald", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      lato: ["Lato", "sans-serif"],
      updock: ['Updock', 'cursive'],


    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}