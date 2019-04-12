const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        index: [path.join(__dirname, '../src/index.ts')]
    },

    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'hit-plane.js',
        // filename: '[name].js',
        publicPath: '/dist/'
    },

    resolve: {
        extensions: ['.scss', '.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: path.join(__dirname, '../postcss.config.js')
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(js|ts)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'ts-loader']
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            { from: path.join(__dirname, '../resource'), to: path.join(__dirname, '../dist/resource') }
        ])
    ]

};
