/* =================================================
//
// jQuery Fixed Plugins 1.3.1
// author : 
// Url: 
// Data : 2012-03-30
//
// 参数 : float --> 悬浮方向[left or right]
//		  minStatue --> 最小状态，只有show_btn
//		  skin      --> 皮肤控制
//		  durationTime --> 完成时间
//
// =================================================*/

;(function($){
    $.fn.fix = function(options){
        var defaults = {
            float : 'left',
			minStatue : false,
			skin : 'blue',
			durationTime : 1000	,
			stylewidth:'220',
			spacingw:30,
			window_height:30,
			spacingh:40,
			content:'.side_content',
			close_btn:'.close_btn',
			show_btn:'.show_btn',			
			side_list:'.side_list',
			close_btn_width:25,
			side_title:'.side_title',
			set_scrollsidebar:'.page_right_style',
			table_menu:'.table_menu_list',
			widgetbox:'.widget-box',
			left_css:null,
			right_css:null,
			da_height:null,
        }
        var options = $.extend(defaults, options);		

        this.each(function(){			
            //获取对象
			var thisBox = $(this),
				closeBtn = thisBox.find(options.close_btn ),
				showbtn = thisBox.find(options.show_btn ),
				sideContent = thisBox.find(options.content),
				sideList = thisBox.find(options.side_list),
				sidetitle = thisBox.find(options.side_title),
				scrollsidebar=thisBox.find(options.set_scrollsidebar),
				stylespacing=thisBox.find(options.table_menu),
				widget_box=thisBox.find(options.widgetbox),
				leftcss=thisBox.find(options.left_css),
				rightcss=thisBox.find(options.right_css),
				outer_height=thisBox.find(options.da_height);
			var defaultTop = thisBox.offset().top;	//对象的默认top		
			
			
					
			thisBox.css(options.float, 0);	
			sidetitle.height($(sidetitle).height()); 
		    //var heights=widget_box.height($(widget_box).height()); 
		   var showheight=sideList.height($(sideList).height()); 	
			//sideList.height($(window).height()-(options.window_height));	
			//当窗口发生改变是触发
			 $(window).resize(function(){				   	
			    // outerheight.height($(window).height()-58+(options.window_height));
			 });
			if(options.minStatue){
				$(options.show_btn ).css("float", options.float);				
				sideContent.css('width', 0);			
				showbtn.css('width', (options.close_btn_width));	
			}
			//皮肤控制
			if(options.skin) thisBox.addClass('side_'+options.skin);
				
						
			//核心scroll事件			
			//$(window).bind("scroll",function(){
//				var offsetTop = defaultTop + $(window).clientHeight()+ "px";
//	            showbtn.animate({
//	                top: offsetTop
//	            },
//	            {
//	                duration: options.durationTime,	
//	                queue: false    //此动画将不进入动画队列
//	            });
//			});	
			//close事件
			closeBtn.bind("click",function(){
			   
				sideContent.animate({width: '0px'},"fast").addClass('active');
            	showbtn.stop(true, true).delay(300).animate({ width:+(options.close_btn_width)+'px'},"fast");
				sideList.css({"display":"none"});
				var heights=59+(options.window_height); 
				outer_height.outerHeight($(window).outerHeight(true)-heights); 
				leftcss.outerHeight($(window).outerHeight(true)-heights-2);
				sidetitle.css("display","none");				
				showbtn.css("display","block");
				scrollsidebar.addClass("Widescreen");
				scrollsidebar.width($(window).width()-(options.spacingw));
				stylespacing.width($(window).width()-(options.spacingw)).addClass("Widescreen");
				
				
			});
			//show事件
			 showbtn.click(function() {
	            $(this).animate({width: '0px',border:'1px solid #ddd'},"fast").css('display','none');
	            sideContent.stop(true, true).delay(0).animate({ width:+(options.stylewidth)+'px'},"fast");
				sideList.css({"display":"block"})
				sidetitle.css("display","block");
				scrollsidebar.removeClass("Widescreen")
				scrollsidebar.width($(window).width()-(options.stylewidth));
				stylespacing.width($(window).width()-(options.spacingh)).removeClass("Widescreen");
				
				var heights=$(sideList).outerHeight(true)+42+(options.window_height); 
				outer_height.outerHeight($(window).outerHeight(true)-heights); 
				if($('.centent_style').offsetHeight=leftcss.outerHeight($(window).outerHeight(true)-heights)){
					
					leftcss.outerHeight($(window).outerHeight(true)-heights-2); 
					}
	        });
			
				
        });	//end this.each

    };
})(jQuery);