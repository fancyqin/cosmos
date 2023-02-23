const path = require('path');
const fs = require('fs');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOTPATH = path.join(process.cwd());
const APP_PATH = path.join(ROOTPATH, '/src');


module.exports = {
  entry: path.join(APP_PATH, 'entry.js'),
  output: {
    publicPath: '/',
    filename: 'static/js/[name].[chunkhash:8].js',
    path: path.join(ROOTPATH, '/dist')
  },

  module: {
    rules: [{
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions:{
                javascriptEnabled: true,
              },
              additionalData: (content, loaderContext) => {
                return content +`;@import '${APP_PATH}/styles/theme.less';`;
              }
            },
          },
          // {
          //   loader: path.resolve(ROOTPATH + '/config/theme-loader.js'),
          // }
        ]
      },
      {
        test: /\.(eot|woff|ttf|woff2|svg|gif|png|jpg|jpeg)(\?|$)/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path]/[name].[hash:8].[ext]',
            outputPath: './static/assets'
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      '@': `${APP_PATH}/`,
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: `index.html`,
      template: path.join(APP_PATH, '/index.html')
    })
  ]
};
