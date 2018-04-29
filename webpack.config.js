const path = require('path');
const webpack = require('webpack');

// Plugins:
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Vars:
const env = process.env.NODE_ENV || 'development';

// Config:
module.exports = {
  mode: env,
  entry: path.resolve(__dirname, 'admin/src/index.jsx'),
  output: {
    filename: 'bundle-[hash:6].js',
    path: path.resolve(__dirname, 'admin/dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'env', 'react'],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader', // creates style nodes from JS strings
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }, {
          loader: 'sass-loader', // compiles Sass to CSS
        }],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },
  devServer: {
    port: 8082,
    proxy: {
      '/pomby/api': 'http://localhost:8080/',
    },
  },
  plugins: [
    new CleanWebpackPlugin([path.resolve(__dirname, 'admin/dist')]),
    new HtmlWebpackPlugin({title: 'Pomby', template: path.resolve(__dirname, 'admin/src/index.html')}),
  ],
  resolveLoader: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve('./node_modules'),
    ],
  },
};
