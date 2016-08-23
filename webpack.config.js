const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'eval-source-map',
  entry: './src/index',
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin({
      multiStep: true
    })
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel' },
      { test: /\.styl$/, loader: 'style!css!stylus' }
    ]
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    stats: 'errors-only',
    port: 3000
  },
}