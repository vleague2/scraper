// REQUIRED MODULES
const express = require('express');
const router = express.Router();

// SET UP HOME ROUTE
router.get("/", (req, res) => {
    res.render('index');
})

// EXPORT FOR INDEX.JS TO USE
module.exports = router;