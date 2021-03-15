module.exports = {
    publicPath: '/uygulamam',
    outputDir: 'customDistFolder',
    assetsDir: 'customAssetDir',
    filenameHashing: false,
    productionSourceMap: false,
    devServer: {
        port: 8090,
        https: false,
        compress: true,
        host: '127.0.0.90',
        disableHostCheck: true,
        proxy: {
            '^/api': {
                target: 'https://jsonplaceholder.typicode.com/',
                secure: false,
                pathRewrite: { '^/api': '' }
            }
        },
        headers: {
            'X-Custom-Name': 'Yasin'
        }
    }
    //www.abc.com/uygulamam
}