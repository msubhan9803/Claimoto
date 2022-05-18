import {
    SET_SCHEDULE_CALLS,
    GET_REQUEST_CALLS,
    SET_SCHEDULE_CALL_ROOT_VALUES
} from '../../types/schedule_calls';

const initialState = {

    calls: {
        list: [],
        records_per_page: 10,
        page_index: 1,
        count: 0,
        loading: false
    },
    
    search_options: [
        {
            label: "Name",
            value: "Name",
        },
        {
            label: "Amount",
            value: "amount",
        }
    ],


    search_option: "",
    search_text: "",
    sort_type: "asc",
    sort_name: "",



};


const scheduleCalls = (state = initialState, action) => {
    switch (action.type) {

        case GET_REQUEST_CALLS: {
            let { bool } = action.payload;
            return {
                ...state,
                calls:
                {
                    ...state.calls,
                    loading: bool,
                }
            }
        }
            break;

        case SET_SCHEDULE_CALLS: {
            const list = action.payload;
            return {
                ...state,
                calls:
                {
                    ...state.calls,
                    list: list || [],
                    count: list.length || 0,
                    loading: false
                }
            }
        }
            break;

        

        case SET_SCHEDULE_CALL_ROOT_VALUES: {
            const { name, value } = action.payload;
            return {
                ...state,
                [name]: value,
            }
        }
            break;


        default:
            return { ...state };
    }
}

export default scheduleCalls;
