//ACTION TYPES
import instance from 'config/axios/instance'
import { successAlert } from 'functions'
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
    SET_USER_DETAILS_REQUEST,
    SET_USER_DELETE_REQUEST,
    SET_USERS_REQUEST,
    SET_USER_ADD_REQUEST,
    SET_USER_PAGE_INDEX,
    SET_ACTIONS,
    SET_MODULES_ACTIONS,
    SET_ACCESS_GROUP_DETAILS_REQUEST,
    SET_ACCESS_GROUP_DETAILS
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
        let { data } = await instance.get(id ? `api/Modules/${id}` : `api/Modules`);
        dispatch({
            type: SET_MODULES,
            payload: data
        })

    } catch (error) {
        console.log("err", error)
    }
}




export const getUsers = ({ users_per_page, users_page_index, search_text, search_option, sort_name, sort_type }) => async dispatch => {
    try {
        dispatch({
            type: SET_USERS_REQUEST,
            payload: true
        })
        // let { data } = await instance.get(`api/UserProfile/Paging?PageIndex=${users_page_index}&PageSize=${users_per_page}&SearchText=${search_text}&SearchOption=${search_option}&SortType=${sort_type}&SortName=${sort_name}`);
        let { data } = await instance.get(`api/UserProfile`);
        dispatch({
            type: SET_USERS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: SET_USERS_REQUEST,
            payload: false
        })
        console.log("err", error)
    }
}



export const getUserDetails = (id) => async dispatch => {
    try {
        dispatch({ type: SET_USER_DETAILS_REQUEST, payload: true });
        let { data } = await instance.get(`api/UserProfile/${id}`);
        setTimeout(() => {
            dispatch({
                type: SET_USER_DETAILS,
                payload: data[0] || null
            })
        }, 500);
    } catch (error) {
        dispatch({ type: SET_USER_DETAILS_REQUEST, payload: false });
        console.log("err", error)
    }
}



export const deleteUser = (id) => async dispatch => {
    try {
        dispatch({ type: SET_USER_DELETE_REQUEST, payload: true });
        let response = await instance.delete(`api/UserProfile/Del?Id=${id}`);
        dispatch({
            type: SET_USER_DELETE_REQUEST,
            payload: response?.data || "Success"
        });
        successAlert({ title: "Success", text: response?.data || "Success" })
    } catch (error) {
        dispatch({ type: SET_USER_DELETE_REQUEST, payload: false })
        console.log("err", error)
    }
}

export const addUser = (data) => async dispatch => {
    try {
        let payload = {
            "UserId": parseInt(data?.UserId) || "",
            "FirstName": data?.first_name || "",
            "LastName": data?.last_name || "",
            "MobileNo": data?.phone || "",
            "Email": data?.email || "",
            "Password": data?.password || "",
            "RoleId": data?.access_role.value || "",
            "AccessGroups": data?.access_group || [],
            "ImageModel": data?.selected_image || "",
            "Status": data?.status
        };
        dispatch({ type: SET_USER_ADD_REQUEST, payload: true });
        let response = await instance({
            method: data.UserId ? "put" : "post",
            url: `api/UserProfile`,
            data: payload,
            // headers: { cooljwt: Token },
        })
        successAlert({ title: "Success", text: response?.data || "Success" })
    } catch (error) {
        dispatch({ type: SET_USER_ADD_REQUEST, payload: false });
        console.log("err", error)
    }
}


export const setUserPage = (pageIndex) => async dispatch => {
    dispatch({ type: SET_USER_PAGE_INDEX, payload: pageIndex });
}



export const getActions = () => async dispatch => {
    let response = await instance.get(`api/Actions`);
    dispatch({
        type: SET_ACTIONS,
        payload: response?.data || []
    });
}


export const getModulesActions = () => async dispatch => {
    let response = await instance.get(`api/ModuleActions`);
    dispatch({
        type: SET_MODULES_ACTIONS,
        payload: response?.data || []
    });
}




export const getAccessGroupDetails = (id) => async dispatch => {
    try {
        dispatch({ type: SET_ACCESS_GROUP_DETAILS_REQUEST, payload: true });
        let actions = await instance.get(`api/AccessGroupModuleActions/${id}`);
        let modules = await instance.get(`api/Modules/${id}`);
        let group_details = await instance.get(`/api/AccessGroups/${id}`);


        setTimeout(() => {
            dispatch({
                type: SET_ACCESS_GROUP_DETAILS,
                payload: { actions: actions.data, modules: modules.data, group_details:group_details.data[0] } || null
            });
        }, 500);

    } catch (error) {
        dispatch({ type: SET_ACCESS_GROUP_DETAILS_REQUEST, payload: false });
        console.log("err", error)
    }
}
