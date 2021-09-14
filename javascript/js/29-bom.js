'use strict'

// Es el Browser Object Model 
var abrir;
function getBom(){
     console.log(window.innerHeight);
     console.log(window.innerWidth);
     console.log(screen.height);
     console.log(screen.width);
     console.log(window.location);  
}
function redirection(url){
    window.location = url;
}
function abrirVentana(url){
    window.open(url);
}
function abrir(url){
    window.open(url, "", "width=400,height=300");

}
getBom();
abrirVentana(url);// Este metodo me abre una ventana nueva: es como usar target Blank
redirection(url); // Este metodo me abre una venta dentro de la que ya estoy
abrir(url);//Me abre una ventana con las medidas que yo le di 