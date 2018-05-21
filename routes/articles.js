// REQUIRED MODULES
const express = require('express');
const router = express.Router();

// REQUIRED CONTROLLERS
const articleController = require('../controllers/articles.js');

// SET UP HOME ROUTE
router.get("/", articleController.showUnread);

router.post("/", articleController.newArticles);

// ROUTE FOR SAVING ARTICLE THAT GRABS ID PARAMETER
router.post('/:id', articleController.saveArticle);

// ROUTE FOR SAVED ARTICLES 
router.get('/saved', articleController.viewSaved);

// EXPORT FOR INDEX.JS TO USE
module.exports = router;