function show() {
//通过 ID 获取半径文本框的输入值并转换为浮点数
    var radius = parseFloat(document.getElementById("radiustext").value);
    var area=compute(radius);
//通过 ID 获取面积文本框中
    document.getElementById("areatext").value=area; return;
}
function compute(radius){
    return Math.PI*radius*radius;
}


