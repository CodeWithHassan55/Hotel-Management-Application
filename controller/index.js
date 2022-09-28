const login = require("./userSchema/login");
const signup = require("./userSchema/signup");
const getUser = require("./userSchema/getUser");
const blockUser = require("./userSchema/blockUser");
const getHotels = require("./hotelSchema/getHotels");
const filterHotels = require("./hotelSchema/filterHotels");
const bookHotel = require("./bookingSchema/bookHotel");
const createHotel = require("./hotelSchema/createHotel");
const bookingDetails = require("./bookingSchema/bookingDetails");
const getHotel = require("./hotelSchema/getHotel");
const editHotel = require("./hotelSchema/editHotel");

module.exports = {
    login,
    signup,
    getUser,
    blockUser,
    getHotels,
    filterHotels,
    bookHotel,
    createHotel,
    bookingDetails,
    getHotel,
    editHotel,
}