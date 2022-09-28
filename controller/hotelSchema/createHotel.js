const HotelModel = require("../../model/hotelSchema");

const createHotel = (req, res) => {
    const {image} = req.body;
    if(image != ""){
        HotelModel.create(req.body, (error, data) => {
            if (error) {
                res.send(error);
            } else {
                res.send(data);
            }
        })
    } else {
        const userObj = {
            ...req.body,
            image: false,
        }
        HotelModel.create(userObj, (error, data) => {
            if (error) {
                res.send(error);
            } else {
                res.send(data);
            }
        })
    }
}

module.exports = createHotel;