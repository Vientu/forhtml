function myInput(x) {
    //var data=document.getElementsById("x").value;
    var textbox =document.getElementById("inp");
            switch (x){
            case "=":
                textbox.value=eval(textbox.value);
                break;
            case "c":
                textbox.value="";
                break;
            case "pi":
                textbox.value=textbox.value+Math.PI;
                break;
            case "e":
                textbox.value=textbox.value+Math.E;
                break;
            case "sqrt":
                textbox.value=Math.sqrt(textbox.value);
                break;
            case "1/x":
                textbox.value=1/textbox.value;
                break;
            case "sin":
                textbox.value=Math.sin(textbox.value);
                break;
            case "cos":
                textbox.value=Math.cos(textbox.value);
                break;
            case "tan":
                textbox.value=Math.tan(textbox.value);
                break;
            case "asin":
                textbox.value=Math.asin(textbox.value);
                break;
            default:
                textbox.value=textbox.value+val;
                break;
        }
    
}