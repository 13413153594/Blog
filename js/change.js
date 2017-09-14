/**
 * Created by 小天 on 2017/6/4.
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


    });
    $(document).scroll(function () {
        var scrollTop=$(document).scrollTop();
        if (scrollTop>HW/3){
            logo.css({"padding":"10px"})

        }
        else {
            logo.css({"padding":"20px"})

        }

    })
    $(".drop .iconfont").click(function () {
        $("body,html").animate({
            scrollTop:overH+"px"
        },1000)
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
    var txt=document.querySelectorAll(".txt");
    var lenght=txt.length;
    var tip=document.querySelectorAll(".tip");
    var btn=document.querySelectorAll(".left form .btn");
    var partten=/^(?:\w+\.?)*\w+@(?:\w+\.)*\w+$/;
    var textbox=document.querySelector(".left form .textbox");
    var critic=document.querySelector("#tf-content .critic");
    var next;

    var box;

    for (var i=0; i<lenght; i++)
    {
        txt[i].index=i;
        txt[i].onblur=function () {
            var val=this.value;
            if (val=="")
            {
                tip[this.index].style.opacity="1";
            }
            else {
                tip[this.index].style.opacity="0";
            }
        }
    }


    txt[1].onblur=function () {

        var alt=this.value;

        if (partten.test(alt))
        {

            tip[1].style.opacity="0";
        }
        else {
            tip[1].style.opacity="1";
            this.focus();
        }

    }

    function time() {
        var now=new Date();
        var year=now.getFullYear();
        var month=now.getMonth();
        var date=now.getDate();
        var hours=now.getHours();
        var min=now.getMinutes();
        var secon=now.getSeconds();
        return ""+ year+"年"+month+"月"+date+"日"+hours+"时"+min+"分"+secon+"秒"
    }



    btn[0].onclick=function () {



        if (txt[0].value==""||txt[1].value==""||txt[2].value=="") {
            alert("要填写信息才可以评论哟")
        }
        else {
            box="<div class='items'><img src='../images/left1.jpg'><strong>"+txt[0].value+"</strong><a>"+time()+"</a><p class='pinglun'>"+textbox.value+" </p> <p><input class='text' type='text' placeholder='我也想说一下'><button type='button' class='btn btn-info huifu'>回复</button></p></div>";
            critic.innerHTML+=box;
           for (var j=0; j<txt.length; j++)
           {
               txt[j].value="";
           }
        }
    var huifu=document.querySelectorAll(".huifu") ;
        var items=document.querySelectorAll(".items")[0];
       var text=document.querySelectorAll(".items .text")[0];

       for (var i=0; i<huifu.length; i++)
       {
           huifu[i].index=i;

           huifu[i].onclick=function () {
           if (txt[0].value==""||txt[1].value==""||txt[2].value=="")
           {
              alert("请填写好上面的信息才可以回复哦!")
           }
           else{
                var next=document.createElement("div");
                next.className="next";
               console.log(text.value);
               next.innerHTML+="<img src='../images/left1.jpg'><strong>error</strong> <a>2017年5月22日 00:26</a> <p class='pinglun td'>"+text.value+"</p>";

 /*                         next.innerHTML+="<div class='next'><img src='../images/left1.jpg'><strong>error</strong> <a>2017年5月22日 00:26</a> <p class='pinglun td'>"+text.value+"</p></div>"
 */          }

               items.appendChild(next);
       }
       }
    }  //表单验证
})() ;




