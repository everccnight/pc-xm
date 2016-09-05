/*----------------------------------右边定位-----------------------*/
/*购物车判断*/
var createTr = function(obj){
	/*编写字符串追加购物车*/
	var str = '<tr class="trwidth">' +
				'<td><input type="hidden" value="159441"></td>' +
				'<td><a href="javascript:void(0)" target="_blank"><img src="'+obj.img+'" alt=""></a></td>' +
				'<td><div class="cart_con"><p><a href="javascript:void(0)" target="_blank" class="proname">'+obj.name+'</a></p><span>'+obj.color+'</span><span>货号：'+obj.hh+'</span></div></td>' +
				'<td><div class="cart_btn"><span><input class="small" id="small" type="image" src="../img/shop/cart_xg_03.gif" style="height:11px;width:11px;border-width:0px;margin: 4px"/></span><span class="numval"><input type="text" class="textbox" value="'+obj.num+'"></span><span><input type="image" class="big" src="../img/shop/cart_xg_05.gif" style="height:11px;width:11px;border-width:0px;margin: 4px"></span></div></td>' +
				'<td>'+obj.price+'</td><td>'+obj.price+'</td>' +
				'<td><span >有货</span></td><td style="width:120px;"><a href="javascript:void(0)"><img src="../img/shop/dqkc_02_03.gif" alt=""></a><a href="javascript:void(0)" class="del"><img src="../img/shop/dqkc_02_05.gif" alt=""></a></td>' +
				'</tr>';
				$('.tab1').append(str);

	/*给减法加点击事件*/
		 $('#small').on('click',function(){
		 	var ipt = parseInt($(this).parent().siblings('.numval').children().val());//获取文本框内数值
			/* console.log(ipt);*/
			 	ipt--;
		 	if(ipt>=1){
				close();//弹出模态框
		 		$(this).parent().siblings('.numval').children().val(ipt);
		 		obj.num = $(this).parent().siblings('.numval').children().val();
		 		localStorage['cart'] = JSON.stringify(result);//更改localstorage里面的数量
		 		allPrice();
		 	}
		 });
	/*给加法加点击事件*/
		 $('.big').on('click',function(){
			 close();
		 	var ipt =parseInt($(this).parent().siblings('.numval').children().eq(0).val()) ;
			/* console.log(ipt);*/
			 	ipt++;
		 	$(this).parent().siblings('.numval').children().val(ipt);
		 	obj.num = $(this).parent().siblings('.numval').children().val();
		 	localStorage['cart'] = JSON.stringify(result);
		 	allPrice();
		 });
	$('.textbox').on('blur',function(){
		var ipt = parseInt($(this).val());
		obj.num = ipt;
		localStorage['cart'] = JSON.stringify(result);
		allPrice();
	});
	function close(){
		int=setInterval(zzcdis(),1000);
		setTimeout(function(){
			clearInterval(int);
			$('.delzzc').css('display','none');
		},1500);

	}

};
//createTr()
var tab = $('.tb').find('table');
var result = localStorage['cart'];
var leg=JSON.parse(result).length;//判断购物车内是否有东西
	if(leg!=0){
		$('.dis').css('display','block');
		result = JSON.parse(result);
		var str = '<tr class="tr1"><td class="th"></td><td class="th">商品图片</td><td class="th">商品名称</td><td class="th">数量 </td><td class="th">原价</td><td class="th">单价(元)</td><td class="th">备注</td><td class="th"></td></tr>';
		tab.addClass('tab1');
		tab.html(str);
		for(var i=0;i<result.length;i++){
				createTr(result[i]);
		}
	}else{
		//没有东西追加选购商品
		tab.addClass('tab');
		$('.dis').css('display','none');
		var str = '<tbody><tr bgcolor="#ffffff"><td><div align="center">您还没有选购商品！<a href="../index.html" title="继续购物"><img src="../img/shop/shopmore_btn.gif" alt="继续购物"></a></div> </td></tr></tbody>';
		tab.html(str);
	}


var allPrice= function(){
	//价格改变
	var total = 0;
 	for(var i=0;i<leg;i++){
 		var item = result[i];
 		/*console.log(item);*/
		total = total + parseInt(item.price) * item.num;
	}
 	$('.total').html(total+"元");
};
allPrice();
var int;
/*给删除加点击事件*/
$('.del').click(function(){
	var b = confirm('您确定要删除吗');
	if(b){
		int=setInterval(zzcdis(),1000);
		setTimeout(function(){
			clearInterval(int);
			$('.delzzc').css('display','none');
		},1500);
		$(this).parents('tr').remove();
		var name = $(this).parents('tr').find('.proname').html();
			/*console.log(name)*/
			/*运用filter方法去除雕购物车里相同名字的函数，return值为false*/
			result = result.filter(function(T){
				/*console.log(T.name)*/
	        	return T.name != name;
	   		});
		localStorage['cart'] = JSON.stringify(result);
		leg=result.length;
		/*console.log(leg);*/
		allPrice();
		window.location="cart.html"
	}

});
function zzcdis(){
	$('.delzzc').css('display','block');
}



