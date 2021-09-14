/*
Utilizando un buble, mostar la suma y la media de los numeros introducidos
hasta introducir un numero negativo y ahi mostrar el resultado 
*/

var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt('Introduce numeros hasta que metas uno negativo', 0));
    if(isNaN(numero)){              //isNaN significa si no es un numero que introduce el usuario
        numero = 0;

    }else if(numero>= 0){
        suma = suma + numero;

        contador ++;
    }
    console.log(suma);
    console.log(contador);

}while(numero >=0)

alert("La suma de todos los numeros es: "+ suma)
alert ("La media de todos los numeros es : "+ (suma/contador) )