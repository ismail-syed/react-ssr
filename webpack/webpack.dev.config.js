const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const baseConfig = require('./webpack.base.config');

const devConfig = webpackMerge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  output: {
    publicPath: '/public/'
  },
  devServer: {
    host: '0.0.0.0',
    port: 8000,
    overlay: {
      errors: true
    },
    compress: true,
    contentBase: path.join(__dirname, '../dist'),
    publicPath: '/public',
    historyApiFallback: {
      index: '/public/index.html'
    }
  },
  plugins: [
    new webpack.BannerPlugin('天府银行 版权所有'),
    new webpack.DefinePlugin({
      __DEV__: true
    }),
    new ExtractTextWebpackPlugin({
      allChunks: true,
      filename: '[name].[hash].css'
    }),
    new HtmlPlugin({
      template: path.join(__dirname, '../index.html'),
      inject: true
    })
  ]
});

module.exports = devConfig;