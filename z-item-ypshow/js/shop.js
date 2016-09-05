/*----------------------------------右边定位-----------------------*/
/*加入购物车*/
/*防止反复调用jq生成变量减少调用*/
var cart=$('.cart');
var tick=$('.tck');
/*点击加入购物车按钮*/
cart.find('.gobuy').click(function(){
	var txt = $('.titcs').html();//获取商品名称
	$(this).css('background','url(../img/shop/5.gif) no-repeat left top');//按钮改变背景图
	$('.tit').html(txt);//生成框名字加入
	tick.fadeIn(500,function(){
		$('.gobuy').css('background','url(../img/shop/NewDetail_Img.gif) no-repeat left -36px')
	});//弹出框生成，按钮图片还原
	/*获取需要的内容*/
		var $wrap = $('.cnt_right');
		var pro_name = $wrap.find('h1').children('.titcs').html();//提取名字
		var pro_price = $wrap.find('.jq99').find('em').html().substring(1);//提取价格
		var pro_hh = $wrap.find('h1').children('span').find('em').html();//提取货号
		var pro_color = $wrap.find('.col').find('.mrcolto').html();//提取特征
		var pro_img = $('.minipic').find('span').children().attr('src');//提取图片
		var pro_num = parseInt($wrap.find('.btop').find('.num').val());//提取数量
		/*创建一个名为cart的本地存储*/
		var lst = localStorage['cart'];
		/*判断是否为空*/
		if(lst){//如果不为空就转换成json
			lst = JSON.parse(localStorage['cart']);
			/*$('.countss').html(lst.length);*/
		}else{
			lst = [];
		}
		var item = null;
		/*遍历lst判断其中是否有一个和之前已经存在的相同如果相同就中断*/
		for(var i=0;i<lst.length;i++){
			if(lst[i].name == pro_name){
				item = lst[i];
				break;
			}
		}
		/*判断item是否为空如果不为空数量就加否则存进去*/
		if(item){
			item.num += pro_num;
		}else{
			lst.push({name:pro_name,price:pro_price,hh:pro_hh,
				color:pro_color,img:pro_img,num:pro_num});
		}
		/*存进localstrong，注意存进去的是一个字符串用的时候还需转换成json*/
		localStorage['cart'] = JSON.stringify(lst);
});
/*弹出框拖拽及关闭*/
tick.find('a,i').click(function(){
	$('.tck').fadeOut();
});
/*弹出框移动*/
tick.mousedown(function(e){
	var offset = $(this).offset();
	/*获得鼠标相对位置*/
	var x = e.pageX - offset.left;
	var y = e.pageY - offset.top;
	$(document).bind('mousemove',function(ev){
		//$('.tck').stop();
		var _x = ev.pageX - x;
		var _y = ev.pageY - y;
		$('.tck').css({left:_x+"px",top:_y+"px"});
	})
});
$(document).mouseup(function(){
	$(this).unbind('mousemove');
});
/*--------------下部按钮改变--------------*/
$("#description").click(function(){
	tabchange($(".description"),$(this))
});
$("#comment").click(function(){
	tabchange($(".comment"),$(this))
});
$("#asking").click(function(){
	tabchange($(".asking"),$(this))
});
$("#payway").click(function(){
	tabchange($(".payway"),$(this))
});
$("#log").click(function(){
	tabchange($(".log"),$(this))
});

