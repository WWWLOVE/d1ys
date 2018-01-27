define(["jquery"  , "jquery-cookie"] , ($) =>{
	var orderForGoods = function(){
		
				
				//sc_car();
				$.ajax({
					url: "../data/product_list.json",
					type: "get",
					success: function(res){

						//a:找出所有cookie数据

						if(!$.cookie("goods")){
							//要将购物车内的商品清空
							$(".order_con_div1").html("");
							return;
						}

						var arr = eval($.cookie("goods"));
						var html = '';
						let price = [];
						let prices = 0;
						for(var i = 0; i < arr.length; i++){
							//用id当做下标取出数据
								
								price[i] = arr[i].num * Number(res[arr[i].id].title2);
								//alert(price[i])

							html += `
									 <div class="order_c_div1_div">
										<div><img src="${res[arr[i].id].image}"></div>
										<div>
											<p class="order_c_p5">${res[arr[i].id].title}</p>
											<p class="order_c_p6"  id = "${res[i].id}">删除</p>
										</div>
										<p class="order_c_p1">黑色</p>
										<p class="order_c_p2" >￥${res[arr[i].id].title2}</p>
										<p class="order_c_p3">￥${res[arr[i].id].title2}</p>
										<div>
											<span class = "order_c_p7"  id = "${res[i].id}">-</span>
											<input type="text" class = "orderInput" name="" placeholder="${arr[i].num}"/>
											<span class = "order_c_p8" id = "${res[i].id}">+</span>
										</div>
										<p class="order_c_p4">￥${price[i]}</p>
										
									</div>

											`

							
							//price[i] = arr[i].num * Number(res[arr[i].id].title2);
							
							
						}

						for(var i = 0 ; i < price.length;i++){
								prices += price[i];
							}
						$(".orderSpan3").html(prices);
						
						$(".order_con_div1").html(html);
						//$(".shop_div2_span2").html(prices);
						

					}	
				})


				
				
				//点击按钮，实现商品的增减的函数
				function orRemove(code){
					//let prices = 0;
					
					//$(".order_con_div1").on("click" , code , function(){
					$(".order_con_div1").on("click" , code , function(){
						let sc_str = $.cookie("goods");
						//let arr = eval($.cookie("goods"));
						let arr = eval($.cookie("goods"));
						
						let id = this.id;
						
						if($(this).html() == "+"){
							arr[id].num += 1;
							//$(".orderInput").val(arr[id].num)
						}else if($(this).html() == "-"){
							arr[id].num -= 1;
							if(arr[id].num <= 0){
								
								arr.splice(id , 1);
							//$.cookie("goods",null);
							/*if(arr.length == 1){
								arr.splice(0 , 1);
							}*/
							

								let cookieStr1 = JSON.stringify(arr);
								$.cookie("goods", cookieStr1, {
									expires: 7
								});
							}
						}else if($(this).html() == "删除"){

							arr[id].num = 0;
							arr.splice(id , 1);
							//$.cookie("goods",null);
							/*if(arr.length == 1){
								arr.splice(0 , 1);
							}*/
							

							let cookieStr1 = JSON.stringify(arr);
							$.cookie("goods", cookieStr1, {
								expires: 7
							});
							
							/*for(let i = 0 ; i < arr.length ; i++){
								if(arr[i].id == id){
									
									arr.splice(i , 1);
								}
							}*/
							/*if(arr[id].num == 0;){
								arr.splice(id, 1);
							}*/
						}

						/*if(arr[id].num == 0;){
							//arr.splice(id, 1);
						}*/


						if(arr[id]){
							$(this).siblings("input").val(arr[id].num);
						}

						//$(this).siblings("input").val(arr[id].num);
						if(sc_str){
							let sum = 0;
							for(let i in arr){
								sum += arr[i].num ;

							}
							$(".orderSpan1").html(sum);
						}else{
							$(".orderSpan1").html(0);
						}


					


						$.ajax({
							url: "../data/product_list.json",
							type: "get",
							success: function(res){

								//a:找出所有cookie数据

								if(!$.cookie("goods")){
									//要将购物车内的商品清空
									$(".order_con_div1").html("");
									return;
								}

								//var arr = eval($.cookie("goods"));
								let html = '';
								let price = [];
								let prices = 0;
								for(let i = 0; i < arr.length; i++){
									//用id当做下标取出数据
										
										price[i] = arr[i].num * Number(res[arr[i].id].title2);
										//alert(price[i])

									html += `
											 <div class="order_c_div1_div">
												<div><img src="${res[arr[i].id].image}"></div>
												<div>
													<p class="order_c_p5">${res[arr[i].id].title}</p>
													<p class="order_c_p6"  id = "${res[i].id}">删除</p>
												</div>
												<p class="order_c_p1">黑色</p>
												<p class="order_c_p2" >￥${res[arr[i].id].title2}</p>
												<p class="order_c_p3">￥${res[arr[i].id].title2}</p>
												<div>
													<span class = "order_c_p7"  id = "${res[i].id}">-</span>
													<input type="text" class = "orderInput" name="" placeholder="${arr[i].num}"/>
													<span class = "order_c_p8" id = "${res[i].id}">+</span>
												</div>
												<p class="order_c_p4">￥${price[i]}</p>
												
											</div>

													`

									
									//price[i] = arr[i].num * Number(res[arr[i].id].title2);
									
									
								}

								for(let i = 0 ; i < price.length;i++){
										prices += price[i];
									}
								$(".orderSpan3").html(prices);
								
								$(".order_con_div1").html(html);
								//$(".shop_div2_span2").html(prices);
								

							}	
						})

								

								
								
						let cookieStr1 = JSON.stringify(arr);
						$.cookie("goods", cookieStr1, {
							expires: 7
						});

						

					})
	
				}

			
			
				orRemove(".order_c_p7");
				orRemove(".order_c_p8");
				orRemove(".order_c_p6");
				

				/*$(".order_con_div1").on("click" , ".order_c_p8" , function(){
					 orRemove(".order_c_p8");

				})*/



	}
	return{
		orderForGoods : orderForGoods
	}
})