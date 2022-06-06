//ACTION TYPES
import instance from 'config/axios/instance';
import { successAlert } from 'functions';
import {

    CHANGE_HANDLER_NOTIFICATIONS,
    //Get
    GET_NOTIFICATIONS,
    //Request
    GET_REQUEST_NOTIFICATIONS,
    //Handle Change
    SET_INPUT_VALUES_NOTIFICATIONS_SCREEN
} from '../../types/notifications';




export const changeHandlerNotifications = ({module: module, key, val}) => async dispatch => {
    dispatch({ type: CHANGE_HANDLER_NOTIFICATIONS, payload: {module: module, key, val} });
}




// Root Getters
export const getNotifications = ({ records_per_page, page_index, search_text, search_option, sort_name, sort_type }) => async dispatch => {
    try {
        search_option = search_text.length < 3 ?  "" : search_option;
        dispatch({ type: GET_REQUEST_NOTIFICATIONS, payload: { module: "notifications", bool: true, list: [] } });
        let { data } = await instance.get(`/api/Notifications?PageIndex=${page_index}&PageSize=${records_per_page}&SearchText=${search_text}&SearchOption=${search_option}&SortType=${sort_type}&SortName=${sort_name}`);
        dispatch({
            type: GET_NOTIFICATIONS,
            payload: data
        });
    } catch (error) {
        dispatch({ type: GET_REQUEST_NOTIFICATIONS, payload: { module: "notifications", bool: false, list: [] } });
        console.log(error);
    }
}




//handle Change

export const handleNotificationsInputValue = ({ name, value, compnnt }) => dispatch => {

    try {
        dispatch({
            type: SET_INPUT_VALUES_NOTIFICATIONS_SCREEN,
            payload: { name, value }
        })

    }
    catch (error) {
        console.log("err", error)
    }
}
