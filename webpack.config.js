// import webpack from 'webpack'
// import { supportedLocales } from './src/config'

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        dom: './src/dom.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 5001,
        open: true,
        hot: true,
        liveReload: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'To Do',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/index.html'),
        }),
    ],

    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                loader: 'file-loader',
                options: {
                    outputPath: '../fonts',
                },
            },
        ],
    },
};

// export default function config {
//     plugins: [
//       new webpack.ContextReplacementPlugin(
//         /date\-fns[\/\\]/,
//         new RegExp(`[/\\\\\](${supportedLocales.join('|')})[/\\\\\]index\.js$`)
//       )
//     ]
//   }
