var webpack = require('webpack');
var config =  require('./webpack.config.js');

config.plugins = config.plugins.concat([
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        compressor: {
            warnings: false
        }
    })
])

config.watch = false;
config.devtool = false;

module.exports = config;