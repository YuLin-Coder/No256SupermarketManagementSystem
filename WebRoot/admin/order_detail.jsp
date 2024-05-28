<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE html>
<html lang="zh-cn">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta name="renderer" content="webkit">
<title></title>
<link rel="stylesheet" href="css/pintuer.css">
<link rel="stylesheet" href="css/admin.css">
<script src="js/jquery.js"></script>
<script src="js/pintuer.js"></script>
<script type="text/javascript" src="/csglxt/admin/js/Date.js"></script>
</head>
<body>
<form method="post" action="orderquery" id="listform">
  <div class="panel admin-panel">
    <div class="panel-head"><strong class="icon-reorder"> 内容列表</strong> <a href="" style="float:right; display:none;">添加字段</a></div>
    <div class="padding border-bottom">
      <%-- <ul class="search" style="padding-left:10px;">
        <li> <!-- <a class="button border-main icon-plus-square-o" href="add.html"> 添加内容</a> --> </li>
        <li>
          </li>
        
        <li>
        <input type="text" placeholder="请输入搜索的订单人的名字" name="order.uname" class="input" style="width:200px; line-height:17px;display:inline-block" />
          <input type="text" placeholder="请输入搜索产品名称" name="order.goods.name" class="input" style="width:200px; line-height:17px;display:inline-block" />
          <input type="text" placeholder="请输入搜索的订单状态" name="order.ostate" class="input" style="width:200px; line-height:17px;display:inline-block" />
          <input type="text" placeholder="请输入搜索的付款时间" name="order.date" onFocus="HS_setDate(this)" class="input" style="width:200px; line-height:17px;display:inline-block" />
          <input type="hidden" name="order.goods.userinfo" value="<s:property value="#session.cuser"/>"/>
          <input type="submit"  class="button border-main icon-search" value="搜索" ></li>
      </ul> --%>
    </div>
    <table class="table table-hover text-center">
    <tr>
    <th>用户姓名</th> <th>电话</th> <th colspan="2">地址</th>
    </tr>
    <c:forEach items="${ulist }" var="u">
    <c:if test="${u.id==order.uid }">
    <tr>
    <td>${u.tname }</td><td>${u.tel }</td><td colspan="2">${u.address }</td>
    </tr>
    </c:if>
    </c:forEach>
    <tr>
    <td colspan="4"></td>
    </tr>
    <tr>
    <th>订单编号</th> <th>订单总价</th> <th>订单状态</th><th>订单日期</th> 
    </tr>
    <tr>
    <td>${order.ono }</td><td>${order.zprice }</td><td>${order.status }</td><td>${order.pubtime }</td>
    </tr>
    <tr>
    <td colspan="4"></td>
    </tr>
      <tr>
        <th colspan="2">商品名称</th>
        <th>单价</th>
        <th >订单数</th>
      </tr>
     
        <tr>
          <td colspan="2"> 
	      <c:forEach items="${glist }" var="g">
	      <c:if test="${order.fid==g.id }">
	      ${g.name }
	      </c:if>
	      </c:forEach>
          </td>
          <td>
	      <c:forEach items="${glist }" var="g">
	      <c:if test="${order.fid==g.id }">
	      ${g.price }
	      </c:if>
	      </c:forEach>
          </td>
          <td >${order.amount }</td>
        </tr>
    </table>
  </div>
</form>
<script type="text/javascript">

//搜索
function changesearch(){	
		
}

//单个删除
function del(id,mid,iscid){
	if(confirm("您确定要删除吗?")){
		
	}
}

//全选
$("#checkall").click(function(){ 
  $("input[name='id[]']").each(function(){
	  if (this.checked) {
		  this.checked = false;
	  }
	  else {
		  this.checked = true;
	  }
  });
})

//批量删除
function DelSelect(){
	var Checkbox=false;
	 $("input[name='id[]']").each(function(){
	  if (this.checked==true) {		
		Checkbox=true;	
	  }
	});
	if (Checkbox){
		var t=confirm("您确认要删除选中的内容吗？");
		if (t==false) return false;		
		$("#listform").submit();		
	}
	else{
		alert("请选择您要删除的内容!");
		return false;
	}
}

//批量排序
function sorts(){
	var Checkbox=false;
	 $("input[name='id[]']").each(function(){
	  if (this.checked==true) {		
		Checkbox=true;	
	  }
	});
	if (Checkbox){	
		
		$("#listform").submit();		
	}
	else{
		alert("请选择要操作的内容!");
		return false;
	}
}


//批量首页显示
function changeishome(o){
	var Checkbox=false;
	 $("input[name='id[]']").each(function(){
	  if (this.checked==true) {		
		Checkbox=true;	
	  }
	});
	if (Checkbox){
		
		$("#listform").submit();	
	}
	else{
		alert("请选择要操作的内容!");		
	
		return false;
	}
}

//批量推荐
function changeisvouch(o){
	var Checkbox=false;
	 $("input[name='id[]']").each(function(){
	  if (this.checked==true) {		
		Checkbox=true;	
	  }
	});
	if (Checkbox){
		
		
		$("#listform").submit();	
	}
	else{
		alert("请选择要操作的内容!");	
		
		return false;
	}
}

//批量置顶
function changeistop(o){
	var Checkbox=false;
	 $("input[name='id[]']").each(function(){
	  if (this.checked==true) {		
		Checkbox=true;	
	  }
	});
	if (Checkbox){		
		
		$("#listform").submit();	
	}
	else{
		alert("请选择要操作的内容!");		
	
		return false;
	}
}


//批量移动
function changecate(o){
	var Checkbox=false;
	 $("input[name='id[]']").each(function(){
	  if (this.checked==true) {		
		Checkbox=true;	
	  }
	});
	if (Checkbox){		
		
		$("#listform").submit();		
	}
	else{
		alert("请选择要操作的内容!");
		
		return false;
	}
}

//批量复制
function changecopy(o){
	var Checkbox=false;
	 $("input[name='id[]']").each(function(){
	  if (this.checked==true) {		
		Checkbox=true;	
	  }
	});
	if (Checkbox){	
		var i = 0;
	    $("input[name='id[]']").each(function(){
	  		if (this.checked==true) {
				i++;
			}		
	    });
		if(i>1){ 
	    	alert("只能选择一条信息!");
			$(o).find("option:first").prop("selected","selected");
		}else{
		
			$("#listform").submit();		
		}	
	}
	else{
		alert("请选择要复制的内容!");
		$(o).find("option:first").prop("selected","selected");
		return false;
	}
}

</script>
</body>
</html>