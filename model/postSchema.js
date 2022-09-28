const { default: mongoose } = require("mongoose");

const postSchema = new mongoose.Schema({
    username: { type: String },
    subject: { type: String },
    description: { type: String },
    created_on: {
        type: Date,
        default: Date.now,
    },
});

const PostModel = mongoose.model("post", postSchema);

module.exports = PostModel;