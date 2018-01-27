define(["jquery"] , function($){
	var register = function(){
		$(function(){

			///注册页面
			//手机号
			$("#re_c_div2_ip1").focus(function(){
				if($("#re_c_div2_ip1").val() == ""){
					$(".re_c_div2_div2").html("请填写正确的手机号码，以便于收发信息，找回密码等");
					$(".re_c_div2_div2").css("color" , "gray");
				}
				
			})




			$("#re_c_div2_ip1").blur(function(){

			



				let oValue = $("#re_c_div2_ip1").val();
				let pattern = /^1[3,4,5,7,8]\d{9}$/; 

				if(pattern.test(oValue)){
					$(".re_c_div2_div2").html("输入正确");
					$(".re_c_div2_div2").css("color" , "green");
				}else{
					$(".re_c_div2_div2").html("请输入正确的手机号格式");
					$(".re_c_div2_div2").css("color" , "red");
				}

			})


			//密码
			$("#re_c_div2_ip3").blur(function(){
				let oValue1 = $("#re_c_div2_ip3").val();
				let pattern1 =  /^[A-Za-z0-9]{4,14}$/;

				 if(pattern1.test(oValue1)){
					$(".re_c_div2_div5").find("p").html("密码可以使用");
					$(".re_c_div2_div5").find("p").css("color" , "green");
				}else{
					$(".re_c_div2_div5").find("p").html("密码长度4-14位，支持数字，字母，字母区分大小写");
					$(".re_c_div2_div5").find("p").css("color" , "red");
				}
			})

			//验证密码
			$("#re_c_div2_ip4").blur(function(){
				
				 if ( $("#re_c_div2_ip4").val() == $("#re_c_div2_ip3").val()){
					$(".re_c_div2_div6").find("p").html("输入正确");
					$(".re_c_div2_div6").find("p").css("color" , "green");
				}else{
					$(".re_c_div2_div6").find("p").html("两次输入密码不一致");
					$(".re_c_div2_div6").find("p").css("color" , "red");
				}
			})


		})
		

		///登录界面

		$(".en_con_inp1").focus(function(){
			$(".en_con_p1").css("display" , "block");
		})
		$(".en_con_inp1").blur(function(){
			$(".en_con_p1").css("display" , "none");
		})
		

		$(".en_con_inp2").focus(function(){
			$(".en_con_p2").css("display" , "block");
		})
		$(".en_con_inp2").blur(function(){
			$(".en_con_p2").css("display" , "none");
		})


		//  生成随机验证码

		function cg()
		 {
		     var result="";
		     for(i=0;i<4;i++)
		     {
		      result=result+(parseInt(Math.random()*10)).toString();
		     } 
		     return  result;
		 }

		 $(".huanyizhang").click(function(){
		 	 $(".yanzhengma").html(cg());
		 })
		












		/*function $(id){
				return document.getElementById(id);
			}

		$("#re_c_div2_ip1").onblur = function(){
			var oValue = $(".re_c_div2_ip1").value.replace(/ /igm, "");
			$("re_c_div2_ip1").value = oValue;
			if(/1\d{10}/.test(oValue)){
				$("re_c_div2_sp1").innerHTML = "输入正确";
			}else{
				$("re_c_div2_sp1").innerHTML = "请输入正确的手机号格式";
			}
		}*/

		/*$("#re_c_div2_ip1").onblur = function(){
		//var oValue = $("mobilename").value.replace(/ /igm, "");
			var oValue = $("#re_c_div2_ip1").val() ;
			if(/1\d{10}/.test(oValue)){
				$("#re_c_div2").find("div:eq(0)").find("span").html("输入正确")
			}else{
				$("#re_c_div2").find("div:eq(0)").find("span").html("请输入正确的手机号格式")
				
			}
		}*/





		return "这是登录注册";
	}
	return{
		register:register
	}
})