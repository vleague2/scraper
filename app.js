// REQUIRED MODULES
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

// REQUIRED ROUTES

// SET UP EXPRESS
const app = express();

// SET UP HANDLEBARS
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// SET UP STATIC CONTENT
app.use(express.static('public'));

// SET UP BODYPARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// SET UP PORT
const port = process.env.PORT || 8080;

// START SERVER
app.listen(port, () => {
    console.log("Listening on port " + port);
})