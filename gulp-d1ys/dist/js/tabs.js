define(["jquery"] , ($) => {
	var tabs = function(){


		//固定 regular
		/*if($(window).offset().top > $(window).scrollTop()){
			$("#regular").css({
				position : "fixed",
				top : 0,
			});

		}*/





		//tabs
		$.ajax({
			type:"get",
			url:"../data/tabs1.json",
			success:function(res){
				var html = "";
				for(let i = 0; i < res.length; i++){
					html += `<a href="product_details.html"><div>
								
								<img src="${res[i].image}">
								<p>${res[i].title}</p>
								
								
							</div></a>`
				}
				$("#tab_d1").html(html)
			}


		});


		//tabs2
		$.ajax({
			type:"get",
			url:"../data/tabs2.json",
			success:function(res){
				var html = "";
				for(let i = 0; i < res.length; i++){
					html += `<a href="product_details.html"><div>
								
								<img src="${res[i].image}">
								<p>${res[i].title}</p>
								
								
							</div></a>`
				}
				$("#tab_d2").html(html)
			}


		});

		//tabs3
		$.ajax({
			type:"get",
			url:"../data/tabs3.json",
			success:function(res){
				var html = "";
				for(let i = 0; i < res.length; i++){
					html += `<a href="product_details.html"><div>
								
								<img src="${res[i].image}">
								<p>${res[i].title}</p>
								
								
							</div></a>`
				}
				$("#tab_d3").html(html)
			}


		});
		//a1
		$("#tp_a1 , #tab_d1").mouseenter(function(){
			$("#tabs").css("display" , "block");
			$("#tab_d1").css("display" , "block");
		})
		$("#tp_a1 , #tab_d1").mouseleave(function(){
			$("#tabs").css("display" , "none");
			$("#tab_d1").css("display" , "none");
		})




		//a2
		$("#tp_a2 ,#tab_d2 ").mouseenter(function(){
			$("#tabs").css("display" , "block");
			$("#tab_d2").css("display" , "block");
		})
		$("#tp_a2 , #tab_d2").mouseleave(function(){
			$("#tabs").css("display" , "none");
			$("#tab_d2").css("display" , "none");
		})

		//a3
		$("#tp_a3 , #tab_d3").mouseenter(function(){
			$("#tabs").css("display" , "block");
			$("#tab_d3").css("display" , "block");
		})
		$("#tp_a3 , #tab_d3").mouseleave(function(){
			$("#tabs").css("display" , "none");
			$("#tab_d3").css("display" , "none");
		})



	return "选项卡";
	}
	return{
		tabs : tabs
	}
})