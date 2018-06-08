const path = require('path')
const webpack = require('webpack')
const HtmlwebpackPlugin = require('html-webpack-plugin')

const ROOT_PATH = path.resolve(__dirname)
const APP_PATH = path.resolve(ROOT_PATH,'app')
const BUILD_PATH = path.resolve(ROOT_PATH,'build')

module.exports= {
  entry: {
    app: path.resolve(APP_PATH,'index.jsx')
  },
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },

  devtool: 'eval-source-map',

  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  
  resolve: {
    extensions: ['.js', '.jsx'],
    // root: path.resolve(path.join(__dirname),'app')
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader', 'eslint-loader'],
        // loaders: ['babel-loader'],
        include: APP_PATH
      }
    ]
  },

  plugins: [
    new HtmlwebpackPlugin({
      title: 'My First React App'
    })
  ]
}