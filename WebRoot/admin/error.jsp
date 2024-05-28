<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<%-- <jsp:include page="top.jsp"></jsp:include> --%>
    <div class="" align="center">
    
    <h1>${sessionScope.info }</h1>
    
    
    </div>
</body>
</html>
