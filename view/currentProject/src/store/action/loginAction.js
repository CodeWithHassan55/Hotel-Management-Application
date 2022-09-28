import axios from "axios";
import baseURI from "../../core";
import actionTypes from "../constants";

const Login = (data) => {
    return (async (dispatch) => {
        dispatch({
            type: actionTypes.LOGINLOADING,
        })
        await axios
            .post(`${baseURI}login`, data)
            .then((res) => {
                if (res.data.message === "Invalid Credentials") {
                    dispatch({
                        type: actionTypes.USERLOGINRESPONSE,
                        payload: res.data.message,
                    })
                }
                if (res.data._id) {
                    dispatch({
                        type: actionTypes.USERLOGINDATA,
                        payload: res.data,
                    })
                }
                if (res.data.message === "User not found") {
                    dispatch({
                        type: actionTypes.USERLOGINRESPONSE,
                        payload: res.data.message,
                    })
                }
            })
            .catch((err) => {
                dispatch({
                    type: actionTypes.USERLOGINERROR,
                    payload: err.data.message,
                })
            })
        dispatch({
            type: actionTypes.LOGINRESET,
        })
    })
}

export default Login;