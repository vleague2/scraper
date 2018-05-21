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
/*
    addNote: function(req, res) {
        
        let NOTE_BODY = REQ.SOMETHING;

        dbNote.create(NOTE_BODY)
        .then(dbNote => {
            return dbArticle.findOneAndUpdate({_id: id}, {note: dbNote._id}, {new:true})
        })
        .then(dbArticle => {
            res.render(SOMETHING);
        })
    }
    */
}

// EXPORT
module.exports = note;