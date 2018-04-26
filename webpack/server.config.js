const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./base.config')

const serverConfig = merge(baseConfig, {
  target: 'node',
  entry: {
    app: path.join(__dirname, '../client/server-entry.js')
  },
  output: {
    filename: 'server-entry.js',
    libraryTarget: 'commonjs2'
  },
  externals: Object.keys(require('../package.json').dependencies)
})

module.exports = serverConfig