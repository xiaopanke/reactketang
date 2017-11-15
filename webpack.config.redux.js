let path=require('path');
let HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
  entry:'./ware/index.js', //入口文件
  output:{//输出配置项
    path:path.resolve('build'),//输出的目录
    filename:'build.js'//输出的文件
  },
  module:{//配置模块
    rules:[
      {
        test:/\.js$/,//如果说要加载的文件后缀是.js的话
        use:'babel-loader', //指定加载器
        exclude:/node_modules/
      },
      {
        test:/\.less$/,
        use:["style-loader","css-loader","less-loader"]
      },
      {
        test:/\.(png|jpg|gif|bmp)$/,
        use:'url-loader'
      }
    ]
  },
  devtool:'cheap-module-source-map',//在出错的时候可以提示具体源文件的代码行数，而非bundle.js行数
  plugins:[
    new HtmlWebpackPlugin({
      template:'index.html'
    })
  ]
}
