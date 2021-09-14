'use strict'

/**
Calculadora:
1-Pida dos numeros por pantalla
2-Si Metemos uno mal que no los vuelva a pedir
3-Que nos muestre en el cuerpo de la pagina, en una alerta y por la consola el resultado de sumar, restar, multiplicar, 
y dividir esas dos cifras que hemos pedido anteriormente  
 */

var number1 = parseInt(prompt("Introduce el primer número: ", 0));
var number2 = parseInt(prompt("Introduce el segundo número: ", 0));

while(number1 < 0 || number2 < 0 || isNaN(number1) || isNaN(number2)){
     number1 = parseInt(prompt("Introduce el primer número: ", 0));
     number2 = parseInt(prompt("Introduce el segundo número: ", 0));
}
var resultado = "La Suma es: " + (number1 + number2) + "<br/>"+
                "La Resta es: " + (number1 - number2) + "<br/>"+
                "La Multiplicación es: " + (number1 * number2) + "<br/>"+
                "La División es: " + (number1 / number2) + "<br/>";

var resultadoCMD = "La Suma es: " + (number1 + number2) + "\n"+
                   "La Resta es: " + (number1 - number2) + "\n"+
                   "La Multiplicación es: " + (number1 * number2) + "\n"+
                   "La División es: " + (number1 / number2) + "\n";

document.write(resultado);
alert(resultadoCMD)
console.log(resultadoCMD)