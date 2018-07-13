const path = require('path');
const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const isDev = process.env.NODE_ENV === "development";
const baseConfig = require('./webpack.config.base.js');
const merge = require('webpack-merge');
const devServer={
    port:8080,
    host:'0.0.0.0',
    overlay:{
        errors:true
    },
    host:true,
}
let config;


if (isDev) {
    config = merge(baseConfig, {
        module: {
            rules: {
                test: /\.styl/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            source: true,
                        }
                    },
                    'stylus-loader'
                ]
            }
        },
        devtool: "#cheap-module-eval-source-map",
    })

    config.devServer = {
            port: 8000,
            host: '0.0.0.0',
            overlay: {
                errors: true,
            },
            hot: true,
        },
        config.plugins.push(
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        )

} else {
    config.entry = {
        app: path.join(__dirname, 'src/index.js'),
        vendor: ['vue']
    }
    config.output.filename = '[name].[chunkhash:8].js'
    config.module.rules.push({
            test: /\.styl$/,
            use: ExtractTextWebpackPlugin.extract({
                fallback: 'style-loader',
                use: [
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                    'stylus-loader'
                ]
            })
        }),
        config.plugins.push(
            new ExtractTextWebpackPlugin('style.[contentHash:8].css'),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'runtime'
            })
        )
}

module.exports = config;