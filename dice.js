var random = Math.floor((Math.random()*6 + 1));
var random1 = Math.floor((Math.random()*6 + 1));

document.querySelector("img").setAttribute("src","C:/Users/om/Desktop/web/DOM/Dicee Challenge - Starting Files/images/dice"+ random +".png");
document.querySelector("img.img2").setAttribute("src","C:/Users/om/Desktop/web/DOM/Dicee Challenge - Starting Files/images/dice"+ random1 +".png")

if(random>random1)
{
  document.querySelector("h1").innerHTML = " satvik wins !";
}
else if(random===random1 )
{
  document.querySelector("h1").innerHTML = " oh ! its a tie !";
}
else
{
  document.querySelector("h1").innerHTML = " modm wins !";
}



function doSomethingOnClick ()
{ alert( 'nahi apni baari chal cheater modm !' ); }
