/**
 * Created by Administrator on 2016/8/11.
 */
/* 商品列表  框*/
$("#productlist_right_down ul li").find("dt").mouseenter(function(){
    $(this).next().css("display","block");
})
$("#productlist_right_down ul li").find("dt").mouseleave(function(){
    $(this).next().css("display","none");
})
$("#productlist_right_down ul li").find("dd").mouseenter(function(){
    $(this).css("display","block");
})
$("#productlist_right_down ul li").find("dd").mouseleave(function(){
    $(this).css("display","none");
})
/*-------------------------------------------选择 price-----------------*/
var priceArr =$("#productlist_right_down").find(".price").map(function(i,v) {
    return this.innerHTML;
})
    var arr=[];
    var pricelength=$("#productlist_right_down").find(".price").size()
      for(var i=0; i<pricelength;i++){
       arr.push( priceArr[i].substring(1)) ;
}
$("#price7").click(function(){
   $("#productlist_right_down").find("li").css("display","none");
    $("#productlist_right_down").find("#change_page").css("display","none");
    $(this).css("background","#aa0009").css("color","#fff");
    $(this).parent().siblings().find("a").css("background","white").css("color","#aa0009");

})

$("#price6").click(function(){
    var priceindex=0;
    var chooseArr=[]
    for(var i=0;i<pricelength;i++){
        if(arr[i]>4001&&arr[i]<5000){
            priceindex=i;
            chooseArr.push(priceindex);
        }
    }
    $("#productlist_right_down").find("li").hide();
    for(var i=0;i<chooseArr.length;i++){
        var chooseArrvalue=chooseArr[i];
        $("#productlist_right_down").find("li").eq(chooseArrvalue).show();
    }
    $(this).css("background","#aa0009").css("color","#fff");
    $(this).parent().siblings().find("a").css("background","white").css("color","#aa0009");

})
$("#price5").click(function(){
    var priceindex=0;
    var chooseArr=[]
    for(var i=0;i<pricelength;i++){
        if(arr[i]>3001&&arr[i]<4000){
            priceindex=i;
            chooseArr.push(priceindex);
        }
    }
    $("#productlist_right_down").find("li").hide();
    for(var i=0;i<chooseArr.length;i++){
        var chooseArrvalue=chooseArr[i];
        $("#productlist_right_down").find("li").eq(chooseArrvalue).show();
    }
    $(this).css("background","#aa0009").css("color","#fff");
    $(this).parent().siblings().find("a").css("background","white").css("color","#aa0009");

})

$("#price4").click(function(){
    var priceindex=0;
    var chooseArr=[]
    for(var i=0;i<pricelength;i++){
        if(arr[i]>2001&&arr[i]<3000){
            priceindex=i;
            chooseArr.push(priceindex);
        }
    }
    $("#productlist_right_down").find("li").hide();
    for(var i=0;i<chooseArr.length;i++){
        var chooseArrvalue=chooseArr[i];
        $("#productlist_right_down").find("li").eq(chooseArrvalue).show();
    }
    $(this).css("background","#aa0009").css("color","#fff");
    $(this).parent().siblings().find("a").css("background","white").css("color","#aa0009");

})

$("#price3").click(function(){
    var priceindex=0;
    var chooseArr=[]
    for(var i=0;i<pricelength;i++){
        if(arr[i]>1001&&arr[i]<2000){
            priceindex=i;
            chooseArr.push(priceindex);
        }
    }
    $("#productlist_right_down").find("li").hide();
    for(var i=0;i<chooseArr.length;i++){
        var chooseArrvalue=chooseArr[i];
        $("#productlist_right_down").find("li").eq(chooseArrvalue).show();
    }
    $(this).css("background","#aa0009").css("color","#fff");
    $(this).parent().siblings().find("a").css("background","white").css("color","#aa0009");

})

$("#price2").click(function(){
    var priceindex=0;
    var chooseArr=[]
    for(var i=0;i<pricelength;i++){
        if(arr[i]>501&&arr[i]<1000){
            priceindex=i;
            chooseArr.push(priceindex);
        }
    }
    $("#productlist_right_down").find("li").hide();
    for(var i=0;i<chooseArr.length;i++){
        var chooseArrvalue=chooseArr[i];
        $("#productlist_right_down").find("li").eq(chooseArrvalue).show();
    }
    $(this).css("background","#aa0009").css("color","#fff");
    $(this).parent().siblings().find("a").css("background","white").css("color","#aa0009");

})

$("#price1").click(function(){
    var priceindex=0;
    var chooseArr=[]
    for(var i=0;i<pricelength;i++){
        if(arr[i]>1&&arr[i]<501){
            priceindex=i;
            chooseArr.push(priceindex);
        }
    }
    $("#productlist_right_down").find("li").hide();
    for(var i=0;i<chooseArr.length;i++){
        var chooseArrvalue=chooseArr[i];
        $("#productlist_right_down").find("li").eq(chooseArrvalue).show();
    }
    $(this).css("background","#aa0009").css("color","#fff");
    $(this).parent().siblings().find("a").css("background","white").css("color","#aa0009");

})
$("#priceall").click(function(){
    $("#productlist_right_down").find("li").show();
    $(this).css("background","#aa0009").css("color","#fff");
    $(this).parent().siblings().find("a").css("background","white").css("color","#aa0009");
})
$("#num2").click(function(){
    $("#productlist_right_down").find("li").hide();
    for(var i=0;i<20;i++){
        $("#productlist_right_down").find("li").eq(i).show();
    }
    $(this).css("background","#fff0f1").css("color","#aa0009").css("color","#333").css("border","#ed969a 1px solid");
    $(this).parent().siblings().find("a").css("background","#f2f2f2").css("border","#ccc 1px solid");
})
$("#num1").click(function(){
    $("#productlist_right_down").find("li").hide();
    for(var i=0;i<40;i++){
        $("#productlist_right_down").find("li").eq(i).show();
    }
    $(this).css("background","#fff0f1").css("color","#aa0009").css("border","#ed969a 1px solid");
    $(this).parent().siblings().find("a").css("background","#f2f2f2").css("color","#333").css("border","#ccc 1px solid");
})

$(".right").on("click","#next_page",function(){
    var page_index=$("#page_index").html().substring(1,2);
    page_index++;
    $("#page_index").html("第"+page_index+"/5页");
    $("#page_index").prev().remove();
    $("#page_index").parent().prepend("<dd><a href='##' id='last_page'>上一页></a></dd>");
    if(page_index==5){
        $("#page_index").next().remove();
    }


});
$(".right").on("click","#last_page",function(){
    var page_index=$("#page_index").html().substring(1,2);
    page_index--;
    $("#page_index").html("第"+page_index+"/5页");
    $("#page_index").next().remove();
    $("#page_index").parent().append("<dd><a href='##' id='next_page'>下一页></a></dd>");
    if(page_index==1){
        $("#page_index").prev().remove();
    }
})


