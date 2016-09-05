/**
 * Created by Administrator on 2016/8/17.
 */
var open=$("#open");
var ri=$("#ri_fo");
var close=$("#close");
$(window).scroll(function(){
    var Scol = $(document).scrollTop();//获取当前高度
    var heig = 200+Scol;
    ri.stop().animate({
        top: heig+"px"
    },500,"swing");
    open.stop().animate({
        top: heig+"px"
    },500,"swing");
});
close.click(function(){
    _show(open);
    _hide(ri);
});
open.click(function(){
    _show(ri);
    _hide(open);
});
/*--------------------------------回到顶部----------------------------*/
$("#to_top").click(function(){
    document.documentElement.scrollTop=document.body.scrollTop=0;
});
/*三级联动*/
$(".formtitle").hover(
    function (){
        $(this).addClass("formtitle_h").parent().siblings().find(".formtitle_h").removeClass("formtitle_h");
        _show($(this).next());
        _show( $("#sec_menu_div"));
        $(this).next().hover(function(){
            _show($(this));
            _show( $("#sec_menu_div"));
            $(this).prev().addClass("formtitle_h")
        },function(){
            _hide($(this));
            $(this).prev().removeClass("formtitle_h")
        })
    },
    function(){
        _hide($(this).next());
        $(this).removeClass("formtitle_h");
    }
);
$(".gift").prev().click(function(){
    _show($(this).next());
    _hide($(this).parent().parent().siblings().find(".gift"))
});
var menudiv=$("#menudiv");
menudiv.mouseenter(function(){
    _show($("#sec_menu_div"))
});
menudiv.mouseleave(
    function(){
        _hide($("#sec_menu_div"));
});
/*----------------------------------------------------------------------查找搜索框-------------------------------------------------------------*/
$("#input_serch").find("input").click(function(){
    this.value="";
    $("#input_serch").find("input").blur(function(){
        if($(this).val()=="") {
            $(this).val("搜素关键词");
        }
    })
});
/* -------------------------------- -----------------------------------------------楼下弹出页面--------------------------*/
var help=$("#help");
$("#askus").click(function(){
    _show(help)
});
$(".question").find("input").click(function(){
    this.value="";
    $(".question").find("input").blur(function(){
        if($(this).val()=="") {
            $(this).val("搜素关键词");
        }
    })
});
$(".mid_close").click(function(){
    _hide(help);
});
$(".btn2").click(function(){
    _hide(help);
});

function _show(dom){
    dom.stop().show();
}
function _hide(dom){
    dom.stop().hide();
}
