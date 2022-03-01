import {
    CHANGE_TAB,
    GET_GARAGES,
    GET_CAR_AGENCIES,
    GET_AGENCIES,
    GET_SURVEYORERS,
    //Request
    GET_REQUEST,



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
            short: "Garages"
        },
        {
            label: "Agencies",
            id: "ltn__tab_3_2",
            name: "agencies",
            component: <AgenciesList />,
            short: "Agencies"
        },
        {
            label: "Car Agencies",
            id: "ltn__tab_3_3",
            name: "car%20Agencie",
            component: <CarAgenciesList />,
            short: "Car Agn"
        },
        {
            label: "Surveyor",
            id: "ltn__tab_3_3",
            name: "surveyor",
            component: <SurveyorList />,
            short: "surveyor"
        }
    ],


    selectedTab: 0,


    surveyorers: {
        list: [],
        records_per_page: 10,
        age_index: 1,
        count: 0,
        loading: false
    },
    garages: {
        list: [],
        records_per_page: 10,
        age_index: 1,
        count: 0,
        loading: false
    },
    car_agencies: {
        list: [],
        records_per_page: 10,
        age_index: 1,
        count: 0,
        loading: false
    },
    agencies: {
        list: [],
        records_per_page: 10,
        age_index: 1,
        count: 0,
        loading: false
    }



};


const providersScreenReducer = (state = initialState, action) => {
    switch (action.type) {

        case CHANGE_TAB: {
            return { ...state, selectedTab: action.payload }
        }
            break;


        case GET_REQUEST: {
            let {modeule, bool, list} = action.payload;
            return {
                ...state,
                [modeule]:
                {
                    ...state[modeule],
                    loading:bool,
                    list
                }
            }
        }
            break;

        case GET_GARAGES: {
            return {
                ...state,
                garages:
                {
                    ...state.garages,
                    list: action.payload,
                    loading:false
                }
            }
        }
            break;

        case GET_CAR_AGENCIES: {
            return {
                ...state,
                car_agencies:
                {
                    ...state.car_agencies,
                    list: action.payload,
                    loading:false
                }
            }
        }
            break;

        case GET_AGENCIES: {
            return {
                ...state,
                agencies:
                {
                    ...state.agencies,
                    list: action.payload,
                    loading:false
                }
            }
        }
            break;

        case GET_SURVEYORERS: {
            return {
                ...state,
                surveyorers:
                {
                    ...state.surveyorers,
                    list: action.payload,
                    loading:false
                }
            }
        }
            break;

        

        default:
            return { ...state };
    }
}

export default providersScreenReducer;
