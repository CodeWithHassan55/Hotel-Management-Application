const HotelModel = require("../../model/hotelSchema");

const filterHotels = (req, res) => {
    console.log(req.body);
    const { less, greater, type } = req.body
    if (type === "price") {
        HotelModel.find({ price: { $gte: less, $lte: greater } }, (err, data) => {
            console.log(less, greater);
            if (err) {
                res.send(err);
            } else {
                res.send(data);
            }
        })
    } else {
        HotelModel.find({ rooms: { $gte: less, $lte: greater } }, (err, data) => {
            if (err) {
                res.send(err);
            } else {
                res.send(data);
            }
        })
    }
}

module.exports = filterHotels;