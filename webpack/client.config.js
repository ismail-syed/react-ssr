const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const config = {
  entry: {
    client: path.join(__dirname, '../client/index.js')
  },
  output: {
    filename: '[name].[hash:8].js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/public/'
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
          path.join(__dirname, '.../dist')
        ]
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: path.join(__dirname, '../index.html')
    }),
    new CleanPlugin('dist')
  ]
}

if (isDev) {
  config.devServer = {
    host: '0.0.0.0',
    port: '8000',
    compress: true,
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    overlay: {
      errors: true
    },
    historyApiFallback: {
      index: '/public/index.html'
    },
    publicPath: '/public/'
  }
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = config