const PostModel = require("../model/postSchema");

const createPost = (req, res) => {
    const { name } = req.body;
    const userObj = {
        username: name,
        ...req.body,
    }
    PostModel.create(userObj, (error, post) => {
        if (error) {
            res.send(error);
        } else {
            res.send(post);
        }
    })
}

module.exports = createPost;