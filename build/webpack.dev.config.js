const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const devConfig = webpackMerge(baseConfig, {
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    port: 8000,
    contentBase: path.join(__dirname, '../dist'),
    overlay: {
      errors: true
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});

module.exports = devConfig;