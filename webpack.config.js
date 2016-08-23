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
      { test: /\.styl$/, loader: 'style!css?modules&sourceMap&localIdentName=[local]___[hash:base64:5]!resolve-url!stylus?sourceMap' }
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