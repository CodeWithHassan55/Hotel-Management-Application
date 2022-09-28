import actionTypes from "../constants";

const INITIAL_STATE = {
    loading: false,
    error: false,
    data: false,
    response: false,
}

const loginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.LOGINLOADING:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.USERLOGINDATA:
            return {
                ...state,
                data: action.payload,
                loading: false,
            }
        case actionTypes.USERLOGINRESPONSE:
            return {
                ...state,
                response: action.payload,
                loading: false,
            }
        case actionTypes.USERLOGINERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        case actionTypes.LOGINRESET:
            return {
                error: false,
                data: false,
                response: false,
                loading: false,
            }
        default:
            return state;
    }
}

export default loginReducer