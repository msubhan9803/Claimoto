import {
    CHANGE_TAB, SET_INPUT_VALUES_PROVIDER_TAB1_SCREEN, ADD_CONTACTS, DELETE_CONTACT,
    EDIT_CONTACT,
    EDIT_CONTACT_INDEX
} from '../../types/providers';
import AddProviderTab1 from 'components/Admin/Providers/AddProviderTabs/AddProviderTab1';
import AddProviderTab2 from 'components/Admin/Providers/AddProviderTabs/AddProviderTab2';
import AddProviderTab3 from 'components/Admin/Providers/AddProviderTabs/AddProviderTab3';

const initialState = {

    addTabs: [
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
    selectedAddTab: 0,

    tab1: {
        name: "",
        logo: {
            Base64: null,
            file: null,
            ImageName: null,
            ImageType: null,
        },
        contacts: [],
        //Contacts Values
        full_name: "",
        phone: "",
        email: "",
        add_contact_modal: false,
        edit_index: null
    },


    tab2: {
        services: [],
        service_types: [],
        services_values: {
            selected_service: "",
            selected_service_type: ""
        },
        selected_service_types:[],
        add_service_modal: false,
        edit_index: null
    },


    tab3: {
        countries: [],
        states: [],
        areas: [],
        contacts: [],
        contact_values: {
            country: "",
            city: "",
            area: "",
            lat: "",
            long: "",
            url: "",
            street_address: ""
        },
        selected_locations:[],
        add_location_modal: false,
        edit_index: null
    },


    success: false,
    loading: false,
    saving: false,



};


const addProviderScreenReducer = (state = initialState, action) => {
    switch (action.type) {

        case CHANGE_TAB: {
            return { ...state, selectedTab: action.payload }
        }
            break;

        case SET_INPUT_VALUES_PROVIDER_TAB1_SCREEN: {
            const { name, value } = action.payload;

            return {
                ...state, tab1: {
                    ...state.tab1,
                    [name]: value
                }
            }
        }
            break;

        case ADD_CONTACTS: {
            const { full_name, email, phone, edit_index } = action.payload;
            let cntcts = state.tab1.contacts;
            if (edit_index !== null) {
                cntcts[edit_index] = { full_name, email, phone };
            } else {
                cntcts.push({ full_name, email, phone });
            }
            return {
                ...state,
                tab1: {
                    ...state.tab1,
                    full_name: "",
                    phone: "",
                    email: "",
                    add_contact_modal: false,
                    edit_index: null,
                    contacts: cntcts
                }
            }
        }
            break;

        case DELETE_CONTACT: {
            let cntcts = state.tab1.contacts;
            cntcts.splice(action.payload, 1);
            return {
                ...state,
                tab1: {
                    ...state.tab1,
                    contacts: cntcts
                }
            }
        }
            break;

        case EDIT_CONTACT: {
            const { full_name, email, phone, index } = action.payload;
            let cntcts = state.tab1.state[index] = { full_name, email, phone };
            return {
                ...state,
                tab1: {
                    ...state.tab1,
                    contacts: cntcts
                }
            }
        }
            break;

        case EDIT_CONTACT_INDEX: {
            let provider_index = action.payload;
            let contact = state.tab1.contacts[provider_index];
            let { full_name, email, phone } = contact;
            return {
                ...state,
                tab1: {
                    ...state.tab1,
                    full_name,
                    email,
                    phone,
                    edit_index: action.payload,
                    add_contact_modal: true

                }
            }
        }
            break;

        default:
            return { ...state };
    }
}

export default addProviderScreenReducer;
