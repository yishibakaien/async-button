const path = require('path')
const open = require('open-browser-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')

const webpackBaseConfig = require('./webpack.base.config')

const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(webpackBaseConfig, {
    devServer: {
        port: 4000,
        host: '127.0.0.1',
        disableHostCheck: true,
        inline: true,
        hot: false,
        overlay: { // show eslint error message mask on html
            errors: true,
            warnings: true,
        }
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html'),
            filename: 'index.html',
            chunks: ['app'],
            inject: 'head'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('dev')
        }),
        new open({
            url: 'http://localhost:4000'
        })
    ]
})