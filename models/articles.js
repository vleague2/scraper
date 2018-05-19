// REQUIRED MODULES
const mongoose = require('mongoose');

// SAVE A REFERENCE TO THE SCHEMA CONSTRUCTOR
const Schema = mongoose.Schema;

// CREATE A NEW SCHEMA OBJECT
const ArticleSchema = new Schema({
    // ARTICLE TITLE
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }
});


// create new article


// query db for all saved articles

// update one item in db boolean saved:true

// update one item in db boolean saved:false



// CREATE MODEL USING MONGOOSE MODEL METHOD
let Article = mongoose.model("Article", ArticleSchema);

// EXPORT
module.exports = Article;