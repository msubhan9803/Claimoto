import { GET_PROVIDER_SERVICES_REQUEST_PRICES,CLEAR_PROVIDER_SERVICES_STATE_PRICES, GET_PROVIDER_SERVICE_DETAILS_PRICES,  GET_PROVIDER_SERVICES_PRICES, SET_SERVICE_PROIVDER_GETTERS_PRICES, SET_SERVICE_PROIVDER_VALUES_PRICES } from "store/types/providers";

const initialState = {



    list: [],
    // records_per_page: 10,
    // page_index: 1,
    count: 0,
    loading: false,
    list_loading:false,


    search_options: [
        {
            label: "Make",
            value: "MakeName",
        },
        {
            label: "Model",
            value: "ModelName",
        },
        {
            label: "Year",
            value: "Year",
        },
        {
            label: "Unit Cost",
            value: "Price"
        },
        {
            label: "Discount",
            value: "Discount"
        },
        {
            label: "Start Date",
            value: "StartDate"
        },
        {
            label: "End Date",
            value: "EndDate"
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
        make:{ label: "All Makes", value: 0 },
        model:{ label: "All Models", value: 0 },
        from:"",
        to:"",
        unit_cost:0,
        discount:0,
        remarks:"",
        start_date:"",
        end_date:"",
        year_all:false,
        date_all:false
    },
    loading_action:false,
    success:false,
    error:false

};


const providerServicesPriceScreenReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_PROVIDER_SERVICES_REQUEST_PRICES: {
            return { ...state, ...action.payload }
        }
            break;

        case GET_PROVIDER_SERVICES_PRICES: {
            return {
                ...state,
                list:action.payload,
                list_loading:false,
                count:action.payload.length
            }
        }
            break;

        case SET_SERVICE_PROIVDER_GETTERS_PRICES :{
            const {name, data} = action.payload;
            return {
                ...state,
                [name]:data
            }
        }

        break;

        case SET_SERVICE_PROIVDER_VALUES_PRICES : {
            const {name, value} = action.payload;
            return {
                ...state,
                values:{
                    ...state.values,
                    [name]:value
                }
            }
        }

        case CLEAR_PROVIDER_SERVICES_STATE_PRICES : {
            return {
                ...state,
                values:initialState.values
            }
        }
        break;

        case GET_PROVIDER_SERVICE_DETAILS_PRICES : {
            const {PS_Prices,PSC_Code, PSC_Description, ProviderService_Id, ServiceType_Id } = action.payload;
            const {
                Discount,
                End_Date,
                Make,
                Model,
                Price,
                Start_Date,
                Year
            } = PS_Prices;
            return {
                ...state,
                loading:false,
                values:{
                    ...state.values,
                    service_code:PSC_Code,
                    remarks:PSC_Description,
                    from: Year,
                    discount:Discount,
                    unit_cost:Price,
                    start_date:new Date(Start_Date),
                    end_date:new Date(End_Date),
                    service_type:{label:"Label Required", value:ServiceType_Id},
                    service:{label:"Label Required", value:ProviderService_Id},
                    make:{label:"Label Required", value:Make},
                    model:{label:"Label Required", value:Model},

                }
            }
        }
        break;
        default:
            return { ...state };
    }
}

export default providerServicesPriceScreenReducer;
