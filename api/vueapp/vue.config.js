const path = require('path');

module.exports = {
    publicPath: '/static-built/src/vue/dist/', // Should be STATIC_URL + path/to/build
    outputDir: path.resolve(__dirname, '../static-built/src/vue/dist/'), // Output to a directory in STATICFILES_DIRS
    filenameHashing: false, // Django will hash file names, not webpack
    runtimeCompiler: true, // See: https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
    devServer: {
      hot: true,
      devMiddleware: {
        writeToDisk: true,
      }
    },
    configureWebpack: {
      devtool: 'cheap-module-source-map'
    },
};