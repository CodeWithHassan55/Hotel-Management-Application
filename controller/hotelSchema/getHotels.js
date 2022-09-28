const HotelModel = require("../../model/hotelSchema");

const getHotels = (req, res) => {
    HotelModel.find({}, (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.send(data);
        }
    })
}

module.exports = getHotels;