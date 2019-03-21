


function popopop() {
  var txt;
  if (confirm("Veux-tu aller sur le site xxxvidsxxx ? No bullshit bro")) {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  } else {
    txt = "Dommage";
  };

};

setTimeout(popopop,10000);


/* Crée un bouton qui déclenche le "Mode Psychédélique" : quand un utilisateur clique sur ce bouton, le background de la page devra changer en magenta.

Puisque c'est toi, nous allons te proposer d'autres fonctionnalités. Le bouton devra aussi :

Changer la couleur des polices des paragraphes en blue
Changer la couleur des polices de tous les headings en green
Changer la police des paragraphes en papyrus et la police des headers en Comic Sans

text.style.fontSize = "14pt";
text.style.fontFamily = "Comic Sans MS";
text.style.color = "green";
*/

// bouton :

// changement couleur des paragraphes

function colora()
  {
    // changer couleur paragraphes en bleu
    document.body.style.background = 'red';
    var x = document.getElementsByTagName("P");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].style.color = "blue";}

// changer couleur titres en vert
    var y = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    var j;
    for (j = 0; j < y.length; j++) {
    y[j].style.color = "green";}

// changer police paragraphes en Papyrus
var y = document.querySelectorAll("P");
var j;
for (j = 0; j < y.length; j++) {
y[j].style.fontFamily = "Papyrus";}

// changer police titre en Comics Sans
var y = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
var j;
for (j = 0; j < y.length; j++) {
y[j].style.fontFamily = "Comic Sans MS";}
  }


/*
var button = document.createElement('PSY');
button.innerHTML = 'PSYCHEDELIA';

document.body.appendChild(button);
button.addEventListener('click', psy(){
    var paragraphes = document.getElementByTagName("p");
    paragraphes.style.color = 'blue';
  });
*/


// changement couleur des headings   headings = document.getElementByTagName("h1, h2, h3");
// headings.style.color = 'green';


// changement police paragraphes



/* function popup10() {
  alert("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please");} ;

setTimeout(function(){alert("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please")},2000);



function PopupCenter(url, title, w, h) {
    // Fixes dual-screen position                         Most browsers      Firefox
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : window.screenX;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : window.screenY;

    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var systemZoom = width / window.screen.availWidth;
var left = (width - w) / 2 / systemZoom + dualScreenLeft ;
var top = (height - h) / 2 / systemZoom + dualScreenTop ;
    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w / systemZoom + ', height=' + h / systemZoom + ', top=' + top + ', left=' + left);

    // Puts focus on the newWindow
    if (window.focus) newWindow.focus();
}

setTimeout(PopupCenter('https://nino3103.github.io/bettermotherfuckingwebsite/','WESSSH','900','500';5000); */
