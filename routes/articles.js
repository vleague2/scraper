// REQUIRED MODULES
const express = require('express');
const router = express.Router();

// REQUIRED CONTROLLERS
const articleController = require('../controllers/articles.js');

// SET UP HOME ROUTE
router.get("/", articleController.showUnread);

router.post("/", articleController.newArticles);

// route for saving article that grabs id parameter
router.post('/:id', articleController.saveArticle);

// route for saved articles /saved
router.get('/saved', articleController.viewSaved);

// EXPORT FOR INDEX.JS TO USE
module.exports = router;