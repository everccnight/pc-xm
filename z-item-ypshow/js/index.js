/**
 * Created by Administrator on 2016/8/10.
 */
/*  搜索关键词*/
$("#input_serch").find("input").click(function(){
    this.value="";
    $("#input_serch").find("input").blur(function(){
        if($(this).val()=="") {
            $(this).val("搜素关键词");
        }
    })
});
/*-----------------------------三级菜单---------------------*/
$(".formtitle").hover(
    function (){
        $(this).addClass("formtitle_h").parent().siblings().find(".formtitle_h").removeClass("formtitle_h");
        $(this).next().css("display","block");
        $(this).next().hover(function(){
            $(this).css("display","block");
            $(this).prev().addClass("formtitle_h")
        },function(){
            $(this).css("display","none");
            $(this).prev().removeClass("formtitle_h")
        })
    },
    function(){
        $(this).next().css("display","none");
        $(this).removeClass("formtitle_h");
    }
);
$(".gift").prev().click(function(){
    $(this).next().css("display","block");
    $(this).parent().parent().siblings().find(".gift").css("display","none")
});
/*---------------------banner�ֲ�-------------------*/
var index=0;
var listL=$(".ullist").find("li");
var length = listL.size();

function change(){
    index++;
    if(index==length){
        index=0;
    }
    listL.eq(index).fadeIn(300).siblings().fadeOut(300);
    listL.parent().next().find("li").eq(index).css("background","red");
    listL.parent().next().find("li").eq(index).siblings().css("background","white");
}
$(".ulnum li").click(function(){
    clearInterval(change);
    var num=$(this).find("a").html();
    index=num-1;
    $(".ullist li").eq(index).fadeIn(300);
    $(this).css("background","red");
    $(this).siblings().css("background","white");

});
setInterval("change()",3000);
/*------------------------ֱ����Ʒ��������������������������������������������*/
var ttLi=$("#ul_title").find("li");
ttLi.hover(function(){
   var index=$(this).index();
    $(this).addClass("ul_title_li_h").siblings().removeClass("ul_title_li_h");
    $(".ul_list_details").find("ul").eq(index).css("display","block").siblings().css("display","none");
});
/*----------------------------------�ұ߶�λ-----------------------*/
$(window).scroll(function(){
    var s = $(document).scrollTop();
    var a = 200+s;
    $("#ri_fo").animate({
        top: a+"px"
    },50);
    $("#open").animate({
        top: a+"px"
    },50)
});
$("#close").click(function(){
    $("#ri_fo").css("display","none");
    $("#open").css("display","block");
});
$("#open").click(function(){
    $(this).css("display","none");
    $("#ri_fo").css("display","block")
});
/*--------------------------------�ص�����----------------------------*/
$("#to_top").click(function(){
    document.documentElement.scrollTop=document.body.scrollTop=0;
});
/*--------------------------3¥ҳ��------------------------*/
var ttli=$("#thr_floor_right_tt").find("li");
var listul=$("#thr_floor_right_list").find("ul");
ttli.hover(function(){
    var index=$(this).index();
    $(this).addClass("thr_floor_right_tt_li_h").siblings().removeClass("thr_floor_right_tt_li_h");
    listul.find("li").eq(index).css("display","block").siblings().css("display","none");

});
/* -------------------------------- ¥�µ���ҳ��--------------------------*/
$("#askus").click(function(){
    $("#help").css("display","block")
});
$(".question").find("input").click(function(){
    this.value="";
});
$(".mid_close").click(function(){
    $("#help").css("display","none")
});
$(".btn2").click(function(){
    $("#help").css("display","none")
});
/*------倒计时-------------------------*/
$(function(){
    show_time();
});
function show_time(){
    var time_start = new Date().getTime();
    var time_end =  new Date("2016/8/20 00:00:00").getTime();
    var time = time_end - time_start;
    var int_hour = Math.floor(time/3600000);
    time -= int_hour * 3600000;
    var int_minute = Math.floor(time/60000);
    time -= int_minute * 60000;
    var int_second = Math.floor(time/1000);
    if(int_hour < 10){
        int_hour = "0" + int_hour;
    }
    if(int_minute < 10){
        int_minute = "0" + int_minute;
    }
    if(int_second < 10){
        int_second = "0" + int_second;
    }
    $(".time_h").html(int_hour);
    $(".time_m").html(int_minute);
    $(".time_s").html(int_second);
    setTimeout("show_time()",1000);
}

/*-----------------------限时秒杀轮播图---------------*/
$(function() {
    var bannerSlider = new Slider($('#page_mid_right_img'), {
        time: 5000,
        delay: 400,
        event: 'hover',
        auto: true,
        mode: 'fade'
    });
    $('.flex-prev').click(function() {
        bannerSlider.prev()
    });
    $('.flex-next').click(function() {
        bannerSlider.next()
    });
});

