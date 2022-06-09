import instance from "config/axios/instance";
import { SweetAlert, successAlert } from "functions";
import {
    SET_DASHBOARD_TASK_LIST,
    CHANGE_TAB
} from "store/types/claimDashboard";

export const ChangeTabHandler = (value) => async dispatch => {
    try {
        dispatch({
            type: CHANGE_TAB,
            payload: value
        });
    } catch (error) {
        console.log(error);
    }
}

// GET /api/MyTask/Claims
export const GetDashboardTaskList = (id) => async (dispatch) => {
    try {
        let res = await instance.get("api/MyTask/Claims?Id=" + id);
        console.log("res", res);
        dispatch({
            type: SET_DASHBOARD_TASK_LIST,
            payload: res.data,
        });
    } catch (err) {
        console.log("err", err);
    }
};