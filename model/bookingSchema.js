const { default: mongoose } = require("mongoose");

const bookingSchema = new mongoose.Schema({
    cnic: {type: String},
    name: {type: String},
    number: {type: String},
    person: {type: String},
    days: {type: String},
    hotel: {type: String},
    bank: {type: String},
    cardNo: {type: String},
    cardPin: {type: String},
    expiry: {type: String},
    id: {type: String},
});

const BookingModel = mongoose.model("Bookings", bookingSchema);

module.exports = BookingModel;