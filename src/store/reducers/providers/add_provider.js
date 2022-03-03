import {
    CHANGE_TAB,
    SET_INPUT_VALUES_PROVIDER_TAB1_SCREEN,
    ADD_CONTACTS, DELETE_CONTACT,
    EDIT_CONTACT,
    EDIT_CONTACT_INDEX,
    SET_INPUT_VALUES_PROVIDER_TAB2_SCREEN,
    GET_COUNTRIES,
    GET_SERVICES,
    GET_SERVICES_CHILDS,
    SAVE_SERVICE,
    DELETE_SERVICE,
    EDIT_SERVICE_INDEX,
    SET_INPUT_VALUES_PROVIDER_TAB3_SCREEN,
    GET_AREAS,
    GET_CITIES,
    SAVE_LOCATION,
    EDIT_LOCATION_INDEX,
    DELETE_LOCATION,
    CLEAR_ADD_PROVIDER_STATE,

    //Save Provider
    SAVE_PROVIDER_REQUEST,
    SAVE_PROVIDER,

    //SET_PROVIDER_DETAILS
    SET_PROVIDER_DETAILS_REQUEST,
    SET_PROVIDER_DETAILS,

    //DELETE_PROVIDE
    DELETE_PROVIDER_REQUEST

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
            service: "",
            service_type: ""
        },
        selected_service_types: [],
        add_service_modal: false,
        edit_index: null
    },


    tab3: {
        countries: [],
        cities: [],
        areas: [],
        location_values: {
            country: "",
            city: "",
            area: "",
            lat: "",
            long: "",
            url: "",
            street_address: ""
        },
        selected_locations: [],
        add_location_modal: false,
        edit_index: null
    },


    success: false,
    loading: false,
    user_loading: false,


    edit_index: null,

    deleting:false

};


