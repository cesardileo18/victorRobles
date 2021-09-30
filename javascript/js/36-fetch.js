'use strict'

//Fetch peticiones a servicios / apis rest
var usuarios = [];
fetch('https://jsonplaceholder.typicode.com/users')
//Con el then recogo los datos, el callback es data, recibe data y lo convierte a json
      .then(data => data.json())
      //Recogemos de nuvo la data, funcion de callback
      .then(users =>{
        usuarios = users.data;
        console.log('Usuarios---------------',usuarios)
      })