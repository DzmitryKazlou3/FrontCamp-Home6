// It is used to avoid include in bundle scripts from 'node_modules'
var nodeExternals = require('webpack-node-externals');

module.exports = {
  context: __dirname + "/src",
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    index: "./index.js",
    "app/app": [
      "./bloglog.ui/app/app.module.js",
      "./bloglog.ui/app/constants.js",

      "./bloglog.ui/app/services/article.service.js",
      "./bloglog.ui/app/auth/auth.service.js",

      "./bloglog.ui/app/home/home.controller.js",
      "./bloglog.ui/app/article/article-dialog.controller.js",      
      "./bloglog.ui/app/auth/create-user-dialog.controller.js"
      
    ]
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
      },
      {
        test: /\.html$/,
        loader: 'file-loader?name=./views/[name].[ext]'
      }
    ]
  },
  node: {
    console: true,
    net: 'empty',
    tls: 'empty',
    __filename: false,
    __dirname: false
  },
  watch: true,
  devtool: 'source-map'
};
