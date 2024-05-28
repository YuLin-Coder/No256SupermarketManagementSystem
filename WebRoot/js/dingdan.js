// JavaScript Document
$(function(){
	 var setting={changeMonth:true, //显示选择月份的下拉列表
	              changeYear:true,//显示选择年份的下拉列表
				  showWeek:true,//显示日期对应的星期
				  showButtonPanel:true,//显示"关闭"按钮面板
				  closeText:"关闭",//设置关闭按钮的文本
				  yearRange:'2000:2020',//设置年份的范围
				  dateFormat:'yy-mm-dd',//设置显示在文本框中的日期格式
				  showAnim:"slideDown"//设置显示或隐藏日期选择窗口的方式。可以设置的方式有："show"、"slideDown"、"fadeIn"
	 };
	 $( "#txtLeaveDate" ).datepicker(setting); //文本框和日历插件绑定
	 
	 
	 //判断选择的出行日期必须今天
	 $("#txtLeaveDate").change(function(){
		  var now=new Date();  //今天的时间
		var future=new Date($(this).val());
        var diff=future.getTime()-now.getTime();//毫秒
        var days=diff/(1000*60*60*24); //相差的天数
		if(days<=0){
		$(this).next("span").text("出行的日期必须大于今天");	
		$(this).val("");
		}
         else{
			 	$(this).next("span").text("");	
		 }

	 });
 	 
	 
	 
	 //删除该行的信息录入表,删除之前备份
	 var copyInfo=$(".vistor_info").html(); // 避免把所有的信息表都删除后，没复制的html原件
	$("a.operateDel").click(function(){
		 del($(this));
		});
	 //增加出游人的信息录入表
	 $(".people a.operateAdd").click(function(){
		 var $addInfo=$(copyInfo);
	   $(this).parent("div").before($addInfo);
	   //找增加的信息表中的”删除“a标签
	  
	   $addInfo.find("a.operateDel").bind("click",function(){
		   del($(this));
		   return false;
		   });//给新增加的"删除"链接绑定方法
       return false;
		 });
	
		 
	 
});
//删除的功能
function del($dela) { //<a>标签对应的div
    var flag = confirm("确认删除该出游人吗？");
    if (flag) {
        $dela.parents("div.dingdan-mm").remove();
    }
}
 	 
	 
	 
	 //鍒犻櫎璇ヨ鐨勪俊鎭綍鍏ヨ〃,鍒犻櫎涔嬪墠澶囦唤
	 var copyInfo=$(".vistor_info").html(); // 閬垮厤鎶婃墍鏈夌殑淇℃伅琛ㄩ兘鍒犻櫎鍚庯紝娌″鍒剁殑html鍘熶欢
	$("a.operateDel").click(function(){
		 del($(this));
		});
	 //澧炲姞鍑烘父浜虹殑淇℃伅褰曞叆琛�
	 $(".people a.operateAdd").click(function(){
		 var $addInfo=$(copyInfo);
	   $(this).parent("div").before($addInfo);
	   //鎵惧鍔犵殑淇℃伅琛ㄤ腑鐨勨�鍒犻櫎鈥渁鏍囩
	  
	   $addInfo.find("a.operateDel").bind("click",function(){
		   del($(this));
		   return false;
		   });//缁欐柊澧炲姞鐨�鍒犻櫎"閾炬帴缁戝畾鏂规硶
       return false;
		 });
	
		 
	 

//鍒犻櫎鐨勫姛鑳�
function del($dela) { //<a>鏍囩瀵瑰簲鐨刣iv
    var flag = confirm("纭鍒犻櫎璇ュ嚭娓镐汉鍚楋紵");
    if (flag) {
        $dela.parents("div.dingdan-mm").remove();
    }
}