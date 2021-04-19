const fs = require('fs')
const fetch = require('node-fetch')

let fetchData = fetch('http://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((data) => console.log(data))
