'use strict'

var div_usuarios = document.querySelector("#usuarios")
var div_janet = document.querySelector("#janet")


      getUsuarios()
//Con el then recogo los datos, el callback es data, recibe data y lo convierte a json
      .then(data => data.json())
      //Fetch peticiones a servicios / apis rest
      //Recogemos de nuvo la data, funcion de callback
      .then(users =>{
        listadoUsuarios(users);
        return getJanet();
      })
      .then(data=>data.json())
      .then(user =>{

        mostrarJanet(user.data)
      })
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
      function mostrarJanet(user){
          let nombre = document.createElement('h3')
          let avatar = document.createElement('img')

          nombre.innerHTML = user.first_name ;
          console.log('Imagen----------------------------------',user.avatar)
          avatar.src = user.avatar;
          user.avatar = avatar;
          avatar.width="100";
          div_janet.appendChild(nombre);
          console.log(`entra1`)
          div_janet.appendChild(avatar);
          console.log(avatar)
      
        
          function mensaje() {
            document.querySelector(".loading2").style.display = 'none';
          }
          setTimeout(mensaje,1000);

    }