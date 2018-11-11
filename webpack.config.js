const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');
const WebpackMerge = require('webpack-merge');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development'
function resolve (dir) {
  return path.join(__dirname, './', dir)
}
const config = {
  target: 'web',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'image': resolve('src/assets/img'),
      'service':  resolve('src/service'),
      'utils':  resolve('src/assets/js')
    }
  },
  module: {
    rules: [
      // vue文件处理
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.styl(us)?$/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader'
        ],
        include:[resolve('src')],
        exclude: /node_modules/
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1024,
            name: 'resources/[name].[ext]'
          }
        }]
      },
      // 字体图标的配置
      {
        test:/\.(eot|svg|ttf|woff|woff2|otf)$/,
        use:[
          {
            loader: 'url-loader',
            options:{
              limit: 8192,
              name: 'resource/[name].[ext]'
            }
          }
        ]
      }
    ],
  },
  devServer:{
    port: 8000,
    proxy: {        
       '/api': {
            target: 'http://test.happymmall.com',
            changeOrigin: true,   //允许跨域
            pathRewrite: {
              '^/api': ''
            }
        }
    }
  },
  plugins:[
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new VueLoaderPlugin()
  ]
}
module.exports = config;