const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
module.exports = {
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    filename: 'zsmart.[name].[hash].js',
    path: path.join(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        include: [
          path.join(__dirname, '../src')
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [
          path.join(__dirname, '../node_modules')
        ]
      }
    ]
  },
  plugins: [
    new HTMLPlugin({
      template: path.join(__dirname, '../public/index.html')
    })
  ]
}