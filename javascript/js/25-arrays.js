'use strict'

// Arrays, Arreglos, Matrices:  Una coleccion de datos, de tipo de valores que puede tener una variable
var nombre = "Victor Robles";

var nombres = ["cesar", "ale", "pedro", "carlos", "seus"];

// Crear un array como objeto

var lenguajes = new Array("php", "js", "celu", "pc");
/*console.log(nombres);
console.log(nombres[4]);
console.log(lenguajes);
var elementos = parseInt(prompt("Que elementos del array quieres? ", 0)); // Con parseInt lo convertimos a entero para utilizar el 0
if(elementos >= nombres.length){
    alert("Introduce el numero correcto menor que " + nombres.length);
}else{
    alert ("El usuario selecionado es : "+nombres[elementos]);
}
*/
document.write("<h1>Lenguajes</h1>");
document.write("<ul>");

/*for(var i = 0; i <lenguajes.length; i++){
    document.write(" <li> "+ lenguajes[i] +" </li> " );
}
lenguajes.forEach((elemento, indice)=>{
 
    document.write(" <li> "+indice+"-"+elemento+ "</li> " );
});*/
//Otra manera para hacer integraciones y recorrer un array
for (let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");
}
document.write("</ul>")
//Busquedas 
/*var busqueda = lenguajes.find(function(lenguaje){
    return lenguaje == "php";
});*/

//Metodo tipo flecha 

var busqueda = lenguajes.find(lenguaje =>lenguaje == "php");

// Buscar el indice donde se encuentra lo que estes buscando o que posicion con el findIndex

//var busqueda = lenguajes.findIndex(lenguaje =>lenguaje == "php");

//console.log(busqueda);
 //Metodo Some, Nos va permitir comprobar si algun valor algun precio mayor o igual a tal cosa, arroja un Boleano
 var precios = [30, 50, 20, 10, 4];

 var busqueda = precios.some(precio =>precio >= 15);
console.log(busqueda);
