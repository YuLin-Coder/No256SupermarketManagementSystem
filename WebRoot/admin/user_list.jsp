<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE html >
<html >
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link href="<%=basePath %>/admin/assets/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="<%=basePath %>/admin/css/style.css"/>       
        <link href="<%=basePath %>/admin/assets/css/codemirror.css" rel="stylesheet">
        <link rel="stylesheet" href="<%=basePath %>/admin/assets/css/ace.min.css" />
        <link rel="stylesheet" href="<%=basePath %>/admin/assets/css/font-awesome.min.css" />
		<!--[if IE 7]>
		  <link rel="stylesheet" href="assets/css/font-awesome-ie7.min.css" />
		<![endif]-->
        <!--[if lte IE 8]>
		  <link rel="stylesheet" href="assets/css/ace-ie.min.css" />
		<![endif]-->
			<script src="<%=basePath %>/admin/assets/js/jquery.min.js"></script>

		<!-- <![endif]-->

		<!--[if IE]>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<![endif]-->

		<!--[if !IE]> -->

		<script type="text/javascript">
			window.jQuery || document.write("<script src='assets/js/jquery-2.0.3.min.js'>"+"<"+"/script>");
		</script>

		<!-- <![endif]-->

		<!--[if IE]>
<script type="text/javascript">
 window.jQuery || document.write("<script src='assets/js/jquery-1.10.2.min.js'>"+"<"+"/script>");
</script>
<![endif]-->

		<script type="text/javascript">
			if("ontouchend" in document) document.write("<script src='assets/js/jquery.mobile.custom.min.js'>"+"<"+"/script>");
		</script>
		<script src="<%=basePath %>/admin/assets/js/bootstrap.min.js"></script>
		<script src="<%=basePath %>/admin/assets/js/typeahead-bs2.min.js"></script>
		<!-- page specific plugin scripts -->
		<script src="<%=basePath %>/admin/assets/js/jquery.dataTables.min.js"></script>
		<script src="<%=basePath %>/admin/assets/js/jquery.dataTables.bootstrap.js"></script>
        <script type="text/javascript" src="<%=basePath %>/admin/js/H-ui.js"></script> 
        <script type="text/javascript" src="<%=basePath %>/admin/js/H-ui.admin.js"></script> 
        <script src="<%=basePath %>/admin/assets/layer/layer.js" type="text/javascript" ></script>
        <script src="<%=basePath %>/admin/assets/laydate/laydate.js" type="text/javascript"></script>
<title>用户列表</title>
</head>

<body>
<div class="page-content clearfix">
    <div id="Member_Ratings">
      <div class="d_Confirm_Order_style">
      <form method="post" action="userListQuery.do" >
    <div class="search_style">
      <ul class="search_content clearfix">
       <li>
        <li><label class="l_f">用户名</label><input name="uname" type="text"  class="text_add" placeholder="请输入搜索用户名"  style=" width:400px"/></li>
       <li style="width:90px;"><button type="submit" class="btn_search"><i class="icon-search"></i>查询</button></li>
      </ul>
    </div>
    </form>
     <!---->
     <div class="border clearfix">
       <span class="l_f">
       <a href="user_add.jsp" id="member_add" class="btn btn-warning"><i class="icon-plus"></i>添加用户</a>
       </span>
     </div>
     <div class="table_menu_list">
       <table class="table table-striped table-bordered table-hover" id="sample-table">
		<thead>
		 <tr>
				<%-- <th width="25"><label><input type="checkbox" class="ace"><span class="lbl"></span></label></th> --%>
				<th>用户名</th>
				<!-- <th>图片</th> -->
				<th>性别</th>
				<th>密码</th>
				<th>昵称</th>
				<th>地址</th>
				<th>用户身份</th>
				<th width="250">操作</th>
			</tr>
		</thead>
	<tbody>
	     <c:forEach items="${list }" var="u">
		<tr>
          <td>${u.uname }</td>
          <%-- <td> <img alt="" src=".<s:property value="img" />" width="50" height="50"></td> --%>
          <td>${u.sex }</td>
          <td>${u.pwd }</td>
          <td>${u.tname}</td>
          <td>${u.address}</td>
          <td>${u.utype}</td>
          <td class="td-manage">
          <a title="编辑" onclick="member_edit1('550')" href="doUpdateUser.do?id=${u.id }"  class="btn btn-xs btn-info" ><i class="icon-edit bigger-120">修改</i></a>
          <a title="删除" href="deleteUser.do?id=${u.id }"  onclick="return del(1,1,1)" class="btn btn-xs btn-warning" ><i class="icon-trash  bigger-120">删除</i></a>
          </td>
        </tr>
        </c:forEach>
      <tr>
      	<c:if test="${sessionScope.p==1 }">
		<td colspan="8"> <c:if test="${page.page>1}">
              <a href="userList.do?page=1" >首页</a>
             <a href="userList.do?page=${page.page-1 }"> 上一页</a> 
             </c:if>
    	     <c:if test="${page.page<page.totalPage}">
			<a href="userList.do?page=${page.page+1 }">下一页</a>
			<a href="userList.do?page=${page.totalPage }">末页</a>
		    </c:if> 
		</td>
	</c:if>
	<c:if test="${sessionScope.p==2 }">
	<td colspan="8"> <c:if test="${page.page>1}">
    <a href="userListQuery.do?page=1" >首页</a>
    <a href="userListQuery.do?page=${page.page-1 }"> 上一页</a> 
    </c:if>
    	<c:if test="${page.page<page.totalPage}">
			<a href="userListQuery.do?page=${page.page+1 }">下一页</a>
			<a href="userListQuery.do?page=${page.totalPage }">末页</a>
		</c:if> 
		</td>
		</c:if>
		</tr>
      </tbody>
	</table>
   </div>
  </div>
 </div>
