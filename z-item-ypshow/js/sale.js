/**
 * Created by Administrator on 2016/8/12.
 */
/*-----------------滑动窗口----------------------------*/
var ruleI=$("#ruleimg");
ruleI.mouseenter(function(){
    $("#ruleimg").find("#rule").stop().slideDown(1000);
});
ruleI.mouseleave(function(){
    $("#ruleimg").find("#rule").stop().slideUp(1000);
});
/*  日期选择--------------*/
var saleL=$("#sale_list_all");
var size=saleL.find(".begin").size();
var beginarr= saleL.find(".begin").map(function(i,v){
    return this.innerHTML;
});
    var arr=[];
for(var i=0;i<size;i++){
    arr.push(beginarr[i].substring(5,7))
}
$(".time1").click(function(){
    datechoose(12)
});
$(".time2").click(function(){
    datechoose(14)
});
$(".time3").click(function(){
    datechoose(17)
});
$(".time4").click(function(){
    datechoose(20)
});
function datechoose(date){
    var chooseArr=[];
    for(var i=0;i<size;i++){
        if(arr[i]>=date){
            chooseArr.push(i);
        }
    }
    saleL.find("div").hide();
    for(var k=0;k<chooseArr.length;k++){
        var valll=chooseArr[k];
        saleL.find("div").eq(valll).show();
    }
    $(this).css("color","yellow").siblings().css("color","white");
}