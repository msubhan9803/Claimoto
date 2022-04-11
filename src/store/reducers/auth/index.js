import { SET_LOGIN_VALUES, SET_LOGOUT , SET_AUTH, SET_AUTH_VALUES, SET_LAYOUT } from 'store/types/auth';
import { localStorageVarible } from 'variables';
import jwt_decode from "jwt-decode";



const initialState = {
    token: null,
    login_user: {
        values: {
            username: "",
            password: ""
        }
    },
    user: {
        name: "",
        email: "",
        password: ''
    },
    user_details: {

    },
    loading_login:false,
    layout: ""
};


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN_VALUES: {
            return {
                ...state,
                login_user: {
                    ...state.login_user,
                    [action.payload.name]: action.payload.value
                }
            }
        }
        break;
        case SET_AUTH: {
            localStorage.setItem(localStorageVarible, action.payload);
            let user_details = jwt_decode(action.payload);
            let permissions =  user_details?.UserPermissions || null;
            return { ...state, token: action.payload, user_details, permissions: JSON.parse(permissions) };
        }
        break;
        case SET_AUTH_VALUES:{
            return {
                ...state,
                ...action.payload
            }
        }
        break;
        case SET_LOGOUT: {
            localStorage.setItem(localStorageVarible, null);
            localStorage.clear();
            let user_details = null
            return { ...state, token: null, user_details };

        }
        case SET_LAYOUT: {
            return { ...state, layout: action.payload };
        }

        default:
            return { ...state };
    }
}

export default authReducer;
