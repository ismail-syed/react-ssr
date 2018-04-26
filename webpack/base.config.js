const path = require('path')

const baseConfig = {
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/public/',
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

module.exports = baseConfig