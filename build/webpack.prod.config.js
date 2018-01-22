
const { resolve } = require('./utils')
const webpack = require('webpack')
const merge = require('webpack-merge')
const CleanPlugin = require('clean-webpack-plugin')
const webpackBaseConfig = require('./webpack.base.config')

const pkg = require('../package')

module.exports = merge(webpackBaseConfig, {
    plugins: [
        new CleanPlugin(['dist'], {
            root: resolve('')
        }),
        new webpack.BannerPlugin([
            `created by ${pkg.author} on ${new Date().getFullYear()}/${new Date().getMonth()+1}/${new Date().getDate()}`,
            `${pkg.name} v${pkg.version}`,
            `Copyright  ${new Date().getFullYear()}, ${pkg.author}, ${pkg.license} license`
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