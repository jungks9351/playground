const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.port || 3000;

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
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
  ],
  devServer: {
    host: 'localhost',
    port: port,
    open: true,
  },
};
