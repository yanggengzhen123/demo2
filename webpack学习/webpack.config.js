// webpack 是node写出来的node写法
let path = require('path') //path是node自带的包
console.log(path.resolve('dist')); //resolve是解析的意思 //
let HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    devServer:{    //开发服务器的配置
        port:3000, //端口号
        progress:true,  //显示进度条
        contentBase:'./build', //以./build作为静态服务文件夹
        open: true,        // 自动打开浏览器
        compress:true    // gzip压缩
    },
    mode:'development', //模式 默认两种 production development
    entry:'./src/index.js', // 入口
    output:{ //输出 // hash: 8只显示8位
        filename:'bundle.[hash:8].js', //打包后的文件名,__dirname指的是当前目录文件夹下的xxx. 
        path:path.resolve(__dirname,'build') //注意：路径必须是一个绝对路径 path.resolve('dist')省略了dirname，输出结果是d:\应用软件\yanggengzhen\练习\git练习\dist
    },
    plugins: [ // 放着所有webpack插件
        new HtmlWebpackPlugin({ // 用于使用模板打包时生成index.html文件，并且在run dev时会将模板文件也打包到内存中
            template: './index.html', // 模板文件
            filename: 'index.html', // 打包后生成文件
            hash: true, // 添加hash值解决缓存问题  //打包之后 bundle.js之后会出现?版本号解决缓存问题
            minify: { // 对打包的html模板进行压缩
                removeAttributeQuotes: true, // 删除属性双引号
                collapseWhitespace: true // 折叠空行变成一行
            }
        })
    ]
}