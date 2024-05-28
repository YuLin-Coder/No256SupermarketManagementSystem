<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
[<%
String pId = request.getParameter("id");
String pName = request.getParameter("name");
if (pId==null) pId = "0";
if (pName==null) pName = "";

//这部分代码是为了测试loading图标使用，不需要可以删除
for (int i=0; i<9999; i++) {
	for (int j=0; j<9990; j++) {
		double k = i*j/(i+j+1);
	}
}
//-----------------------------------

for (int i=1; i< 5; i++) {
	String nId = pId + i;
	String nName = "tree" + nId;
	%>{ "id":"<%=nId%>",	"name":"<%=nName%>",	"icon":"", isParent:<%=(i%2==0)%>}<%
	if (i<4) {
		%>,<%
	}
	
}
%>]