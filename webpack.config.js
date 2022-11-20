const path = require('path');

const isDev = process.env.NODE_ENV !== 'production'
const isProd = !isDev

const filename = (extension) => isDev ? `[name].${extension}` : `[name].[hash].${extension}`

module.exports = {
    mode: 'development',
    entry: {
        'example-http-request': './example/example-http-request.js',
    },
    output: {
        path: path.resolve(__dirname, 'example', 'build'),
        filename: filename('js'),
    },
    resolve: {
        alias: {
            '@cache': path.resolve(__dirname, 'dist', 'cache'),
            '@base_structures': path.resolve(__dirname, 'dist', 'base_structures')
        }
    }
}