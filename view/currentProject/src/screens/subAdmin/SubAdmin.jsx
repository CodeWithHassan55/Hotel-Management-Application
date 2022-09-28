import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import baseURI from '../../core';

const SubAdmin = () => {
    const [hotelInfo, setHotelInfo] = useState([]);
    const [nameInp, setNameInp] = useState("");
    const [address, setAddress] = useState("");
    const [descriptionInp, setDescriptionInp] = useState("");
    const [priceInp, setPriceInp] = useState("");
    const [roomsInp, setRoomsInp] = useState("");
    const [update, setUpdate] = useState({
        submit: false,
        edit: false,
    });
    const navigate = useNavigate();
    const obj = localStorage.getItem("user");
    const data = JSON.parse(obj);
    const { role, hotel } = data;
    useEffect(() => {
        if (obj) {
            if (role !== "subAdmin") {
                navigate("/", { replace: true });
            }
        }
    }, [])
    useEffect(async () => {
        if (obj) {
            try {
                const response = await axios.get(`${baseURI}getHotel/${hotel}`);
                setHotelInfo(response.data);
            } catch (error) {
                console.log(error);
            }
        }
    }, [])
    useEffect(async () => {
        if (update.submit === "submit") {
            try {
                let userObj = {}
                switch (update.edit) {
                    case "Name":
                        userObj = {
                            name: nameInp
                        }
                        setNameInp("");
                        break;
                    case "Address":
                        userObj = {
                            location: address
                        }
                        setAddress("");
                        break;
                    case "Description":
                        userObj = {
                            description: descriptionInp
                        }
                        setDescriptionInp("");
                        break;
                    case "Price":
                        userObj = {
                            price: priceInp
                        }
                        setPriceInp("");
                        break;
                    case "Rooms":
                        userObj = {
                            rooms: roomsInp
                        }
                        setRoomsInp("");
                        break;
                    default:
                        userObj = {};
                        break;
                }
                const response = await axios.put(`${baseURI}editHotel/${hotel}`, userObj);
                setHotelInfo(response.data)
                setUpdate({
                    submit: false,
                    edit: false,
                })
            } catch (error) {
                console.log(error);
            }
        }
    }, [update])
    const { name, location, price, description, rooms } = hotelInfo
    return (
        <div className='subAdmin'>
            <div className='contain2'>
                <h2>Admin Panel</h2>
                <table border="1px solid black" cellSpacing="0">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <td>
                                {
                                    update.edit === "Name" ?
                                        <input type="text"
                                            placeholder='Name'
                                            autoComplete='off'
                                            required
                                            className='credentialField'
                                            value={nameInp}
                                            onChange={(e) => setNameInp(e.target.value)} />
                                        :
                                        name
                                }
                            </td>
                            <td>
                                <button onClick={update.edit === "Name" ? () => setUpdate({ ...update, submit: "submit" }) : () => setUpdate({ ...update, edit: "Name" })}>Update</button>
                            </td>
                        </tr>
                        <tr>
                            <th>Address</th>
                            <td>
                                {
                                    update.edit === "Address" ?
                                        <input type="text"
                                            placeholder='Address'
                                            autoComplete="off"
                                            required
                                            className='credentialField'
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)} />
                                        :
                                        location
                                }
                            </td>
                            <td>
                                <button onClick={update.edit === "Address" ? () => setUpdate({ ...update, submit: "submit" }) : () => setUpdate({ ...update, edit: "Address" })}>Update</button>
                            </td>
                        </tr>
                        <tr>
                            <th>Description</th>
                            <td className="specialTd">
                                {
                                    update.edit === "Description" ?
                                        <input type="text"
                                            placeholder='Description'
                                            autoComplete="off"
                                            required
                                            className='credentialField'
                                            value={descriptionInp}
                                            onChange={(e) => setDescriptionInp(e.target.value)} />
                                        :
                                        description
                                }
                            </td>
                            <td>
                                <button onClick={update.edit === "Description" ? () => setUpdate({ ...update, submit: "submit" }) : () => setUpdate({ ...update, edit: "Description" })}>Update</button>
                            </td>
                        </tr>
                        <tr>
                            <th>Price</th>
                            <td>
                                {
                                    update.edit === "Price" ?
                                        <input type="text"
                                            placeholder='Price'
                                            autoComplete="off"
                                            required
                                            className='credentialField'
                                            value={priceInp}
                                            onChange={(e) => setPriceInp(e.target.value)} />
                                        :
                                        price
                                }
                            </td>
                            <td>
                                <button onClick={update.edit === "Price" ? () => setUpdate({ ...update, submit: "submit" }) : () => setUpdate({ ...update, edit: "Price" })}>Update</button>
                            </td>
                        </tr>
                        <tr>
                            <th>Rooms Available</th>
                            <td>
                                {
                                    update.edit === "Rooms" ?
                                        <input type="text"
                                            placeholder='Rooms Available'
                                            autoComplete="off"
                                            required
                                            className='credentialField'
                                            value={roomsInp}
                                            onChange={(e) => setRoomsInp(e.target.value)} />
                                        :
                                        rooms
                                }
                            </td>
                            <td>
                                <button onClick={update.edit === "Rooms" ? () => setUpdate({ ...update, submit: "submit" }) : () => setUpdate({ ...update, edit: "Rooms" })}>Update</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SubAdmin
