const path = require('path')
const webpack = require("webpack"); 
//生产环境
const debug = process.env.NODE_ENV !== 'production'
module.exports = {
    publicPath: '/', // 根域上下文目录
    outputDir: 'dist', // 构建输出目录
    assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
    lintOnSave: false, // 是否开启eslint保存检测，有效值：ture | false | 'error'
    runtimeCompiler: true, // 运行时版本是否需要编译
    transpileDependencies: [], // 默认babel-loader忽略mode_modules，这里可增加例外的依赖包名
    productionSourceMap: true, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
    configureWebpack: {
        resolve:{
            alias:{//路径别名
                '@':path.resolve(__dirname, "src"),
                'assets':path.resolve(__dirname, "src/assets"),
                'components':path.resolve(__dirname, "src/components"),
                'api': path.resolve(__dirname, "src/api"),
                'views':path.resolve(__dirname, "src/views"),
                'utils':path.resolve(__dirname, "src/utils")
            }
        }
    },
    chainWebpack: config => { // webpack链接API，用于生成和修改webapck配置，https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
        if (debug) {
            // 本地开发配置
        } else {
            // 生产开发配置
        }
    },
    parallel: require('os').cpus().length > 1, // 构建时开启多进程处理babel编译
    pluginOptions: { // 第三方插件配置
    },
    pwa: { // 单页插件相关配置 https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    },
    devServer: {
        open: true,
        host: 'localhost',	
        port:8081,
        https: false,
        hotOnly: false,
        proxy: { // 配置跨域
            '/devapi': {//devapi替换的http://www.web-jshtml.cn/productapi
                target: 'http://www.web-jshtml.cn/productapi/token',//api服务器地址
                ws:true,
                changOrigin: true,
                pathRewrite: {
                    '^/devapi': ''
                }
            }
        },
        before: app => { }
    }
}
