const path = require('path')
// const webpack = require('webpack')
// const CompressionWebpackPlugin = require('compression-webpack-plugin')

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath: './',
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@$', resolve('src'))
            .set('@api', resolve('src/api'))
            .set('@assets', resolve('src/assets'))
            .set('@comp', resolve('src/components'))
            .set('@views', resolve('src/views'))
            .set('@layout', resolve('src/layout'))
            .set('@static', resolve('src/static'))
    },

    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true
            },
        },
        extract: true,
        sourceMap: true,
    },
    devServer: {
        port: 8001,
        proxy: {
            '/qury': {
                target: 'http://192.168.1.82:8085', //线下
                // target: 'http://10.76.148.113:80',//浙江线上
                // target: 'http://10.243.3.180:8898', //广东线上   
                // target: 'http://192.168.1.188:8091', //红军
                ws: false,
                changeOrigin: true,
                pathRewrite: {
                    // '^/poilt': '/pilot'//广东线上
                    '^/qury': '/qury'//浙江
                    // '^/qury': ''
                }
            }
        },
    },
    productionSourceMap: false,
    lintOnSave: false,
    transpileDependencies: []
}