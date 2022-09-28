const BookingModel = require("../../model/bookingSchema");

const bookHotel = (req, res) => {
    BookingModel.create(req.body, (err, data) => {
        if (err) {
            res.send(err)
        } else {
            res.send(data);
        }
    })
}

module.exports = bookHotel;