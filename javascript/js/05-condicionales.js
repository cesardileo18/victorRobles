// Condicionales If, significa Si
// Si A es igual a B entonces haz algo !!

//var edad1 = 30;
//var edad2 = 32

// Si pasa esto
/*if(edad1>edad2){
    console.log("Edad1 es mayor que edad2")            //Ejecuta esto
} else{
    console.log("la edad1 es inferior")
}*/

var edad = 74;
var nombre= "Cesar";
/* Operadores relacionales 
Mayor : >
Menor: <
Mayor o igual: >=
Menor o igual <=
Igual: ==
Distinto: !=
*/
if(edad >=18){
    console.log(nombre+" tienes "+ edad +" años, eres mayor de edad");
    if(edad <=33){
        console.log("Eres mileniar")
    } else if(edad>=70){
        console.log("Eres anciano")
    }else{
        console.log("ya no eres millenial");
    }

}else{
    console.log(nombre+" tienes "+ edad + " años, eres menor de edad y no tienes acceso")
}
/*
//Operadores Lógicos 
AND (Y) : &&
OR (O) : ||
NEGACIÓN : !
*/ 

// NEGACIÓN 
var year = 2018

if(year!= 2016){
    console.log("El año no es 2016 realmente es: " + year)
}

//AND

if(year >= 2000 && year<= 2020 ){
    console.log("estas en los años indicados ")
}else{
    console.log("Estamos en la era post-moderna")
}

//OR
if (year== 2008 || (year>=2018 && year == 2028)){
    console.log("El año acaba en 8");
}else{
    console.log("Año no registrado");
}