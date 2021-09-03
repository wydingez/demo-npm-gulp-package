const path = require('path')
const { merge } = require('webpack-merge')
const webpackBaseConf = require('./webpack.base.config')

module.exports = merge(webpackBaseConf, {
  mode: 'production',
  output: {
    filename: 'dnp.min.js',
    path: path.resolve(__dirname, 'dist/webpack')
  }
})