</div>
<!--添加用户图层-->
<form action="addUser" method="post" onsubmit="checkAll();">
<div class="add_menber" id="add_menber_style" style="display:none">
  
    <ul class=" page-content">
     <li><label class="label_name">用&nbsp;&nbsp;户 &nbsp;名：</label><span class="add_name"><input  name="user.uname" id="uname" placeholder="请输入用户名" type="text"  class="text_add" onblur="checkName()" /></span><div id="checku" class="prompt r_f"></div></li>
     <li><label class="label_name">真实姓名：</label><span class="add_name"><input placeholder="请输入真实姓名" name="user.name" type="text"  class="text_add"/></span><div class="prompt r_f"></div></li>
     <li><label class="label_name">密码：</label><span class="add_name"><input placeholder="请输入密码" name="user.pwd" type="password" id="pwd" class="text_add" onblur="checkPwd();"/></span><div class="prompt r_f" id="checkPwd"></div></li>
     <li><label class="label_name">重复密码：</label><span class="add_name"><input placeholder="请输入确认密码"  type="password" id="pwdc" class="text_add" onblur="checkPwdc();"/></span><div class="prompt r_f" id="checkPwdc"></div></li>
     <li><label class="label_name">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：</label><span class="add_name">
     <label><input name="user.sex" type="radio" checked="checked" class="ace" value="男"><span class="lbl">男</span></label>&nbsp;&nbsp;&nbsp;
     <label><input name="user.sex" type="radio" class="ace" value="女"><span class="lbl" >女</span></label>&nbsp;&nbsp;&nbsp;
     </span><div class="prompt r_f"></div></li>
     <li><label class="label_name">电话：</label><span class="add_name"><input placeholder="请输入电话" type="text" name="user.tel" id="tel" class="text_add" onblur="checkTel();"/></span><div class="prompt r_f" id="checkTel"></div></li>
     <li><label class="label_name">身份证号：</label><span class="add_name"><input placeholder="请输入身份证号" type="text"  class="text_add" id="idnumber" name="user.idnumber" onblur="checkIdnumber();" /></span><div id="checkIdnumber" class="prompt r_f"></div></li>
     <li><label class="label_name">电子邮箱：</label><span class="add_name"><input placeholder="请输入邮箱" type="text" name="user.email" id="email" onblur="checkEmail();" class="text_add"/></span><div class="prompt r_f" id="checkEmail"></div></li>
    <%--  <li><label class="label_name">状&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;态：</label><span class="add_name">
     <label><input name="form-field-radio1" type="radio" checked="checked" class="ace"><span class="lbl">开启</span></label>&nbsp;&nbsp;&nbsp;
     <label><input name="form-field-radio1"type="radio" class="ace"><span class="lbl">关闭</span></label></span><div class="prompt r_f"></div></li> --%>
     <li><label class="label_name"></label><span class="add_name"><button  class="btn btn-primary radius" type="submit"><i class="icon-save "></i>保存</button></span></li>
    </ul>
 </div>
 </form>
 
 <script type="text/javascript">
	function checkName() {
		var name = $("#uname").val();
		if(name==""||(name.length<2||name.length>12)){
			 $("#checku").html("用户账号不能为空且长度在2～12位之间！");
			 $("input[id=uname]").focus();
		} else {
			 $("#checku").html("");
			$.ajax({
				url : "checku.action",
				type : "post",
				data : {"uname" : name,"type":"业主"},
				dataType : "json",
				success:function(result){
				if(result.info=="ng"){
				  $("#checku").html("用户名存在，请更换！");
				}else{
				  $("#checku").html("可以用");
				}
				},
				error:function(){
				alert("error");
				}
			});
		}

	}
	
	 function checkPwd(){
		  var pwd=$("#pwd").val();
		  if(pwd==""||pwd.length<6||pwd.length>12){
		 $("#checkPwd").html("密码不能为空且长度在6～12位之间！");
		 $("input[id=pwd]").html("");
		  $("input[id=pwd]").focus();
		 return false;
		}else {
		 $("#checkPwd").html("密码格式正确！");
		return true;}
		}

		function checkPwdc(){
		var pwd=$("#pwd").val();
		var pwdc=$("#pwdc").val();
		if(pwdc==""||pwdc!=pwd){
		  $("#checkPwdc").html("两次密码要一致 ！");
		  $("input[id=txtConfirmPwd]");
		   // $("input[name=passwordc]").focus();
		  return false;
		  }else{
		  $("#checkPwdc").html("密码一致 ！");
		  return true;}

		}
		/* 电话号码的验证 */
		 function checkTel(){
		 var tel=$("#tel").val();
		 var regtel=/^(13|14|15|16|17|18|19)\d{9}$/;
		 if(tel==""||!regtel.test(tel)){
		  $("#checkTel").html("电话号码不能为空，且以13，14，15，16，17，18,19开头的11位");
		  $("input[id=tel]").html("");
		   $("input[id=tel]").focus();
		  return false;
		  }else{
		   $("#checkTel").html("电话号码格式正确！");
		  return true;
		  }

		 }
		 /* 身份证号码的验证 */
		 function checkIdnumber(){ 
			  var idnumber=$("#idnumber").val();
			  // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X 
			  var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; 
			  if(idnumber==""||!reg.test(idnumber)) 
			  { 
				  $("#checkIdnumber").html("身份证输入不合法");
				  $("input[id=idnumber]").html("");
				  $("input[id=idnumber]").focus();
			  		return false;
			  }else{
			  $("#checkIdnumber").html("身份证格式正确！");
			  return true;
			  }} 
		  //邮箱验证
		 function checkEmail(){ 
			  var email=$("#email").val();	
			  var reg =/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/; 
			  if(email==""||!reg.test(email)){
			  $("#checkEmail").html("邮箱格式不正确！");
			  $("input[id=email]").html("");
			   $("input[id=email]").focus();
			  return false;
			  }else{
			  $("#checkEmail").html("邮箱格式正确！");
			  return true;
			  }} 

	function checkAll(){
		//alert("kkkkk");
		var flag=false;
		var aa = $("#uname").val();
		var pwd=$("#pwd").val();
		var pwdc=$("#pwdc").val();
		var tel=$("#tel").val();
		var name1=$("#txtName1").val();
		var name2=$("#txtName2").val();
		 var regtel=/^(13|14|15|16|17|18|19)\d{9}$/;
		 if(aa!=""&&(tel!=""||regtel.test(tel))&&(name1!=""||name1.length>2)&&(name2!=""||name2.length>2)&&
				 (pwd!=""||pwd.length>6||pwd.length<12)&&(pwdc!=""||pwdc==pwd)){
			 flag=true;
		 }else{
			 alert("注册信息不完整或不合规范！");
			 flag=false;
		 }
		
		return flag;
		
	}
