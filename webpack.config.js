const path = require('path');
const webpack = require('webpack'); // add this line

module.exports = {
    mode: 'development',
    entry: './index.js',
    resolve: {
        alias: {
            'graphql/language': path.resolve(__dirname, 'node_modules/graphql/language/index.js')
        },
        fallback: {
            "fs": false, // add this line
            "path": require.resolve("path-browserify"), // add this line
            "stream": require.resolve("stream-browserify"),
            "buffer": require.resolve("buffer/")
        }
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
        })
    ]
};
