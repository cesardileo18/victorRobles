'use strict'
window.addEventListener('load', function(){

    function intervalo (){
        var tiempo = setInterval(() => {
            console.log('set interval ejecutado');
            var encbezado = document.querySelector("h1");
            
            if (encbezado.style.fontSize == "50px"){
                encbezado.style.fontSize = "20px"
            }else{
                encbezado.style.fontSize = "50px"
            }
     },1000); // Acá van los segundos en que quieres que se ejecute la funcion
        return tiempo;
    }
    // var tiempo = setTimeout(() => { SE EJECUTA UNA SOLA VEZ
    //     console.log('set interval ejecutado');
    //     var encbezado = document.querySelector("h1");
        
    //     if (encbezado.style.fontSize == "50px"){
    //         encbezado.style.fontSize = "20px"
    //     }else{
    //         encbezado.style.fontSize = "50px"
    //     }
    // }, 5000); // Acá van los segundos en que quieres que se ejecute Funcion
    var tiempo = intervalo();
    var stop = document.querySelector("#stop");
    stop.addEventListener("click", function(){
        alert("Has parado el intervalo");
        clearInterval(tiempo);
        console.log("Se detuvo el setTime");
    });
    var start = document.querySelector("#start");
    start.addEventListener("click", function(){
        alert("Has iniciado el intervalo en bucle");
        intervalo();
    });
});