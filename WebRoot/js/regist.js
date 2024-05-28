// JavaScript Document
function checkNo($txtObj){//�˺ű���ҳ�����6��12֮��
 var len=$txtObj.val().length;
 if(len==0){
   $txtObj.siblings("span").text("�˺ű���");
   return false;
 }
 if(len<6||len>12){
	 $txtObj.siblings("span").text("�˺ŵĳ�����6��12λ֮��");
	 return false;
 }
 $txtObj.siblings("span").addClass("spanBlurOk")
			                   .text("");
	return true;
}
function checkPwd($txtObj){
	var len=$txtObj.val().length;
	if(len==0){
   $txtObj.siblings("span").text("�������");
   return false;
 }
 if(len<6||len>12){
	 $txtObj.siblings("span").text("����ĳ�����6��12λ֮��");
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
   $txtObj.siblings("span").text("ȷ���������");
   return false;
 }
 if(pwd!=$txtObj.val()){
	 $txtObj.siblings("span").text("������������벻һ��");
	 return false;
 }
 $txtObj.siblings("span").addClass("spanBlurOk")
			                   .text("");
	return true;
}
function checkName($txtObj){
	 var len=$txtObj.val().length;
 if(len==0){
   $txtObj.siblings("span").text("��������");
   return false;
 }
 if(len<2||len>6){
	 $txtObj.siblings("span").text("�����ĳ�����2��6λ֮��");
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
   $txtObj.siblings("span").text("�ֻ��ű���");
   return false;
 }
 if(!phoneReg.test($txtObj.val())){
	 $txtObj.siblings("span").text("�ֻ���ʽ����");
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
   $txtObj.siblings("span").text("���֤����");
   return false;
 }
 if(!idReg.test($txtObj.val())){
	 $txtObj.siblings("span").text("���֤��ʽ����");
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
//�ı����ȡ����ʱ����ʽ
function getFocus($txtObj){
	$txtObj.removeClass("txtInit")
	       .addClass("txtFocus");  //�޸ĵ�ǰ�ı������ʽ
	$txtObj.siblings("span").removeClass("spanBlurOk"); //��ȡͬ��Ԫ��<span>��ȥ������ͼƬ,�ȴ�ʧȥ�����������֤
}
//�ı���ʧȥ����ʱ����ʽ
function loseFocus($txtObj){
	$txtObj.removeClass("txtFocus")
	         .addClass("txtInit");
}

 $(function(){
	//�Զ������˺��ı����focus�¼�
	$("#txtNo").trigger("focus");
	$("#txtNo").focus(function(){//���˺��ı����ȡ�����¼�
	  getFocus($(this));
	});
	$("#txtNo").blur(function(){//���˺��ı���ʧ�����¼�
	   loseFocus($(this)); //����ʽ
	   checkNo($(this));//�ж϶Դ�
	});
	
	$("#txtPwd").focus(function(){//�������ı����ȡ�����¼�
	  getFocus($(this));
	});
	$("#txtPwd").blur(function(){//�������ı���ʧ�����¼�
	 loseFocus($(this)); //����ʽ
	 checkPwd($(this));//�ж϶Դ�
	});
		
	$("#txtConfirmPwd").focus(function(){//��ȷ�������ı����ȡ�����¼�
	  getFocus($(this));
	});
	$("#txtConfirmPwd").blur(function(){//��ȷ�������ı���ʧ�����¼�
	 loseFocus($(this)); //����ʽ
	 checkConfirm($(this));//�ж϶Դ�
	});
	
		$("#txtName").focus(function(){//�������ı����ȡ�����¼�
	  getFocus($(this));
	});
	$("#txtName").blur(function(){//�������ı���ʧ�����¼�
	 loseFocus($(this)); //����ʽ
	 checkName($(this));//�ж϶Դ�
	});	
		
	
	$("#txtId").focus(function(){//�����֤�ı����ȡ�����¼�
	  getFocus($(this));
	});
	$("#txtId").blur(function(){//�����֤�ı���ʧ�����¼�
	 loseFocus($(this)); //����ʽ
	 checkId($(this));//�ж϶Դ�
	});		
	
	$("#txtPhone").focus(function(){//���ֻ������ı����ȡ�����¼�
	  getFocus($(this));
	});
	$("#txtPhone").blur(function(){//���ֻ������ı���ʧ�����¼�
	 loseFocus($(this)); //����ʽ
	 checkPhone($(this));//�ж϶Դ�
	});		
});