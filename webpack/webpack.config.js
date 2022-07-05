const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundel.[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.html$/,
        exclude: '/node_modules/',
        use: {
          loader: 'html-loader',
          options: {
            minimize: true,
          },
        },
      },
    ],
  },
  plugin: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
  ],
};
