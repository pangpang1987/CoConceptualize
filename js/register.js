$(function(){
	$("button").button();

	/*	REGISTER ERROR DISPLAY */
	$("#join").click(function(){
		if ($("#username").val() == "" || $("#email").val() == "" || $("#password").val() == "" || $("#password_confirm").val() == "" || $("#fname").val() == "" || $("#lname").val() == "") {
			$("#register_error").html("Empty field detected");
			$("#register_error").fadeIn();
		}
		else if(!isName($("#username").val())){
			$("#register_error").html("Username is invalid");
			$("#register_error").fadeIn();
		}
		else if(!isLong($("#username").val())){
			$("#register_error").html("Username should be at least 5 letters long");
			$("#register_error").fadeIn();
		}
		else if(isNameOccupied($("#username").val())){
			$("#register_error").html("This username has been registered");
			$("#register_error").fadeIn();
		}
		else if(!isEmail($("#email").val())){
			$("#register_error").html("Invalid email address");
			$("#register_error").fadeIn();
		}
		else if(!isPassword($("#password").val())){
			$("#register_error").html("Password is invalid");
			$("#register_error").fadeIn();
		}
		else if(!isLong($("#password").val())){
			$("#register_error").html("Password is not long enough (8-12 characters)");
			$("#register_error").fadeIn();
		}
		else if($("#password_confirm").val() != $("#password").val()){
			$("#register_error").html("Password confirmation is wrong");
			$("#register_error").fadeIn();
		}
		else {
			$("#register_error").html("Processing");
			$("#register_error").css("background-color", "#b7f691");
			$("#register_error").css("color", "#46bb00");
			$("#register_error").css("border", "1px solid #58d110");
			$("#register_error").fadeIn("slow").delay("400").fadeOut();
		}
	});

});

function isEmail(strEmail) {
	
	if(!strEmail.length)
		return true;
	if (strEmail.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1)
		return true;
	else{
		warning = true;
		return false;
	}
}
function isName(strName){
	//alert(strName);
	if (!strName.length)
		return true;
	if (strName.search(/^[A-Za-z][A-Za-z0-9]{4,17}$/) != -1 && isLong(strName))
		return true;
	else{
		if(!isLong(strName))
		return true;
	}
	warning = true;
	return false;
}

function isNameOccupied(strName){
	if(strName == "a1234"){
		warning = true;
		return true;
	}
	
	return false;
}
function isPassword(str){
	if(str != $("#name").val() || str.length == 0)
		return true;
	warning = true;
	return false;
}
function isPasswordOccupied(str){
	if(str != $("#password").val() || str.length == 0)
		return true;
	else{
		warning = true;
		return false;
	}
}

var warning = false;
var minlength = 5;
var maxlength = 18;
function isLong(str){
	if(!str.length)
		return true;
	if(str.length < minlength || str.length > maxlength){
		warning = true;
		return false;
	}
	return true;
}
