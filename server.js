//implements module
const express = require('express')

//initialize express module
const server = express()

//specify path to html files
server.use(express.static(__dirname + '/public'));
 
//redirect to index.html
server.get('/', function (req, res) {
  res.redirect('index.html')
})
 
//start server at port 8080
server.listen(8080)

//debug to console
console.log('\nServer started. http://localhost:8080');