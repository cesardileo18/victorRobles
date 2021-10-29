$(document).ready(function(){
    //MouseOver y MouseOut
    var caja = $('#caja');
    caja.mouseover(function(){ //This.. Sobre la variable en la que se aplica el evento
        $(this).css("background", "red")
    })
    caja.mouseout(function(){ //This.. Sobre la variable en la que se aplica el evento
        $(this).css("background", "green")
    })
})