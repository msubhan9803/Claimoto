//ACTION TYPES
import instance from 'config/axios/instance';
import { successAlert } from 'functions';
import {

    CHANGE_HANDLER_PROVIDER,

    //Get Providers
    GET_GARAGES,
    GET_CAR_AGENCIES,
    GET_AGENCIES,
    GET_SURVEYORERS,

    //Request
    GET_REQUEST,



    //Add Provider
    GET_COUNTRIES,
    GET_SERVICES,
    SET_INPUT_VALUES_PROVIDER_TAB1_SCREEN,
    SET_INPUT_VALUES_PROVIDER_TAB2_SCREEN,
    ADD_CONTACTS,
    DELETE_CONTACT,
    EDIT_CONTACT,
    EDIT_CONTACT_INDEX,
    GET_SERVICES_CHILDS,
    SAVE_SERVICE,
    DELETE_SERVICE,
    EDIT_SERVICE_INDEX,
    EDIT_SERVICE,
    SET_INPUT_VALUES_PROVIDER_TAB3_SCREEN,
    GET_CITIES,
    GET_AREAS,
    SAVE_LOCATION,
    EDIT_LOCATION_INDEX,
    DELETE_LOCATION,
    CLEAR_ADD_PROVIDER_STATE,
    EDIT_LOCATION,



    //Save Provider Details
    SET_PROVIDER_DETAILS,
    SET_PROVIDER_DETAILS_REQUEST,

    //Save Provider
    SAVE_PROVIDER_REQUEST,
    SAVE_PROVIDER,

    //DELETE
    DELETE_PROVIDER_REQUEST,

    //Handle Change
    SET_INPUT_VALUES_PROVIDER_SCREEN


} from '../../types/providers';




export const changeHandlerProvider = ({module, key, val}) => async dispatch => {
    dispatch({ type: CHANGE_HANDLER_PROVIDER, payload: {module, key, val} });
}




export const addProvider = ({ name, logo, contacts, services, locations, providerId, editId }, navigate) => async dispatch => {
    try {
        //Restructuring contacts
        let provider_contacts = contacts.map((contact) => {
            return {
                "Id": contact?.Id || 0,
                "FullName": contact.full_name,
                "PhoneNumber": contact.phone,
                "Email": contact.email,
            }
        });

        //Restructuring services
        let provider_services = services.map((service) => {
            return {
                "Id": service?.Id || 0,
                "ProviderServiceId": service.service_type,
                "ServiceTypeId": service.service
            }
        });

        //Restructuring locations
        let provider_locations = locations.map((loc) => {
            return {
                "Id": loc?.Id || 0,
                "BranchName": loc.name,
                "CountryId": loc.country,
                "StreetAddress": loc.street_address,
                "CityId": loc.city,
                "Url": loc.url,
                "latitude": loc.lat,
                "longitude": loc.long,
                "AreaId": loc.area
            }
        });

        //Payload
        const payload = {
            "Id": editId || 0,
            "Name": name,
            "ProviderTypeId": providerId,
            "ImageModel": logo,
            "ProviderContacts": provider_contacts,
            "ProviderServiceMapping": provider_services,
            "ProviderLocations": provider_locations
        };

        dispatch({ type: SAVE_PROVIDER_REQUEST, payload: { success: false, error: false, loading: true } });
        let { data } = editId ? await instance.put(`api/Provider`, payload) : await instance.post(`api/Provider`, payload);
        successAlert({ title: data || "Added Successfully" });
        dispatch({ type: SAVE_PROVIDER, payload: { success: true, loading: false } });
        navigate('/admin/provider');

    } catch (error) {
        dispatch({ type: SAVE_PROVIDER_REQUEST, payload: { success: false, error: true, loading: false } });
        console.log(error);
    }
}










