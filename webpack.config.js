const path = require('path')

module.exports = {
    entry: {
        path: path.join(__dirname, './src')
    },
    output: {
        path: path.join(__dirname, './dist/js'),
        filename: 'index.js',
    },
    devServer: {
        hot: true,
        open: true,
        static:{
            watch: true,
            directory: './src'
        }
    }
}