const addProviderScreenReducer = (state = initialState, action) => {
    switch (action.type) {


        case CLEAR_ADD_PROVIDER_STATE: {
            return { ...initialState };
        }

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
            return {
                ...state,
                tab1: {
                    ...state.tab1,
                    ...contact,
                    edit_index: action.payload,
                    add_contact_modal: true

                }
            }
        }
            break;




        //TAB 2

        case SET_INPUT_VALUES_PROVIDER_TAB2_SCREEN: {
            const { name, value, comp } = action.payload;
            if (comp === 0) {
                return {
                    ...state,
                    tab2: {
                        ...state.tab2,
                        [name]: value
                    }
                }
            }
            else {
                return {
                    ...state,
                    tab2: {
                        ...state.tab2,
                        services_values: {
                            ...state.tab2.services_values,
                            [name]: value
                        }

                    }
                }
            }
        }
            break;


        case GET_SERVICES: {
            return {
                ...state,
                tab2: {
                    ...state.tab2,
                    services: action.payload

                }
            }
        }
            break;


        case GET_SERVICES_CHILDS: {
            return {
                ...state,
                tab2: {
                    ...state.tab2,
                    service_types: action.payload

                }
            }
        }
            break;


        case SAVE_SERVICE: {
            const { service, service_type, edit_index, service_name } = action.payload;
            let srvs = state.tab2.selected_service_types;
            if (edit_index !== null) {
                srvs[edit_index] = { service, service_type, service_name };
            } else {
                srvs.push({ service, service_type, service_name });
            }
            return {
                ...state,
                tab2: {
                    ...state.tab2,
                    selected_service_types: srvs,
                    services_values: initialState.tab2.services_values,
                    edit_index: null,
                    add_service_modal: false
                }
            }
        }
            break;

        case DELETE_SERVICE: {
            let srvs = state.tab2.selected_service_types;
            srvs.splice(action.payload, 1);
            return {
                ...state,
                tab1: {
                    ...state.tab2,
                    selected_service_types: srvs
                }
            }
        }

        case EDIT_SERVICE_INDEX: {
            let provider_index = action.payload;
            let srvs = state.tab2.selected_service_types[provider_index];
            return {
                ...state,
                tab2: {
                    ...state.tab2,
                    services_values: {
                        ...state.tab2.services_values,
                        ...srvs
                    },
                    edit_index: action.payload,
                    add_service_modal: true

                }
            }
        }


        //TAB 3


        case GET_COUNTRIES: {

            return {
                ...state,
                tab3: {
                    ...state.tab3,
                    countries: action.payload

                }
            }
        }
            break;

        case GET_CITIES: {

            return {
                ...state,
                tab3: {
                    ...state.tab3,
                    cities: action.payload

                }
            }
        }
            break;


        case GET_AREAS: {

            return {
                ...state,
                tab3: {
                    ...state.tab3,
                    areas: action.payload

                }
            }
        }
            break;


        case SET_INPUT_VALUES_PROVIDER_TAB3_SCREEN: {
            const { name, value, comp } = action.payload;
            if (comp === 0) {
                return {
                    ...state,
                    tab3: {
                        ...state.tab3,
                        [name]: value
                    }
                }
            }
            else {
                return {
                    ...state,
                    tab3: {
                        ...state.tab3,
                        location_values: {
                            ...state.tab3.location_values,
                            [name]: value
                        }

                    }
                }
            }
        }
            break;

        case SAVE_LOCATION: {
            const { edit_index } = action.payload;
            let locs = state.tab3.selected_locations;
            if (edit_index !== null) {
                locs[edit_index] = { ...action.payload };
            } else {
                locs.push({ ...action.payload });
            }
            return {
                ...state,
                tab3: {
                    ...state.tab2,
                    selected_locations: locs,
                    location_values: initialState.tab3.location_values,
                    edit_index: null,
                    add_location_modal: false
                }
            }
        }
            break;

        case EDIT_LOCATION_INDEX: {
            let provider_index = action.payload;
            let loc = state.tab3.selected_locations[provider_index];
            return {
                ...state,
                tab3: {
                    ...state.tab3,
                    location_values: {
                        ...state.tab3.location_values,
                        ...loc
                    },
                    edit_index: action.payload,
                    add_location_modal: true

                }
            }
        }
            break;
        case DELETE_LOCATION: {
            let locs = state.tab3.selected_locations;
            locs.splice(action.payload, 1);
            return {
                ...state,
                tab1: {
                    ...state.tab3,
                    selected_locations: locs
                }
            }
        }
            break;

        case SAVE_PROVIDER_REQUEST: {
            return {
                ...state,
                ...action.payload
            }
        }

        case SAVE_PROVIDER: {
            return {
                ...state,
                ...action.payload
            }
        }

        case SET_PROVIDER_DETAILS_REQUEST: {
            return {
                ...state,
                ...action.payload,
                edit_index: null

            }
        }

        case SET_PROVIDER_DETAILS: {
            let { Image, Name, ProviderContacts, ProviderLocations, ProviderServiceMapping, Id } = action.payload;
            let contacts = ProviderContacts.map((contact) => {
                return {
                    Id: contact.Id,
                    full_name: contact.FullName,
                    phone: contact.PhoneNumber,
                    email: contact.Email
                }
            });

            let selected_service_types = ProviderServiceMapping.map((service) => {
                return {
                    Id: service.Id,
                    service: service.ServiceTypeId,
                    service_type: service.ProviderServiceId,
                    service_name: service.Service,
                    parent_name:service.Name
                }
            });

            let selected_locations = ProviderLocations.map((loc) => {
                return {
                    name:loc.BranchName,
                    Id: loc.Id,
                    country: loc.CountryId,
                    city: loc.CityId,
                    area: loc.AreaId,
                    lat: loc.latitude,
                    long:  loc.longitude,
                    url: loc.Url,
                    street_address: loc.StreetAddress
                }
            })

            return {
                ...state,
                user_loading: false,
                tab1: {
                    ...state.tab1,
                    name: Name,
                    logo: Image,
                    contacts
                },
                tab2: {
                    ...state.tab2,
                    selected_service_types

                },
                tab3: {
                    ...state.tab3,
                    selected_locations
                },
                edit_index: Id
            }
        }
        break;
        case DELETE_PROVIDER_REQUEST : {
            return {
                ...state,
                ...action.payload
            };
        }
        break;
        default:
            return {
                ...state,
                user_loading: false
            };
    }
}

export default addProviderScreenReducer;