// Root Getters
export const getGarages = ({ records_per_page, page_index, search_text, search_option, sort_name, sort_type }) => async dispatch => {
    try {
        let ProviderTypeId = 1;
        search_option = search_text.length < 3 ?  "" : search_option;
        dispatch({ type: GET_REQUEST, payload: { module: "garages", bool: true, list: [] } });
        let { data } = await instance.get(`/api/Provider/Pagination?PageIndex=${page_index}&PageSize=${records_per_page}&SearchText=${search_text}&SearchOption=${search_option}&SortType=${sort_type}&SortName=${sort_name}&ProviderTypeId=${ProviderTypeId}`);
        dispatch({
            type: GET_GARAGES,
            payload: data
        });
    } catch (error) {
        dispatch({ type: GET_REQUEST, payload: { module: "garages", bool: false, list: [] } });
        console.log(error);
    }
}


export const getCarAgency = ({ records_per_page, page_index, search_text, search_option, sort_name, sort_type }) => async dispatch => {
    try {
        let ProviderTypeId = 3;
        search_option = search_text.length < 3 ?  "" : search_option;
        dispatch({ type: GET_REQUEST, payload: { module: "car_agencies", bool: true, list: [] } });
        let { data } = await instance.get(`/api/Provider/Pagination?PageIndex=${page_index}&PageSize=${records_per_page}&SearchText=${search_text}&SearchOption=${search_option}&SortType=${sort_type}&SortName=${sort_name}&ProviderTypeId=${ProviderTypeId}`);
        dispatch({
            type: GET_CAR_AGENCIES,
            payload: data
        });
    } catch (error) {
        dispatch({ type: GET_REQUEST, payload: { module: "car_agencies", bool: false, list: [] } });
        console.log(error);
    }
}

export const getAgency = ({ records_per_page, page_index, search_text, search_option, sort_name, sort_type }) => async dispatch => {
    try {
        let ProviderTypeId = 2;
        search_option = search_text.length < 3 ?  "" : search_option;
        dispatch({ type: GET_REQUEST, payload: { module: "agencies", bool: true, list: [] } });
        let { data } = await instance.get(`/api/Provider/Pagination?PageIndex=${page_index}&PageSize=${records_per_page}&SearchText=${search_text}&SearchOption=${search_option}&SortType=${sort_type}&SortName=${sort_name}&ProviderTypeId=${ProviderTypeId}`);
        dispatch({
            type: GET_AGENCIES,
            payload: data
        });
    } catch (error) {
        dispatch({ type: GET_REQUEST, payload: { module: "agencies", bool: false, list: [] } });
        console.log(error);
    }
}

export const getSurveyor = ({ records_per_page, page_index, search_text, search_option, sort_name, sort_type }) => async dispatch => {
    try {
        let ProviderTypeId = 4;
        search_option = search_text.length < 3 ?  "" : search_option;
        dispatch({ type: GET_REQUEST, payload: { module: "surveyorers", bool: true, list: [] } });
        let { data } = await instance.get(`/api/Provider/Pagination?PageIndex=${page_index}&PageSize=${records_per_page}&SearchText=${search_text}&SearchOption=${search_option}&SortType=${sort_type}&SortName=${sort_name}&ProviderTypeId=${ProviderTypeId}`);
        dispatch({
            type: GET_SURVEYORERS,
            payload: data
        });
    } catch (error) {
        dispatch({ type: GET_REQUEST, payload: { module: "surveyorers", bool: false, list: [] } });
        console.log(error);
    }
}









//Getters for add provider
export const getCountries = () => async dispatch => {
    try {
        let { data } = await instance.get(`api/Provider/Country`);
        dispatch({
            type: GET_COUNTRIES,
            payload: data
        });
    } catch (error) {
        console.log(error);
    }
}


export const getServices = () => async dispatch => {
    try {
        let { data } = await instance.get(`api/Provider/ServiceType`);
        dispatch({
            type: GET_SERVICES,
            payload: data
        });
    } catch (error) {
        console.log(error);
    }
}


export const getServiceChilds = (id) => async dispatch => {
    try {
        let { data } = await instance.get(`api/Provider/ProviderService?ServiceTypeId=${id}`);
        dispatch({
            type: GET_SERVICES_CHILDS,
            payload: data
        })
    } catch (error) {
        console.log(error);
    }

}

export const getCities = (id) => async dispatch => {
    try {
        let { data } = await instance.get(`api/Provider/City?CountryId=${id}`);
        dispatch({
            type: GET_CITIES,
            payload: data
        })
    } catch (error) {
        console.log(error);
    }

}

