import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import baseURI from '../../core';
import style from "./bookingform.module.css"

const BookingForm = () => {
    const [name, setName] = useState("");
    const [cnic, setCnic] = useState("");
    const [number, setNumber] = useState("");
    const [days, setDays] = useState("");
    const [person, setPerson] = useState("");
    const [bank, setBank] = useState("");
    const [cardNo, setCardNo] = useState("");
    const [cardPin, setCardPin] = useState("");
    const [expiry, setExpiry] = useState("");
    const [booking, setBooking] = useState(false);
    const [data, setData] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const hotel = localStorage.getItem("hotel");
        if (!hotel) {
            navigate("/");
        }
    }, []);
    const book = (e) => {
        e.preventDefault();
        const hotel = localStorage.getItem("hotel");
        const user = localStorage.getItem("user");
        const id = JSON.parse(user);
        setData({
            name,
            cnic,
            number,
            days,
            person,
            hotel,
            id: id._id,
        })
        setName("");
        setCnic("");
        setNumber("");
        setDays("");
        setPerson("")
        setBooking(true);
    }
    const payment = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${baseURI}bookHotel`, {
                ...data,
                bank,
                cardNo,
                cardPin,
                expiry,
            })
            alert("Form Submitted Successfully");
            navigate("/Dashboard", {replace: true});
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className={style.mainDiv}>
            <div className={style.container}>
                <div className={style.subContainer}>
                    <h1>{booking ? "Payment Form" : "Booking Form"}</h1>
                </div>
                {
                    booking ?
                        <form onSubmit={(e) => payment(e)}>
                            <input type="text"
                                placeholder='Bank Name'
                                className={style.credentialField}
                                autoComplete='off'
                                autoFocus
                                value={bank}
                                required
                                onChange={(e) => setBank(e.target.value)} />
                            <input type="text"
                                placeholder='Credit Card Number'
                                className={style.credentialField}
                                autoComplete='off'
                                value={cardNo}
                                required
                                onChange={(e) => setCardNo(e.target.value)} />
                            <input type="text"
                                placeholder='Credit Card Pin Number'
                                className={style.credentialField}
                                autoComplete='off'
                                value={cardPin}
                                pattern=".{4,}"
                                required
                                onChange={(e) => {
                                    setCardPin(e.target.value)
                                    e.target.oninvalid = (event) => {
                                        event.target.setCustomValidity("Card Code contains only 4 digits");
                                    }
                                }} />
                            <input type="text"
                                placeholder='Expiry Date'
                                className={style.credentialField}
                                autoComplete='off'
                                value={expiry}
                                required
                                onChange={(e) => setExpiry(e.target.value)} />
                            <input type="submit" value="Submit" className={style.btn} />
                        </form> :
                        <form onSubmit={(e) => book(e)}>
                            <input type="text"
                                placeholder='Username'
                                className={style.credentialField}
                                autoComplete='off'
                                autoFocus
                                value={name}
                                required
                                onChange={(e) => setName(e.target.value)} />
                            <input type="text"
                                placeholder='Enter Your CNIC Number'
                                className={style.credentialField}
                                autoComplete='off'
                                value={cnic}
                                required
                                onChange={(e) => setCnic(e.target.value)} />
                            <input type="tel"
                                placeholder='Phone Number'
                                className={style.credentialField}
                                autoComplete='off'
                                value={number}
                                required
                                onChange={(e) => setNumber(e.target.value)} />
                            <input type="number"
                                placeholder='Number of Days You stay'
                                className={style.credentialField}
                                autoComplete='off'
                                value={days}
                                required
                                onChange={(e) => setDays(e.target.value)} />
                            <input type="number"
                                placeholder='Number of Persons'
                                className={style.credentialField}
                                autoComplete='off'
                                value={person}
                                required
                                onChange={(e) => setPerson(e.target.value)} />
                            <input type="submit" value="Next" className={style.btn} />
                        </form>
                }
            </div>
        </div>
    )
}

export default BookingForm
