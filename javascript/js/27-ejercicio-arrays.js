'use strict'
/*
1. Pida 6 numeros por pantalla y los meta en un array
2.Mostrar el array entero (todos los elementos) en el cuerpo de la pagina y en la consola 
3.Ordenarlo y mostrarlo 
4.Inverir su orden y mostrarlo
5.MOstrar cuantos elementos tiene el array
6.Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra en su indice 
(Se valorará el uso de funciones)
*/
function mostartArray(elementos, textoCustom= ""){
    document.write("<h1>Contenido del array "+textoCustom+"</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, index) =>{
    document.write("<li>"+elemento+"</li><br/>")

    }); 
    document.write("</ul>");

}
//Pedir 6 numeros
var numeros = new Array(6);
//var numeros = [];
for (var i = 0; i <= 5; i ++){
    //numeros.push(parseInt(prompt("introduce un numero", 0));)
    numeros[i] = parseInt(prompt("introduce un numero", 0));
}
//Mostrar un array en el cuerpo de la pagina 
mostartArray(numeros);
//Mostrar un array en la consola 
console.log(numeros);
//Ordenar y mostrar 
/*numeros.sort(); Ordenar de forma alfabetica */
numeros.sort(function(a,b){return a-b});//Ordenar de forma numerica 
mostartArray(numeros, "ordenado");
//Inverir su orden y mostrarlo
numeros.reverse();
mostartArray(numeros, 'revertido');
//5.MOstrar cuantos elementos tiene el array
document.write("El array tiene: "+ numeros.length + " elementos");
//Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra en su indice 
var busqueda = parseInt(prompt("busca un numero", 0));
var posicion = numeros.findIndex(numero => numero == busqueda);

if (posicion && posicion != -1){
    document.write("</hr><h1>Encontrado</h1>");
    document.write("<h1> Posicion de la busqueda: " + posicion+ "</h2></hr>");
}else{
    document.write("</hr><h2>Numero no encontrado </h2></hr>")
}
