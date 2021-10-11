const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        dom: './src/dom.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 5010,
        open: true,
        hot: true,
        liveReload: true,
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: '[name][ext]',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'To Do',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
            chunkFilename: 'style.css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ],
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
            // js for babel
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
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