</script>
 
 
 <script>
jQuery(function($) {
				var oTable1 = $('#sample-table').dataTable( {
				"aaSorting": [[ 1, "desc" ]],//默认第几个排序
		"bStateSave": true,//状态保存
		"aoColumnDefs": [
		  //{"bVisible": false, "aTargets": [ 3 ]} //控制列的隐藏显示
		  {"orderable":false,"aTargets":[0,8,9]}// 制定列不参与排序
		] } );
				
				
				$('table th input:checkbox').on('click' , function(){
					var that = this;
					$(this).closest('table').find('tr > td:first-child input:checkbox')
					.each(function(){
						this.checked = that.checked;
						$(this).closest('tr').toggleClass('selected');
					});
						
				});
			
			
				$('[data-rel="tooltip"]').tooltip({placement: tooltip_placement});
				function tooltip_placement(context, source) {
					var $source = $(source);
					var $parent = $source.closest('table')
					var off1 = $parent.offset();
					var w1 = $parent.width();
			
					var off2 = $source.offset();
					var w2 = $source.width();
			
					if( parseInt(off2.left) < parseInt(off1.left) + parseInt(w1 / 2) ) return 'right';
					return 'left';
				}
			})
/*用户-添加*/
 $('#member_add').on('click', function(){
    layer.open({
        type: 1,
        title: '添加用户',
		maxmin: true, 
		shadeClose: true, //点击遮罩关闭层
        area : ['800px' , ''],
        content:$('#add_menber_style'),
		//btn:['提交','取消'],
		yes:function(index,layero){	
		 var num=0;
		 var str="";
     $(".add_menber input[type$='text']").each(function(n){
          if($(this).val()=="")
          {
               
			   layer.alert(str+=""+$(this).attr("name")+"不能为空！\r\n",{
                title: '提示框',				
				icon:0,								
          }); 
		    num++;
            return false;            
          } 
		 });
		  if(num>0){  return false;}	 	
          else{
        	  return true;
			  /* layer.alert('添加成功！',{
               title: '提示框',				
			icon:1,		
			  }); */
			   layer.close(index);	
		  }		  		     				
		}
    });
});
/*用户-查看*/
function member_show(title,url,id,w,h){
	layer_show(title,url+'#?='+id,w,h);
}
/*用户-停用*/
function member_stop(obj,id){
	layer.confirm('确认要停用吗？',function(index){
		$(obj).parents("tr").find(".td-manage").prepend('<a style="text-decoration:none" class="btn btn-xs " onClick="member_start(this,id)" href="javascript:;" title="启用"><i class="icon-ok bigger-120"></i></a>');
		$(obj).parents("tr").find(".td-status").html('<span class="label label-defaunt radius">已停用</span>');
		$(obj).remove();
		layer.msg('已停用!',{icon: 5,time:1000});
	});
}

