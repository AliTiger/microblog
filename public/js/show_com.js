//为页面中com_x添加样式
$(document).ready(function() {
	$("div[id^='com']").each(function(i){
		$("#com_"+(i+1)+" h3").toggle(
			function(){
				$("#com_"+(i+1)+" h3").css({"background-color":"#F1F1F1","color":"#0088cc"});
				$("#com_"+(i+1)+" h3 img").attr("src","/img/expand_icon.png");
				$("#com_"+(i+1)+" div").css({"display":"none"});
			},
			function(){
				$("#com_"+(i+1)+" h3").css({"background-color":"#1C88D0","color":"#FFFFFF"});
				$("#com_"+(i+1)+" h3 img").attr("src","/img/collapse_icon_white.png");
				$("#com_"+(i+1)+" div").css({"display":"block"});
			}
		);
	});
});
