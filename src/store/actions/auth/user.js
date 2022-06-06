
import { REGISTER_USER } from '../../types/types'
import { SET_LOGIN_VALUES, SET_LOGOUT, SET_AUTH, SET_AUTH_VALUES, SET_LAYOUT } from 'store/types/auth'
import instance from 'config/axios/instance'
import DeviceUUID from 'config/Device/DeviceUUID';
import { ENVIRONMENT } from 'variables';





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

export const loadAuth = (payload) => async dispatch => {
    try {
        dispatch({ type: SET_AUTH_VALUES, payload: { loading_login: false } });
    } catch (err) {

    }
}



export const loginUser = (payload) => async dispatch => {
    try {
        dispatch({ type: SET_AUTH_VALUES, payload: { loading_login: true } });
        let _payload = {
            "UserName": payload.user_name,
            "Password": payload.password
        }

        let { data } = await instance.post('/api/Token', _payload);

        if (data) {
            dispatch({ type: SET_AUTH_VALUES, payload: { loading_login: false } });
            dispatch({
                type: SET_AUTH,
                payload: data?.JWT_Token || null
            })
        }

    }
    catch (err) {
        dispatch({ type: SET_AUTH_VALUES, payload: { loading_login: false } });
    }
}


export const handleLogout = () => async dispatch => {
    try {
        let uuid = new DeviceUUID().get();

        dispatch({
            type: SET_LOGOUT,
            payload: {}
        });
        if (ENVIRONMENT !== "DEVELOPMENT") {
            await instance.delete(`/api/Notifications?deviceId=${uuid}`);
        }

    }
    catch (err) {
        console.log(err);
    }

}


export const setFCMToken = (payload) => async dispatch => {
    try {
        let _payload = {
            "Device_Id": payload.device_id,
            "Device_Type": payload.device,
            "FCM_Token": payload.fcm_token,
        }

        let { data } = await instance.post('/api/Notifications', _payload);

        if (data) {

        }

    }
    catch (err) {
        console.log(err);
    }
}
