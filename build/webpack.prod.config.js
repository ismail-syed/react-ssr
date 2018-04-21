const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const baseConfig = require('./webpack.base.config');

const prodConfig = webpackMerge(baseConfig, {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendor'
    },
    minimize: true,
    mergeDuplicateChunks: true
  },
  plugins: [
    new webpack.BannerPlugin('天府银行 版权所有'),
    new ExtractTextWebpackPlugin({
      filename: '[name].[hash].css',
      allChunks: true
    })
  ]
});

module.exports = prodConfig;