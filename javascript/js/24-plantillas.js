'use strict'

//Plantillas de texto

var nombre = prompt("mete tu nombre");

var apellidos = prompt("mete tus apellidos");

//Manera tradicional 
//var texto = "tu nombre es: " + nombre + " y tus apellidos<br/> son: " + apellidos;
//**********************************Plantilla*****************************************/ 
//imprimo la variable dentro de la plantilla con el signo $ y los corchetes 
var texto =`
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombre}</h3> 
    <h3>Mis apellidos son: ${apellidos}</h3>
`;
document.write(texto);