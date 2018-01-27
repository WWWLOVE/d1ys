//AMD规范


define(["jquery"  ] , ($) => {
	var main = function(){
		//   top1  + top2

		//我的订单
		$("#a1").mouseenter(function(){
			$("#ul2").css("display" , "block");
		});
		$("#ul2").mouseenter(function(){
			$("#ul2").css("display" , "block");
		});
		$("#a1").mouseleave(function(){
			$("#ul2").css("display" , "none");
		});
		$("#ul2").mouseleave(function(){
			$("#ul2").css("display" , "none");
		});



		//变颜色
		$("#ul2").find("li").find("a").mouseenter(function() {
			$(this).css("color" , "#c12929");
		});
		$("#ul2").find("li").find("a").mouseleave(function() {
			$(this).css("color" , "#79797b");
		});


		$("#ul1").find("li").find("a").mouseenter(function() {
			$(this).css("color" , "#c12929");
		});
		$("#ul1").find("li").find("a").mouseleave(function() {
			$(this).css("color" , "#79797b");
		});

		//手机优尚
		$("#a2").mouseenter(function(){
			$("#div4").css("display" , "block");
		});
		$("#a2").mouseleave(function(){
			$("#div4").css("display" , "none");
		});



		//design  
		$("#dsn_div11").mouseenter(function(){
			$("#dsn_div11").find("#p1").animate(  {bottom:"0px"},1000);

		});
		$("#dsn_div11").find("#p1").mouseleave(function(){
			$("#p1").animate( {bottom:"-65px"},1000);

		});

		//固定 regular
		$(window).scroll(function(){
			/*if( $(window).scrollTop() > "550"){

				//$("#regular").css("position" , "fixed").css("top" , "0");
				$("#regular").css({
					"position" : "fixed",
					"top" : 0,
				});
			}else{
				$("#regular").css({
					"position" : "absolute",
					"top" : "550px",
				});
			}*/
			if( $(window).scrollTop() >= "0" &&  $(window).scrollTop() <= "550"){
				$("#regular").css({
					"position" : "absolute",
					"top" : "550px",

				});
				$("#regular").find("li:eq(0)").css("background" , "#cd0074");
				$("#regular").find("li:eq(0)").siblings().css("background" , "#ececec");
				$("#regular").find("li:eq(0)").find("a").css("color" , "white");
				$("#regular").find("li:eq(0)").siblings().find("a").css("color" , "black");
			}else if($(window).scrollTop() > "550" &&  $(window).scrollTop() <= "1700"){
				$("#regular").css({
					"position" : "fixed",
					"top" : 0,

				});
				$("#regular").find("li:eq(1)").css("background" , "#cd0074");
				$("#regular").find("li:eq(1)").siblings().css("background" , "#ececec");
				$("#regular").find("li:eq(1)").find("a").css("color" , "white");
				$("#regular").find("li:eq(1)").siblings().find("a").css("color" , "black");
			}else if($(window).scrollTop() > "1700" &&  $(window).scrollTop() <= "2800"){
				$("#regular").css({
					"position" : "fixed",
					"top" : 0,

				});
				$("#regular").find("li:eq(2)").css("background" , "#cd0074");
				$("#regular").find("li:eq(2)").siblings().css("background" , "#ececec");
				$("#regular").find("li:eq(2)").find("a").css("color" , "white");
				$("#regular").find("li:eq(2)").siblings().find("a").css("color" , "black");
			}else if($(window).scrollTop() > "2800" &&  $(window).scrollTop() <= "3900"){
				$("#regular").css({
					"position" : "fixed",
					"top" : 0,

				});
				$("#regular").find("li:eq(3)").css("background" , "#cd0074");
				$("#regular").find("li:eq(3)").siblings().css("background" , "#ececec");
				$("#regular").find("li:eq(3)").find("a").css("color" , "white");
				$("#regular").find("li:eq(3)").siblings().find("a").css("color" , "black");
			}else if($(window).scrollTop() > "3900" &&  $(window).scrollTop() <= "5000"){
				$("#regular").css({
					"position" : "fixed",
					"top" : 0,

				});
				$("#regular").find("li:eq(4)").css("background" , "#cd0074");
				$("#regular").find("li:eq(4)").siblings().css("background" , "#ececec");
				$("#regular").find("li:eq(4)").find("a").css("color" , "white");
				$("#regular").find("li:eq(4)").siblings().find("a").css("color" , "black");
			}else if($(window).scrollTop() > "5000" &&  $(window).scrollTop() <= "6100"){
				$("#regular").css({
					"position" : "fixed",
					"top" : 0,

				});
				$("#regular").find("li:eq(5)").css("background" , "#cd0074");
				$("#regular").find("li:eq(5)").siblings().css("background" , "#ececec");
				$("#regular").find("li:eq(5)").find("a").css("color" , "white");
				$("#regular").find("li:eq(5)").siblings().find("a").css("color" , "black");
			}else if($(window).scrollTop() > "6100" &&  $(window).scrollTop() <= "7200"){
				$("#regular").css({
					"position" : "fixed",
					"top" : 0,

				});
				$("#regular").find("li:eq(6)").css("background" , "#cd0074");
				$("#regular").find("li:eq(6)").siblings().css("background" , "#ececec");
				$("#regular").find("li:eq(6)").find("a").css("color" , "white");
				$("#regular").find("li:eq(6)").siblings().find("a").css("color" , "black");
			}






		})

		/*$("#regular").find("li:eq(0)").find("a").click(function(){
			$(window).scrollTop(0);
		});

		$("#regular").find("li:eq(1)").find("a").click(function(){
			$(window).scrollTop("550px");
		});
		$("#regular").find("li:eq(2)").find("a").click(function(){
			$(window).scrollTop("1700px");
		});*/














		

		
		//design动画
		$(".dsn_div1").on("mouseenter" , ".dsn_div11" , function(){
			let _this  = this;
			$(_this).find(".p1").animate({bottom : 0} , 300 , "linear");
			$(_this).find(".p1").css("boxS")
		});

		$(".dsn_div1").on("mouseleave" , ".dsn_div11" , function(){
			let _this  = this;
			$(_this).find(".p1").animate({bottom : "-65px"} , 300 , "linear");
		});






		//house
		$.ajax({
			type:"get",
			url:"../data/index_md1.json",
			success:function(res){
				var html = "";
				for(let i = 0; i < res.length; i++){
					html += `<a href="product_details.html"><div>
								
								<img src="${res[i].image}">
								<p>${res[i].title}</p>
								
								
							</div></a>`
				}
				$("#hse_div1").html(html);
			}


		});


		//design


		
			$.ajax({
				typr:"get",
				url:"../data/index_md2.json",
				success:function(res){
					var html = "";
					for(let i = 0; i < res.length; i++){
						html += `<div class="dsn_div11">
									<img src="${res[i].image}">

									<a href="product_details.html">
										<p class="p1">${res[i].title}
												<br/>
												<span id="sp1">${res[i].title1}</span>
												<span id="sp2">${res[i].title2}</span>
											
										</p>
									</a>

									<div ></div>
								</div>`
					}
					$(".dsn_div1").html(html);
					
					
				}
			});
		
		


		


		/*$(function(){
			$("#dsn_div11").animate({
				top:0,
			}1000);
		})*/
		
		
	return "这事主页";

	}
	return{
		main:main
	}
})