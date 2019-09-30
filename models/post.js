const moongoose = require("mongoose");


// save a reference to Schema constructor
const Schema = moongoose.Schema;

//using Schema constructor, create a new postSchema object

const PostSchema = new Schema({

    title: {
        type: String,
        require: true
    },
    link: {
        type: String,
        requied: true
    },

    // "comment" is an object that stores a Comment id
    // the ref property links the ObjectId to the Comment model
    //This allows us to populate the Post with an associated Comment
    comment: {
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }
});

// this created our model from the above schema, using mongoose's model method
const Post = moongoose.model("Post", PostSchema);

// export the Post model
module.exports = Post;