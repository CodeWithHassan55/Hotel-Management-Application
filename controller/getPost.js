const PostModel = require("../model/postSchema");

const getPost = (req, res) => {
    PostModel.find({}, (error, data) => {
        if (error) {
            res.send(error)
        } else if (data) {
            res.send(data);
        } else {
            res.json({ message: "Post Not Found" });
        }
    })
}

module.exports = getPost;