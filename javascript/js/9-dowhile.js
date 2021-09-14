var year = 2021;

/*while(year <= 2051){ //Mientras cumpla las condiciones que pasen aca 
   console.log("Estamos en el año: "+year);//que ejecute este codigo
   year ++ ; // En cada integracion del bucle se le va sumar uno a year, con esta condicion rompo el ciclo infinito 
}
*/
while(year != 1991){ //Mientras cumpla las condiciones que pasen aca 
    console.log("Estamos en el año: "+year);//que ejecute este codigo
    if (year == 2000){
        break;
    }
    year -- ; // En cada integracion del bucle se le va sumar uno a year, con esta condicion rompo el ciclo infinito 
 }

 // Do While
var years = 30
 do{
      alert("Solo cuando sea diferente a 20") //Bloque de instrucciones, 
      years --;                               //Primero se ejecuta el codigo dentro del do, y luego pasa por el while
 } while(years > 25 )// Aca se comprueba esta condicion 