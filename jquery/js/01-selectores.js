//Cuando el documento esta listo, nos referimos al document.ready
$(document).ready(function(){

        //Selector de id
    $("#rojo").css("background", "red")
            .css("color", "white");

    $("#amarillo").css("background", "yellow")
                .css("color", "black");

    $("#verde").css("background", "green")
            .css("color", "black");

        //Selectores de clases 
    var mi_clase = $('.zebra').css("padding", "5px")


    $(".sin-borde").click(function(){
        $(this).addClass('zebra')
    })
    //Selectores de etiqueta 
    var parrafos = $("p").css("cursor", "pointer")
    parrafos.click(function(){
        var that = $(this)
        if (!that.hasClass("grande")) {  //El método hasClass indica o busca si tiene la clase zebra en este caso 
        //This se usa para seleccionar en especifico 
           that.addClass("grande")
        } else {
            that.removeClass("grande")
        }
    })
    //Selectores por atributos
    $('[title= "Google"]').css("background", "yellow")
    $('[title= "Facebook"]').css("background", "#ccc")
    //
    // $('p, a').addClass('margen-superior')
//    var busqueda = $('#caja .resaltado').eq(0).parent().parent().parent().find('[title= "Google"]')  //El eq me sirve para saber en que elemento me estoy pocisionando, el parent me sirve para salir un nivel arriba de donde estoy 
     var buequeda = $("#elemento2").parent().parent().find('.resaltado')
     console.log(`busqueda`, buequeda)
});
