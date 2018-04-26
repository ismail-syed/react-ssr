const path = require('path');

module.exports = {
  entry: path.join(__dirname, '../client/index.js'),
  output: {
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        include: [
          path.join(__dirname, '../client')
        ]
      }
    ]
  }
}