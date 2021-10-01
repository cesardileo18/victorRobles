'use strict'

var div_usuarios = document.querySelector("#usuarios")
var div_janet = document.querySelector("#janet")
var div_profesor = document.querySelector("#profesor")


      getUsuarios()
      //Con el then recogo los datos, el callback es data, recibe data y lo convierte a json
      .then(data => data.json())
      //Fetch peticiones a servicios / apis rest
      //Recogemos de nuvo la data, funcion de callback
      .then(users =>{
        listadoUsuarios(users);
        return getInfo();
      })
      .then(user =>{
        console.log('profesor',user)
        div_profesor.innerHTML = user;
        return getJanet();
      })
      .then(data=>data.json())
      .then(user =>{
        mostrarJanet(user.data);
      })

      function getUsuarios(){
        return fetch('https://jsonplaceholder.typicode.com/users')
      }
      function getJanet(){
        return fetch('https://reqres.in/api/users/2')
      }
      function getInfo(){
        var profesor = {
            nombre: 'Victor',
            apellidos: 'Di Leonardo',
            url: 'https://dileoweb.com'
        };

        return new Promise((resolve, reject)=>{
        var profesor_string = "";
          setTimeout(function(){
                    //Convertir info en json string
            profesor_string = JSON.stringify(profesor);

            // if(typeof profesor_string != 'string'|| profesor_string != '')return reject('error1');
            return resolve(profesor_string);
           },3000);
          });
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
          avatar.src = user.avatar;
          user.avatar = avatar;
          avatar.width="100";
          div_janet.appendChild(nombre);
          div_janet.appendChild(avatar);
      
          function mensaje() {
            document.querySelector(".loading2").style.display = 'none';
          }
          setTimeout(mensaje,1000);

    }