import { SET_TASKS_BY_DND, GET_MY_TASKS_REQUEST, GET_MY_TASKS, GET_PENDING_TASKS_REQUEST, GET_PENDING_TASKS, SET_CLAIM_STATUSES, CHANGE_ROOT_TASKS_SCREEN } from "store/types/tasks";
import instance from "config/axios/instance";

export const getStatusesOfClaim = (id) => async (dispatch) => {
    try {
        let { data } = await instance.get(`/api/Claims/ClaimStatus?Id=${id}`);
        dispatch({ type: SET_CLAIM_STATUSES, payload: data || [] });
    } catch (err) {
        console.log("err", err);
    }
};

export const syncTasksColumns = (state, screen) => async (dispatch) => {
    try {
        dispatch({
            type: SET_TASKS_BY_DND,
            payload: {state, screen}
        });
    } catch (err) {
        console.log("err", err);
    }
};


export const getMyTaskList = (id) => async dispatch => {
    try {
        dispatch({ type: GET_MY_TASKS_REQUEST, payload: { loading_list: true } });
        let { data } = await instance.get(`/api/MyTask/Claims?Id=${id}`);
        dispatch({ type: GET_MY_TASKS, payload: data || [] });
        dispatch({ type: GET_MY_TASKS_REQUEST, payload: { loading_list: false } });
    } catch (error) {
        dispatch({ type: GET_MY_TASKS_REQUEST, payload: { loading_list: false } });
        console.log(error);
    }
}


export const getPendingTaskList = (id) => async dispatch => {
    try {
        dispatch({ type: GET_PENDING_TASKS_REQUEST, payload: { loading_list: true } });
        let { data } = await instance.get(`/api/MyTask/PendingClaims?Id=${id}`);
        dispatch({ type: GET_PENDING_TASKS, payload: data || [] });
        dispatch({ type: GET_PENDING_TASKS_REQUEST, payload: { loading_list: false } });
    } catch (error) {
        dispatch({ type: GET_PENDING_TASKS_REQUEST, payload: { loading_list: false } });
        console.log(error);
    }
}


export const changeTasksRootValues = ({key, val }) => async dispatch => {
    dispatch({ type: CHANGE_ROOT_TASKS_SCREEN, payload: { key, val } });
}
