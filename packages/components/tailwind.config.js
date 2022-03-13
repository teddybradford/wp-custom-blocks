const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{ts,tsx,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Avenir Next', 'Avenir', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
