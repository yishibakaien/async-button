
const path = require('path')
const open = require('open-browser-webpack-plugin')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')

function resolve(src) {
    return path.resolve(__dirname, src)
}

module.exports = {
    entry: {
        app: resolve('../src/asyncBtn.js')
    },
    output: {
        path: resolve('../dist'),
        filename: 'asyncBtn.js',
        chunkFilename: 'asyncBtn.js',
        library: 'AsyncBtn',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',
                loader: 'eslint-loader',
                options: {
                    emitWarning: true
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: resolve('../src'),
                query: {
                    presets: ['es2015']
                }
            },
        ]
    },
    devServer: {
        port: 4000,
        host: '127.0.0.1',
        disableHostCheck: true,
        inline: true,
        hot: false,
        overlay: { // 这里配置 html 页面是否显示 eslint 错误信息蒙版 
            errors: true,
            warnings: true,
        }
    },
    plugins: [
        new htmlWebpackPlugin({
            template: resolve('../index.html'),
            filename: 'index.html',
            chunks: ['app'],
            inject: 'head'
        }),
        // new webpack.optimize.UglifyJsPlugin({ // js压缩
        //     compress: {
        //         warnings: false,
        //         drop_debugger: true,
        //         drop_console: true
        //     }
        // }),
        new open({
            url: 'http://localhost:4000'
        })
    ]
}