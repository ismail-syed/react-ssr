'use strict';

const path = require('path')
const webpack = require('webpack')
const baseConfig = require('./webpack.base.config')
const merge = require('webpack-merge')

const prodConfig = merge(baseConfig, {
  mode: 'production',
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: []
})

module.exports = prodConfig;