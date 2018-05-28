const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpack = new HtmlWebpackPlugin({
    template: 'src/index.html',
    filename: 'index.html',
    inject: 'body'
});

const HotModuleReplcement = new webpack.HotModuleReplacementPlugin();

module.exports = {
    entry: './src/app.tsx',
    output: {
        path: path.resolve('public'),
        filename: 'app.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader' },
            { test: /\.css$/, loader: ['style-loader', 'css-loader'] },
            { test: /\.scss$/, loader: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
            { test: /\.(woff|woff2)$/, loader: 'url-loader?prefix=font/&limit=5000' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        port: 8000,
        open: true,
    },
    plugins: [HotModuleReplcement, HtmlWebpack]
};
