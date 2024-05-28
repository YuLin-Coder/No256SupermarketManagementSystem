// JavaScript Document
function checkNo($txtObj){//账号必填，且长度在6到12之间
 var len=$txtObj.val().length;
 if(len==0){
   $txtObj.siblings("span").text("账号必填");
   return false;
 }
 if(len<6||len>12){
	 $txtObj.siblings("span").text("账号的长度在6到12位之间");
	 return false;
 }
 $txtObj.siblings("span").addClass("spanBlurOk")
			                   .text("");
	return true;
}
function checkPwd($txtObj){
	var len=$txtObj.val().length;
	if(len==0){
   $txtObj.siblings("span").text("密码必填");
   return false;
 }
 if(len<6||len>12){
	 $txtObj.siblings("span").text("密码的长度在6到12位之间");
	 return false;
 }
 $txtObj.siblings("span").addClass("spanBlurOk")
			                   .text("");
	return true;
}
function checkConfirm($txtObj){
	var pwd=$("#txtPwd").val();
var len=$txtObj.val().length;
 if(len==0){
   $txtObj.siblings("span").text("确认密码必填");
   return false;
 }
 if(pwd!=$txtObj.val()){
	 $txtObj.siblings("span").text("两次输入的密码不一致");
	 return false;
 }
 $txtObj.siblings("span").addClass("spanBlurOk")
			                   .text("");
	return true;
}
function checkName($txtObj){
	 var len=$txtObj.val().length;
 if(len==0){
   $txtObj.siblings("span").text("姓名必填");
   return false;
 }
 if(len<2||len>6){
	 $txtObj.siblings("span").text("姓名的长度在2到6位之间");
	 return false;
 }
 $txtObj.siblings("span").addClass("spanBlurOk")
			             .text("");
	return true;
}
function checkPhone($txtObj){
	 var phoneReg=/^(13|15|18)\d{9}$/;
	 var len=$txtObj.val().length;
	if(len==0){
   $txtObj.siblings("span").text("手机号必填");
   return false;
 }
 if(!phoneReg.test($txtObj.val())){
	 $txtObj.siblings("span").text("手机格式错误");
	 return false;
 }
 $txtObj.siblings("span").addClass("spanBlurOk")
			                   .text("");
	return true;
}
function checkId($txtObj){
	 var idReg=/^\d{15}$|^\d{18}$/;
	 var len=$txtObj.val().length;
	if(len==0){
   $txtObj.siblings("span").text("身份证必填");
   return false;
 }
 if(!idReg.test($txtObj.val())){
	 $txtObj.siblings("span").text("身份证格式错误");
	 return false;
 }
 $txtObj.siblings("span").addClass("spanBlurOk")
			                   .text("");
	return true;
}
function check(){
	var flag= checkNo($("#txtNo"))
	      &&checkPwd($("#txtPwd"))
		  &&checkConfirm($("#txtConfirmPwd"))
		  &&checkName($("#txtName"))
		  &&checkId($("#txtId"))
		  && checkPhone($("#txtPhone"));
	return flag;
}
//文本框获取焦点时的样式
function getFocus($txtObj){
	$txtObj.removeClass("txtInit")
	       .addClass("txtFocus");  //修改当前文本框的样式
	$txtObj.siblings("span").removeClass("spanBlurOk"); //获取同胞元素<span>，去掉背景图片,等待失去焦点后重新验证
}
//文本框失去焦点时的样式
function loseFocus($txtObj){
	$txtObj.removeClass("txtFocus")
	         .addClass("txtInit");
}

 $(function(){
	//自动触发账号文本框的focus事件
	$("#txtNo").trigger("focus");
	$("#txtNo").focus(function(){//绑定账号文本框获取焦点事件
	  getFocus($(this));
	});
	$("#txtNo").blur(function(){//绑定账号文本框丢失焦点事件
	   loseFocus($(this)); //改样式
	   checkNo($(this));//判断对错
	});
	
	$("#txtPwd").focus(function(){//绑定密码文本框获取焦点事件
	  getFocus($(this));
	});
	$("#txtPwd").blur(function(){//绑定密码文本框丢失焦点事件
	 loseFocus($(this)); //改样式
	 checkPwd($(this));//判断对错
	});
		
	$("#txtConfirmPwd").focus(function(){//绑定确认密码文本框获取焦点事件
	  getFocus($(this));
	});
	$("#txtConfirmPwd").blur(function(){//绑定确认密码文本框丢失焦点事件
	 loseFocus($(this)); //改样式
	 checkConfirm($(this));//判断对错
	});
	
		$("#txtName").focus(function(){//绑定姓名文本框获取焦点事件
	  getFocus($(this));
	});
	$("#txtName").blur(function(){//绑定姓名文本框丢失焦点事件
	 loseFocus($(this)); //改样式
	 checkName($(this));//判断对错
	});	
		
	
	$("#txtId").focus(function(){//绑定身份证文本框获取焦点事件
	  getFocus($(this));
	});
	$("#txtId").blur(function(){//绑定身份证文本框丢失焦点事件
	 loseFocus($(this)); //改样式
	 checkId($(this));//判断对错
	});		
	
	$("#txtPhone").focus(function(){//绑定手机号码文本框获取焦点事件
	  getFocus($(this));
	});
	$("#txtPhone").blur(function(){//绑定手机号码文本框丢失焦点事件
	 loseFocus($(this)); //改样式
	 checkPhone($(this));//判断对错
	});		
});