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
    link: {
        type: String,
        required: true
    },
    teaser: {
        type: String,
        required: true
    },
    saved: {
        type: Boolean,
        required: true,
        default: false
    },
    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }
});


// CREATE MODEL USING MONGOOSE MODEL METHOD
let Article = mongoose.model("Article", ArticleSchema);

// EXPORT
module.exports = Article;