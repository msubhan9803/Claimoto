




import instance from "config/axios/instance";
import { GET_PROVIDER_SERVICES_REQUEST, GET_PROVIDER_SERVICES, SET_SERVICE_PROIVDER_GETTERS , SET_SERVICE_PROIVDER_VALUES} from "store/types/providers";



export const getProviderServices = (id) => async dispatch => {
    try {
        dispatch({ type: GET_PROVIDER_SERVICES_REQUEST, payload: { loading: true } });
        let { data } = await instance.get(`/api/ProviderServicesContract/ProviderServicesContract?Id=${id}`);
        dispatch({ type: GET_PROVIDER_SERVICES, payload: data || [] });
    } catch (error) {
        dispatch({ type: GET_PROVIDER_SERVICES_REQUEST, payload: { loading: false } });
        console.log(error);
    }
}



















//Add Service

export const getMakes = (text) => async dispatch => {
    try {
        let { data } = await instance.get(`/api/ProviderServicesContract/Make`);
        dispatch({
            type: SET_SERVICE_PROIVDER_GETTERS,
            payload: {data:data, name:"makes"}
        });
    } catch (error) {
        console.log(error);
    }
}


export const getModels = (text, id) => async dispatch => {
    try {
        let { data } = await instance.get(`/api/ProviderServicesContract/Model?Id=${id}`);
        dispatch({
            type: SET_SERVICE_PROIVDER_GETTERS,
            payload: {data:data, name:"models"}
        });
    } catch (error) {
        console.log(error);
    }

}

export const getServiceTypes = (id) => async dispatch => {
    try {
        dispatch({ type: GET_PROVIDER_SERVICES_REQUEST, payload: { loading: true } });
        let { data } = await instance.get(`/api/ProviderServicesContract/ProviderServicesContract?Id=${id}`);
        dispatch({ type: GET_PROVIDER_SERVICES, payload: data || [] });
    } catch (error) {
        dispatch({ type: GET_PROVIDER_SERVICES_REQUEST, payload: { loading: false } });
        console.log(error);
    }
}

export const getServices = (id) => async dispatch => {
    try {
        dispatch({ type: GET_PROVIDER_SERVICES_REQUEST, payload: { loading: true } });
        let { data } = await instance.get(`/api/ProviderServicesContract/ProviderServicesContract?Id=${id}`);
        dispatch({ type: GET_PROVIDER_SERVICES, payload: data || [] });
    } catch (error) {
        dispatch({ type: GET_PROVIDER_SERVICES_REQUEST, payload: { loading: false } });
        console.log(error);
    }
}


export const addService = (id) => async dispatch => {
    try {
        dispatch({ type: GET_PROVIDER_SERVICES_REQUEST, payload: { loading: true } });
        let { data } = await instance.get(`/api/ProviderServicesContract/ProviderServicesContract?Id=${id}`);
        dispatch({ type: GET_PROVIDER_SERVICES, payload: data || [] });
    } catch (error) {
        dispatch({ type: GET_PROVIDER_SERVICES_REQUEST, payload: { loading: false } });
        console.log(error);
    }
}


export const handleAddProviderServiceInputValue = ({ name, value }) => async dispatch => {
        dispatch({ type: SET_SERVICE_PROIVDER_VALUES, payload: { name, value } });
    
}


export const clearInputValues = (id) => async dispatch => {
    try {
        dispatch({ type: GET_PROVIDER_SERVICES_REQUEST, payload: { loading: true } });
        let { data } = await instance.get(`/api/ProviderServicesContract/ProviderServicesContract?Id=${id}`);
        dispatch({ type: GET_PROVIDER_SERVICES, payload: data || [] });
    } catch (error) {
        dispatch({ type: GET_PROVIDER_SERVICES_REQUEST, payload: { loading: false } });
        console.log(error);
    }
}







