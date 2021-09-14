'use strict'
//Metodos que nos van a permitir transformar textos 

var numero=444;
var texto1= "Bienvenido al curso victor";
var texto2="Es bueno";
/*
var dato = numero.toString();
    //dato = texto1.toUpperCase(); 
  //  dato = texto1.toLowerCase(); 
//console.log(dato);
//Calcular la longitud que tiene un texto

var nombre = "hola como estas";
//console.log(nombre.length); //length: Sirve para contar la cantidad de elementos que hay dentro de algo,dentro de un string 
                            //dentro de un array dentro de lo que sea 

//Concatenar 

//var textoTotal = texto1+ " " +texto2;
var textoTotal = texto1.concat(" " + texto2);

console.log(textoTotal);


var busqueda = texto1.indexOf("curso"); //Sirve para buscar palabras 
console.log(busqueda);
*/
//Métodos y propiedades para hacer busquedas dentro de un string

//var busqueda = texto1.indexOf("Curso");  //indexOf: Me saca en que posicion esta esta palabra y si existe o no
                                         //lastIndexOf: saca la ultima coincidencia o aparicion de la palabra que buscas
                                          //search: En que punto aparece la palabra que estas buscando es lo mismo que indexOf
                                          //match: Devuelve un array con las palabras, sirve para cuando quieres buscar muchas palabras, sus coincidencias, donde aparece
                                          //substr(14, 5): Sirve parar buscar por parametro: el primero=apartir de cuando quiero la busqueda y el otro cuantas palabras
                                          //charAt(44): Para buscar una letra en concreta en este caso empieza desde 0 hasta buscar la que esta en la pocision 44   
                                          //startsWith(Bi): Hace busquedas desde el principio del string y ta un boleano si la encuentra o no
                                          //endsWith(victor): Hace busquedas desde el final del string y ta un boleano si la encuentra o no     
                                          //includes(JavaScript): buscar un string en una palabra y arroja un boleano si existe o no   
                                          
//console.log(busqueda)
//FUNCIONES para remplazar, separar textos y cortar textos

var remplazar = texto1.replace("curso", "php"); //replace("curso", "php"): sirve para remplazar palabras con un segundo parametro
                                                //texto1.slice(8, 10): Me separa el codigo a partir del caracter que le asigne, admite dos parametros
                                                //texto1.split(" "): Sirve para traerte un array de palabras, con un espaciado, te separa palabra por palabra 
                                                //texto1.trim(): Sirve para quitarme los espacios sobrantes al principio y al final del texto
console.log(remplazar);


