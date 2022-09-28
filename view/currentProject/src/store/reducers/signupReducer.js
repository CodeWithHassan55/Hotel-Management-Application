import actionTypes from "../constants";

const INITIAL_STATE = {
    loading: false,
    response: false,
    error: false,
    data: false,
}

const signupReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.SIGNUPLOADING:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.USERSIGNUPDATA:
            return {
                ...state,
                data: action.payload,
                loading: false,
            }
        case actionTypes.USERSIGNUPRESPONSE:
            return {
                ...state,
                data: action.payload,
                loading: false,
            }
        case actionTypes.USERSIGNUPERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case actionTypes.SIGNUPRESET:
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

export default signupReducer;