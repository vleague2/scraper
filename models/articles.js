// REQUIRED MODULES
const mongoose = require('mongoose');

// SAVE A REFERENCE TO THE SCHEMA CONSTRUCTOR
const Schema = mongoose.Schema;

// CREATE A NEW SCHEMA OBJECT
const ArticleSchema = new Schema({
    // ARTICLE TITLE
    title: {
        type: String,
        required: true,
        unique: true
    },
    // ARTICLE LINK
    link: {
        type: String,
        required: true
    },
    // ARTICLE SUMMARY
    teaser: {
        type: String,
        required: true
    },
    // BOOLEAN TO SEE IF USER HAS SAVED IT
    saved: {
        type: Boolean,
        required: true,
        default: false
    },
    // DATE SO WE CAN SORT THEM
    date: {
        type: Date,
        default: Date.now
    },
    // NOTES THE USER HAS ADDED
    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }
});


// CREATE MODEL USING MONGOOSE MODEL METHOD
let Article = mongoose.model("Article", ArticleSchema);

// EXPORT
module.exports = Article;