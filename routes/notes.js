// REQUIRED MODULES
const express = require('express');
const router = express.Router();

// SET UP EXPRESS
const app = express();

// REQUIRED CONTROLLERS
const noteController = require('../controllers/notes.js');

// SET UP ROUTE TO GRAB THE CORRECT ARTICLE FOR THE MODAL
router.get("/note/:id", noteController.getArticle);

// SET UP ROUTE TO ADD NOTE
router.post("/note/:id", noteController.addNote);


// EXPORT FOR INDEX.JS TO USE
module.exports = router;