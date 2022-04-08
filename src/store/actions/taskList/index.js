import { SET_TASKS_BY_DND } from "store/types/tasks";

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