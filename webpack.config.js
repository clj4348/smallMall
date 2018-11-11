const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development'
function resolve (dir) {
  return path.join(__dirname, './', dir)
}
console.log( resolve('src')+'====');
const config = {
  target: 'web',
  entry: './src/main.js',
  output:{
    filename: '[name].js',
    path:path.resolve(__dirname, 'dist')
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
      // {
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader: 'vue-style-loader'
      //     },
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         modules: true
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.styl(us)$/,
        use: ['vue-style-loader', 'css-loader', 'stylus-loader', 'postcss-loader']
      },
     // {
     //    test: /\.styl(us)$/,
     //    use: [
     //      'vue-style-loader',
     //      'css-loader',
     //       'stylus-loader',
     //      {
     //      loader: 'postcss-loader',
     //      options: {
     //          // 这里postcss直接使用stylus编译后的tree进行编译，提高效率
     //          sourceMap: true,
     //        }
     //      }
     //    ]
     //  },
      // 图片处理
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
    port: 8000
  },
  plugins:[
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new VueLoaderPlugin()
  ]
}
module.exports = config;