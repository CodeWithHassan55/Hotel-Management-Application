import React, { useEffect, useRef, useState } from 'react'
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { loginAction } from "../../store/action";
import loader from "../../images/Rolling.gif";
import "../component.css";

const Login = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const obj = localStorage.getItem("user");
        const data = JSON.parse(obj);
        if (obj) {
            if (data.role === "admin") {
                return navigate("/AdminPanel");
            } else {
                if (data.status === "Active") {
                    navigate("/Dashboard");
                } else {
                    alert("User Is Blocked");
                }
            }
        }
    }, []);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [eye, setEye] = useState(false);
    const inputType = useRef();
    const dispatch = useDispatch();
    const { data, loading, error, response } = useSelector((store) => store.loginReducer);
    const loginForm = (e) => {
        e.preventDefault();
        dispatch(loginAction({ email, password }));
        setEmail("");
        setPassword("");
    }
    useEffect(() => {
        if (data != false) {
            if (data.role === "admin") {
                localStorage.setItem("user", JSON.stringify(data));
                navigate("/", { replace: true });
                alert("Login Successfull");
            } else {
                if (data.status === "Active") {
                    localStorage.setItem("user", JSON.stringify(data));
                    navigate("/", { replace: true });
                    alert("Login Successfull");
                } else {
                    alert("User Is Blocked");
                }
            }
        }
        if (error != false) {
            alert(error);
        }
        if (response != false) {
            alert(response);
        }
    }, [data, response, error]);
    return (
        <div className='mainDiv'>
            {loading ?
                <img src={loader} style={{ width: "70px", height: "70px", }} /> :
                <div className="container">
                    <div className="subContainer">
                        <h1>Log In</h1>
                    </div>
                    <form onSubmit={(e) => loginForm(e)}>
                        <input type="email"
                            placeholder='Email Address'
                            className='credentialField'
                            autoFocus
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)} />
                        <div className="showPass">
                            <input type="password"
                                placeholder='Password'
                                className='credentialField'
                                ref={inputType}
                                required
                                value={password}
                                pattern=".{8,}"
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                    e.target.oninvalid = (event) => {
                                        event.target.setCustomValidity("Password must contain atleast 8 characters");
                                    }
                                }} />
                            <span onClick={() => {
                                setEye(!eye);
                                inputType.current.type === "text" ? inputType.current.type = "password" : inputType.current.type = "text"
                            }} >
                                {eye === true ? <IoEyeSharp /> : <IoEyeOffSharp />}
                            </span>
                        </div>
                        <input type="submit" value="Log In"
                            className='btn' />
                        <NavLink to="/Signup" className="link">Create Account</NavLink>
                    </form>
                </div>
            }
        </div>
    )
}

export default Login
