// REQUIRED MODULES
const mongoose = require('mongoose');

// SAVE A REFERENCE TO THE SCHEMA CONSTRUCTOR
const Schema = mongoose.Schema;

// CREATE A NEW SCHEMA OBJECT
const NoteSchema = new Schema({
    // BODY FIELD
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// CREATE MODEL USING MONGOOSE MODEL METHOD
let Note = mongoose.model("Note", NoteSchema);

// EXPORT
module.exports = Note;