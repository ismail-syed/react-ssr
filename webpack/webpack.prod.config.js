const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlPlugin = require('html-webpack-plugin');
const UglifyJS = require('uglifyjs-webpack-plugin');
const OptimizCssAssets = require('optimize-css-assets-webpack-plugin');
const baseConfig = require('./webpack.base.config');

const prodConfig = webpackMerge(baseConfig, {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendor',
      cacheGroups: {
        commons: {
          name: 'commons',
          priority: 10,
          chunks: 'initial'
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          minChunks: 2,
          enforce: true,
        }
      }
    },
    minimizer: [
      new UglifyJS({}),
      new OptimizCssAssets({})
    ],
    mergeDuplicateChunks: true
  },
  plugins: [
    new webpack.BannerPlugin('天府银行 版权所有'),
    new HtmlPlugin({
      template: path.join(__dirname, '../index.html'),
      minify: {
        removeEmptyAttributes: true,
        collapseWhitespace: true
      }
    })
  ]
});

module.exports = prodConfig;