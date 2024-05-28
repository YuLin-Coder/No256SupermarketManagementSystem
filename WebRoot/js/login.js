// JavaScript Document
$(function(){
	  $("#txtLoginNo").focus(function(){  // 输入账号的文本框获得鼠标焦点
		var txt_value = $(this).val();   // 得到当前文本框的值
		if(txt_value=="请输入6~12位账号"){  
             $(this).val("");              // 如果符合条件，则清空文本框内容
		} 
	  });
	  $("#txtLoginNo").blur(function(){// 文本框失去鼠标焦点
	  	     var txt_value = $(this).val();   // 得到当前文本框的值
		    if(txt_value==""){
                $(this).val("请输入6~12位账号");// 如果符合条件，则设置内容
		   } 
	  });
	});
