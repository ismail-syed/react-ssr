const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlPlugin = require('html-webpack-plugin')
const baseConfig = require('./base.config')

const isDev = process.env.NODE_ENV === 'development'
console.log(isDev)
const clientConfig = merge(baseConfig, {
  entry: {
    app: path.join(__dirname, '../client/index.js')
  },
  output: {
    filename: '[name].[hash].js'
  },
  plugins: [
    new HtmlPlugin({
      template: path.join(__dirname, '../client/template.html'),
      inject: true
    })
  ]
})

if (isDev) {
  entry: {
    app: [
      'react-hot-loader/patch',
      path.join(__dirname, '../client/index.js')
    ]
  }
  clientConfig.devServer = {
    host: '0.0.0.0',
    compress: true,
    port: 8000,
    contentBase: path.join(__dirname, '../dist'),
    hot: true,
    overlay: {
      errors: true
    },
    publicPath: '/public/',
    historyApiFallback: {
      index: '/public/index.html'
    },
  }
  clientConfig.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = clientConfig