const path = require('path');

const config = {
  target: 'node',
  entry: {
    serverEntry: path.join(__dirname, '../server/serverEntry.js')
  },
  output: {
    filename: 'serverEntry.js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/public/',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js','.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [
          path.join(__dirname, '../node_modules')
        ]
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
      }
    ]
  }
}

module.exports = config