//ACTION TYPES
import instance from 'config/axios/instance'
import {
    CHANGE_TAB,
    SET_INPUT_VALUES_USER_SCREEN,
    CLEAR_INPUT_VALUES_USER_SCREEN,
    SET_INPUT_VALUES_ACCESS_GROUP_SCREEN,
    SET_ROLES,
    SET_ACCESS_GROUPS,
    SET_MODULES,
    SET_USERS,
    SET_USER_DETAILS,
    SET_USER_DETAILS_REQUEST
} from '../../types/users'


export const changeTab = (activeTab) => async dispatch => {
    try {
        dispatch({
            type: CHANGE_TAB,
            payload: activeTab
        })
    }
    catch (error) {
        console.log("err", error)
    }
}



export const handleInputValue = ({ name, value, compnnt }) => dispatch => {

    try {
        dispatch({
            type: compnnt === "user" ? SET_INPUT_VALUES_USER_SCREEN : SET_INPUT_VALUES_ACCESS_GROUP_SCREEN,
            payload: { name, value }
        })

    }
    catch (error) {
        console.log("err", error)
    }
}


export const clearInputValues = () => dispatch => {
    try {
        dispatch({
            type: CLEAR_INPUT_VALUES_USER_SCREEN,
            payload: null
        })
    } catch (error) {
        console.log("err", error)
    }
}




export const getRoles = () => async dispatch => {
    try {

        let { data } = await instance.get('api/Roles');

        dispatch({
            type: SET_ROLES,
            payload: data
        })
    } catch (error) {
        console.log("err", error)
    }
}




export const getAccessRoles = () => async dispatch => {
    try {

        let { data } = await instance.get('api/AccessGroups');

        dispatch({
            type: SET_ACCESS_GROUPS,
            payload: data
        })

    } catch (error) {
        console.log("err", error)
    }
}


export const getModules = (id) => async dispatch => {
    try {
        //Id === Access Group ID
        let { data } =  await instance.get(id ?  `api/Modules/${id}` : `api/Modules`);  
        dispatch({
            type: SET_MODULES,
            payload: data
        })

    } catch (error) {
        console.log("err", error)
    }
}




export const getUsers = () => async dispatch => {
    try{
    let { data } =  await instance.get(`api/UserProfile`);  
        dispatch({
            type: SET_USERS,
            payload: data
        })
    } catch (error) {
        console.log("err", error)
    }
}



export const getUserDetails = (id) => async dispatch => {
    try{
    dispatch({type: SET_USER_DETAILS_REQUEST});
    let { data } =  await instance.get(`api/UserProfile/${id}`);  
        dispatch({
            type: SET_USER_DETAILS,
            payload: data[0] || null
        })
    } catch (error) {
        console.log("err", error)
    }
}




