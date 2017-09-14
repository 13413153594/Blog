/**
 * Created by 小天 on 2017/5/29.
 */
(function () {
    var search = $("#tf-menu.navbar-default .logo ul li:first-child")
    var logo = $("#tf-menu")
    var $ul = $("#tf-menu.navbar-default .logo ul li.tu");
    var header = $(".header> ul li.List");
    var content = $(".content");
    search.click(function (e) {
        e.stopPropagation();
        $("#tf-menu.navbar-default .logo ul li.tu").toggle();

        $(this).siblings(".icon").toggle();
    })
    header.hover(function () {
        $(this).find(content).stop().slideDown();
    }, function () {
        $(this).find(content).stop().slideUp();
    })
    var $btn = $(".logo .drown");
    var $header1 = $(".header1");
    $btn.click(function () {
        $header1.slideToggle()
    });
    var Wh = $(window).width();
    setTimeout(function () {

        Wh = $(window).width();

        if (Wh <= 768) {
            $header1.css("width", Wh + "px")
        }
        else if (Wh > 768) {
            $header1.css("width", "auto")
        }

    }, 13)
    var HW=$(window).height();
    var overH=$(".overHide").height();

    $(window).resize(function () {
        Wh = $(window).width()

        if (Wh <= 768) {
            $header1.css("width", Wh + "px")
        }
        else if (Wh > 768) {
            $header1.css("width", "auto")
        }


    })
    $(document).scroll(function () {
        var scrollTop=$(document).scrollTop();
        if (scrollTop>HW/2){
            logo.css({
                "backgroundColor":"black",
                "padding":"10px"
            })

        }
        else {
            logo.css({
                "backgroundColor":"transparent",
                "padding":"20px"
            })

        }

    })
    $(".drop .iconfont").click(function () {
        $("body,html").animate({
            scrollTop:overH+"px"
        },1000)
    })
})();

/*=====*/


(function($){

    $.fn.typer = function(options){

        var defaults = $.extend({
            search: '',
            replace: [],
            speed: 50,
            delay: 2000
        }, options);

        var bintext = function(length){
            var text = '';
            for(var $i = 0; $i<=length;$i++) {
                text = text + Math.floor(Math.random() * 2)
            }
            return text;
        };

        this.each(function(){

            var $this = $(this);
            var $text = $this.data('text');
            var position = 0;

            var indexOf = $text.indexOf( defaults.search );
            var normal = $text.substr(0, indexOf);
            var changer = $text.substr(indexOf, $text.length);

            defaults.replace.push(changer);

            var interval = setInterval(function(){
                var $bintext = '';

                if( position == indexOf ) {

                    $bintext = bintext(changer.length-1);

                    $this.html( $text.substr(0, normal.length) );
                    $this.append('<span>' + $bintext + '</span>')

                } else if( position > indexOf ) {


                    $bintext = bintext($text.length-1);

                    $this.delay(defaults.speed).find('span').html(
                        changer.substring(0, position - indexOf) +
                        $bintext.substring(position, ($bintext.length))
                    );

                } else if( position < indexOf ) {

                    $bintext = bintext($text.length-1);

                    $this.delay(defaults.speed).html(
                        normal.substring(0, position) +
                        $bintext.substring(position, ($bintext.length))
                    );

                }

                if( position < $text.length ) {
                    position++;
                } else {
                    clearInterval(interval);

                    var index = 0;
                    setInterval(function(){

                        var position = 0;
                        var newText = defaults.replace[index];

                        var changeInterval = setInterval(function(){

                            var $bintext = '';
                            for(var $i = 0; $i<=newText.length-1;$i++) {
                                $bintext = $bintext + Math.floor(Math.random() * 2)
                            }

                            $this.delay(defaults.speed).find('span').html(
                                newText.substring(0, position) +
                                $bintext.substring(position, ($bintext.length))
                            );

                            if( position < $text.length ) {
                                position++;
                            } else {
                                clearInterval(changeInterval);
                            }

                        }, defaults.speed);

                        if( index < defaults.replace.length-1 ) {
                            index++;
                        } else {
                            index = 0;
                        }
                    }, defaults.delay)


                }
            }, defaults.speed)

        });

    }



})(jQuery);

$(function(){
    $('#slogan').typer({
        search: 'stronger',
        replace: ['powerful', 'easiest', 'stranger']
    })


});

$(function() {
    $('#owl-demo').owlCarousel({
        items:1,
        itemsDesktop:[1199,1],
        autoPlay: true,
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        itemsMobile:[479,1]

    });
});


