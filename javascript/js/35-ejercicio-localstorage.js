'use strict'

var formulario = document.querySelector('#forpeliculas');

formulario.addEventListener('submit', function(){
    var titulo = document.querySelector('#addpelicula').value;
    if(titulo.length >=1){
        localStorage.setItem(titulo, titulo);
    }
   
});
var ul = document.querySelector('#peliculas-list')
for(var i in localStorage){
    if(typeof localStorage[i]== 'string'){
        var li = document.createElement("li");
        li.append(localStorage[i]);
      
        ul.append(li);
    }
    console.log('Ul--------------------------',ul.append(li))
}
var formulariob = document.querySelector('#forBorrarPeliculas');

formulariob.addEventListener('submit', function(){
    var titulo = document.querySelector('#borrarPelicula').value;
    if(titulo.length >=1){
        localStorage.removeItem(titulo);
    }
   
});