const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Avenir Next', 'Avenir', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
