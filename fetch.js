const fs = require('fs');
const htt = require('https')
const fetch = require('node-fetch')

// Use the fetch method to get JSON data from the API

fetch('http://jsonplaceholder.typicode.com/posts')
// Write the JSON data gotten from the API to a file called posts.txt in a folder named result
  .then(res => res.json())
  //stringify the fetched JSON data
  //write the fetched data to a file named posts.txt in a folder named result
  .then(json => {
    fs.writeFile('./result/posts.txt', JSON.stringify(json), () => {
      
        console.log('new file writen successfully')
   
   
    })

  
 
  })





 
