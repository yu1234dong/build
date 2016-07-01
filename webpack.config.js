var etp=require("extract-text-webpack-plugin");
var htmlwebpackplugin=require("html-webpack-plugin")
module.exports={
	plugins:[new etp("[hash]-bundle.css"),new htmlwebpackplugin(
		{
			template:"./index.html",   //按照模板生成HTML
//			filename:"[hash]-bundle.html",  //生成文件名
//			chunks:["main"]  //要引用哪个入口
		}
	)],
	entry:{
		main:"./main.js"  //文件入口
	},
	output:{              //存放路径
		path:"./build/",
		filename:"[hash]-bundle.js"
	},
	module:{				//加载器配置loaders: [	//.css 文件使用 style-loader 和 css-loader 来处理
		loaders:[
			{
				test:/.html$/,
				loader:"html"
			},
			{
				test:/.css$/,
				loader:etp.extract("css")
			},
			{
				test:/.(gif|png|jpg|woff|svg|eot|ttf)/,
				loader:"url-loader?name=[path][name].[ext]"
			}
		]
	}
//	resolve:{				//查找module的话从这里开始查找	root: 'E:/github/flux-example/src'
//		extensions:["",".js",".less"], //后缀名
//		alias:{						//别名
//			my:"./math_.js"
//		}
//	}
}
