import { GET_PROVIDER_SERVICES_REQUEST, GET_PROVIDER_SERVICES } from "store/types/providers";

const initialState = {



    list: [],
    // records_per_page: 10,
    // page_index: 1,
    count: 0,
    loading: false,


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


const providerServicesScreenReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_PROVIDER_SERVICES_REQUEST: {
            return { ...state, ...action.payload }
        }
            break;

        case GET_PROVIDER_SERVICES: {
            return {
                ...state,
                list:action.payload
            }
        }
            break;


        default:
            return { ...state };
    }
}

export default providerServicesScreenReducer;
