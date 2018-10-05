var express = require("express");
var exphbs  = require('express-handlebars');
var bodyParser = require("body-parser");
 
var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('home');
});
 
app.listen(3603);