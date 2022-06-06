import {

    CHANGE_HANDLER_NOTIFICATIONS,
    //Get
    GET_NOTIFICATIONS,
    //Request
    GET_REQUEST_NOTIFICATIONS,
    //Handle Change
    SET_INPUT_VALUES_NOTIFICATIONS_SCREEN
    
} from '../../types/notifications';

const initialState = {
    notifications: {
        list: [],
        records_per_page: 10,
        page_index: 1,
        count: 0,
        loading: false
    },


    search_options: [
        {
            label: "Name",
            value: "name",
        },
        {
            label: "POC",
            value: "pocname",
        },
        {
            label: "Mobile",
            value: "contactnumber",
        },
        {
            label: "Address",
            value: "Garageaddress"
        }
    ],


    search_option: "",
    search_text: "",
    sort_type: "asc",
    sort_name: "",



};


const notificationsScreenReducer = (state = initialState, action) => {
    switch (action.type) {


        case CHANGE_HANDLER_NOTIFICATIONS: {
            let { module, key, val } = action.payload;
            return {
                ...state,
                [module]:
                {
                    ...state[module],
                    [key]: val,
                }
            }
        }
            break;




        case GET_REQUEST_NOTIFICATIONS: {
            let { module, bool, list } = action.payload;
            return {
                ...state,
                [module]:
                {
                    ...state[module],
                    loading: bool,
                    list
                }
            }
        }
            break;

        case GET_NOTIFICATIONS: {
            const { ModelProvider, TotalRecord } = action.payload;
            return {
                ...state,
                notifications:
                {
                    ...state.notifications,
                    // list: ModelProvider || [],
                    // count: TotalRecord || 0,
                    // loading: false
                }
            }
        }
            break;


        case SET_INPUT_VALUES_NOTIFICATIONS_SCREEN: {
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

export default notificationsScreenReducer;
