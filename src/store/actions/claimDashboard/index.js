import instance from "config/axios/instance";
import { SweetAlert, successAlert } from "functions";
import {
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