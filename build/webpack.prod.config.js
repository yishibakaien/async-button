const { resolve } = require('./utils')
const webpack = require('webpack')
const merge = require('webpack-merge')
const CleanPlugin = require('clean-webpack-plugin')
const webpackBaseConfig = require('./webpack.base.config')

const pkg = require('../package')

let dateNow = new Date()

module.exports = merge(webpackBaseConfig, {
    plugins: [
        new CleanPlugin(['dist'], {
            root: resolve('')
        }),
        new webpack.BannerPlugin([
            `created by ${pkg.author} on ${dateNow.getFullYear()}/${dateNow.getMonth()+1}/${dateNow.getDate()}`,
            `${pkg.name} v${pkg.version}`,
            `Copyright  ${dateNow.getFullYear()}, ${pkg.author}, ${pkg.license} license`
        ].join('\n')),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('prod')
        }),
        new webpack.optimize.UglifyJsPlugin({ // js file compress
            compress: {
                warnings: false,
                drop_debugger: true,
                drop_console: true
            }
        })
    ]
})