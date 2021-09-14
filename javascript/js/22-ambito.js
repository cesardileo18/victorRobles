'use strict'

function holaMundo(){
    var hola_mundo = "Soy una variable dentro de una funcion"
    console.log(texto);
    console.log(typeof numero.toString()); // toString , Sirve para convertir un numero, o entero. En una cadena de texto o string
    console.log(hola_mundo);               // typeof: Sirve para saber que estoy usando, si un boleano, entero, string etc
}
var numero = 12;
var texto = "Hola mundo soy una variable local";
holaMundo(texto);

//Si intento llamar a la variable dentro de la funcion fuera de ella no me deja, ya que no esta definida de manera global,
// sino que esta definida solo para su propia funcion. Y la consola me escupe Undefine ejemplo:

/*
 console.log(hola_mundo);
*/