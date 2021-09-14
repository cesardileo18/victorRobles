//Hacer un Programa que muestre todos los numeros entre dos numeros introducidos por el usuario 

var numero1 = parseInt(prompt("Introduce el primer número", 0)) //ParseInt para conventir el string en número }
var numero2 = parseInt(prompt("Introduce el Segundo número", 0)) //ParseInt para conventir el string en número }

document.write("<h1>De"+numero1+" a "+numero2+" Están estos números<h1>");
for (var i = numero1; i<=numero2; i++){
    document.write(i+"<br>");
}