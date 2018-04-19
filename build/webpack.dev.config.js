const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
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
  }
});

module.exports = devConfig;