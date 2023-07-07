const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

//  Add and configure workbox plugins for a service worker and manifest file.
const config = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  plugins: [ 
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/notes.html',
      filename: 'notes.html',
      chunks: ['notes']
    }),
    new HtmlWebpackPlugin({
      template: './src/install.html',
      filename: 'install.html',
      chunks: ['install']
    }),
    new WebpackPwaManifest({
      name: 'Jate',
      short_name: 'Jate',
      description: 'A simple note taking app',
      background_color: '#ffffff',
      crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
      icons: [
        {
          src: path.resolve('src/assets/icons/icon-512x512.png'),
          sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        },
        {
          src: path.resolve('src/assets/icons/icon-512x512.png'),
          size: '1024x1024' // you can also use the specifications pattern
        },
        {
          src: path.resolve('src/assets/icons/icon-512x512.png'),
          size: '1024x1024',
          purpose: 'maskable'
        }
      ]
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
      }
    ],
  },
};


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
      
    ],

    module: {
      rules: [
        
      ],
    },
  };
};
