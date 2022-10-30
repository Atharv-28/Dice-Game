// Player 1 dice score
var n = Math.random();
n = n*6;
n = Math.floor(n)+1;

// Player 2 dice score
var m = Math.random();
m = m*6;
m = Math.floor(m)+1;

// changing img of p1
var p1nimg = "dice"+n+".png";
document.getElementById("p1").setAttribute("src",p1nimg);

// changing img of p2
var p2nimg = "dice"+m+".png";
document.getElementById("p2").setAttribute("src",p2nimg);

// declare winnner
var a;
a = document.querySelector("h1");
if(n>m)
{
    a.innerHTML="Player 1 wins..";   
}
if(n<m)
{
    a.innerHTML="Player 2 wins..";   
}
if(n===m)
{
    a.innerHTML="Roll the Dice again...";   
}