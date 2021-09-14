//Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario 

var numero1 = parseInt(prompt("Introduce el primer numero", 0)); 
var numero2 = parseInt(prompt("Introduce el segundo numero", 0)); 

while (numero1<numero2){
    numero1 ++; 

    //Comprobar si numero uno es impar
    if (numero1%2 !=0){  // Si numero1 el resto de numero1 divido entre dos es diferente a 0 entonces es un numero impar
        console.log("El " + numero1 + "es impar");
    }
}
