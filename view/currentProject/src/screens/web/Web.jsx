import React, { useEffect, useState } from 'react'
import ResponsiveAppBar from '../../components/Navbar2'
import { BsBook } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi"
import axios from "axios"
import style from "./web.module.css"
import baseURI from "../../core"
import { useNavigate } from 'react-router-dom'
import AppBar2 from "../../components/Navbar"

const Web = () => {
    const navigate = useNavigate();
    const [hotels, setHotels] = useState([]);
    const [navbar, setNavbar] = useState(false);
    const [roleNav, setRoleNav] = useState(false);
    const [priceFilter, setPriceFilter] = useState({
        type: "price",
        less: false,
        greater: false,
    });
    const [roomFilter, setRoomFilter] = useState({
        type: "rooms",
        less: false,
        greater: false,
    });
    useEffect(async () => {
        try {
            const res = await axios.get(`${baseURI}getHotels`)
            setHotels([...res.data]);
        }
        catch (err) {
            console.log(err);
        }
    }, [])
    const obj = localStorage.getItem("user");
    useEffect(() => {
        if (!obj) {
            setNavbar(false);
        } else {
            const data = JSON.parse(obj);
            const { username, role } = data;
            setNavbar(username);
            setRoleNav(role);
        }
    }, [])
    useEffect(async () => {
        if (priceFilter.less !== false) {
            try {
                const response = await axios.post(`${baseURI}filterHotels`, priceFilter);
                console.log(priceFilter);
                console.log(response);
                setHotels([...response.data]);
            }
            catch (error) {
                console.log(error);
            }
        }
    }, [priceFilter]);
    useEffect(async () => {
        if (roomFilter.less != false) {
            try {
                console.log(roomFilter);
                const response = await axios.post(`${baseURI}filterHotels`, roomFilter);
                console.log(response);
                setHotels([...response.data]);
            }
            catch (error) {
                console.log(error);
            }
        }
    }, [roomFilter]);
    const signup = () => {
        navigate("/Signup", {replace: true})
    }
    const login = () => {
        navigate("/login", {replace: true});
    }
    const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("hotel");
        navigate("/", {replace: true});
        alert("Logout Successfull");
        setNavbar(false);
    }
    const bookRoom = async (ind) => {
        if (navbar === false) {
            alert("login first");
            navigate("/login");
        } else {
            localStorage.setItem("hotel", hotels[ind].name);
            navigate("/booking");
        }
    }
    const details = () => {
        navigate("/Dashboard");
    }
    const adminPanel = () => {
        navigate("/AdminPanel");
    }
    const subAdmin = () => {
        navigate("/subAdmin");
    }
    return (
        <div className={style.mainDiv}>
            {
                navbar === false ?
                    <ResponsiveAppBar onclick={signup} onclick2={login} /> :
                    <AppBar2 username={navbar} onclick={logout} onclick2={roleNav === "user" ? details : roleNav === "admin" ? adminPanel : subAdmin} name={roleNav === "user" ? "Dashboard" : "Admin Panel"} />
            }
            <div className={style.bgImg}>
                <h1>Arrive as guests, leave as friends</h1>
            </div>
            <div className={style.bigContainer}>
                <div className={style.container}>
                    <div className={style.filters}>
                        <h3>Filter by:</h3>
                        <div>
                            <h4 className={style.priceFilter}>Price:</h4>
                            <div>
                                <input type="radio" name="price" onChange={() => setPriceFilter({
                                    type: "price",
                                    less: "500",
                                    greater: "10,000",
                                })} checked={priceFilter.less === "500"} value={priceFilter} />
                                <label> 500 - 10,000</label>
                            </div>
                            <div>
                                <input type="radio" name="price" onChange={() => setPriceFilter({
                                    type: "price",
                                    less: "10,000",
                                    greater: "15,000",
                                })} checked={priceFilter.less === "10,000"} value={priceFilter} />
                                <label> 10,000 - 15,000</label>
                            </div>
                            <div>
                                <input type="radio" name="price" onChange={() => setPriceFilter({
                                    type: "price",
                                    less: "15,000",
                                    greater: "20,000",
                                })} checked={priceFilter.less === "15,000"} value={priceFilter} />
                                <label> 15,000 - 20,000</label>
                            </div>
                            <div>
                                <input type="radio" name="price" onChange={() => setPriceFilter({
                                    type: "price",
                                    less: "20,000",
                                    greater: "25,000",
                                })} checked={priceFilter.less === "20,000"} value={priceFilter} />
                                <label> 20,000 - 25,000</label>
                            </div>
                            <div>
                                <input type="radio" name="price" onChange={() => setPriceFilter({
                                    type: "price",
                                    less: "25,000",
                                    greater: "30,000",
                                })} checked={priceFilter.less === "25,000"} value={priceFilter} />
                                <label> 25,000 - 30,000</label>
                            </div>
                        </div>
                        <div>
                            <h4>No. of Rooms:</h4>
                            <div>
                                <input type="radio" name="rooms" value={roomFilter} checked={roomFilter.less === "1"} onChange={() => setRoomFilter({
                                    type: "rooms",
                                    less: "1",
                                    greater: "5",
                                })} />
                                <label> 1 - 5</label>
                            </div>
                            <div>
                                <input type="radio" name="rooms" value={roomFilter} checked={roomFilter.less === "5"} onChange={() => setRoomFilter({
                                    type: "rooms",
                                    less: "5",
                                    greater: "10",
                                })} />
                                <label> 5 - 10</label>
                            </div>
                            <div>
                                <input type="radio" name="rooms" value={roomFilter} checked={roomFilter.less === "10"} onChange={() => setRoomFilter({
                                    type: "rooms",
                                    less: "10",
                                    greater: "15",
                                })} />
                                <label> 10 - 15</label>
                            </div>
                            <div>
                                <input type="radio" name="rooms" value={roomFilter} checked={roomFilter.less === "15"} onChange={() => setRoomFilter({
                                    type: "rooms",
                                    less: "15",
                                    greater: "20",
                                })} />
                                <label> 15 - 20</label>
                            </div>
                            <div>
                                <input type="radio" name="rooms" value={roomFilter} checked={roomFilter.less === "20"} onChange={() => setRoomFilter({
                                    type: "rooms",
                                    less: "20",
                                    greater: "25",
                                })} />
                                <label> 20 - 25</label>
                            </div>
                        </div>
                    </div>
                    <div className={style.hotels} id="Hotels">
                        <h3>{hotels.length} Hotels in Karachi</h3>
                        {
                            hotels.map((ele, ind) => {
                                return <div className={style.card} key={ind}>
                                    {
                                        ele.image === "null" ?
                                            <div style={{ backgroundColor: "black", color: "white", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "5px", width: "335px", height: "100%", }}>
                                                <h4>Image of Hotel</h4>
                                            </div> :
                                            <img src={ele.image} style={{ borderRadius: "5px", width: "300px", height: "100%", }} />
                                    }
                                    <div className={style.cardBody}>
                                        <h3>{ele.name}</h3>
                                        <div style={{ marginTop: "8px", display: "flex", justifyContent: "left", alignItems: "center", }}>
                                            <HiLocationMarker style={{ fontSize: "18px", }} />
                                            <h4 style={{ marginLeft: "3px", fontSize: "14.8px", }}>{ele.location}</h4>
                                        </div>
                                        <h5 style={{ marginTop: "14px", fontSize: "14px", width: "70%", }}>
                                            {ele.description}
                                        </h5>
                                        <h4 style={{
                                            position: "absolute",
                                            zIndex: "1",
                                            bottom: "1%",
                                            left: ".5%",
                                        }}>Rooms Available: {ele.rooms}</h4>
                                        <div className={style.price}>
                                            <h5>Price from</h5>
                                            <h3>PKR {ele.price}</h3>
                                            <h5>per night</h5>
                                            <button onClick={() => bookRoom(ind)}>Check Availability</button>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={style.footer}>
                <div className={style.footerContent}>
                    <div style={{ width: "257px", }}>
                        <BsBook style={{
                            marginRight: "15px",
                            fontSize: "50px",
                            fontWeight: "bold",
                        }} />
                        <h1 style={{ fontSize: "45px", width: "192px", }}>Book Me</h1>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        width: "68%",
                        marginLeft: "30px",
                    }}>
                        <h4 style={{
                            marginBottom: "10px",
                        }}>
                            Terms of Use | Privacy and Cookies Statement | Cookie consentSite Map | How the site works
                        </h4>
                        <h5>
                            This is the version of our website addressed to speakers of English in the United States.
                            If you are a resident of another country or region, please select the appropriate version of
                            Bookme for your country or region in the drop-down menu.
                        </h5>
                    </div>
                </div>
                <div className={style.copyright}>
                    <h5 style={{
                        letterSpacing: "1px",
                        fontWeight: "400",
                    }}>
                        Copyright © 2022 Bookme™. All rights reserved.
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default Web