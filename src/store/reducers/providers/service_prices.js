import { GET_PROVIDER_SERVICES_REQUEST_PRICES,CLEAR_PROVIDER_SERVICES_STATE_PRICES, GET_PROVIDER_SERVICE_DETAILS_PRICES,  GET_PROVIDER_SERVICES_PRICES, SET_SERVICE_PROIVDER_GETTERS_PRICES, SET_SERVICE_PROIVDER_VALUES_PRICES } from "store/types/providers";
let current_year = new Date().getFullYear();
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
        from:current_year - 100,
        to:current_year,
        unit_cost:0,
        discount:0,
        remarks:"",
        start_date:new Date(),
        end_date:new Date(),
        year_all:true,
        date_all:true
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
            const {
                Discount,
                End_Date,
                Make,
                Model,
                Price,
                Start_Date,
                Year,
                Remark,
                MakeName,
                ModelName
            }  = action.payload;
            return {
                ...state,
                loading:false,
                values:{
                    ...state.values,
                    remarks:Remark || "",
                    from: Year || "",
                    discount:Discount || "",
                    unit_cost:Price || "",
                    start_date:new Date(Start_Date) || "",
                    end_date:new Date(End_Date) || "",
                    make: Make ? {label:MakeName, value:Make} : initialState.values.make,
                    model: Make ? {label:ModelName, value:Model} : initialState.values.make,
                    // year_all:Year,
                    // date_all:Start_Date

                }
            }
        }
        break;
        default:
            return { ...state };
    }
}

export default providerServicesPriceScreenReducer;