export const getAreas = (id) => async dispatch => {
    try {
        let { data } = await instance.get(`api/Provider/Area?CityId=${id}`);
        dispatch({
            type: GET_AREAS,
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
}





//Tab1
export const handleInputValue = ({ name, value }) => dispatch => {
    dispatch({
        type: SET_INPUT_VALUES_PROVIDER_TAB1_SCREEN,
        payload: { name, value }
    })
}


export const addContacts = (contact) => dispatch => {
    dispatch({
        type: ADD_CONTACTS,
        payload: contact
    })
}


export const removeContact = (index) => dispatch => {
    dispatch({
        type: DELETE_CONTACT,
        payload: index
    })
}

export const editContactIndex = (index) => dispatch => {
    dispatch({
        type: EDIT_CONTACT_INDEX,
        payload: index
    })
}


export const editContact = (contact) => dispatch => {
    dispatch({
        type: EDIT_CONTACT,
        payload: contact
    })
}

//Tabs 2




export const handleInputValue2 = ({ name, value, comp }) => dispatch => {
    dispatch({
        type: SET_INPUT_VALUES_PROVIDER_TAB2_SCREEN,
        payload: { name, value, comp }
    })
}



export const saveService = (service) => dispatch => {
    dispatch({
        type: SAVE_SERVICE,
        payload: service
    })
}


export const editServiceIndex = (index) => dispatch => {
    dispatch({type: EDIT_SERVICE,payload: true});
    dispatch({
        type: EDIT_SERVICE_INDEX,
        payload: index
    });
    setTimeout(() => {
        dispatch({type: EDIT_SERVICE,payload: false});
    }, 1000);
}


export const removeService = (index) => dispatch => {
    dispatch({
        type: DELETE_SERVICE,
        payload: index
    })
}



// Tab3

export const handleInputValue3 = ({ name, value, comp }) => dispatch => {
    dispatch({
        type: SET_INPUT_VALUES_PROVIDER_TAB3_SCREEN,
        payload: { name, value, comp }
    })
}


export const saveLocation = (loaction) => dispatch => {
    dispatch({
        type: SAVE_LOCATION,
        payload: loaction
    })
}

export const editLocationIndex = (index) => dispatch => {
    dispatch({type: EDIT_LOCATION,payload: true});
    dispatch({
        type: EDIT_LOCATION_INDEX,
        payload: index
    });
    setTimeout(() => {
        dispatch({type: EDIT_LOCATION,payload: false});
    }, 1000);
}


export const removeLocation = (index) => dispatch => {
    dispatch({
        type: DELETE_LOCATION,
        payload: index
    })
}



export const clearAddProviderState = () => dispatch => {
    dispatch({
        type: CLEAR_ADD_PROVIDER_STATE,
    })
}


export const setProviderDetails = (id) => async dispatch => {
    try {
        dispatch({ type: SET_PROVIDER_DETAILS_REQUEST, payload: { user_loading: true } });

        let { data } = await instance.get(`/api/Provider/ProviderByID?Id=${id}`);
        dispatch({
            type: SET_PROVIDER_DETAILS,
            payload: data
        })
    } catch (error) {
        dispatch({ type: SET_PROVIDER_DETAILS_REQUEST, payload: { user_loading: false } });
        console.log(error);
    }
}


export const deleteProvider = (navigate, id) => async dispatch => {
    try {
        dispatch({ type: DELETE_PROVIDER_REQUEST, payload: { deleting: true } });
        let { data } = await instance.delete(`/api/Provider/ProviderDel?id=${id}`);
        successAlert({ title: "Successfully", text: data || "" });
        navigate("/admin/provider");
        dispatch({ type: DELETE_PROVIDER_REQUEST, payload: { deleting: false } });
    } catch (error) {
        dispatch({ type: DELETE_PROVIDER_REQUEST, payload: { deleting: false } });
        console.log(error);
    }
}



//handle Change

export const handleProviderInputValue = ({ name, value, compnnt }) => dispatch => {

    try {
        dispatch({
            type: SET_INPUT_VALUES_PROVIDER_SCREEN,
            payload: { name, value }
        })

    }
    catch (error) {
        console.log("err", error)
    }
}
