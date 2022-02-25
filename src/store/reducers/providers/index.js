import { CHANGE_TAB } from '../../types/providers';
import GaragesList from 'components/Admin/Garages/GaragesList';
import AgenciesList from 'components/Admin/Agencies/AgenciesList';
import CarAgenciesList from 'components/Admin/CarAgencies/CarAgenciesList';
import SurveyorList from 'components/Admin/Surveyor/SurveyorList';
import AddProviderTab1 from 'components/Admin/Providers/AddProviderTabs/AddProviderTab1';
import AddProviderTab2 from 'components/Admin/Providers/AddProviderTabs/AddProviderTab2';
import AddProviderTab3 from 'components/Admin/Providers/AddProviderTabs/AddProviderTab3';

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
            name: "car_Agencie",
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
