const express = require("express");
const { signup, login, getUser, blockUser, getHotels, filterHotels, createHotel, bookHotel, bookingDetails, getHotel, editHotel } = require("../controller");

const router = express.Router();

router.post("/api/signup", signup);
router.post("/api/login", login);
router.post("/api/createHotel", createHotel);
router.post("/api/bookHotel", bookHotel);
router.post("/api/filterHotels", filterHotels);
router.get("/api/getUsers", getUser);
router.get("/api/getHotels", getHotels);
router.get("/api/bookingDetails/:id", bookingDetails);
router.get("/api/getHotel/:id", getHotel);
router.put("/api/blockUser/:id", blockUser);
router.put("/api/editHotel/:id", editHotel);

module.exports = router;