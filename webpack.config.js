// It is used to avoid include in bundle scripts from 'node_modules'
var nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
let extractLESS = new ExtractTextPlugin('css/[name].css');
var path = require('path');

module.exports = {
  context: __dirname + "/src",
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    index: "./index.js",
    "app/app": [
      "./bloglog.ui/app/app.module.js",
      "./bloglog.ui/app/constants.js",

      "./bloglog.ui/app/services/http-iterceptor.service.js",
      "./bloglog.ui/app/services/article.service.js",
      "./bloglog.ui/app/auth/auth.service.js",

      "./bloglog.ui/app/home/home.controller.js",
      "./bloglog.ui/app/article/article-dialog.controller.js",
      "./bloglog.ui/app/auth/create-user-dialog.controller.js",
      "./bloglog.ui/app/auth/login-dialog.controller.js"
      
    ],
    "css": "./bloglog.ui/content/less/site.less"
    
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
      },
      {
        test: /\.less$/,
        loader: extractLESS.extract({ fallbackLoader: 'style-loader', loader: 'css-loader!postcss-loader!less-loader' })
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "url-loader?limit=10000&name=images/[name].[ext]&publicPath=../"
      },
      {
        test: /\.(svg)$/,
        loader: "url-loader?limit=1&name=images/[name].[ext]&publicPath=../"
      },
      {
        test: /\.(otf)$/,
        loader: "url-loader?limit=1&name=fonts/[name].[ext]&publicPath=../"
      }
    ]
  },

  plugins: [
    // extract CSS into separate file
    extractLESS
  ],

  node: {
    console: true,
    net: 'empty',
    tls: 'empty',
    __filename: false,
    __dirname: false
  },
  //watch: true,
  devtool: 'source-map'
};
