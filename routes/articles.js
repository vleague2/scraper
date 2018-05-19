// REQUIRED MODULES
const express = require('express');
const router = express.Router();

// SET UP HOME ROUTE
router.get("/", (req, res) => {
    res.render('index');
})

// route for saving article that grabs id parameter

// route for saved articles /saved

// EXPORT FOR INDEX.JS TO USE
module.exports = router;