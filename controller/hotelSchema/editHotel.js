const HotelModel = require("../../model/hotelSchema")

const editHotel = (req, res) => {
    const { id } = req.params;
    HotelModel.findByIdAndUpdate(id, req.body, {new: true}, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    })
}

module.exports = editHotel