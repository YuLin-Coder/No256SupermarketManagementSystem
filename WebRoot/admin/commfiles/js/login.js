function fadeShow(idObjSrc,idShowDivContainer,hotArea){
  this.strTimeOut = "";
  this.bleIsShow = false;
  this.idObjSrc = "";
  
  if(typeof(idObjSrc) == "object"){
    this.idObjSrc = idObjSrc;
  } else if(typeof(idObjSrc) == "string"){
    this.idObjSrc = "#" + idObjSrc;
  }
  
  this.hotArea = hotArea || this.idObjSrc;

  this.idShowDivContainer = "";
  if(typeof(idShowDivContainer) == "object"){
    this.idShowDivContainer = idShowDivContainer;
  } else if(typeof(idShowDivContainer) == "string"){
    this.idShowDivContainer = "#" + idShowDivContainer;
  }
  this.init();
}

fadeShow.prototype.init = function(){
  var thisObj =  this;
  var widthTemp = $(this.idShowDivContainer).outerWidth();
  var objTop = $(this.idObjSrc).offset().top;
  var objLeft = $(this.idObjSrc).offset().left;
  var objWidth = $(this.idObjSrc).width();
  var objHeight = $(this.idObjSrc).height();
  var leftTemp = parseInt(objLeft)+parseInt(objWidth)-parseInt(widthTemp);
  var topTemp = parseInt(objTop)+parseInt(objHeight);
  $(this.idShowDivContainer).css({position:"absolute",top:topTemp + "px",left:leftTemp+"px"}).mouseout(function(e){
    thisObj.hide(e);
  });
  $(this.hotArea).mouseout(function(e){
    thisObj.hide(e);
  });
}

fadeShow.prototype.hide = function(evt){
  evt = (evt)?evt:window.event;
  var toElementObj;
  if($.browser.msie){
    toElementObj = evt.toElement;
  } else if($.browser.mozilla){
    toElementObj = evt.relatedTarget;
  } else {
    toElementObj = evt.relatedTarget;
  }
  var thisObj = this;
  if ($(this.idShowDivContainer)[0].contains(toElementObj) || $(this.hotArea)[0].contains(toElementObj)) {
    this.bleIsShow = false;
  } else {
    this.bleIsShow = true;
    if(this.strTimeOut == ""){
      this.strTimeOut = setTimeout(function(){thisObj.doHide()},1000);
    }
  }
}

fadeShow.prototype.doHide = function(){
  if(this.strTimeOut != ""){
    clearInterval(this.strTimeOut);
    this.strTimeOut = "";
  }
  if(!this.bleIsShow){
    return ;
  }
  $(this.idShowDivContainer).fadeOut("slow");
}

fadeShow.prototype.show = function(){
  $(this.idShowDivContainer).fadeIn("slow");
}

var objLoginDiv = "";

var objAreaDiv = "";

function showLoginDiv(obj){
  var widthTemp = $("#loginDiv").outerWidth();
  var objTop = $(obj).offset().top;
  var objLeft = $(obj).offset().left;
  var objWidth = $(obj).width();
  var objHeight = $(obj).height();
  var leftTemp = parseInt(objLeft)+parseInt(objWidth)-parseInt(widthTemp);
  var topTemp = parseInt(objTop)+parseInt(objHeight);
  $("#loginDiv").css({"zIndex":2,position:"absolute",top:topTemp + "px",left:leftTemp+"px"}).show();
  $("#top_login_form_validate_tips").html("&nbsp;");
  $("#top_login_username").val("");
  $("#top_login_userpwd").val("");
  $("#top_login_username")[0].focus();
  $("#top_login_submit_btn")[0].disabled = false;
}
var myDomainMy = "";
function loginInSpeacial(para){
  myDomainMy = para.domain_my;
  var sucess = para.sucess;
  if(typeof sucess == "function"){
    $("#top_login_form").unbind("submit");
    $("#loginDiv").unbind("");
    $("#top_login_form")[0].onsubmit = "";
    $("#top_login_form").submit(function(){
      return loginIn(myDomainMy,sucess);
    });
  }
}

function showAreaDiv(obj,thisObj){
  if(objAreaDiv == ""){
    objAreaDiv = new fadeShow(obj,"all-channel",thisObj);
  }
  objAreaDiv.show();
}

