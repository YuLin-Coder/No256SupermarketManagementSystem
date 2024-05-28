var g_images = new Object();
g_images.img_go_up1 = new Image(9,9);
g_images.img_go_up2 = new Image(9,9); 
g_images.img_go_down1 = new Image(9,9); 
g_images.img_go_down2 = new Image(9,9);  
g_images.img_go_up1.src = "/marnav/commfiles/images/go_up1.gif";
g_images.img_go_up2.src = "/marnav/commfiles/images/go_up2.gif";
g_images.img_go_down1.src = "/marnav/commfiles/images/go_down1.gif";
g_images.img_go_down2.src = "/marnav/commfiles/images/go_down2.gif";
var imgUpDwonPath1 = g_images.img_go_up1.src;
var imgUpDwonPath2 = g_images.img_go_up2.src;

var imgDwonPath2 = g_images.img_go_down2.src;
var imgDwonPath1 = g_images.img_go_down1.src;
var imgUpPath1 = g_images.img_go_up1.src;
var imgUpPath2 = g_images.img_go_up2.src;

function swapImage(imgId) {
	var obj = document.getElementById(imgId);

	if(obj.src == g_images.img_go_up1.src){
		obj.src = g_images.img_go_up2.src
	}else if(obj.src == g_images.img_go_up2.src){
		obj.src = g_images.img_go_up1.src
	}else if(obj.src == g_images.img_go_down1.src){
		obj.src = g_images.img_go_down2.src
	}else if(obj.src == g_images.img_go_down2.src){
		obj.src = g_images.img_go_down1.src
	}
}


function hidePanel(panelKey,imgKey) {
	var hidePanel = document.getElementById(panelKey);
	var img = document.getElementById(imgKey);
	
	if (hidePanel == null || img == null){
		return;
	}
	
	if(hidePanel.style.display == "none"){
	   hidePanel.style.display = "";
	   img.src = g_images.img_go_up2.src;
	   imgDwonPath1 = g_images.img_go_up1.src;
	   imgDwonPath2 = g_images.img_go_up2.src;
	   //document.getElementById("table1").disabled=true;
	}else{
	   hidePanel.style.display = "none";
	   img.src = g_images.img_go_down2.src;
	   imgDwonPath1 = g_images.img_go_down1.src;
	   imgDwonPath2 = g_images.img_go_down2.src;
	   //document.getElementById("table1").disabled=false;
	}
}


// 2008/12/22 created by tj

var _divID = null;


/**
 *  summary: ��̬����Div�ĸ߶�
 *  params: divId ���洫��4��divId
 */
function computerDivHeight(divId) {
	_divID = divId;
	judgeDivHeight();	
	window.onresize = judgeDivHeight;
}

/**
 *  summary: ����DIV�ĸ߶�
 *  params: divId ���洫��4��divId
 */
function judgeDivHeight(divId) {
	var divObj = document.getElementById(_divID);
	if (divObj != null) {
		var offsetTop = divObj.offsetTop;
		var obj = divObj.offsetParent;
		while (obj != null) {
			offsetTop += obj.offsetTop;
			obj = obj.offsetParent;
		}
		if (document.body.clientHeight > offsetTop) {
			divObj.style.height = document.body.clientHeight - offsetTop;
		}
	}
}

/** summary:��ȡURL������ַ�����⻺�����
 * params:str url
 */
function getRandomUrl(url) {
	if (url.indexOf("?") > 0) {
		url += "&random=" + Math.random();
	} else {
		url += "?random=" + Math.random();
	}
	return url;
}

 /**
 *  summary:  ����Modal���湲ͨ����
 *  params: url ����url
 *		 arguments ���ݲ���
 *		 width ���
 *		 height �߶�
 *		 left ����Ļ��ľ���
 *		 top ����Ļ�ϵľ���
 */
function showModalDlg(url, arguments, width, height, left, top) {
	sFeatures = "dialogHeight:" + resetDialogHeight(height) + "px; dialogWidth:" + width + 
			   "px; scroll:no; status:no; edge:sunken; resizable:no; help:no";
	if (left != null) {
		sFeatures += "; dialogLeft:" + left;
	}
	if (top != null) {
		sFeatures += "; dialogTop:" + top;
	}
	return window.showModalDialog(getRandomUrl(url), arguments, sFeatures);
}

/**
 * summary:ģ̬���ڸ߶ȵ���. 
 *         ��ݲ���ϵͳ��ie��ͬ�汾,�������ô��ڸ߶�,����������. 
 * params:int height ���ڸ߶�
 */
function resetDialogHeight(height){
	var ua = navigator.userAgent;
	if(ua.lastIndexOf("MSIE 6.0") != -1){
		if(ua.lastIndexOf("Windows NT 5.1") != -1){
 			height = parseInt(height)+53;
		}
	}
	return height;
}