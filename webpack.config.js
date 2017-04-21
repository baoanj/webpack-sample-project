module.exports = {
  devtool: 'eval-source-map',

  entry: __dirname + "/app/main.js",
  
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },

  module: { //在配置文件里添加JSON loader
    loaders: [{
      test: /\.json$/,
      loader: "json-loader"
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader' //添加对样式表的处理
    }]
  },

  devServer: {
    contentBase: "./public", //本地服务器所加载的页面所在的目录
    historyApiFallback: true, //不跳转
    inline: true //实时刷新
  }
}
