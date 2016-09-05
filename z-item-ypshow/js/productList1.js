/**
 * Created by Administrator on 2016/8/16.
 */
$(function(){
    var list=$("#list");
    $.each(data, function() {
        var li = $("<li></li>");
        var a=$("<a title='"+this.name+"'></a>");
        var img=$("<img src='"+this.img+"'>");
        var p1=$("<p class='info1'></p>");
        var p2=$("<p class='info2'></p>");
        var span1=$("<span class='desc'>"+this.name+"</span>");
        var span2=$("<span class='price'>"+this.price+"</span>");
        var span3=$("<span class='point'>"+this.point+"</span>");
        var span4=$("<span class='star'></span>");
        var dl=$("<dl></dl>");
        var dt=$("<dt>主</dt>");
        var dd=$("<dd>"+this.ask+"</dd>");
        li.append(a);
        a.append(img);
        a.append(p1);
        a.append(dl);
        a.append(p2);
        p1.append(span1);
        p1.append(span2);
        p1.append(span3);
        dl.append(dt);
        dl.append(dd);
        p2.append(span4);
        list.append(li);
    });
    var proRight=$("#productlist_right_down");
    var right=$(".right");
    var arr=[];
    var pricelength=proRight.find(".price").size();
    var proRightLi=proRight.find("ul").find("li");
    var pageI=$("#page_index");
    var page,length,nu;
    var priceArr =proRight.find(".price").map(function(i,v) {
        return this.innerHTML;
    });
    for(var i=0; i<pricelength;i++){
        arr.push( priceArr[i].substring(1)) ;
    }
    $("#price7").click(function(){
        changePrice(500000000000000000000000000000,5000,$(this));
    });
    $("#price6").click(function(){
        changePrice(5000,4001,$(this));
    });
    $("#price5").click(function(){
        changePrice(4000,3001,$(this));
    });
    $("#price4").click(function(){
        changePrice(3000,2001,$(this));
    });
    $("#price3").click(function(){
        changePrice(2000,1001,$(this));
    });
    $("#price2").click(function(){
        changePrice(1000,501,$(this));
    });
    $("#price1").click(function(){
        changePrice(501,1,$(this));
    });
    $("#priceall").click(function(){
        $("#productlist_right_down").find("li").show();
        $(this).css("background","#aa0009").css("color","#fff");
        $(this).parent().siblings().find("a").css("background","white").css("color","#aa0009");
    });
    $("#num2").click(function(){
        nu=$(this).attr("title");
        pageChagne(10,$(this));
    });
    $("#num1").click(function(){
        nu=$(this).attr("title");
        pageChagne(20,$(this));
    });
    $("#num").click(function(){
        nu=$(this).attr("title");
        pageChagne(40,$(this));
    });
    proRightLi.find("dt").mouseenter(function(){
        $(this).next().css("display","block");
    });
    proRightLi.find("dt").mouseleave(function(){
        $(this).next().css("display","none");
    });
    proRightLi.find("dd").mouseenter(function(){
        $(this).css("display","block");
    });
    proRightLi.find("dd").mouseleave(function(){
        $(this).css("display","none");
    });
    right.on("click","#next_page",function(){
        proRight.find("li").hide();
        var page_index=pageI.html().substring(1,2);
        if(page_index!=page){
            console.log(nu);
            console.log(page_index);
            for(var i=0;i<nu;i++){
                $("#productlist_right_down").find("li").eq(i+nu*page_index).show();
            }
            page_index++;
            pageI.html("第"+page_index+"/"+page+"页");
            pageI.prev().remove();
            pageI.parent().prepend("<dd><a href='javascript:void(0)' id='last_page'>上一页></a></dd>");
            if(page_index==page){
                pageI.next().remove();
            }
        }
    });
    right.on("click","#last_page",function(){
        proRight.find("li").hide();
        var page_index=pageI.html().substring(1,2);
        if(page_index!=1){
            for(var i=0;i<nu;i++){
                proRight.find("li").eq(i+nu*(page_index-2)).show();
            }
            page_index--;
            pageI.html("第"+page_index+"/"+page+"页");
            pageI.next().remove();
            pageI.parent().append("<dd><a href='javascript:void(0)' id='next_page'>下一页></a></dd>");
            if(page_index==1){
                pageI.prev().remove();
            }
        }
    });
    function pageChagne(pagenum,dom){
        proRight.find("li").hide();
        length=proRight.find("li").size();
        page=Math.ceil(length/pagenum);
        $("#page_index").html("第1/"+page+"页");
        for(var i=0;i<pagenum;i++){
            proRight.find("li").eq(i).show();
        }
        dom.css("background","#fff0f1").css("color","#aa0009").css("border","#ed969a 1px solid");
        dom.parent().siblings().find("a").css("background","#f2f2f2").css("color","#333").css("border","#ccc 1px solid");
    }
    function changePrice(MAX,MIN,dom){
        var priceindex=0;
        var chooseArr=[];
        for(var i=0;i<pricelength;i++){
            if(arr[i]>MIN&&arr[i]<MAX){
                priceindex=i;
                chooseArr.push(priceindex);
            }
        }
        proRight.find("li").hide();
        for(var k=0;k<chooseArr.length;k++){
            var chooseArrvalue=chooseArr[k];
            proRight.find("li").eq(chooseArrvalue).show();
        }
        dom.css("background","#aa0009").css("color","#fff");
        dom.parent().siblings().find("a").css("background","white").css("color","#aa0009");

    }
});
