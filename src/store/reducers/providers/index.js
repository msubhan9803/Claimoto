import { CHANGE_TAB } from '../../types/providers';
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

};


const providersScreenReducer = (state = initialState, action) => {
    switch (action.type) {

        case CHANGE_TAB: {
            return { ...state, selectedTab: action.payload }
        }
        break;

        
        default:
            return { ...state };
    }
}

export default providersScreenReducer;
