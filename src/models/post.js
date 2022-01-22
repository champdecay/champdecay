const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
    },
    featured_image: String,
    excerpt: {
        type: String,
        required: true
    },
    tags: [{
        type: String,
        required: true
    }],
}, { timestamps: true })

const Post = mongoose.model("posts", PostSchema);
module.exports = Post;