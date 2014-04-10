$(document).ready(function() {
	//信息切换效果
	$("div[id^='com']").each(function(i){

		$("#com_"+(i+1)+" h3").click(function(){
			$("#com_"+(i+1)+" h3").css({"background-color":"#1C88D0",color:"#FFFFFF"});
			$("#com_"+(i+1)+" h3 img").attr("src","/img/collapse_icon_white.png");
			$("#com_"+(i+1)+" div").css({display:"block"});
			$("#com_"+(i+1)+" div").parent("div").siblings().children("div").css({display:"none"});
			$("#com_"+(i+1)+" div").parent("div").siblings().children("h3").css({"background-color":"#F1F1F1","color":"#0088cc"});
			$("#com_"+(i+1)+" div").parent("div").siblings().children("h3").children("img").attr("src","/img/expand_icon.png");
			});

		if (i==0){
			$("#com_"+(i+1)+" h3").css({"background-color":"#1C88D0",color:"#FFFFFF"});
			$("#com_"+(i+1)+" h3 img").attr("src","/img/collapse_icon_white.png");
			$("#com_"+(i+1)+" div").css({display:"block"});
			$("#com_"+(i+1)+" div").parent("div").siblings().children("div").css({display:"none"});
			$("#com_"+(i+1)+" div").parent("div").siblings().children("h3").css({"background-color":"#F1F1F1","color":"#0088cc"});
			$("#com_"+(i+1)+" div").parent("div").siblings().children("h3").children("img").attr("src","/img/expand_icon.png");
		}
	});
});
