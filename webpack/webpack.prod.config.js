const path = require('path')
const baseConfig = require('./webpack.base.config')
const merge = require('webpack-merge')

console.log(process.env.NODE_ENV);

const prodConfig = merge(baseConfig, {
  mode: 'production'
})

module.exports = prodConfig;