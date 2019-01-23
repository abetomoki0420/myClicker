const express = require('express');
const client = require('./connection')
const cors = require('cors')
var app = express();

app.use(cors());

var server = app.listen( 3000 , function(){
  console.log("listen");
});


app.get("/api" , function( req , res , next){
  client.query('select * from `material` order by `price`', function (error, rows) {
    if (error) throw error
    console.log(rows)
    res.json(rows)
  })
});
