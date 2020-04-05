const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const config = {
    mode: "development",
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: [
                    { loader: "style-loader" },
                    {
                        loader: 'css-loader', // 将 CSS 转化成 CommonJS 模块
                        options: {
                            importLoaders: 2,
                        }
                    }, // 将 CSS 转化成 CommonJS 模块
                    { loader: 'less-loader' }, // 将 Less 编译成 CSS
                ]
            }
        ]
    },
    devServer: {
        port: 9000,
        hot: true,
        open: true,
        quiet: false,
        historyApiFallback: true,
        proxy: {
            "/api": {
                target: "http://www.he360.cn",
                pathRewrite: { "^/api": "" }
            }
        },
        contentBase: path.resolve(__dirname, "/dist")
    },
}

module.exports = merge(baseConfig, config)