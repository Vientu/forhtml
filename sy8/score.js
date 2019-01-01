function student(){   //匿名函数，将得到的信息转换为一个字符串，并输出
    var s = document.getElementById("name").value + ":\n";
    var theSum = sum();
    var theAvg = avg();
    var theLevel = level(theAvg);
    s += "你的总成绩是 " + theSum + "\n";
    s += "你的平均成绩是 " + theAvg + "\n";
    s += "你的平均成绩级别是 " + theLevel + "\n";
    s += "\n" +this.msg(theLevel);
    alert(s);
}
function sum(){
    var ret=0;
    //var stu=new student();
    var math= parseInt(document.getElementById('math').value);
     var english= parseInt(document.getElementById('english').value);
      var chinese=parseInt(document.getElementById('chinese').value);
       var sci=parseInt( document.getElementById('science').value);
        var gym=parseInt(document.getElementById('gym').value);
        ret=(math+english+chinese+sci+gym);
    return ret;
}
function avg() {
    var ret=0;
    //var stu=new student();
    var math= parseInt(document.getElementById('math').value);
    var english= parseInt(document.getElementById('english').value);
    var chinese=parseInt(document.getElementById('chinese').value);
    var sci=parseInt( document.getElementById('science').value);
    var gym=parseInt(document.getElementById('gym').value);
    ret=parseFloat((math+english+chinese+sci+gym)/5);
    return ret;
}
function level(score) {
    var ret="";
    if(score>=90){
        ret='A';
    }
    else if(score>=80){
        ret='B';
    }
    else if(score>=70){
        ret='C';
    }
    else if (score>=60){
        ret='D';
    }
    else {
        ret="不及格";
    }
    return ret;
}
function msg(level) {
    var ret="";
    switch (level) {
        case "A":ret="祝贺你获得了好成绩！";break;
        case "B":ret="成绩不错，继续加油！";break;
        default:ret="必须努力啊！";
    }
    return ret;
}
function maxScore() {
    var ret=new Array();

    ret[0]= parseInt(document.getElementById('math').value);
    ret[1]= parseInt(document.getElementById('english').value);
    ret[2]=parseInt(document.getElementById('chinese').value);
    ret[3]=parseInt( document.getElementById('science').value);
    ret[4]=parseInt(document.getElementById('gym').value);
    var max=ret[0];
    for(var i=0;i<5;i++){
        if (ret[i]>max)
            max=ret[i];
    }
    alert("最高分为："+max)
}
function minScore() {
    var ret=new Array();

    ret[0]= parseInt(document.getElementById('math').value);
    ret[1]= parseInt(document.getElementById('english').value);
    ret[2]=parseInt(document.getElementById('chinese').value);
    ret[3]=parseInt( document.getElementById('science').value);
    ret[4]=parseInt(document.getElementById('gym').value);
    var min=ret[0];
    for(var i=0;i<5;i++){
        if (ret[i]<min)
           min=ret[i];
    }
   alert("最低分为："+min)
}