const BookingModel = require("../../model/bookingSchema")

const bookingDetails = (req, res) => {
    const { id } = req.params;
    BookingModel.find({id: id}, (err, user) => {
        if (err) {
            res.send(err);
        } else if (user) {
            res.send(user);
        } else {
            res.json({ message: "No room booked" })
        }
    })
}

module.exports = bookingDetails