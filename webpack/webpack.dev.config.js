const path = require('webpack')
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const devConfig = merge(baseConfig, {
  mode: 'development'
})

module.exports = devConfig;