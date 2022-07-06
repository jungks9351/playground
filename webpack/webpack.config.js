const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

const port = process.env.port || 3000

module.exports = {
  mode: 'development',

  devtool: 'source-map',

  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },

  entry: './src/index.jsx',

  output: {
    filename: 'bundel.[hash].js',
    path: path.resolve(__dirname, 'dist'),
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
    new ESLintPlugin({
      extensions: ['js', 'jsx'],
      emitWarning: false,
    }),
  ],

  devServer: {
    host: 'localhost',
    port: port,
    open: true,
  },
}
