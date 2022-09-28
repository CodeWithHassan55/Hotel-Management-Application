const UserModel = require("../model/userSchema");

const blockUser = (req, res) => {
    const { id } = req.params;
    const userObj = {
        status: req.body.status === "Active" ? "Block" : "Active",
    }
    UserModel.findByIdAndUpdate(id, userObj,  { new: true }, (error, user) => {
        if (error) {
            res.send(error);
        } else {
            res.send(user);
        }
    })
}

module.exports = blockUser;