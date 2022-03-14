const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  ...defaultConfig,
  plugins: [
    ...defaultConfig.plugins,
    new CopyPlugin({
      patterns: [
        { from: require.resolve('components/lib/index.css'), to: 'components.css' },
        { from: require.resolve('render-components'), to: 'render-components.js' },
      ],
    }),
  ],
};
