const UserModel = require("../model/userSchema");

const getUser = (req, res) => {
    UserModel.find({ role: "user" }, (error, user) => {
        if (error) {
            res.send(error);
        } else {
            res.send(user);
        }
    })
}

module.exports = getUser;