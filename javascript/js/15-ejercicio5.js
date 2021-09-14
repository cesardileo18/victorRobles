//Mostrar todos los numeros divisores de un numero introducido en un prompt
//Creamos la variable donde vamos a guardar el número que va introducir el usuario
var numero = parseInt(prompt("Mete un número", 1));  //Para convertir a un string lo que me va llegar por el promp

for(var i = 1; i <= numero; i++){    //El for esta formado por tres partes, 1 el contador, ó el inicialidor en este caso es 1   
    if (numero%i==0){               //La Segunda parte la comparación ó lA CONDIDICIÓN en ese caso!
        console.log("Divisor: " +i);//Un número es divisor de otro número cuando al dividirlo entre si te da como resultado 0
    }                                //cuando dividimos el número entre i el resto que sería el operador % es resto nos da 0                     
}                                    
                                               