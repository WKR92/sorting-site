const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
          `...`,
          new CssMinimizerPlugin(),
        ],
      },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        }),
        new HtmlWebpackPlugin(
            {template: "./src/template.html"}
        )
    ],
};