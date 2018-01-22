
const path = require('path')

const jsFileReg = /\.js$/

function resolve(dir) {
    return path.resolve(__dirname, '../' + dir)
}

module.exports = {
    entry: {
        app: resolve('src/index.js')
    },
    output: {
        path: resolve('dist'),
        filename: 'asyncBtn.js',
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