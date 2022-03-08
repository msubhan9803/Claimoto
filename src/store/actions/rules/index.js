//ACTION TYPES
import instance from 'config/axios/instance';
import {
    CHANGE_HANDLER_RULES,
    CHANGE_TAB,
    //Request
    GET_REQUEST_RULES,
    //Handle Change
    SET_INPUT_VALUES_RULES_SCREEN,
    //GET
    GET_INITIAL,
    GET_AFTER
} from "store/types/rules";

export const getInitials = ({ records_per_page, page_index, search_text, search_option, sort_name, sort_type }) => async dispatch => {
    try {
        dispatch({ type: GET_REQUEST_RULES, payload: { modeule: "initials", bool: true, list: [] } });
        let { data } = await instance.get(`/api/Provider/Pagination?PageIndex=${page_index}&PageSize=${records_per_page}&SearchText=${search_text}&SearchOption=${search_option}&SortType=${sort_type}&SortName=${sort_name}`);
        dispatch({
            type: GET_INITIAL,
            payload: data
        });
    } catch (error) {
        dispatch({ type: GET_REQUEST_RULES, payload: { modeule: "initials", bool: false, list: [] } });
        console.log(error);
    }
}


export const getAfters = ({ records_per_page, page_index, search_text, search_option, sort_name, sort_type }) => async dispatch => {
    try {
        dispatch({ type: GET_REQUEST_RULES, payload: { modeule: "afters", bool: true, list: [] } });
        let { data } = await instance.get(`/api/Provider/Pagination?PageIndex=${page_index}&PageSize=${records_per_page}&SearchText=${search_text}&SearchOption=${search_option}&SortType=${sort_type}&SortName=${sort_name}`);
        dispatch({
            type: GET_AFTER,
            payload: data
        });
    } catch (error) {
        dispatch({ type: GET_REQUEST_RULES, payload: { modeule: "afters", bool: false, list: [] } });
        console.log(error);
    }
}


export const changeHandlerRule = ({ modeule, key, val }) => async dispatch => {
    dispatch({ type: CHANGE_HANDLER_RULES, payload: { modeule, key, val } });
}



//handle Change

export const handleRulesInputValue = ({ name, value, compnnt }) => dispatch => {

    try {
        dispatch({
            type: SET_INPUT_VALUES_RULES_SCREEN,
            payload: { name, value }
        })

    }
    catch (error) {
        console.log("err", error)
    }
}