const express = require('express')
const app = express();    
const axios = require("axios")


const user = {
    Name:"Anas",
    Age: 21,
    City: "Dhaka"
}

app.get('/home',function(req,res){
    res.send("Hello World !!!");   
})                       
                       

 app.get ('/user',function(req,res){
  const url = "http://127.0.0.1:3000/student";               // postman e jrkm amra url dya call dtam ei gulo holo
  axios.get(url)                                            // temon code likhe url tare call kra egulo k axios ble 
  .then(response => {
    console.log("Response Data:", response.data);
  })
  .catch(error => {
    console.error("Error fetching data:",error.message);

  });
  res.send("OK ")
});


 app.listen(4000);
