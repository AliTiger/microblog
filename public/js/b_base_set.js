var suc_msg = "名片修改信息提交成功！";
$(document).ready(function() {
	function validate(){
		var name = $('#name').val();
		var mob = $('#mob').val();
		console.log(mob);
		if(!name.length){
			$('#warn_name').remove();
			$('#name').after('<span id="warn_name">名称不可以为空</span>').focus();
			return false;
		}
		if(isNaN(mob) || mob.length!=11){
			$('#warn_mob').remove();
			$('#mob').after('<span id="warn_mob">请填写正确的电话号码</span>').focus();
			return false;
		}
		return true ; 
	}
	
	//表单提交的参数
	function get_option(){
		var option = {
			type : "POST",
			dataType : "json",
			success: function(result){
				if( "ok" == result.result ) {
					$("#alert_success").dialog();
					$("#alert_error").css("display","none");
				} else {
					$("#alert_error").dialog();
					$("#alert_success").css("display","none");
				}
			}
		};
		return option;
	}//end geti_option
	//基本信息
	$("#form1").submit(function(){	return false;	});
	$("#form1_submit").click(function(){

		if(!validate()){
			return false;
		}

		$("#form1_submit").button('loading');

		
		$("#form1").ajaxSubmit(get_option());
		$("#form1_submit").button('reset');
		return false;
	});
});
