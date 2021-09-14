/*
Programa que pida dos numeros y nos diga cual es el mayor, el menor y si son iguales 
Plus: Si los números no son un número o son menores o iguales a 0 nos vuelva a pedir que introduscamos los datos
*/
var numero1 = parseInt(prompt('Introduce el Primer Numero', 0)); //  parseInt nos sirve para convetir prompt que es un string a numero 
var numero2 = parseInt(prompt('Introduce el segundo Numero', 0));

while(numero1 <=0 || numero2 <=0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt('Introduce el Primer Numero', 0));
    numero2 = parseInt(prompt('Introduce el segundo Numero', 0));
}

 if (numero1 == numero2){
     alert("los numeros son iguales")
 }else if(numero1 > numero2){
    alert("El numero mayor es: " + numero1);
    alert ("El numero menor es: "+ numero2);  
 }else if(numero2 > numero1){
    alert("El numero mayor es: " + numero2);
    alert ("El numero menor es: "+ numero1);  
 }else{
     alert("Introduce numeros correctos");
 }