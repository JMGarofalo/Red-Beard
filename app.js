
/* Menu lateral*/ 

var menuBtn = document.getElementById("menuBtn")
var header = document.getElementById("header")
var menu = document.getElementById("menu")

header.style.right = "-250px";

menuBtn.onclick = function(){
    if(header.style.right == "-250px"){
        header.style.right = "0";
        menu.src = "/img/close.png"
    } 
    else {
        header.style.right = "-250px";
        menu.src = "/img/menu.png";
    }
}