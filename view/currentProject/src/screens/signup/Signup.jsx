import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signupAction } from "../../store/action"
import loader from "../../images/Rolling.gif";
import "../component.css";

const Signup = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { loading, data, error, response } = useSelector((store) => store.signupReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (data != false) {
            navigate("/login", {replace: true});
            alert("Signup Successfull");
        }
        if (error != false) {
            alert("Signup Unsuccessfull");
        }
        if (response != false) {
            alert("User already exist");
        }
    }, [error, data, response]);
    const signupForm = (e) => {
        e.preventDefault();
        const username = `${fname} ${lname}`;
        dispatch(signupAction({ username, number, email, password }));
        setFname("");
        setLname("");
        setNumber("");
        setEmail("");
        setPassword("");
    }
    return (
        <div className='mainDiv'>
            {loading ?
                <img src={loader} style={{ width: "70px", height: "70px", }} /> :
                <div className="container">
                    <div className="subContainer">
                        <h1>Sign Up</h1>
                    </div>
                    <form onSubmit={(e) => signupForm(e)}>
                        <div className='username'>
                            <input type="text"
                                value={fname}
                                placeholder="First Name"
                                className='credentialField'
                                autoFocus
                                required
                                onChange={(e) => setFname(e.target.value)} />
                            <input type="text"
                                value={lname}
                                placeholder="Last Name"
                                style={{ marginLeft: "7px" }}
                                className='credentialField'
                                required
                                onChange={(e) => setLname(e.target.value)} />
                        </div>
                        <input type="tel"
                            value={number}
                            placeholder="Phone Number"
                            className='credentialField'
                            required
                            pattern="03[0-9]{2}(?!1234567)(?!1111111)(?!7654321)[0-9]{7}"
                            onChange={(e) => setNumber(e.target.value)} />
                        <input type="email"
                            value={email}
                            placeholder="Email Address"
                            className='credentialField'
                            required
                            onChange={(e) => setEmail(e.target.value)} />
                        <input type="password"
                            value={password}
                            placeholder="Password"
                            className='credentialField'
                            required
                            pattern=".{8,}"
                            onChange={(e) => {
                                setPassword(e.target.value)
                                e.target.oninvalid = (event) => {
                                    event.target.setCustomValidity("Password must contain atleast 8 characters");
                                }
                            }} />
                        <input type="submit" value="Sign Up"
                            className='btn' />
                    </form>
                </div>
            }
        </div>
    )
}

export default Signup
