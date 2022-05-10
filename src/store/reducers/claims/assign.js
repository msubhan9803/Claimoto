import {
    //Request
    GET_ASSIGN_PROVIDER_REQUEST,
    //Handle Change
    SET_INPUT_VALUES_ASSIGN_PROVIDER_SCREEN,

    CHANGE_HANDLER_ASSIGN_PROVIDER,
    //Get Providers
    GET_ASSIGN_PROVIDER,

    GET_ASSIGN_PROVIDER_BRANCH,

    GET_ASSIGN_PROVIDER_BRANCH_REQUEST,

    
} from '../../types/claims';


const initialState = {

    record: {
        list: [],
        records_per_page: 10,
        page_index: 1,
        count: 0,
        loading: false
    },

    record_branch: {
        list: [],
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


const assignProviderScreenReducer = (state = initialState, action) => {
    switch (action.type) {

        case CHANGE_HANDLER_ASSIGN_PROVIDER: {
            let { key, val } = action.payload;
            return {
                ...state,
                record:
                {
                    ...state.record,
                    [key]: val,
                }
            }
        }
            break;




        case GET_ASSIGN_PROVIDER_REQUEST: {
            let { bool, list } = action.payload;
            return {
                ...state,
                record:
                {
                    ...state.record,
                    loading: bool,
                    list
                }
            }
        }
            break;

        case GET_ASSIGN_PROVIDER: {
            const { AgencyGarage, Count } = action.payload;
            return {
                ...state,
                record:
                {
                    ...state.record,
                    list: AgencyGarage || [],
                    count: Count || 0,
                    loading: false
                }
            }
        }
            break;

        case GET_ASSIGN_PROVIDER_BRANCH_REQUEST: {
            let { bool, list } = action.payload;
            return {
                ...state,
                record_branch:
                {
                    ...state.record_branch,
                    loading: bool,
                    list
                }
            }
        }
            break;

        case GET_ASSIGN_PROVIDER_BRANCH: {
            return {
                ...state,
                record_branch:
                {
                    ...state.record_branch,
                    list: action?.payload || [],
                    loading: false
                }
            }
        }
            break;


        case SET_INPUT_VALUES_ASSIGN_PROVIDER_SCREEN: {
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

export default assignProviderScreenReducer;
