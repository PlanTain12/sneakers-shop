const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const production = process.env.NODE_ENV === 'production';


module.exports = {
    entry: { myAppName: path.resolve(__dirname, "./source/index.js") },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: production ? '[name].[contenthash].js' : '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.s(a|c)ss$/,
                exclude: /node_modules/,
                // use: [
                //     production ? MiniCssExtractPlugin.loader : 'style-loader',
                //     {
                //         loader: 'css-loader',
                //         options: {
                //             modules: true,
                //             sourceMap: !production
                //         }
                //     },
                //     {
                //         loader: 'sass-loader',
                //         options: {
                //             sourceMap: !production
                //         }
                //     }
                // ]
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: (resourcePath, context) => {
                                return path.relative(path.dirname(resourcePath), context) + '/';
                            },
                        }
                    },
                    "css-loader",
                    "sass-loader"]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: 'file-loader'
                }]
            },

        ],
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".scss"],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: "Webpack & React",
            template: "./source/index.html",
            // favicon: "./public/favicon.ico"
        }),
        new MiniCssExtractPlugin({
            filename: production ? '[name].[contenthash].css' : '[name].css',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {from: path.resolve(__dirname, 'source/assets'), to: path.resolve(__dirname, 'dist')}
            ]
        })
    ],
    devServer: {
        historyApiFallback: true,
        static: path.resolve(__dirname, 'dist'),
        open: true,
        compress: true,
        hot: true,
        port: 5000
    },
    mode: production ? 'production' : 'development'
};