const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: { index: './src/index' },
  output: {
    path: path.resolve(__dirname, 'lib'),
    clean: true,
    library: {
      type: 'umd',
      name: 'MyLibrary',
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'] },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
