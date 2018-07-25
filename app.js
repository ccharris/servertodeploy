require('dotenv').config();
var express = require('express'); 
var app = express(); 
var sequelize = require('./db');
sequelize.sync();

app.use('/api/test', function(req, res){
    res.send("Test stuff");
});

app.listen(3000, function(){
    console.log('App is listening on 3000.') 
});