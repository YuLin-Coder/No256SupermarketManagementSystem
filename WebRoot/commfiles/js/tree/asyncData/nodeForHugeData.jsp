<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
[<%
String pId = request.getParameter("id");
String pCount = request.getParameter("count");

if (pId==null) pId = "0";
if (pCount==null) pCount = "10";
int max = Integer.parseInt(pCount);
for (int i=1; i<= max; i++) {
	String nId = pId + "_" + i;
	String nName = "tree" + nId;
	%>{ "id":"<%=nId%>",	"name":"<%=nName%>"}<%
	if (i<max) {
		%>,<%
	}
	
}
%>]