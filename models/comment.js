const moongoose = require("mongoose");


// Save a reference to the Schem constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object

const CommentSchema = new Schema({
    title: String,
    body: String
});

//This creates our model from the above schema, using mongoose's model method
const Comment = mongoose.model("Comment", CommentSchema);

//export the Comment model
module.exports = Comment;