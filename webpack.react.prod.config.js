var webpack = require('webpack');
var reactConfig =  require('./webpack.react.config.js');

reactConfig.plugins = [
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
]

reactConfig.watch = false;
reactConfig.devtool = null;

module.exports = reactConfig;