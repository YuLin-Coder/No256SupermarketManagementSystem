// JavaScript Document
$(function(){
	  $("#txtLoginNo").focus(function(){  // �����˺ŵ��ı�������꽹��
		var txt_value = $(this).val();   // �õ���ǰ�ı����ֵ
		if(txt_value=="������6~12λ�˺�"){  
             $(this).val("");              // �������������������ı�������
		} 
	  });
	  $("#txtLoginNo").blur(function(){// �ı���ʧȥ��꽹��
	  	     var txt_value = $(this).val();   // �õ���ǰ�ı����ֵ
		    if(txt_value==""){
                $(this).val("������6~12λ�˺�");// �����������������������
		   } 
	  });
	});
