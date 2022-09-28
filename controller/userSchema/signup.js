const UserModel = require("../../model/userSchema");
const bcryptjs = require("bcryptjs");

const signup = async (req, res) => {
    const { email, password } = req.body;
    const hashpass = await bcryptjs.hash(password, 10);  
    const userCredentials = {
        ...req.body,
        password: hashpass,
    }
    UserModel.findOne({ email }, (error, user) => {
        if (error) {
            res.send(error);
        } else if (user) {
            res.json({ message: "User already exist" });
        } else {
            UserModel.create(userCredentials, (err, _) => {
                if (err) {
                    res.send(err);
                } else {
                    res.json({ message: "Signup Successfull" });
                }
            })
        }
    })
}

module.exports = signup;