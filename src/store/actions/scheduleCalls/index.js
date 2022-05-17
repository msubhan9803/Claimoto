import instance from 'config/axios/instance';
import {
    SET_SCHEDULE_CALLS,
    GET_REQUEST_CALLS,
    SET_SCHEDULE_CALL_ROOT_VALUES
} from '../../types/schedule_calls';

export const getScheduleCalls = ({ records_per_page, page_index, search_option, search_text, sort_type, sort_name, }) => async dispatch => {

        try {
            dispatch({ type: GET_REQUEST_CALLS, payload: { bool: true } });
            let { data } = await instance.get(`/api/ScheduledCallsAndChat/ScheduledCalls`);
            dispatch({
                type: SET_SCHEDULE_CALLS,
                payload: data
            });
            dispatch({ type: GET_REQUEST_CALLS, payload: { bool: false } });

        }
        catch (error) {
            dispatch({ type: GET_REQUEST_CALLS, payload: { bool: false } });
            console.log("err", error)
        }
    }

