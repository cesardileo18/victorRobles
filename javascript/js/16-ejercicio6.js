/*Que nos diga si un número es par o impar, tiene que tener la ventana que nos pída el numero, tiene que comprobar si 
cuando metamos un numero no es valido, que nos vuelva a pedir el numero, una vez de hacer todo esto. 
Hacer que nos muestre si el numero es Par o Impar
1.Ventana prompt
2.Si no es válido que nos pida de nuevo el número
3. Mostar si es Par o Impar
*/
var number = parseInt(prompt("Introduce un número: ", 0));
while(isNaN(number)){ // El isNaN es mientras que ses un número, mientras que sea una letra o algo que no sea un numero 
    number = parseInt(prompt("Introduce un número: ", 0));//Comprobamos hasta que no sea un numero valido
}
if(number%2==0){
    alert("Es un numero par");
}else{
    alert("Es un múmero impar")
}