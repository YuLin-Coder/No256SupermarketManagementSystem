<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%-- <jsp:include page="top.jsp"></jsp:include> --%>
    
    <div class="error" align="center">
    
    <h2>对不起！用户名或密码错误，请你重新操作！</h2>
  
    <div class="reindex"><a href="login.jsp" target="right">返回登录页面</a></div>
    
    
    </div>
    <!--底部-->
<%-- <jsp:include page="foot.jsp"></jsp:include> --%>
</body>
</html>
