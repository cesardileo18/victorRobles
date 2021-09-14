'use strict'

//Son arrays dentro de un array
var categorias = ["Terror","Comedia","Romance"];
var peliculas = ["La vida es bella","En busca de la felicidad","Rapido y Furioso"];
peliculas.reverse();
console.log(peliculas);
var cine = [categorias, peliculas];

// console.log([cine[0][1]]);
// console.log([cine[1][2]]);

//Como añadir un elemento a un array
/*
var elemento = ""; 
do{
    elemento = prompt("Introduce tu pelicula:");
    peliculas.push(elemento);
}while(elemento != "ACABAR"){    //Cuando elemento sea diferente o distinto a ACABAR                  
   peliculas.pop();             //pOP SIRVE PARA ELIMINAR EL ULTIMO ELEMENTO DE UN ARRAY
}
*/

//Eliminar un elemento en concreto de un array

var indice = peliculas.indexOf("Rapido y Furioso");

if (indice > -1 ){
    peliculas.splice(indice, 1);  //El metodo splice nos permite en base a un indice borrar tantos pasos como yo quiera, cuatos indices quiero borrar a partir de ese
}

//console.log(peliculas);
//Como convertir un array en un string

var peliculas_stream = peliculas.join();

//Como convertir un string en un array
var cadena = "Hola, Hola2, Hola3";
var cadena_array = cadena.split(", ")
console.log(cadena_array)