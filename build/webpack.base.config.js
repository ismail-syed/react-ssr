const path = require('path');

const baseConfig = {
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    filename: '[name].[contenthash].min.js',
    path: path.join(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
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
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}

module.exports = baseConfig;