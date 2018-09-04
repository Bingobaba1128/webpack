/*
基础配置
 */
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

function resolve(dir) {
  return path.resolve(__dirname, '..', dir)
}

module.exports = {
  // 1. 入口
  entry: {
    app: './src/main.js'
  },

  // 2. 出口
  output: {
    path: resolve('dist'),
  },

  // 3. 模块加载器
  module: {
    rules: [
      // es6-->es5
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src')]
      },

      // 图片
      {
        test: /\.(jpe?g|png|svg|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 1024*170,
          name: 'static/img/[name].[hash:7].[ext]' // 相对于output.path
        }
      }
    ]
  },

  // 4. 插件
  plugins: [
    new HtmlPlugin({
      template: 'index.html',
      filename: 'index.html',
      inject: 'true', // 自动引入打包生成的js/css
    })
  ]
}