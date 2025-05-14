const express = require('express')  
const app = express();    
const axios = require("axios")

app.get('/home',function(req,res){
  res.send("HELLO WORLD !")
})

const data = {
    name:"JOHN",
    age: 29            
}

app.get('/student',function(req,res){
  console.log(req.query.id) // Prints the query data using query object
 console.log(req.params.id)
  res.json(data); 
  })

 app.listen(3000);
