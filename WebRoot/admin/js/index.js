// JavaScript Document
function turnPics(){
        var index=0; //当前播放图片的索引
        var stop=false; //控制自动、手动的切换
        var $li=$(".banner").find("#imgs li"); //嵌套所有轮播图片的li
        var $pageIndex = $(".banner").find("#numbers li");//显示所有编号的li
        $pageIndex.eq(index).addClass("number_over")
		                    .stop(true,true) //清空动画序列
							.siblings()//兄弟元素
							.removeClass("number_over");
        setInterval(function () { //自动播放
            if (stop) return;
            index++;
            if (index >= $li.length) {
                index = 0;//从头播放
            }
            $li.eq(index)
			    .stop(true, true)
				.fadeIn("slow")
				.siblings().fadeOut("slow");
            $pageIndex.eq(index)
			          .addClass("number_over")
					  .stop(true, true)
					  .siblings()
					  .removeClass("number_over");
        }, 3000);

        $pageIndex.mouseover(function(){ //控制手动播放
            stop=true; //自动轮播结束
            index=$pageIndex.index($(this)); //当前的编号
            $li.eq(index).stop(true,true)
			             .fadeIn("slow") //当前编号的图片显示
						 .siblings()
						 .fadeOut("slow"); //其他的图片隐藏
            $(this).addClass("number_over")
			       .stop(true,true)
				   .siblings()
				   .removeClass("number_over");
        }).mouseout(function(){
            stop=false;
        });
  
    }
	function leftScroll(){
		   var marginLeft=0;
        var stop=false;
          setInterval(function(){
            if(stop) return;
            $(".tgjlx").find("li").first().animate({"margin-left":marginLeft--},0,function(){
                var $first=$(this);
                if(!$first.is(":animated")){
                    if((-marginLeft)>$first.width()+1+18){ //1：是左边框的粗细 18：左右两边的填充
                        $first.css({"margin-left":0}).appendTo($(".tgjlx ul"));
                        marginLeft=0;
                    }
                }
            });
        },20);
        $(".tgjlx ul").mouseover(function(){
            stop=true;
        }).mouseout(function(){
            stop=false;
        });
    }
	
	$(function(){
		    turnPics(); //轮播
			leftScroll(); //循环向左滚动
		});

