const HotelModel = require("../model/hotelSchema");

const createHotel = (req, res) => {
    HotelModel.create(req.body, (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.send(data);
        }
    })
}

module.exports = createHotel;