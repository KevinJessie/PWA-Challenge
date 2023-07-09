const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

//  add html webpack plugin to webpack config.

//  add css loaders and babel to webpack.




module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        chunks: ['main'],
      }),
      new HtmlWebpackPlugin({
        template: './src/install.html',
        filename: 'install.html',
        chunks: ['install'],
      }),
      new WebpackPwaManifest({
        name: 'Budget Tracker',
        short_name: 'Budget Tracker',
        description: 'An application that allows you to track your budget online and offline.',
        background_color: '#ffffff',
        crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
        icons: [
          {
            src: path.resolve('src/icons/icon-512x512.png'),
            sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
          },
      
    ],
  }),
  new InjectManifest({
    swSrc: './src-sw.js',
    swDest: 'sw.js',
  }),
],


    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },

        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              plugins: ['@babel/plugin-transform-runtime'],
            },
          },
        },
      
      ],
    },
  };
};




