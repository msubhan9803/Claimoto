import { GET_PROVIDER_SERVICES_REQUEST,CLEAR_PROVIDER_SERVICES_STATE, GET_PROVIDER_SERVICE_DETAILS,  GET_PROVIDER_SERVICES, SET_SERVICE_PROIVDER_GETTERS, SET_SERVICE_PROIVDER_VALUES } from "store/types/providers";

const initialState = {



    list: [],
    // records_per_page: 10,
    // page_index: 1,
    count: 0,
    loading: false,
    list_loading:false,


    search_options: [
        {
            label: "Service Code",
            value: "PSC_Code",
        },
        {
            label: "Service Name",
            value: "Service",
        },
        {
            label: "Service Details",
            value: "PSC_Description",
        },
        {
            label: "Service Type",
            value: "ServiceTypeName"
        },

    ],


    search_option: "",
    search_text: "",
    sort_type: "asc",
    sort_name: "",


    service_types:[],
    services:[],
    makes:[],
    models:[],
    values:{
        service_code:"",
        service_type:"",
        service:"",
        remarks:"",
    },
    loading_action:false,
    success:false,
    error:false

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
                list:action.payload,
                list_loading:false,
                count:action.payload.length
            }
        }
            break;

        case SET_SERVICE_PROIVDER_GETTERS :{
            const {name, data} = action.payload;
            return {
                ...state,
                [name]:data
            }
        }

        break;

        case SET_SERVICE_PROIVDER_VALUES : {
            const {name, value} = action.payload;
            return {
                ...state,
                values:{
                    ...state.values,
                    [name]:value
                }
            }
        }

        case CLEAR_PROVIDER_SERVICES_STATE : {
            return {
                ...state,
                values:initialState.values
            }
        }
        break;

        case GET_PROVIDER_SERVICE_DETAILS : {
            const {PSC_Code, PSC_Description, ServiceId, ServiceTypeId, Service, ServiceTypeName } = action.payload;
            return {
                ...state,
                loading:false,
                values:{
                    ...state.values,
                    service_code:PSC_Code || "",
                    remarks:PSC_Description || "",
                    service_type:{label:ServiceTypeName, value:ServiceTypeId} || "",
                    service:{label:Service, value:ServiceId} || "",
                }
            }
        }
        break;
        default:
            return { ...state };
    }
}

export default providerServicesScreenReducer;
