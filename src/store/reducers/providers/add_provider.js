import { CHANGE_TAB } from '../../types/providers';
import AddProviderTab1 from 'components/Admin/Providers/AddProviderTabs/AddProviderTab1';
import AddProviderTab2 from 'components/Admin/Providers/AddProviderTabs/AddProviderTab2';
import AddProviderTab3 from 'components/Admin/Providers/AddProviderTabs/AddProviderTab3';

const initialState = {

    addTabs:[
        {
            id: "ltn__tab_4_1",
            component: <AddProviderTab1 />,
        },
        {
            id: "ltn__tab_4_2",
            component: <AddProviderTab2 />,
        },
        {
            id: "ltn__tab_4_3",
            component: <AddProviderTab3 />,
        }  
    ],
    selectedAddTab:0,

    tab1:{
        name:"",
        logo:{
            Base64: null,
            file: null,
            ImageName: null,
            ImageType: null,
        },
        contacts:[],
        contact_values:{
            full_name:"",
            phone:"",
            email:""
        }
    },


    tab2:{
        services:[],
        service_types:[],
        services_values:{
            selected_service:"",
            selected_service_types:[]
        }
    },


    tab3:{
        countries:[],
        states:[],
        areas:[],
        contacts:[],
        contact_values:{
            country:"",
            state:"",
            area:"",
            lat:"",
            long:"",
            url:"",
            zip_code:"",
            street_address:""
        }
    },


    success:false,
    loading:false,
    saving:false,
    

    
};


const addProviderScreenReducer = (state = initialState, action) => {
    switch (action.type) {

        case CHANGE_TAB: {
            return { ...state, selectedTab: action.payload }
        }
        break;
        default:
            return { ...state };
    }
}

export default addProviderScreenReducer;
