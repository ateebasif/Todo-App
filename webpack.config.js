// const path = require('path');
// const HWP = require('html-webpack-plugin');
// const htmlplugin = new HWP({
//     template: './src/index.html',
//     filename: './index.html'
// });

// module.exports = {
//     mode: "development",
//     entry: './src/index.js',
//     output: {
//         filename: 'build.js',
//         path: path.join(__dirname, '/dist'),
//         publicPath: '/dist'
//     },
//     module: {
//         rules: [{
//             test: /.(js)$/,
//             exclude: /node_modules/,
//             loader: 'babel-loader'
//         }]
//     },

//     plugins: [htmlplugin]
// }

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'build.js',
        publicPath: '/dist'
    },
    devServer: {
        port: 3000,
        contentBase: path.join(__dirname, 'dist'),
        writeToDisk: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            }

        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ]
}


// test: /\.(js|jsx)$/,