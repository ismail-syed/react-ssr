const path = require('webpack')
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const devConfig = merge(baseConfig, {
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    port: 8000,
  }
})

module.exports = devConfig;