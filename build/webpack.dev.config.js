const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const baseConfig = require('./webpack.base.config');

const devConfig = webpackMerge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    host: '0.0.0.0',
    port: 8000,
    overlay: {
      errors: true
    },
    compress: true,
    contentBase: path.join(__dirname, '../dist')
  },
  plugins: [
    new webpack.BannerPlugin('天府银行 版权所有'),
    new ExtractTextWebpackPlugin({
      allChunks: true,
      filename: '[name].[hash].css'
    })
  ]
});

module.exports = devConfig;