(function () {
    var List= $("#tf-about .List ul li");
    var Bg=$("#tf-about .bg div");
    List.mouseenter(function () {
        var index=$(this).index();
        Bg.eq(index).fadeIn().siblings().fadeOut();
    })
})();


(function () {   //hot

    var index=0;
    var List=$(".hot .little-menu li");
    var line=$(".hot .line");
    var Lw=List.width();
    var $UL=$(".hot .little-content");
    var $content_List=$(".hot .little-content .list-content").width();

    List.click(function () {
        var index= $(this).index();
        $(this).addClass("active").siblings().removeClass("active");

         console.log($UL.find(".list-content")
         )
        line.css({
            left:(Lw+10)*index+"px"
        });
        $UL.css({
            marginLeft:index*(-$content_List-10)+"px"
        })
    })


})();
(function () {
    var WH=$(".bg").height();
    var scroll=$("#tf-scroll")
    $(document).scroll(function () {
        var Top=$(document).scrollTop();
         if (Top>WH/2){
             scroll.css({
                 right:30+"px"
             })
         }
         else {
             scroll.css({
                 right:-66+"px"
             })
         }
    })
    scroll.click(function () {
        $("html,body").animate({
         scrollTop:0
        },1000)
    })


})()//scrollTop

/*------------canvas-----------*/


/*
 var can = document.getElementById('canvas');
 var cxt = can.getContext('2d');
 can.width=window.width;
 can.height=window.height
 var w = can.width = window.innerWidth;
 var h = can.height = window.innerHeight;

 var num = 200; //生成点的个数
 var data = []; //定义一个数组，准备用来存坐标
 var move = {};
 var liuXY = [];
 var k = -1;
 var range = Math.atan(k);
 var length = 200;

 //生成num个点，并且存储初始坐标
 for ( var i=0;i<num;i++ )
 {
 data[i] = {x:Math.random()*w , y:Math.random()*h , r:Math.random()*8+3};

 };

 !function draw(){
 cxt.clearRect(0,0,w,h);
 for (var i=0;i<num;i++ )
 {
 data[i].r += Math.random()*2-1;
 data[i].r = Math.max(0 , data[i].r);
 data[i].r = Math.min(12 , data[i].r);

 };
 if ( liuXY.length )
 {
 for (var i in liuXY )
 {
 liuXY[i].cX -= 10;
 liuX(liuXY[i].cX , liuXY[i].y , liuXY[i].x);
 if ( liuXY[i].cX < 0 || getY(liuXY[i].cX,liuXY[i].y , liuXY[i].x) > h )
 {
 liuXY.splice(i,1);
 };
 };
 };
 if ( Math.random() > 0.92 )
 {
 var a = Math.random()*(w-400)+400;
 liuXY.push({x:a , y:0 , cX:a});
 };
 window.requestAnimationFrame(draw);
 }();
 function liuX(x,sX,sY){
 cxt.save();
 var y = getY(x,sY,sX);
 var r = 15;
 var rad = cxt.createRadialGradient(x,y,0,x,y,r);
 rad.addColorStop(0,'rgba(255,255,255,0.8)');
 rad.addColorStop(0.1,'rgba(255,255,255,0.8)');
 rad.addColorStop(0.2,'rgba(255,255,255,0.08)');
 rad.addColorStop(1,'rgba(255,255,255,0)');
 cxt.fillStyle = rad;
 cxt.beginPath();
 cxt.arc(x,y,r,0,2*Math.PI,true);
 cxt.closePath();
 cxt.fill();
 cxt.restore();

 var wX = x + (Math.cos(range)*length);
 var wY = y + (Math.sin(range)*length);

 var x1 = x + 3;
 var y1 = y;
 var x2 = x;
 var y2 = y - 3;

 cxt.save();
 var rad2 = cxt.createRadialGradient(x,y,0,x,y,length);
 rad2.addColorStop(0,'rgba(255,255,255,0.1)');
 rad2.addColorStop(1,'rgba(255,255,255,0)');
 cxt.fillStyle = rad2;
 cxt.beginPath();
 cxt.moveTo(x1,y1);
 cxt.lineTo(x2,y2);
 cxt.lineTo(wX,wY);
 cxt.closePath();
 cxt.fill();
 cxt.restore();
 };

 function getY(x , startY , startX){
 return k*x + startY - k*startX;
 };*/


