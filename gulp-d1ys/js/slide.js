//AMD


//将第一张图片添加在第一张图片后面

define(["jquery", "jquery-cookie"] , function($){
	var slide = function(){
		var obtns = $("#slide").find("#slide_ul1").find("li");
		var oul =   $("#slide").find("#slide_ul2");
		var ali = oul.find("li");

		//设置iNow，代表当前显示的图片的下标
		var iNow = 0;
		var timer = null; 

		obtns.click(function(){
			//b:点击按钮，将当前的iNow改成当前按钮的下标
			iNow = $(this).index();
			tab();
		});

		function tab(){
			obtns.attr("class" , "");
			obtns.eq(iNow).attr("class", "active");

			oul.animate({
				top:-400 * iNow
			} , 500 , function(){
				if(iNow == obtns.size()){
					oul.css("top", 0);
					iNow = 0; //重置
				}
			})
		}

		function timerinner(){
			iNow++;
			tab();
			//处理第六张图片 是第一张图片 显示下标为0的按钮选中
			if(iNow == obtns.size()){
				obtns.eq(0).attr("class", "active");
			}
		}

		//d: 启动定时器
		timer = setInterval(timerinner, 4000);

		//e:添加移入移出事件
		oul.hover(function(){
			clearInterval(timer);
		}, function(){
			timer = setInterval(timerinner, 4000);
		})


		$(function(){
			$.ajax({
				url: "../data/slide.json",
				type: "get",
				success: function(res){
					var html = "";
						
					
						html = `<li><a href="#"><img src="${res[0].img}" alt="广告一"/></a></li>
								<li><a href="#"><img src="${res[1].img}" alt="广告二"/></a></li>
								<li><a href="#"><img src="${res[2].img}" alt="广告三"/></a></li>
								<li><a href="#"><img src="${res[3].img}" alt="广告四"/></a></li>
								<li><a href="#"><img src="${res[0].img}" alt="广告一"/></a></li>`;
					
					$("#slide_ul2").html(html);
					
				},
			
			})

		})
		return "nihao"
		


		return "这是轮播图";
	}
	return{
		slide:slide
	}
});