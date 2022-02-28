
import { REGISTER_USER } from '../../types/types'
import { SET_LOGIN_VALUES, SET_LOGOUT, SET_AUTH } from 'store/types/auth'
import instance from 'config/axios/instance'





// login User 
export const setLoginValues = (name, value) => async dispatch => {
    dispatch({
        type: SET_LOGIN_VALUES,
        payload: { name, value }
    });
}

// Register User 
export const RegisterUser = (name, value) => async dispatch => {
    try {
        dispatch({
            type: REGISTER_USER,
            payload: { name, value }
        })
    }
    catch (err) {

    }
}

// Login User 


export const loginUser = (payload) => async dispatch => {
    try {
        let _payload = {
            "UserName": payload.user_name,
            "Password": payload.password
        }

        let { data } = await instance.post('/api/Token', _payload);
        
        if (data) {
            dispatch({
                type: SET_AUTH,
                payload: data
            })
        }

    }
    catch (err) {

    }
}


export const handleLogout  = () => async dispatch => {
    try {
        dispatch({
            type: SET_LOGOUT,
            payload: {}
        })
    }
    catch (err) {

    }

}


