$(function() {
	$('#loginButton').button();
	$('#joinButton').button();
	$('#joinButton').bind("click", function() {
		window.location = "register.html";
	});
});