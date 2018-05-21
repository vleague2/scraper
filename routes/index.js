// REQUIRED MODULES
const express = require('express');

// SET UP EXPRESS
const app = express();

// IMPORT ALL OTHER ROUTES
app.use(require('./articles.js'));
app.use(require('./notes.js'));

// EXPORT APP FOR APP.JS TO USE
module.exports = app;