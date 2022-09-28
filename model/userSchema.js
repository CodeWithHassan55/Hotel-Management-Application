const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String },
    number: { type: String },
    email: { type: String },
    password: { type: String },
    role: {
        type: String,
        default: "user",
    },
    status: {
        type: String,
        default: "Active",
    },
    hotel: {
        type: String,
        default: "null",
    },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;