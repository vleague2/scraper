// REQUIRE MODULES
const mongoose = require("mongoose");

// REQUIRE MODELS
const dbNote = require("../models/notes.js");
const dbArticle = require("../models/articles.js");

// CREATE OBJECT TO BE EXPORTED
let note = {

    getArticle: function(req, res) {
        let id = req.params.id;

        console.log("Finding article...");

        dbArticle.findOne({_id: id})
        .then(dbArticle => {

            console.log("Sending back article...");
            res.json(dbArticle);
        })
    },

    addNote: function(req, res) {
        
        let id = req.params.id;

        let noteBody = req.body;

        console.log(noteBody);

        console.log("Creating note...")
        
        // SAVE THE NOTE
        dbNote.create(noteBody)
        .then(dbNote => {
            // LOOK FOR THE ASSOCIATED ARTICLE USING THE ID AND ADD THE NEW NOTE
            console.log("Associating note with article...")
            return dbArticle.findOneAndUpdate({_id: id}, {note: dbNote._id}, {new:true})
        })
        .then(dbArticle => {
            console.log(dbArticle);

            res.sendStatus(200);
        })
        
    }
}

// EXPORT
module.exports = note;