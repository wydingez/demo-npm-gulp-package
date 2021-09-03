const path = require('path')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: './index.js',
  output: {
    filename: 'dnp.js',
    path: path.resolve(__dirname, 'dist/webpack')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['lodash']
          }
        }
      }
    ]
  },
  plugins: [
    new LodashModuleReplacementPlugin,
    new webpack.BannerPlugin({
      banner: 'Demo By wyd',
    })
  ]
}
