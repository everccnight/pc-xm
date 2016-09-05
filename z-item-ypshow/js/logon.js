/**
 * Created by Administrator on 2016/8/11.
 */
/*---------------------------登录页面-------------------------------*/
$("#v_name_id").blur(function(){
    var check=$("#v_name_id_h");
    var name_id=this.value;
    if(name_id==""){
        check.html("<span style='color:red'>不能为空</span>")
    }else{
        check.html("<span style='color:greenyellow;font-size:14px;' class='v_name_id_h'>ok</span>")
    }
});
$("#v_password_id").blur(function(){
    var check=$("#v_password_id_h");
    var password_id=this.value;
    if(password_id==""){
        check.html("<span style='color:red'>不能为空</span>")
    }else if(password_id.length<6||password_id.length>20){
        check.html("<span style='color:red'>密码长度6-20位</span>")
    }else{
        check.html("<span style='color:greenyellow;font-size:14px;' class='v_password_id_h'>ok</span>")
    }
});
$("#v_check_id").blur(function(){
    var check=$("#v_check_h");
    var check_id=this.value;
    var v_check_change=$("#v_check_change").html();
    if(check_id.length!=4){
        check.html("<span style='color:red'>格式不对</span>")
    } else if(check_id!=v_check_change){
       check.html("<span style='color:red'>验证码不正确</span>")
    }else{
        check.html("<span style='color:greenyellow;font-size:14px;' class='v_check_h'>ok</span>")
    }
});
function changnumber(){
    return Math.floor(Math.random()*8999+1000)
}
var checkchange=$("#v_check_change");
checkchange.html(changnumber());
$("#v_check_change_h").click(function(){
    checkchange.html(changnumber());
});
$("#register").click(function(){
    if(($(".v_check_h").html()=="ok") &&($(".v_password_id_h").html()=="ok")&&($(".v_name_id_h").html()=="ok")){
        var img= JSON.parse(localStorage['logon']);
        var ph=[];
        var pass=[];
        var flag=false;
        for(var i=0;i<img.length;i++) {

            var phonenum = img[i].phone;
            ph.push(phonenum);
            var passnum = img[i].password;
            pass.push(passnum);
            if(phonenum==$("#v_name_id").val()){
                flag=true;
                k=i;
            }
        }
        if(flag==true){
            if(pass[k]!=$("#v_password_id").val()){
                alert({
                    text: "用户名和密码不匹配",
                    top: $(document).scrollTop() + $(window).height() / 3,
                    left: "35%",
                    background: "red"
                });
            }else{
                alert({
                    text: "登录成功",
                    top: $(document).scrollTop() + $(window).height() / 3,
                    left: "35%",
                    background: "green"
                });
            }
        }else{
            alert({
                text: "用户不存在",
                top: $(document).scrollTop() + $(window).height() / 3,
                left: "35%",
                background: "red"
            });
        }
    }else{
        alert({
            text:"登录信息有误",
            top:$(document).scrollTop()+$(window).height()/3,
            left:"35%",
            background:"red"
        });
        return false;
    }
});
/*--------------------------页面注册--------------------------------*/
$("#v_phone_id").blur(function(){
    var check=$("#v_phone_id_h");
    var phone_id=this.value;
    var reg=/^1[3|4|5|7|8]\d{9}$/;
    if(phone_id==""){
        check.html("<span style='color:red'>不能为空</span>")
    }else if(!reg.test(phone_id)){
        check.html("<span style='color:red'>格式不对</span>")
    }else{
        check.html("<span style='color:greenyellow;font-size:14px;' class='v_phone_id_h'>ok</span>")
    }
});
$("#v_phone_email").blur(function(){
    var check=$("#v_phone_email_h");
    var email_id=this.value;
    var reg=/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    if(email_id==""){
        check.html("<span style='color:red'>不能为空</span>")
    }else if(!reg.test(email_id)){
        check.html("<span style='color:red'>格式不对</span>")
    }else{
        check.html("<span style='color:greenyellow;font-size:14px;''>ok</span>")
    }
});
$("#v_password").blur(function(){
    var check=$("#v_password_h");
    var password_id=this.value;
    if(password_id==""){
        check.html("<span style='color:red'>不能为空</span>")
    }else if(password_id.length<6||password_id.length>20){
        check.html("<span style='color:red'>密码长度6-20位</span>")
    }else{
        check.html("<span style='color:greenyellow;font-size:14px;' class='v_password_h'>ok</span>")
    }
});