function loginIn(MYPATH){
  var lang = $("#top_login_language").val();
  if(lang == "en"){
    var str_input_username = "please input user ID";
    var str_input_userpwd = "please input password";
    var str_logining = "logining...";
    var topusername = $("#top_login_username").val();
    if(window.location.href.indexOf("/default-gj-e.php") > 0){
      if(topusername.length > 14){
        topusername = topusername.slice(0,11) + "...";
      }
    } else if(window.location.href.indexOf("/default-xs-e.php") > 0){
      if(topusername.length > 12){
        topusername = topusername.slice(0,9) + "...";
      }
    } else {
      if(topusername.length > 20){
        topusername = topusername.slice(0,16) + "...";
      }
    } 
    var str_hello = "hi," + topusername;
    var str_password_username_error = "wrong user ID or password";
    var str_net_error = "net error!";
  } else {
    var str_input_username = "请输入用户名";
    var str_input_userpwd = "请输入用户密码";
    var str_logining = "正在登录...";
    var topusername = $("#top_login_username").val();
    if(topusername.length > 20){
      topusername = topusername.slice(0,16) + "...";
    }
    var str_hello = topusername+"，你好！";
    var str_password_username_error = "用户名或密码错误！";
    var str_net_error = "网络错误!";
  }
  if($.trim($("#top_login_username").val()) == ""){
    $("#top_login_form_validate_tips").html(str_input_username);
    return false;
  }
  if($.trim($("#top_login_userpwd").val()) == ""){
    $("#top_login_form_validate_tips").html(str_input_userpwd);
    return false;
  }
  $("#top_login_form_validate_tips").html(str_logining);
  $("#top_login_submit_btn")[0].disabled = true;
  var sucess = "";
  if(arguments.length > 1){
    sucess = arguments[1];
  }
  var myUrl = MYPATH + "/my/My_AjaxLogin.php?rand="+new Date().getTime()+"&jsoncallback=?";
  $.getJSON(myUrl,{username:$("#top_login_username").val(),userpwd:$("#top_login_userpwd").val(),type:"in"},function(data){
    var loginStatus = data.status;
    if(loginStatus == 1){
      if(typeof sucess == "function"){
        sucess();
        objLoginDiv = "";
        $("#top_login_form_validate_tips").html("");
        $("#loginname").html(str_hello.toLowerCase());
        $("#loginInLink").hide();
        $("#loginOutLink").show();
      } else if(sucess != "" && typeof sucess == "string"){
        window.location.href = sucess;
      } else {
        $("#loginname").html(str_hello.toLowerCase());
        $("#loginInLink").hide();
        $("#loginOutLink").show();
        hideLoginDiv();
      }
    } else if(loginStatus == 0){
      $("#top_login_form_validate_tips").html(str_password_username_error);
    } else {
      $("#top_login_form_validate_tips").html(str_net_error);
    }
    $("#top_login_submit_btn")[0].disabled = false;
  });
  return false;
}

function hideLoginDiv(){
  $("#loginDiv").fadeOut("slow");
}

if(typeof(HTMLElement) != "undefined"){
  HTMLElement.prototype.contains = function(obj) {
  while(obj != null &&  typeof(obj.tagName) != "undefind"){
    if(obj == this)
      return true;
      obj = obj.parentNode;
    }
    return false;
  };
}
//分区搜索
function type_search(districtVal){
 obj = document.forms.type_form;
 var districtVal12 = districtVal.substr( 0 , 2 );
 obj.district.value = districtVal;
 obj.jobarea.value = '99' == districtVal12 || '0302' == districtVal ? '0302' : districtVal12+'00';
 obj.submit();
}



var objOtherAreaDiv = "";
var objOtherCityDiv = "";
function onloadFun(){
  if(window.$){
    $(document).ready(function(){
      /*去除链接，button，image button的点击时虚线框*/
      $("a,input[type='button'],input[type='image'],input[type='submit'],area").bind("focus",function(){
        if(this.blur){
          this.blur();
        }
      })
      var obj = document.getElementById("51job|dev|all-channel1");
      if(obj != null){
        $(obj).mouseover(function(){
          if(objOtherAreaDiv == ""){
            objOtherAreaDiv = new fadeShow(this,"all-channel1");
          }
          objOtherAreaDiv.show();
        }).css({cursor:"pointer"});
      }
      
      var obj = document.getElementById("51job|dev|selectcity");
      if(obj != null){
        $(obj).mouseover(function(){
          if(objOtherCityDiv == ""){
            objOtherCityDiv = new fadeShow(this,"selectcity");
          }
          objOtherCityDiv.show();
        }).css({cursor:"pointer"});
      }
    })
  } else {
    setTimeout("onloadFun()",1000);
  }
}
onloadFun();
