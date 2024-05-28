// JavaScript Document
$(function(){
	$("img.close").click(function(){
		$(this).siblings("img").slideUp("slow");
		$(this).hide();
	});
	});