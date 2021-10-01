'use strict'

var div_usuarios = document.querySelector("#usuarios")


      getUsuarios()
//Con el then recogo los datos, el callback es data, recibe data y lo convierte a json
      .then(data => data.json())
      //Fetch peticiones a servicios / apis rest
      //Recogemos de nuvo la data, funcion de callback
      .then(users =>{
        listadoUsuarios(users);
        return getJanet();
      })
      .then 
      ;

      function getUsuarios(){
        return fetch('https://jsonplaceholder.typicode.com/users')
      }
      function getJanet(){
        return fetch('https://reqres.in/api/users/2')
      }
      
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