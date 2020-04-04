const merge= require('webpack-merge')
// 注意webpack4.0版本的需要 安装 yarn add extract-text-webpack-plugin@next 安装对应的4.0以上的版本
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const baseConfig= require('./webpack.base.js')
const config= {
    mode: "production", 
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            { 
                test: /\.(css|less)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader", // 将 JS 字符串生成为 style 节点
                    use: [
                        {
                            loader: 'css-loader', // 将 CSS 转化成 CommonJS 模块
                            options: {
                                importLoaders: 2,
                            }
                        }, // 将 CSS 转化成 CommonJS 模块
                        { loader: 'less-loader' }, // 将 Less 编译成 CSS
                    ]
                })
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'css/[name].[hash:8].css',
            allChunks: true
        }),
    ]
}

module.exports= merge(baseConfig,config)