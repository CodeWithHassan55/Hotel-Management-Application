const HotelModel = require("../../model/hotelSchema");

const getHotel = (req, res) => {
    const { id } = req.params;
    HotelModel.findOne({ _id : id }, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    }) 
}

module.exports = getHotel