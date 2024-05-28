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
<%-- <script src="js/pintuer.js"></script> --%>
</head>
<script charset="utf-8" src="/csglxt/kindeditor/kindeditor.js"></script>
<script charset="utf-8" src="/csglxt/kindeditor/lang/zh-CN.js"></script>
<script type="text/javascript" src="/csglxt/My97DatePicker/WdatePicker.js"></script>
<script>
	        KindEditor.ready(function(K) {
	                window.editor = K.create('#editor_id');
	        });
	</script>
	<script>

KindEditor.ready(function(K) {

K.create('textarea[name="note"]', {

uploadJson : '/csglxt/kindeditor/jsp/upload_json.jsp',

                fileManagerJson : '/csglxt/kindeditor/jsp/file_manager_json.jsp',

                allowFileManager : true,

                allowImageUpload : true, 

autoHeightMode : true,

afterCreate : function() {this.loadPlugin('autoheight');},

afterBlur : function(){ this.sync(); }  //Kindeditor下获取文本框信息

});

});

</script>
<body>
<div class="panel admin-panel">
  <div class="panel-head" id="add"><strong><span class="icon-pencil-square-o"></span>增加内容</strong></div>
  <div class="body-content">
    <form method="post" class="form-x" action="addRecord.do" >  
      <div class="form-group">
        <div class="label">
          <label>商品名称：</label>
        </div>
        <div class="field">
          <input type="text" class="input w50" size="18" value="${goods.name }" readonly="readonly"/>
          <input type="hidden" name="gid" value="${goods.id }">
          <div class="tips"></div>
        </div>
      </div>
      <div class="form-group">
        <div class="label">
          <label>进货单价：</label>
        </div>
        <div class="field">
          <input type="text" class="input w50" size="18" name="price"  value="${goods.hprice }" data-validate="required:请输入充值金额" />
          <div class="tips"></div>
        </div>
      </div>
      <div class="form-group">
        <div class="label">
          <label>进货量：</label>
        </div>
        <div class="field">
          <input type="text" class="input w50" size="18" name="snum"  value="10" data-validate="required:请输入进货量" />
          <div class="tips"></div>
        </div>
      </div>
        <div class="form-group">
        <div class="label">
          <label>厂商：</label>
        </div>
        <div class="field">
          <input type="text" class="input w50" size="18" name="cname"  value="${goods.cname }" data-validate="required:请输入厂商" />
          <div class="tips"></div>
        </div>
      </div>
        <div class="form-group">
        <div class="label">
          <label>有效期：</label>
        </div>
        <div class="field">
          <input type="text" class="input w50" size="18" name="etime" value="${goods.etime }"  onclick="WdatePicker();" />
          <div class="tips"></div>
        </div>
      </div>
       
      
      
      <div class="form-group">
        <div class="label">
          <label></label>
        </div>
        <div class="field">
          <button class="button bg-main icon-check-square-o" type="submit"> 提交</button>
        </div>
      </div>
    </form>
  </div>
</div>

</body></html>