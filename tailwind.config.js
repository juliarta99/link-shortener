/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
          primary: '#F5D061'
      }
    },
    fontFamily: {
        poppins : ["'Poppins'", 'sans-serif']
    },
  },
  plugins: [],
}

