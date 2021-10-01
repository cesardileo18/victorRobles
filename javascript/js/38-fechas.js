'use strict'

var fecha = new Date();
var year = fecha.getFullYear();
var mes = fecha.getMonth();
var day = fecha.getDate();
var hora= fecha.getHours();

var textoHora = `
    El año es: ${year}
    El mes es: ${mes}
    El dia es: ${day}
    La hora es: ${hora}
`;
console.log(textoHora)