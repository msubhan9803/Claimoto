import {
    CHANGE_TAB,
    GET_GARAGES,
    GET_CAR_AGENCIES,
    GET_AGENCIES,
    GET_SURVEYORERS,
    //Request
    GET_REQUEST,
    //Handle Change
    SET_INPUT_VALUES_PROVIDER_SCREEN,
    CHANGE_HANDLER_PROVIDER



} from '../../types/providers';


import GaragesList from 'components/Admin/Garages/GaragesList';
import AgenciesList from 'components/Admin/Agencies/AgenciesList';
import CarAgenciesList from 'components/Admin/CarAgencies/CarAgenciesList';
import SurveyorList from 'components/Admin/Surveyor/SurveyorList';
const initialState = {

    tabs: [
        {
            label: "Garages",
            id: "ltn__tab_3_1",
            name: "garages",
            component: <GaragesList />,
            short: "PG"
        },
        {
            label: "Agencies",
            id: "ltn__tab_3_2",
            name: "agencies",
            component: <AgenciesList />,
            short: "PA"
        },
        {
            label: "Replacement Agencies",
            id: "ltn__tab_3_3",
            name: "car%20Agencie",
            component: <CarAgenciesList />,
            short: "PCA"
        },
        {
            label: "Surveyor",
            id: "ltn__tab_3_3",
            name: "surveyor",
            component: <SurveyorList />,
            short: "PS"
        }
    ],


    selectedTab: 0,


    surveyorers: {
        list: [],
        records_per_page: 10,
        page_index: 1,
        count: 0,
        loading: false
    },
    garages: {
        list: [],
        records_per_page: 10,
        page_index: 1,
        count: 0,
        loading: false
    },
    car_agencies: {
        list: [],
        records_per_page: 10,
        page_index: 1,
        count: 0,
        loading: false
    },
    agencies: {
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


const providersScreenReducer = (state = initialState, action) => {
    switch (action.type) {

        case CHANGE_TAB: {
            return { ...state, selectedTab: action.payload }
        }
            break;

        case CHANGE_HANDLER_PROVIDER: {
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




        case GET_REQUEST: {
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

        case GET_GARAGES: {
            const { ModelProvider, TotalRecord } = action.payload;
            return {
                ...state,
                garages:
                {
                    ...state.garages,
                    list: ModelProvider || [],
                    count: TotalRecord || 0,
                    loading: false
                }
            }
        }
            break;

        case GET_CAR_AGENCIES: {
            const { ModelProvider, TotalRecord } = action.payload;
            return {
                ...state,
                car_agencies:
                {
                    ...state.car_agencies,
                    list: ModelProvider || [],
                    count: TotalRecord || 0,
                    loading: false
                }
            }
        }
            break;

        case GET_AGENCIES: {
            const { ModelProvider, TotalRecord } = action.payload;
            return {
                ...state,
                agencies:
                {
                    ...state.agencies,
                    list: ModelProvider || [],
                    count: TotalRecord || 0,
                    loading: false
                }
            }
        }
            break;

        case GET_SURVEYORERS: {
            const { ModelProvider, TotalRecord } = action.payload;
            return {
                ...state,
                surveyorers:
                {
                    ...state.surveyorers,
                    list: ModelProvider || [],
                    count: TotalRecord || 0,
                    loading: false
                }
            }
        }
            break;

        case SET_INPUT_VALUES_PROVIDER_SCREEN: {
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

export default providersScreenReducer;