$("#v_password_repeat").blur(function(){
    var check=$("#v_password_repeat_h");
    var password_repeat =this.value;
    var password_value=$("#v_password").val();
    if(password_repeat!=password_value){
       check.html("<span style='color:red'>两次密码不一致</span>")
    }else{
        check.html("<span style='color:greenyellow;font-size:14px;' class='v_password_repeat_h'>ok</span>")
    }
});
$("#logon").click(function(){
    var password=$("#v_password").val();
    var phone=$("#v_phone_id").val();
    if(($(".v_password_repeat_h").html()=="ok") &&($(".v_password_h").html()=="ok")&&($(".v_phone_id_h").html()=="ok")&&($("#checkbo").attr("checked")=="checked")){
        var name=localStorage['logon'];
        if(name){
            name = JSON.parse(localStorage['logon']);
        }else{
            name=[];
        }
        var  item=null;
        for(var i=0;i<name.length;i++){
            if(name[i].phone == phone){
                item = name[i];
                break;
            }
        }
        /*判断item是否为空如果不为空数量就加否则存进去*/
        if(item){
            alert({
                text:"用户名已存在",
                top:$(document).scrollTop()+$(window).height()/3,
                left:"35%",
                background:"red"
            });
        }else{
            name.push({phone:phone,password:password});
            alert({
                text:"注册成功",
                top:$(document).scrollTop()+$(window).height()/3,
                left:"35%",
                background:"green"
            });
        }
        localStorage['logon'] = JSON.stringify(name);

    }else{
        time=setInterval(function(){
            $("#logon").attr("disabled","disabled").css("cursor","wait")
        },1000);
        setTimeout(function(){
            clearInterval(time);
            $("#logon"). removeAttr("disabled").css("cursor","pointer")
        },4000);
        alert({
            text:"注册信息有误",
            top:$(document).scrollTop()+$(window).height()/3,
            left:"35%",
            background:"red"
        });
    }
});
/*--- 模拟弹出窗----*/
window.alert=function(opt){
   var  dialog01=new dialog(opt);
    dialog01._create();
};
function dialog(opt){
    this.Config={
        width:300,
        height:100,
        text:"",
        background:"#ccc",
        top:50,
        left:50,
        textAlign:"center"
    };
    for(var i in opt){
        this.Config[i]=opt[i];
    }
    this.dialog=null;
}
dialog.prototype={
    _create:function(){
        var that=this;
        var dialog=$("<div class='alert'></div>");
        var btn=$("<button>确定</button>");
        dialog.css({
            width:this.Config.width,
            height:this.Config.height,
            top:this.Config.top,
            left:this.Config.left,
            background:this.Config.background,
            position:"absolute",
            textAlign:this.Config.textAlign,
            fontSize:"20px",
            borderRadius:"5px"
        });
        dialog.html(this.Config.text);
        btn.css({
            position:"absolute",
            right:"30px",
            bottom:"20px",
            background:"blue",
            fontSize:"14px"
        });
        dialog.append(btn);
        $("body").append(dialog);
        btn.click(function(){
            that._delete();
        })
    },
    _delete:function(){
        $("body").children().last().remove();
    }
};
/*--------------------------------------------------------禁用右键菜单------------------------------------------------*/
$(document).bind("contextmenu",function(){
    return false;
});
/*禁用f5刷新*/
/*$(document).bind("keydown",function(e){
   if(e.keyCode==116){
       e.keyCode=0;
       return false;
   }
});*/
/*---------------textarea-----------------------------------------------------------------------------------*/
$("#textare").scroll(function(){
    if($(this).scrollTop()>=1750){
        $("#checkbo").attr("checked","checked");
    }
});

