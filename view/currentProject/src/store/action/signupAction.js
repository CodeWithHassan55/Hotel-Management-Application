import axios from "axios";
import baseURI from "../../core";
import actionTypes from "../constants";

const Signup = (data) => {
    return (async (dispatch) => {
        dispatch({
            type: actionTypes.SIGNUPLOADING,
        })
        await axios
            .post(`${baseURI}signup`, data)
            .then((res) => {
                const msg = res.data.message;
                if (msg === "Signup Successfull") {
                    dispatch({
                        type: actionTypes.USERSIGNUPDATA,
                        payload: res.data.message,
                    })
                }
                if (msg === "User already exist") {
                    dispatch({
                        type: actionTypes.USERSIGNUPRESPONSE,
                        payload: res.data.message,
                    })
                }
            })
            .catch((err) => {
                dispatch({
                    type: actionTypes.USERSIGNUPERROR,
                    payload: "Signup Unsuccessfull",
                })
            })
        dispatch({
            type: actionTypes.SIGNUPRESET,
        })
    })
}

export default Signup;