'use strict'
//Tabla de multiplicar de un numero introducido por pantalla 

var numero = parseInt(prompt("¿De que numero quieres la tabla?", 1));
document.write("<h1>Tabla del " +numero+"</h1>")
for(var i= 1; i<=10; i++){
    document.write(i + " x " + numero + " = " + (i*numero)+ "</br>");
}
//Todas las Tablas, es anidado el método 
for(var c= 1; c<=10; c++){
    document.write("<h2>Tabla de Multiplicar del numero " +c+"</h2>")
    for(var i= 1; i<=10; i++){
        document.write(i + " x " + c + " = " + (i*c)+ "</br>");
    }
}