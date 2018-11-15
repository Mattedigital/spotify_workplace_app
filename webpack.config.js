const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', './app/index.jsx'],
    output: {
        path: '/',
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/},
            {test: /\.scss$/, use: ['style-loader', {loader: 'css-loader', options: {
                modules: true,
                localIdentName: '[hash:base64:5]__[local]'
            }}, 'sass-loader']},
            {test: /\.(png|jpg|svg|jpeg|gif)$/, loader: 'url-loader?linit=8192'}
        ]
    },
    devServer: {
        historyApiFallback: true  
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'Spudify',
            template: 'app/index.html',
            inject: false
        })
    ],
    mode: 'development'
} 