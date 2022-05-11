

import { SET_RESET_PASSWORD_VALUES } from '../../types/auth'
import instance from 'config/axios/instance'
import jwtDecode from 'jwt-decode';





// Set Values 
export const setForgetPasswordValues = ({name, value}) => async dispatch => {
    dispatch({
        type: SET_RESET_PASSWORD_VALUES,
        payload: { name, value }
    });
}


export const sendResetPasswordEmail = (email, callBack) => async dispatch => {
    try {
        dispatch({
            type: SET_RESET_PASSWORD_VALUES,
            payload: { name: "loading", value: true }
        });      
        let url =  `${process.env.REACT_APP_SELF_URL}/new_password`;
        let { data } = await instance.get(`/api/ForgotPassword/SendEmail?Email=${email}&Url=${url}`);
        
        if (data) {
            dispatch({
                type: SET_RESET_PASSWORD_VALUES,
                payload: { name: "loading", value: false }
            });  
            callBack("/reset_password_email");
        }

    }
    catch (err) {
        dispatch({
            type: SET_RESET_PASSWORD_VALUES,
            payload: { name: "loading", value: false }
        });  
    }
}


export const setNewPassword = (payload, callBack) => async dispatch => {
    try {
        let {password, Code} = payload;
        dispatch({
            type: SET_RESET_PASSWORD_VALUES,
            payload: { name: "loading", value: true }
        });   
        
        let updatePasswordUser = {
            ...payload, ...user
        }

        let user = jwtDecode(payload.Code);
        let { data } = await instance.post(`/api/ForgotPassword/ResetPassword`, {updatePasswordUser});
        
        if (data) {
            dispatch({
                type: SET_RESET_PASSWORD_VALUES,
                payload: { name: "loading", value: false }
            });  
            callBack("/password_success");
        }

    }
    catch (err) {
        dispatch({
            type: SET_RESET_PASSWORD_VALUES,
            payload: { name: "loading", value: false }
        });  
    }
}