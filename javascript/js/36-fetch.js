'use strict'

var div_usuarios = document.querySelector("#usuarios")
//Fetch peticiones a servicios / apis rest

fetch('https://jsonplaceholder.typicode.com/users')
//Con el then recogo los datos, el callback es data, recibe data y lo convierte a json
      .then(data => data.json())
      //Recogemos de nuvo la data, funcion de callback
      .then(users =>{
        listadoUsuarios(users)
      });
      function listadoUsuarios(usuarios){
          usuarios.map((user, i) =>{

            let nombre = document.createElement('h4')
            nombre.innerHTML = i +". "+ user.name + " - " +user.username;
            div_usuarios.appendChild(nombre)
        
          
            function mensaje() {
              document.querySelector(".loading").style.display = 'none';
            }
            setTimeout(mensaje,1000);
        })
      }