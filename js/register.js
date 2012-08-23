$(function(){
	$("button").button();
})


$(function(){
	$("input").focus(function(){
		$(this).parent().children(".info").css("display","block");
		$(this).parent().children(".info").css("color","white");
		$(this).parent().children(".empty").css("display","none");	
	})
	
	$("input").blur(function(){
		if(!$(this).val()){
			$(this).parent().children(".empty").css("display","block");	
		}
		$(this).parent().children(".info").css("display","none");
	})
})

$(function(){
	
	$("#name").blur(function(){
		if(!isName($(this).val())){
			$("#error_name").css("display","block");
		}
		else{
			$("#error_name").css("display","none");
		}
		
		if(!isLong($(this).val())){
			$("#info_name").css("display","block");
			$("#info_name").css("color","#FE57A1");
		}
	})
	
	$("#email").blur(function(){
		if(!isEmail($("#email").val())){
			$("#error_email").css("display","block");
		}
		else{
			$("#error_email").css("display","none");
		}
			
		
	})	
	
	$("#password").blur(function(){
		if(!isPassword($(this).val())){
			$("#error_pwd").css("display","block");
		}
		else{
			$("#error_pwd").css("display","none");
		}
		if(!isLong($(this).val())){
			$("#info_pwd").css("display","block");
			$("#info_pwd").css("color","#FE57A1");
		}
	})
	
	$("#password_confirm").blur(function(){
		if($(this).val() != $("#password").val()){
			$("#error_pwd_c").css("display","block");
		}
		else{$(this).css("background-color","white")
			$("#error_pwd_c").css("display","none");
		}
	})
})



function isEmail(strEmail) {
	if (strEmail.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1)
	
	return true;
	else
	return false;
}
function isName(strName){
	if (strName.search(/^[A-Za-z][A-Za-z0-9]{4,17}$/) != -1 && isLong(strName))
	return true;
	else{
		if(!isLong(strName))
		return true;
	}
	return false;
}

function isPassword(str){
	if(str != $("#name").val() || str.length == 0)
	return true;
	else
	return false;
}

var minlength = 5;
var maxlength = 18;
function isLong(str){
	if(str.length == 0)
	return true;
	if(str.length < minlength || str.length > maxlength)
	return false;
	return true;
}
