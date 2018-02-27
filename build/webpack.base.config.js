
const { resolve } = require('./utils')

const jsFileReg = /\.js$/

module.exports = {

    entry: {
        app: resolve('src/index.js')
    },
    output: {
        path: resolve('dist'),
        filename: process.env.NODE_ENV === 'dev' ? 'asyncBtn.js' : 'asyncBtn.min.js',
        chunkFilename: 'asyncBtn.js',
        library: 'AsyncBtn',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            'utils': resolve('src/utils'),
            'core': resolve('src/core')
        }
    },
    module: {
        rules: [
            {
                test: jsFileReg,
                enforce: 'pre',
                loader: 'eslint-loader',
                include: resolve('src'),
                options: {
                    emitWarning: true
                }
            },
            {
                test: jsFileReg,
                loader: 'babel-loader',
                include: resolve('src'),
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}