/*-----------------------------------------------右上角小购物车，点击购物按钮后数量加1----------------*/
var cartTop=$("#carttop");
var commenttel=$("#commentell");
cart.find('.gobuy').click(function(){
	var carttop=cartTop.html();
	carttop++;
	cartTop.html(carttop);
});
/*发表评论   弹出红色生成框*/
$("#commenteverybody").click(function(){
	commenttel.css("display","block");
	commenttel.stop().fadeOut(3000);
});
/*--------------------------------------------------------------------------评论生成框---------------------------------------------*/
$("#askquesing").click(function(){
	$(".askvalue").find("textarea").val("");//先对评论框内容清空
	var screen_height = $(document).height();//获取页面高度
	$('.shade').css({height:screen_height+"px"});//改变随机生成元素height
	$('.askfor').fadeIn("slow");//问题框弹出
	$('#unsub').click(function(){
		$('.askfor').fadeOut("slow");//按取消按钮问题框关闭
	})
});
/*-------------------------评论生成框------------------*/
var askt=$(".ask_title");
$("#subm").click(function(){
	var value=$(".askvalue").find("textarea").val();
	if(value==""){
		$('.askfor').fadeOut("slow");//确定按钮按下，内容为空 评论框关闭
	}else{
		var doc=askt.find("h4").find("span").html();//获取评论内容
		doc++;
		var date=new Date();
		var day=date.toLocaleString();//获取当前时间
		askt.find("h4").find("span").html(doc);
		var div= $("<div class='ask_body'></div>");
		var div2=$("<div></div>");
		var p=$("<p>"+value+"</p>");
		var a=$("<a href='##'>6643530**</a>");
		var b=$("<b>关注他>></b>");
		var span=$("<span></span>");
		var em=$("<em>"+day+"</em>");
		$(".asking").find(".comment_im").append(div);
		div.append(div2);
		div.append(p);
		div2.append(span);
		div2.append(em);
		span.append(a);
		a.append(b);
		$('.askfor').fadeOut("slow");
	}
});
/*小图片点击切换大图片*/
var pic=$(".pic");
var doload=$(".download");
var minpic=$(".minipic");
/*左侧小图片切换变大图片*/
minpic.find("span").click(function(){
	var src=$(this).find("img").attr("src");
	var index=src.substring(14,15);
	var img=$("<img src='../img/shop/bg"+index+".jpg'/>");
	$(this).css("border","1px solid #aa0009").siblings().css("border","none");
	pic.find("a").children().remove();
	pic.find("a").append(img);
});
$(".leftb").click(function(){
	changgemodoPic(1,-1);
});
$(".rightb").click(function(){
	changgemodoPic(4,1);
});
function changgemodoPic(page,num){
	var index=pic.find("img").eq(1).attr("src").substring(14,15);
	if(index!=page){
		index=parseInt(index)+parseInt(num);
	}else{
		index=page;
	}
	$(".minipic").find("span").eq(index-1).css("border","1px solid #aa0009").siblings().css("border","none");
	var img=$("<img src='../img/shop/bg"+index+".jpg'/>");
	pic.find("a").children().remove();
	pic.find("a").append(img);
}
/* 默认1 2 更改框----*/
$(".mrcol").find("em").click(function(){
	$(this).css("border"," 3px solid #ff6600").css("background","url(../img/shop/y.png) no-repeat right bottom").css("color","#f60");
	$(this).siblings().css("border"," 3px solid #ccc").css("background","none").css("color","#333");
	var value=$(this).html();
	$(".mrcolto").html(value);
});
/*遮罩层*/
var size=minpic.find("span").size();
$('.cl_cen').find('.pic').click(function(){
	var index=pic.find("img").eq(1).attr("src").substring(14,15);
	var name=pic.find("img").eq(1).attr("src").substring(12);
	var img=$("<img class='htpic' src='../img/shop/moto"+index+".jpg'/>");
	var screen_height = $(document).height();
	$(".bigpic").find(".htpic").remove();
	$('.zzc').css({height:screen_height+"px"});
	$('.zcwrap').fadeIn("slow");
	$('.zq').css('display','block');
	setTimeout(function(){
		$('.bpic').css('display','block');
		$(".bigpic").prepend(img);
		doload.find("span").html(name);
		doload.find("i").html("product("+index+"/"+size+")");
		$('.zq').css('display','none');
	},1000)
});
$('.zzc').click(function(){
	$('.zcwrap').fadeOut("slow");
});
$('.close').click(function(){
	$('.zcwrap').fadeOut("slow");
});
$(".do_prev").click(function(){
	modalPic(-1,1)
});
$(".do_next").click(function(){
	modalPic(1,size)
});
function modalPic(bm,num1){
	var index=$(".download").find("i").html().substring(8,9);
	if(index!=num1){
		index=parseInt(index)+parseInt(bm);
	}else{
		index=num1;
	}
	var img=$("<img class='htpic' src='../img/shop/moto"+index+".jpg'/>");
	$(".bigpic").find(".htpic").remove();
	$('.zq').css('display','block');
	setTimeout(function(){
		$('.bpic').css('display','block');
		$(".bigpic").prepend(img);
		doload.find("span").html("bg"+index+".jpg");
		doload.find("i").html("product("+index+"/"+size+")");
		$('.zq').css('display','none');
	},1000)
}
/*-------------------------------------------------------------幻灯片播放-------------------------------------------------*/
count=1;
var time;
$(".start").click(function(){
	count++;
	if(count%2==0){
		$(this).css("background","url('../img/shop/pause.png')");
		time=setInterval(function(){
			var size=$(".minipic").find("span").size();
			var index=$(".download").find("i").html().substring(8,9);
			if(index!=size){
				index++;
			}else{
				index=1;
			}
			var img=$("<img class='htpic' src='../img/shop/moto"+index+".jpg'/>");
			$(".bigpic").find(".htpic").remove();
			$('.zq').css('display','block');
			setTimeout(function(){
				$('.bpic').css('display','block');
				$(".bigpic").prepend(img);
				doload.find("span").html("bg"+index+".jpg");
				doload.find("i").html("product("+index+"/"+size+")");
				$('.zq').css('display','none');
			},1000)
		},3000)
	}else{
		$(this).css("background","url('../img/shop/start.png')");
		clearInterval(time);
	}
});
/*----------------------------------tab悬浮------------------------*/
$(window).scroll(function(){
	var t = $(document).scrollTop();
	if(t>760){
		$("#nav").css("position","fixed").css("top","0");
	}else{
		$("#nav").css("position","relative")
	}
});
/*``````tab切换`````*/
function tabchange(dom1,dom2){
	dom1.stop().show();
	dom1.siblings().stop().hide();
	dom2.find("a").css("background","black").css("color","white");
	dom2.siblings().find("a").css("background","#eee").css("color","#333");
}