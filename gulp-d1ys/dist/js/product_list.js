define(["jquery"] , function($){
	var product_list = function(){

		
		
			

		
			/*$("#shoping_card_div4").click(function(){
				
			})*/
		




			$.ajax({
				type:"get",
				url:"../data/product_list.json",
				success:function(res){
					var html = "";
					for(let i = 0; i < res.length; i++){
						html += `
									<li class="list_con_div1" >
										<a href = "product_details.html">
											<img  src="${res[i].image}">
											<p id="con_p1">￥${res[i].title2}</p>
											<p id="con_p2">${res[i].title}</p>
										</a>	
											<div id = "list_con_div11">
									
												<input type="text" name="" placeholder="1">
												<div>
													<p class="con_p3"><img src="../images/top-foot/list-2.jpg"></p>
													<p class = "con_p4"><img src="../images/top-foot/list-21.jpg"></p>
												</div>
												<div class = "detail_shop_car"  id ="${res[i].id}"><img src="../images/top-foot/listcontent-2.jpg"></div>
											</div> 
										
									</li>` ;
					}
					$("#list_content").html(html);
				}


			});

	
		$(function(){
			

				
			



		});
		return "这是商品列表";
	}
	return{
		product_list : product_list
	}
})