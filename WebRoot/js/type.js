$(function () {
    var index = 0; //当前播放图片的索引 窗口加载时，播放第一幅图片
    var stop = false; //控制自动、手动的切换
    var $li = $("ul.jnImgs").find("li"); //组织所有轮播图片的li
    var $pageIndex = $("ul.jnText").find("li");//组织所有文本的li
    $pageIndex.eq(index).addClass("current")
                        .stop(true, true) //清空动画序列
                        .siblings()//兄弟元素
                        .removeClass("current");
    $pageIndex.mouseover(function () { //控制手动播放
        stop = true; //自动轮播结束
        index = $pageIndex.index($(this)); //当前的编号
        $li.eq(index).stop(true, true)
                     .fadeIn() //当前编号的图片显示
                     .siblings()
                     .fadeOut(); //其他的图片隐藏
        $(this).addClass("current")
               .stop(true, true)
               .siblings()
               .removeClass("current");
    }).mouseout(function () {
        stop = false;
    });
    setInterval(function () { //自动播放
        if (stop) return;
        index++;
        if (index >= $li.length) {
            index = 0;//从头播放
        }
        $li.eq(index)
            .stop(true, true)
            .fadeIn()
            .siblings().fadeOut();
        $pageIndex.eq(index)
                  .addClass("current")
                  .stop(true, true)
                  .siblings()
                  .removeClass("current");
    }, 3000);
});