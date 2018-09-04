/*
开发环境配置
 */
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')

module.exports = merge(baseConfig, {

  // 入口
  output: {
    filename: 'bundle.js'
  },

  // 模块加载器
  module: {
    rules: [
      // 加载css
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']  // style(css('xxx.css'))
      },

      // 加载less
      {
        test: /\.(stylus|styl)$/,
        use: ['style-loader', 'css-loader', 'stylus-loader']  // style(css(less('xxx.less')))
      },
    ]
  },

  // 开启开发环境下的: sourceMap调试
  devtool: 'cheap-module-eval-source-map',
})