/*用户-启用*/
function member_start(obj,id){
	layer.confirm('确认要启用吗？',function(index){
		$(obj).parents("tr").find(".td-manage").prepend('<a style="text-decoration:none" class="btn btn-xs btn-success" onClick="member_stop(this,id)" href="javascript:;" title="停用"><i class="icon-ok bigger-120"></i></a>');
		$(obj).parents("tr").find(".td-status").html('<span class="label label-success radius">已启用</span>');
		$(obj).remove();
		layer.msg('已启用!',{icon: 6,time:1000});
	});
}
/*用户-编辑*/
function member_edit(id){
	  layer.open({
        type: 1,
        title: '修改用户信息',
		maxmin: true, 
		shadeClose:false, //点击遮罩关闭层
        area : ['800px' , ''],
        content:$('#add_menber_style'),
		btn:['提交','取消'],
		yes:function(index,layero){	
		 var num=0;
		 var str="";
     $(".add_menber input[type$='text']").each(function(n){
          if($(this).val()=="")
          {
               
			   layer.alert(str+=""+$(this).attr("name")+"不能为空！\r\n",{
                title: '提示框',				
				icon:0,								
          }); 
		    num++;
            return false;            
          } 
		 });
		  if(num>0){  return false;}	 	
          else{
			  layer.alert('添加成功！',{
               title: '提示框',				
			icon:1,		
			  });
			   layer.close(index);	
		  }		  		     				
		}
    });
}
/*用户-删除*/
 //单个删除
function del(id,mid,iscid){
	if(confirm("您确定要删除吗?")){
		return true;
	}else{
		return false;
	}
}
function member_del(obj,id){
	layer.confirm('确认要删除吗？',function(index){
		$(obj).parents("tr").remove();
		layer.msg('已删除!',{icon:1,time:1000});
	});
}
laydate({
    elem: '#start',
    event: 'focus' 
});

</script>
</body>
</html>
