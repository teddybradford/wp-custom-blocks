module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    'postcss-preset-env': {
      features: { 'nesting-rules': false },
    },
    'postcss-prefix-selector': {
      prefix: '.tw',
      transform: (prefix, selector, prefixedSelector) =>
        prefixedSelector.replace(
          new RegExp(`(${prefix}\\s+)?(\\B:root|\\bhtml|\\bbody)\\b`, 'g'),
          prefix
        ),
    },
  },
};
