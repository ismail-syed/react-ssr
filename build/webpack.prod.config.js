const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const prodConfig = webpackMerge(baseConfig, {
  mode: 'production'
});

module.exports = prodConfig;