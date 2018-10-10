var express = require("express");
var bodyParser = require("body-parser");
const Sequelize = require('sequelize');



var app = express();
var PORT = process.env.PORT || 3603;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());


// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgerscontroller.js");

app.use(routes);



app.get('/', function (req, res) {
    res.render('index.handlebars');
});



// sequelize.sync({ force: true});

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });



// const sequelize = new Sequelize('burgers_db', 'burgers', 'devoured', {
//     dialect: 'mysql'
//   })

//   sequelize
//   .query('SELECT * FROM burger_db', { burger: Projects })
//   .then(projects => {
//     // Each record will now be mapped to the project's model.
//     console.log(projects)
//   })



app.listen(PORT, function() {
    console.log("Listening on port:%s", PORT);
  });
  