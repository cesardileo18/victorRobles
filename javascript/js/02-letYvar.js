"use strict"

// Pruebas con let y var 
var numero = 40;
console.log(numero); // Valor 40

if(true){
    var numero = 50;
    console.log(numero); //Valor 50
}
console.log(numero)//Valor 50

//Prueba con let, Solo trabaja a nivel de bloque y no de manera global 

var texto = 'Curso js Cesar';
console.log(texto);//Valor Curso js Cesar
if (true){
    let texto = 'Curso js Cesar Nuevo';
    console.log(texto);//Valor Curso js Cesar Nuevo
}
console.log(texto);// Valor Curso js Cesar