import { GET_PROVIDER_SERVICES_REQUEST, GET_PROVIDER_SERVICES, SET_SERVICE_PROIVDER_GETTERS, SET_SERVICE_PROIVDER_VALUES } from "store/types/providers";

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


    service_types:[],
    services:[],
    makes:[],
    models:[],
    values:{
        service_code:"",
        service_type:"",
        service:"",
        make:{ label: "All Makes", value: 0 },
        model:{ label: "All Models", value: 0 },
        from:"",
        to:"",
        unit_cost:0,
        discount:0,
        remarks:""

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
                list:action.payload
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

        default:
            return { ...state };
    }
}

export default providerServicesScreenReducer;
