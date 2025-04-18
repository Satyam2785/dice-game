var randomnumber= Math.floor(Math.random()*6 )+1;
console.log(randomnumber);


var imgsrc= "./images/" + "dice" + randomnumber + ".png";

var randomnumber2= Math.floor(Math.random()*6 )+1;
console.log(randomnumber2);


var imgsrc2= "./images/" + "dice" + randomnumber2 + ".png";


var imgchange1= document.querySelectorAll("img")[0];
imgchange1.setAttribute("src", imgsrc);

var imgchange2= document.querySelectorAll("img")[1];
imgchange2.setAttribute("src", imgsrc2);

document.getElementById("butn").addEventListener("click", function(){location.reload();});

var heading=document.querySelector("h1");

if(randomnumber>randomnumber2){
    heading.innerHTML="🚩 player 1 win ";
    heading.setAttribute("style", "color: yellow;");
}
else if(randomnumber2>randomnumber){
    heading.innerHTML="🚩 player 2 win ";
    heading.setAttribute("style", "color: green;");
}
else{
    heading.innerHTML="😒 its a draw ";
    heading.setAttribute("style", "color: white;");
}

