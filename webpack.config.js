// It is used to avoid include in bundle scripts from 'node_modules'
var nodeExternals = require('webpack-node-externals');

module.exports = {
  context: __dirname + "/src",
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    index : "./index.js"
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  watch: true
};
