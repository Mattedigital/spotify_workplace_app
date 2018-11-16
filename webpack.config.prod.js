const path = require('path');
const config = require('./webpack.config.js');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

config.output.path = path.join(__dirname, '/dist');
config.mode = 'development';

config.plugins.push(
    new webpack.DefinePlugin({
        "process.env": {
            "NODE_ENV": JSON.stringify("production")
            }
    }),
    new UglifyJsPlugin({
        sourceMap: false,
        uglifyOptions: {
            warnings: false,
            output: {
                comments: false,
                beautify: false,
            }
          }
      })
);

module.exports = config;