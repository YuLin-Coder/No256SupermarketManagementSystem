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
	 $( "#key" ).datepicker(setting); //文本框和日历插件绑定
	 $( "#key1" ).datepicker(setting); //文本框和日历插件绑定
}
);