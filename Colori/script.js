
function changeRGB()
{
    let myDiv = document.getElementsByClassName("div1");
    let red = document.getElementsByClassName("red");
    let green = document.getElementsByClassName("green");
    let blue = document.getElementsByClassName("blue");
    let alpha = document.getElementsByClassName("alpha");
    let r = red[0].value; let g = green[0].value;
    let b = blue[0].value; let a = alpha[0].value/10;
    myDiv[0].style.background = "rgba("+r+","+g+","+b+","+a+")";
    myDiv[0].innerHTML = "<h2> COLORE: rgba("+r+","+g+","+b+","+a+") </h2>";
}
function changeHsla()
{
    let myDiv = document.getElementsByClassName("div3");
    let hue = document.getElementsByClassName("hue");
    let saturazione = document.getElementsByClassName("saturazione");
    let luminosita = document.getElementsByClassName("luminosita");
    let alpha = document.getElementsByClassName("alpha2");
    let h = hue[0].value; let s = saturazione[0].value;
    let l = luminosita[0].value; let a = alpha[0].value/10;
    myDiv[0].style.background = "hsla(" + h + ", " + s + "%, " + l + "%, " + a + ")";
    myDiv[0].innerHTML = 
    "<h2> COLORE: hsla(" + h + ", " + s + "%, " + l + "%, " + a + ")</h2>";
}