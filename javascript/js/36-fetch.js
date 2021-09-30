'use strict'

//Fetch peticiones a servicios / apis rest

fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())