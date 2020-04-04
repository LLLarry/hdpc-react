const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin') //不打包文件，直接复制文件夹到打包生成的文件夹中
module.exports = {
    // mode: "development", //development
    // devtool: 'cheap-module-source-map',
    entry: {
        main: path.resolve(__dirname, '../src/main.js')
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: false, //表示大于 1M的文件就放到 dist/static/文件夹下，小于2M的文件就转成base64位，在js中存储
                            outputPath: 'static/images',
                            publicPath: path.resolve(__dirname, '../public')
                        }
                    }
                ]
            }
        ]
    },
    output: {
        filename: 'js/[name].[hash:8].js',
        path: path.resolve(__dirname, '../dist')
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src'),
            '@c': path.resolve(__dirname, '../src/components')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html'),
            path: path.resolve(__dirname, '../dist/')
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../public'), // 不打包直接输出的文件
                to: 'public', // 打包后静态文件放置位置
                ignore: ['.*'] // 忽略规则。（这种写法表示将该文件夹下的所有文件都复制）
            }
        ]),
        new webpack.HotModuleReplacementPlugin() //热更新模块的插件
    ],
    // devServer: {
    //     port: 9000,
    //     hot: true,
    //     open: true,
    //     quiet: false,
    //     contentBase: path.resolve(__dirname, "/dist")
    // },
    optimization: {
        splitChunks: {
            chunks: "all",
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    }

}