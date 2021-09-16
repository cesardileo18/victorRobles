'use strict'
window.addEventListener('load',()=>{
    //Eventos del raton 
    var boton = document.querySelector("#btn");

    function cambiarColor(){
        var bg =  boton.style.background;
        
        if (bg == "blue"){
            boton.style.background = "red";
            console.log("llega1");
        }else{
            boton.style.background = "blue";
            console.log("llega2")
        }
        boton.style.padding= "10px";
        boton.style.border = "2px solid #ccc";
        return true;
    }


    boton.addEventListener('click', function(){
    cambiarColor();
    this.style.border ="10px solid black"
    });
    //Mouse over
    boton.addEventListener('mouseover', function(){
        boton.style.background = 'yellow';
    });
    // Mouseout
    boton.addEventListener('mouseout', function(){
        boton.style.background = '#ccc';
    });
    //Focus
    var input = document.querySelector('#campo_nombre');
    input.addEventListener('focus', function(){
    console.log('[focus]estas dentro del input');
    });
    // Blur
    input.addEventListener('blur', function(){
        console.log('[blur]estas fuera input');
    });
    //Keydown
    input.addEventListener('keydown', function(event){//Sucede cuando estas pulsando una tecla
        console.log('[keydown]Pulsando esta tecla', String.fromCharCode(event.keyCode));
    });
    //KeyPress
    input.addEventListener('keypress', function(event){//Sucede cuando ya esta pulsada una tecla
        console.log('[keypress]tecla sa presionada', String.fromCharCode(event.keyCode));
    });
    //Keyup
    input.addEventListener('keyup', function(event){//Sucede cuando ya esta pulsada una tecla
        console.log('[keyup]tecla soltada', String.fromCharCode(event.keyCode));
    });
});
