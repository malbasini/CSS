let myDiv = document.getElementsByClassName("div1");
let red = document.getElementsByClassName("red");
let green = document.getElementsByClassName("green");
let blue = document.getElementsByClassName("blue");
let alpha = document.getElementsByClassName("alpha");
function changeRGB()
{
    let r = red[0].value; let g = green[0].value;
    let b = blue[0].value; let a = alpha[0].value/10;
    myDiv[0].style.background = "rgba("+r+","+g+","+b+","+a+")";
    myDiv[0].innerHTML = "<h2> COLORE: rgba("+r+","+g+","+b+","+a+") </h2>";
}