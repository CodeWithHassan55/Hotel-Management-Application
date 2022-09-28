const { default: mongoose } = require("mongoose");

const hotelSchema = new mongoose.Schema({
    name: {type: String},
    location: {type: String},
    price: {type: String},
    description: {type: String},
    rooms: {type: String},
    image: {type: String},
});

const HotelModel = mongoose.model("Hotels", hotelSchema);

module.exports = HotelModel;