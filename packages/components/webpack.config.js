const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    publicPath: '/assets/',
    library: {
      type: 'umd',
      name: 'MyLibrary',
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
  },
};
