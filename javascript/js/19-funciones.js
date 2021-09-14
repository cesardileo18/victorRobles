'use strict'
//Funciones 
// Una funcion es una agrupacion reutilizable de un conjunto de instrucciones 

//Defino la funcion
//function calculadora(){
//Conjunto de instrucciones a ejecutar   
//    console.log("Hola soy la Calculadora");
//    console.log("Si soy yo");

    //return ("Hola soy la Calculadora")
//}
//var resultado = calculadora();
//invocar o llamar a la funcion
//calculadora();
//console.log(calculadora);

//   PARAMETROS
/*function calculadora(numero1,numero2){
    console.log("Suma " + (numero1+numero2));
    console.log("Resta " + (numero1-numero2));
    console.log("Multiplicación " + (numero1*numero2));
    console.log("División " + (numero1/numero2));
    console.log("*********************************")
}
//calculadora(8,6);
//calculadora(9,6);
for(var i = 1; i<10; i++){
    console.log(i);
    calculadora(i,8)
}
*/
//////////////////////////////////////////////////////////////

/*function calculadora(numero1,numero2, mostar = false){

    if (mostar == false){
        console.log("Suma " + (numero1+numero2));
        console.log("Resta " + (numero1-numero2));
        console.log("Multiplicación " + (numero1*numero2));
        console.log("División " + (numero1/numero2));
        console.log("*********************************")
    } else{
        document.write("Suma " + (numero1+numero2)+ "<br/>");
        document.write("Resta " + (numero1-numero2)+ "<br/>");
        document.write("Multiplicación " + (numero1*numero2)+ "<br/>");
        document.write("División " + (numero1/numero2)+ "<br/>");
        document.write("*********************************")
    }
}
calculadora(2,5);
calculadora(8,5, true);  */

////////////////////////////////////////////////////////////////////////////
function calculadora(numero1,numero2, mostar = false){
    function porConsola(){
        console.log("Suma " + (numero1+numero2));
        console.log("Resta " + (numero1-numero2));
        console.log("Multiplicación " + (numero1*numero2));
        console.log("División " + (numero1/numero2));
        console.log("*********************************")
    }
    function porPantalla(){
        document.write("Suma " + (numero1+numero2)+ "<br/>");
        document.write("Resta " + (numero1-numero2)+ "<br/>");
        document.write("Multiplicación " + (numero1*numero2)+ "<br/>");
        document.write("División " + (numero1/numero2)+ "<br/>");
        document.write("*********************************"+"<br/>")
    }

    if (mostar == false){
        porConsola(numero1, numero2)
    } else{
        porPantalla(numero1,numero2)
    }
    return true;
}
calculadora(2,5);
calculadora(8,5, true);
calculadora(9,5, true);
