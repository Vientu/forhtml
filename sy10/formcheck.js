function validForm(){
    var msg="";
    var name=document.getElementById("tname").value;
    var c=name.charAt(0);
    if(!isNaN(c)){msg+="用户名不能以数字开头！\n"}
    var len=name.length;
    if(len<6||len>20){msg+="用户名长度6-20个字符！\n"}

    var psw1=document.getElementById("pwd").value;
    var len=psw1.length;
    if(len<6||len>10){msg+="密码长度6-10个字符!\n"}

    var psw1=document.getElementById("pwd").value;
    var psw2=document.getElementById("repwd").value;
    if(psw1!=psw2){msg+="两次输入密码不同!\n"}

    var email=document.getElementById("email").value;
    var index_a=email.indexOf("@");
    var index_d=email.indexOf(".");
    if(index_a<0||index_d<0){
        msg+="邮箱地址缺少'@'或'.'\n";
    }else if(index_a==0){
        msg+="邮箱地址不能以'@'开头\n";
    }else if((index_d-index_a)<2){
        msg+="邮箱地址'@'和'.'中间至少隔一个字符\n";
    }
    if(msg.length>0){
        alert(msg);
    }else{
        document.getElementById("form").submit();
    }
}