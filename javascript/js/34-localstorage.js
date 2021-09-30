'use strict'

//LocalStorage



//Comprobar compatibilidad del localstrorage
if (typeof(Storage)!=='undefined'){
    console.log("localstorage disponible");
}else{
    console.log("incompatible, localstorage no disponible")
}
//Guardar Datos
localStorage.setItem("titulo","Curso de Visctor Robles Javascript"+"<br>")

//Recuperar Elemento 
document.querySelector("#peliculas").innerHTML = (localStorage.getItem("titulo"));


 //Guardar Objetos 
 
 var usuario = {
     nombre: "Cesar Di Leonardo",
     email: "cesardileo18@gmail.com",
     web: "www.https:/dileoweb.com"
 }


 localStorage.setItem("usuario", JSON.stringify(usuario));

 //Recuperar Objeto 

 var userJs = JSON.parse(localStorage.getItem("usuario"));
 console.log('Datos',document.querySelector("#hola"))

document.querySelector("#peliculas").append(userJs.web+ " - "+userJs.nombre ); 
