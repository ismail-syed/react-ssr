const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const baseConfig = require('./webpack.base.config');

const prodConfig = webpackMerge(baseConfig, {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    minimize: true
  },
  plugins: [
    new ExtractTextWebpackPlugin({
      filename: '[name].[hash].css',
      allChunks: true
    })
  ]
});

module.exports = prodConfig;