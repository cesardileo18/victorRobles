'use strict'

//funciones anonimas 
//Es una funcion que no tiene nombre ,Un callback es una funcion que se ejecuta dentro de otra

/*var pelicula = function(nombre){
    return "La pelicula es: " + nombre;

}*/
function sumame (numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;
    //Tengo que invocar las dos funciones 
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar; 
}//Dos funciones anónimas que uso como callback
    sumame (5,7,function(dato){
        console.log("La suma es: ", dato);
    },
    function(dato){
        console.log("La suma por dos es: ",(dato*2));
    })
 //*************Función de Flecha *****************************/   
 //Es sustituir la palabra function por flecha Se puede dejar el parámetro solo sin los parentesis () y se invoca solo con =>
//a menos que la funcion tenga dos parámetros 

/*

    sumame (5,7, dato=>{
        console.log("La suma es: ", dato);
    },
    dato=>{
        console.log("La suma por dos es: ",(dato*2));
    })

 */