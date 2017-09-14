/*window.onload = function () {
    $(document).scrollTop(0);
};*/
$(function () {

    //首屏滑动显示
    (function () {
        var $embed = $("#bg").find(".bg1 object"),
            $wrap = $("#wrap"),
            $swp = $wrap.find(".swp");

        setTimeout(function () {
            $embed[0].onload = function () {
                $(this).css("opacity" , 1);
            };
        },1500);

        $swp.eq(0).animate({
            opacity : 1,
            left : 0
        },1800);

        $swp.eq(1).animate({
            opacity : 1,
            right : 0
        },1800);

        $swp.eq(2).animate({
            opacity : 1,
            top : 70
        },1200);

        $swp.eq(3).animate({
            opacity : 1,
            top : 610
        },1200);

    })();

    //视频弹窗
    (function () {
        var $wrap = $("#wrap"),
            $btn = $wrap.find(".videoBtn"),
            $video = $wrap.find(".video"),
            $close = $wrap.find("#video .close");

        $btn.click(function () {
            $video.show();
            $(document.body).addClass("noScroll");
        });
        $close.click(function () {
            $video.hide();
            $(document.body).removeClass("noScroll");
        });
    })();

    //最新情报弹窗
    (function () {
        
        var $newinfo = $("#newinfo"),
            $title = $newinfo.find(".title"),
            $infoListLi = $newinfo.find(".infoList li"),
            $pop = $newinfo.find(".popwindow"),
            $popLi = $pop.find(".content ul li"),
            $popClose = $pop.find(".close"),
            $txt = $pop.find(".content .txt"),
            $btn = $pop.find(".content .btn"),
            txtH = $txt.height(),
            index = 0,
            length = $popLi.length;

        //自定义滚动条
        $txt.each(function () {
            var $mainTxt = $(this).find(".mainTxt"),
                $scroll = $(this).find(".scroll"),
                $bar = $(this).find(".bar"),
                mainH = $mainTxt.height(),
                barH = txtH*txtH/mainH,
                topMax = txtH - barH,
                topMin = 0;
            $bar.height(barH);

            //点击滑块拖动
            $bar.mousedown(function (e) {
                var sY = e.clientY,
                    sTop = $(this).position().top,
                    $This = $(this),
                    $mainTxt = $(this).parent().siblings();


                $(document).mousemove(function (e) {
                    var nY = e.clientY,
                        top = sTop + nY - sY;
                    top = Math.min(top , topMax);
                    top = Math.max(top , topMin);
                    $This.css("top" , top);
                    $mainTxt.css("top" , -top*mainH/txtH);
                }).mouseup(function () {
                    $(this).off("mousemove").off("mouseup");
                });
                return false;
            });

            //鼠标滚轮事件
            $(this).mousewheel(function (e,d) {
                var top = $bar.position().top;
                if ( d < 0 ){
                    //拉
                    top += 10;
                }else{
                    //推
                    top -= 10;
                }
                top = Math.min(top , topMax);
                top = Math.max(top , topMin);
                $bar.css("top" , top);
                $mainTxt.css("top" , -top*mainH/txtH);
                return false;
            });

            //点击滚动条动画
            $scroll.click(function (e) {
                if ( e.target === this ){
                    var y = e.clientY-($(this).offset().top-$(document).scrollTop()),
                        top = $bar.position().top;
                    top = y<top?top-100:top+100;
                    top = Math.min(top , topMax);
                    top = Math.max(top , topMin);
                    $bar.stop().animate({"top" : top},500);
                    $mainTxt.stop().animate({"top" : -top*mainH/txtH},500);
                }

            });
        });

        $pop.hide().css("opacity" , 1);
        $popLi.hide();

        //点击弹出全屏窗
        $infoListLi.click(function () {
            index = $(this).index();
            $(document.body).addClass("noScroll");
            $pop.show();
            $popLi.eq(index).show().siblings().hide();
        });

        //关闭弹窗
        $popClose.click(function () {
            $(document.body).removeClass("noScroll");
            $pop.hide();
        });

        //弹窗层左右按钮
        $btn.click(function () {
            if ( $(this).index(".content .btn") ){
                index ++;
                index %= length;
            }else{
                index --;
                if(index<0)index=length-1;
            }
            $popLi.eq(index).show().siblings().hide();
        });
    })();

    //游戏特色banner
    (function () {

        var $game = $("#game"),
            $picLi = $game.find(".pic ul li"),
            $btn = $game.find(".btn p"),
            index = 0,
            length = $picLi.length;

        $picLi.click(function () {
            if ( $(this).index() !== index ){
                index = $(this).index();
                change();
            }
        });

        $btn.click(function () {
            if ( $(this).index() ){
                index ++;
                index %= length;
            }else{
                index --;
                if(index<0)index=length-1;
            }
            change();
        });

        function change() {
            var lIndex = index - 1,
                rIndex = index + 1;
            if ( lIndex < 0 )lIndex = length-1;
            if (rIndex >= length)rIndex = 0;
            $picLi.removeClass("left mid right");
            $picLi.eq(lIndex).addClass("left");
            $picLi.eq(index).addClass("mid");
            $picLi.eq(rIndex).addClass("right");
        }

    })();

    //滚轮延迟显示
    (function () {
        var $newinfo = $("#newinfo"),
            $title = $newinfo.find(".title"),
            $infoListLi = $newinfo.find(".infoList li"),
            objArr = [];


        init($title,$infoListLi);

        $(window).scroll(function () {
            var height = $(document).scrollTop() + $(window).height();
            for (var i = objArr.length-1; i >= 0; i--) {
                var obj = objArr[i];
                if (height >= obj.oddTop ){
                    (function () {
                        var $This = $(obj);
                        setTimeout(function () {
                            $This.removeClass("hide");
                        },($This.index()%3)*200);
                        objArr.slice(i,1);
                    })();
                }
            }
        });

        function init() {
            for (var i = 0,length=arguments.length; i < length; i++) {
                arguments[i].each(function () {
                    this.oddTop = $(this).offset().top;
                    objArr.push(this);
                });
            }
        }
    })();
});













