<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
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
<script type="text/javascript" src="js/jquery-1.11.0.min.js"></script>
<script type="text/javascript">
	function checkName() {
		var name = $("#name").val();
		var tid = $("#tid").val();
		if(name==""||(name.length<1||name.length>12)){
			 $("#checku").html("名称不能为空且长度在1～12位之间！");
			 $("input[id=name]").focus();
		} else {
			$("#checku").html("");
			$.ajax({
				url : "updateType.do",
				type : "post",
				data : {"name":name,"id":tid},
				dataType : "json",
				success:function(result){
				if(result.info=="ok"){
				$("#checku").html("名称存在，请更换！");
				return false;
				}else{
				$("#checku").html("更新成功！");
				return true;
				}
				},
				error:function(){
				alert("请求失败！");
				return false;
				}

			});
		}

	}
	</script>
</head>
<body>
<div class="panel admin-panel">
  <div class="panel-head" id="add"><strong><span class="icon-pencil-square-o"></span>增加内容</strong></div>
  <div class="body-content">
   <form class="form-x" > 
      <div class="form-group">
        <div class="label">
          <label>名称：</label>
        </div>
        <div class="field">
          <input type="text" class="input w50" name="name" id="name" value="${type.name }" data-validate="required:请输入类别" onblur="return checkName();" />
          <input type="hidden" name="id" id="tid" value="${type.id }"  />
          <div class="tips" id="checku"></div>
        </div>
      </div>
      </form>
  </div>
</div>

</body></html>