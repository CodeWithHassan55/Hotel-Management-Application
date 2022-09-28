const UserModel = require("../../model/userSchema");
const bcryptjs = require("bcryptjs");

const login = (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email }, async (error, user) => {
        if (error) {
            res.send(error);
        } else if (user) {  
            await bcryptjs
                .compare(password, user.password)
                .then((password) => {
                    if (password) {
                        res.send(user);         
                    } else {
                        res.json({ message: "Invalid Credentials" });
                    }
                })
                .catch((err) => {
                    res.send(err);
                })
        } else {
            res.json({ message: "User not found" });
        }
    })
}

module.exports = login;