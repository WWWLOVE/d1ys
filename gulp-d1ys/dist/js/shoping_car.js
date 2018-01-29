define(["ballMove" ,  "jquery" , "jquery-cookie"] , function(ballMove , $){
	var shoping_car = function(){

		

		//【抛物线特效
		$(function(){
			 sc_car();
			//商品详情购物车
			$(".details_content_div2").on("click" , ".detail_shop_car"  ,function(){
				
				ballMove.ballMove(this);

				let id = this.id;
				//b:判断是否是第一次添加该商品
				var first = $.cookie("goods") == null ? true : false;

				if(first){ //第一次添加
					//设置cookie  [{id:id,num:1}]
					$.cookie("goods", "[{id:" + id + ",num:1}]", {
						expires: 7
					});

				}else{
					//c:判断之前是否有添加过该商品
					var str = $.cookie("goods");
					var arr = eval(str);
					var same = false; //代表是否有相同商品

					for(var i in arr){
						if(arr[i].id == id){
							arr[i].num++;

							var cookieStr = JSON.stringify(arr);
							$.cookie("goods", cookieStr, {
								expires: 7
							})
							same = true;
							break;
						}
					}
					if(!same){
						var obj = {id: id, num: 1};
						arr.push(obj);
						var cookieStr = JSON.stringify(arr);
						$.cookie("goods", cookieStr, {
							expires: 7
						});
					}
				}
				sc_car();

				return false;
				
			});


			//显示提示框的闭包
			var singleton = (function(){
				var oDiv = null;
				var createDiv = function(){
					if(!oDiv){

						let html ="";
						oDiv = $('<div id = "content"></div>');
						html = 
						`	该商品已加入购物车
							<span id= "ok" >确认</span>
						`; 
						oDiv.html(html);
						oDiv.appendTo($("body"));

						$("#ok").click(function(){
							$("#content").remove();
							oDiv = null;
						})

					}

				}
				return createDiv;
			})();













			//商品列表购物车
			$("#list_content").on("click" , ".detail_shop_car"  ,function(){
				singleton();
				ballMove.ballMove(this);

				let id = this.id;
				//b:判断是否是第一次添加该商品
				var first = $.cookie("goods") == null ? true : false;

				if(first){ //第一次添加
					//设置cookie  [{id:id,num:1}]
					$.cookie("goods", "[{id:" + id + ",num:1}]", {
						expires: 7
					});

				}else{
					//c:判断之前是否有添加过该商品
					var str = $.cookie("goods");
					var arr = eval(str);
					var same = false; //代表是否有相同商品

					for(var i in arr){
						if(arr[i].id == id){
							arr[i].num++;

							var cookieStr = JSON.stringify(arr);
							$.cookie("goods", cookieStr, {
								expires: 7
							})
							same = true;
							break;
						}
					}
					if(!same){
						var obj = {id: id, num: 1};
						arr.push(obj);
						var cookieStr = JSON.stringify(arr);
						$.cookie("goods", cookieStr, {
							expires: 7
						});
					}
				}
				sc_car();

				return false;
				
			})

			


			//显示数量
			function sc_car(){

				var sc_str = $.cookie("goods");
				if(sc_str){ //如果cookie存在
					var arr = eval(sc_str);
					var sum = 0; //用于累加的和
					
					for(var i in arr){
						sum += arr[i].num ;

					}

					$(".shop_div2_span1").html(sum);
					$(".shop_top2_span").html(sum);
					$(".orderSpan1").html(sum);

				}else{
					$(".shop_div2_span1").html(0);
					$(".shop_top2_span").html(0);
					$(".orderSpan1").html(0);
				}
			}


			//加载购物车中的商品

			function sc_msg(){
				$.ajax({
					url: "../data/product_list.json",
					type: "get",
					success: function(res){

						//a:找出所有cookie数据

						if(!$.cookie("goods")){
							//要将购物车内的商品清空
							$(".shop_div1").html("");
							return;
						}

						var arr = eval($.cookie("goods"));
						var html = '';
						let price = [];
						let prices = 0;
						for(var i = 0; i < arr.length; i++){
							//用id当做下标取出数据
							
							html += `
									<li class="shop_div1_div1">
										<div class="shop_car_img"><img src="${res[arr[i].id].image}"></div>
										<p class="shop_p1">${res[arr[i].id].title}</p>
										<p class="shop_p2"><span>￥${res[arr[i].id].title2}</span> x <span class = "shop_num">${arr[i].num}</span></p>
										
									</li>

										`;

							
							price[i] = arr[i].num * Number(res[arr[i].id].title2);
							
							
						}
						for(var i = 0 ; i < price.length;i++){
								prices += price[i];
							}
							//alert(prices);
						$(".shop_div1").html(html);
						$(".shop_div2_span2").html(prices);

						

					}	
				})
				sc_car();
			}

			$(".shoping_card_div4").mouseenter(function(){
				sc_msg();
				sc_car();
				$(".shoping_car").css("display" , "block");

			})
			$(".shoping_car").mouseenter(function(){
				sc_msg();
				sc_car();
				$(this).css("display" , "block");
			})
			$(".shoping_car").mouseleave(function(){
				$(this).css("display" , "none");
			})
			$(".shoping_card_div4").mouseleave(function(){
				$(".shoping_car").css("display" , "none");
			})


		})


		//购物车  添加













	}
	return{
		shoping_car : shoping_car
	}
})