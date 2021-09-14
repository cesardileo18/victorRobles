'use strict'

//Dom - Document Objet Model
function cambiarColor(color){
    caja.style.background = color;
}
//Conseguir elementos con un id concreto

//var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");

caja.innerHTML = "Texto modificado desde el dom";  //El innerHTML se usa para traer solo el texto que esta dentro del div
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "#fff";
caja.className = "clase";

//Conseguir elementos por su etiqueta 
var todosLosDivs = document.getElementsByTagName('div');
var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");
/* todosLosDivs[2].style.background = 'yellow';
var contenidoTexo = todosLosDivs[2];
contenidoTexo.innerHTML = "Cabiando el texto de la segunda caja"; 
contenidoTexo.style.background= "blue" ;
console.log(todosLosDivs);*/
var valor;
    for (valor in todosLosDivs){
        if(typeof todosLosDivs[valor].textContent == 'string'){
            var parrafo = document.createElement("p");
            var texto = document.createTextNode(todosLosDivs[valor].textContent);
            parrafo.append(texto);
            seccion.append(parrafo);
        }
    }
    seccion.append(hr);

//Conseguir elementos por su clase css 
var divRojos = document.getElementsByClassName('rojo');
var divAmarillos = document.getElementsByClassName('amarillo');
divAmarillos[0].style.background = 'blue';
var div;

for(div in divRojos){
    if(divRojos[div].className == 'rojo'){
        divRojos[div].style.background = "yellow";
    }
}
//Query Selector

var id = document.querySelector("#encabezado");
console.log(id);
id.style.background = 'green';
var claseRojo = document.querySelector(".rojo");
console.log(claseRojo);

