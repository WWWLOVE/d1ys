console.log("载入成功");

/*
	设置需要引入的js文件
*/
require.config({
	paths: {
		// 模块名字: 模块路径
		"jquery": "jquery-1.11.3", //遵从AMD规范
		"jquery-cookie": "jquery.cookie",
		"index": "index",
		"slide": "slide",
		"tabs" : "tabs" ,
		"parabola": "parabola",
		"register" : "register",
		"product_list" : "product_list",
		"product_details" : "product_details",
		"shoping_car" : "shoping_car",
		"orderForGoods" : "orderForGoods",

	},
	shim: {
		/*
			在实例的app中，还用到jquery以外的第三方库
			如果该类库不是一个标准AMD规范，我又不想去改代码
			需要通过下述方式定义该文件
		*/
		"parabola": {
			exports: "_"
		},
		//设置依赖关系
		"jquery-cookie": ["jquery"],
		"parabola": ["jquery"]
	}
})






//要去调用index.js中的main
require(["index"], function(index){
	console.log(index.main());
})

//调用slide.js 中的 slide函数   轮播图
require(["slide"], function(slide){
	console.log(slide.slide());
})

//调用tabs.js 中的 tabs函数
require(["tabs"], function(tabs){
	console.log(tabs.tabs());
})

//调用register.js 中的 register函数  注册
require(["register"], function(register){
	console.log(register.register());
})

//调用product_list.js 中的 product_list函数  注册
require(["product_list"], function(product_list){
	console.log(product_list.product_list());
})

//调用product_details 中的 product_details函数  注册
require(["product_details"], function(product_details){
	console.log(product_details.product_details());
})

//调用shoping_car 中的shoping_car函数  注册
require(["shoping_car"], function(shoping_car){
	console.log(shoping_car.shoping_car());
})

//调用orderForGoods 中的orderForGoods函数  注册
require(["orderForGoods"], function(orderForGoods){
	console.log(orderForGoods.orderForGoods());
})