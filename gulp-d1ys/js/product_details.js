define(["jquery"] , ($)=>{
	var product_details = function(){
		$(".de_input1").click(function(){
			$("#de_div2_div2_1").css("display" , "block");
			$("#de_div2_div2_1").siblings().css("display" , "none");
		});
		$(".de_input2").click(function(){
			$("#de_div2_div2_2").css("display" , "block");
			$("#de_div2_div2_2").siblings().css("display" , "none");
		});
		$(".de_input3").click(function(){
			$("#de_div2_div2_3").css("display" , "block");
			$("#de_div2_div2_3").siblings().css("display" , "none");
		});
		$(".de_input4").click(function(){
			$("#de_div2_div2_4").css("display" , "block");
			$("#de_div2_div2_4").siblings().css("display" , "none");
		});




		//商品展示，鼠标放在小商品上，上边显示出相应的商品

		$(".details_content_div1_2").find("li:eq(0)").mouseover(function(){
			$(".deta_div1").css("display" , "block");
			$(".deta_div1").siblings("div").css("display" , "none");

			$(".man_div1").css("display" , "block");
			$(".man_div1").siblings().css("display" , "none");
		});
		$(".details_content_div1_2").find("li:eq(1)").mouseover(function(){
			$(".deta_div2").css("display" , "block");
			$(".deta_div2").siblings("div").css("display" , "none");

			$(".man_div2").css("display" , "block");
			$(".man_div2").siblings().css("display" , "none");
		});
		$(".details_content_div1_2").find("li:eq(2)").mouseenter(function(){
			$(".deta_div3").css("display" , "block");
			$(".deta_div3").siblings("div").css("display" , "none");

			$(".man_div3").css("display" , "block");
			$(".man_div3").siblings().css("display" , "none");
		});
		$(".details_content_div1_2").find("li:eq(3)").mouseenter(function(){
			$(".deta_div4").css("display" , "block");
			$(".deta_div4").siblings("div").css("display" , "none");

			$(".man_div4").css("display" , "block");
			$(".man_div4").siblings().css("display" , "none");
		});
		$(".details_content_div1_2").find("li:eq(04)").mouseenter(function(){
			$(".deta_div5").css("display" , "block");
			$(".deta_div5").siblings("div").css("display" , "none");

			$(".man_div5").css("display" , "block");
			$(".man_div5").siblings().css("display" , "none");
		});



		//放大区域   显示相应的图像

			$(".details_content_div1_2").find("li:eq(0)").mouseover(function(){
				
			});
			$(".details_content_div1_2").find("li:eq(1)").mouseover(function(){
				
			});
			$(".details_content_div1_2").find("li:eq(2)").mouseenter(function(){
				
			});
			$(".details_content_div1_2").find("li:eq(3)").mouseenter(function(){
				
			});
			$(".details_content_div1_2").find("li:eq(04)").mouseenter(function(){
				
			});




			//   鼠标放在图像上有一个白色方块
			//   放大镜效果


		$(function(){

			$(".details_content_div1_1").hover(function(){
				$(".dete_xiaobaikuai").css("display" , "block");
				$(".magnify").css("display" , "block");
				
			},function(){
				$(".dete_xiaobaikuai").css("display" , "none");
				$(".magnify").css("display" , "none");
			})


			$(".non").mousemove(function(ev){
				var left = ev.offsetX - $(".dete_xiaobaikuai").outerWidth()/2;
			 	var top = ev.offsetY - $(".dete_xiaobaikuai").outerHeight()/2;
			 	if(left < 0){
			 		left = 0;
			 	}else if(left > this.offsetWidth - $(".dete_xiaobaikuai").outerWidth()){
			 		left = this.offsetWidth - $(".dete_xiaobaikuai").outerWidth();
			 	}
			 	if(top < 0){
			 		top = 0;
			 	}else if(top > this.offsetHeight - $(".dete_xiaobaikuai").outerHeight()){
			 		top = this.offsetHeight - $(".dete_xiaobaikuai").outerHeight();
			 	}

			 	$(".dete_xiaobaikuai").css("left",left);
			 	$(".dete_xiaobaikuai").css("top",top);

			 	var proportionX = left / (this.offsetWidth - $(".dete_xiaobaikuai").outerWidth());
			 	var proportionY = top / (this.offsetHeight - $(".dete_xiaobaikuai").outerWidth());

			 	var mLeft = - proportionX * ($(".nonee").outerWidth() - $(
			 		".magnify").outerWidth());
			 	var mTop = - proportionY * ($(".nonee").outerHeight() - $(".magnify").outerHeight());
			 	$(".nonee").css("left",mLeft);
			 	$(".nonee").css("top",mTop);

			})

			







		
			$.ajax({
				url: "../data/product_list.json",
				type: "get",
				success: function(res){
					/*var html = "";
						
					
						html = `<img src="../images/details/TIM截图20180124153842.png">
								<div class="details_content_div1_1">
									<div class = "deta_div1"><img src = "${res[0].img5}"/></div>
									<div class = "deta_div2"><img src = "${res[0].img6}"/></div>
									<div class = "deta_div3"><img src = "${res[0].img7}"/></div>
									<div class = "deta_div4"><img src = "${res[0].img8}"/></div>
									<div class = "deta_div5"><img src = "${res[0].img9}"/></div>
								</div>
								<div class="details_content_div1_2">
					w				<ul>
										<li><a href="#"><img src = "${res[0].img0}" /></a></li>
										<li><a href="#"><img src = "${res[0].img1}" /></a></li>
										<li><a href="#"><img src = "${res[0].img2}" /></a></li>
										<li><a href="#"><img src = "${res[0].img3}" /></a></li>
										<li><a href="#"><img src = "${res[0].img4}" /></a></li>
									</ul>
								</div>`;*/





						let htmls = `

							<div class="detail_shop_car" id ="${res[0].id}" ><img src="../images/details/TIM截图20180124160613.png"></div>
							<div><img src="../images/details/TIM截图20180124160623.png"></div>`;
						let html1 = `<img src = "${res[0].img5}"/>`;
						let html2 = `<img src = "${res[0].img6}"/>`;
						let html3 = `<img src = "${res[0].img7}"/>`;
						let html4 = `<img src = "${res[0].img8}"/>`;
						let html5 = `<img src = "${res[0].img9}"/>`;
						let html6 = `<img src = "${res[0].img0}"/>`;
						let html7 = `<img src = "${res[0].img1}"/>`;
						let html8 = `<img src = "${res[0].img2}"/>`;
						let html9 = `<img src = "${res[0].img3}"/>`;
						let html10 = `<img src = "${res[0].img4}"/>`;
					
					//$(".details_content_div1").html(html);



					$(".de_con1_div2_div3").html(htmls);
					$(".deta_div1").html(html1);
					$(".deta_div2").html(html2);
					$(".deta_div3").html(html3);
					$(".deta_div4").html(html4);
					$(".deta_div5").html(html5);
					$(".details_content_div1_2").find("li:eq(0)").html(html6);
					$(".details_content_div1_2").find("li:eq(1)").html(html7);
					$(".details_content_div1_2").find("li:eq(2)").html(html8);
					$(".details_content_div1_2").find("li:eq(3)").html(html9);
					$(".details_content_div1_2").find("li:eq(4)").html(html10);
					
				},
			
			})

		})








		return "这是轮播图";
	}
	return{
		product_details : product_details
	}
})