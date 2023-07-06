const {ModuleFederationPlugin} = require('webpack').container
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    mode:"development",
    entry: path.resolve(__dirname, "./src/index.js"),

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
        },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer:{
    hot: true,
    open: true,
    port: 3003,
    historyApiFallback: true,
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin(
      {
        name:'storeApp',
        filename:'storeAppEntry.js',
        shared:{
          react:{singleton:true},
          'react-dom':{singleton:true},
          redux:{singleton:true},
          'react-redux':{singleton:true}
        },
        exposes:{
          './storeRemote':'./src/store'
        }
      }
    ),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
