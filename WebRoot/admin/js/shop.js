// JavaScript Document

  $(function() {
	  //图片灯箱特效
            picLight();
			//计算并显示总价
            calTotal();



	//删除
	var delUlId;//保存要删除的无序列表的id属性值
	  $(".btnDel").click(function(){//单击“删除”链接
	      showMask();//显示透明度是30%的遮罩层
    setDialog();//设置提示框出现的位置
    $(".dialog").show();//显示提示框
	delUlId=$(this).parents("ul").attr("id"); //获取元素的祖先元素后，保存要删除的员工所在行的id属性值
    });
$("#closePic,#btnCancel").click(function(){//单击提示框的关闭图片和取消按钮
	$("div.dialog").hide();//提示框关闭
	$("div.mask").hide(); //遮罩层关闭
});
$("#btnSure").click(function(){//单击提示框的确定按钮
   //把"删除"按钮所在的行从表格中删除
   $("#shop-xx ul[id='"+delUlId+"']").remove(); 
   $("div.dialog").hide();//对话框关闭
   $("div.mask").hide(); //遮罩层关闭
   calTotal();
   picLight();
  });

 });
  function picLight() {
      //图片灯箱特效
      var settings = {
          containerResizeSpeed: 350,
          overlayOpacity: 0.5

      };
      $('#luxian a[title]').lightBox(settings);
  }

//设置对话框的位置
function setDialog(){
	var $wObj=$(window);//当前浏览器窗口
	var $dObj=$("div.dialog");//当前提示框
	var widW=$wObj.width();//当前浏览器窗口的宽度
	var widH=$wObj.height();//当前浏览器窗口的高度
	var diaW=$dObj.width(); //提示框的宽度
	var diaH=$dObj.height();//提示框的高度
	//计算提示框居中时的左边距
	var left=(widW-diaW)/2;
	//计算提示框居中时的上边距
	var top=(widH-diaH)/2;
	$dObj.css({"left":left,"top":top});
}
function showMask() {
    var bh = $("body").height(); //获取页面内容的高度
    var bw = $("body").width();//获取页面内容的宽度
    $("div.mask").css({
        height: bh + "px", //设置遮罩层的高度，覆盖整个页面内容
        width: bw + "px",
        display: "block"
    });
}

//算总价
function calTotal(){
	var sum=0; //保存总价
//遍历表格中有title='price'属性的的单元格
 $("#shop-xx li.rs").each(function() {
    sum=sum+parseFloat($(this).text().substr(1));//价格的累加
});
//显示总价
$("#jine span").html(sum);

}