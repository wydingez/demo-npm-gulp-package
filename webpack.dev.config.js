const path = require('path')
const { merge } = require('webpack-merge')
const webpackBaseConf = require('./webpack.base.config')

module.exports = merge(webpackBaseConf, {
  mode: 'development',
  output: {
    filename: 'dnp.js',
    path: path.resolve(__dirname, 'dist/webpack')
  }
})
