




import instance from "config/axios/instance";
import { successAlert } from "functions";
import { GET_PROVIDER_SERVICES_REQUEST_PRICES, GET_PROVIDER_SERVICE_DETAILS_PRICES,  GET_PROVIDER_SERVICES_PRICES, SET_SERVICE_PROIVDER_GETTERS_PRICES, SET_SERVICE_PROIVDER_VALUES_PRICES, CLEAR_PROVIDER_SERVICES_STATE_PRICES } from "store/types/providers";



export const getProviderServicesPrices = (id) => async dispatch => {
    try {
        dispatch({ type: GET_PROVIDER_SERVICES_REQUEST_PRICES, payload: { loading_list: true } });
        let { data } = await instance.get(`/api/ProviderServicesContract/ProviderServicesContracts?ProviderId=${id}`);
        dispatch({ type: GET_PROVIDER_SERVICES_PRICES, payload: data || [] });
        dispatch({ type: GET_PROVIDER_SERVICES_REQUEST_PRICES, payload: { loading_list: false } });
    } catch (error) {
        dispatch({ type: GET_PROVIDER_SERVICES_REQUEST_PRICES, payload: { loading_list: false } });
        console.log(error);
    }
}

export const deleteProviderServicePrice = (id) => async dispatch => {
    try {
        let { data } = await instance.delete(`/api/ProviderServicesContract/ProviderServicesContract?id=${id}`);
        successAlert({ title: data || "Deleted Successfully" });
    } catch (error) {
        console.log(error);
    }
}









//Add Service

export const getMakes = (text) => async dispatch => {
    try {
        let { data } = await instance.get(`/api/ProviderServicesContract/Make`);
        dispatch({
            type: SET_SERVICE_PROIVDER_GETTERS_PRICES,
            payload: { data: data, name: "makes" }
        });
    } catch (error) {
        console.log(error);
    }
}


export const getModels = (text, id) => async dispatch => {
    try {
        let { data } = await instance.get(`/api/ProviderServicesContract/Model?Id=${id}`);
        dispatch({
            type: SET_SERVICE_PROIVDER_GETTERS_PRICES,
            payload: { data: data, name: "models" }
        });
    } catch (error) {
        console.log(error);
    }

}

export const getServiceTypes = (text, id) => async dispatch => {
    try {
        let { data } = await instance.get(`api/Provider/ServiceType`);
        dispatch({
            type: SET_SERVICE_PROIVDER_GETTERS_PRICES,
            payload: { data: data, name: "service_types" }
        });
    } catch (error) {
        console.log(error);
    }
}

export const getServices = (text, id) => async dispatch => {
    try {
        // let { data } = await instance.get(`api/Provider/ProviderService?ServiceTypeId=${id}`);
        let { data } = await instance.get(`/api/ProviderServicesContract/Services?ProviderId=${id}`);
        dispatch({
            type: SET_SERVICE_PROIVDER_GETTERS_PRICES,
            payload: { data: data, name: "services" }
        });
    } catch (error) {
        console.log(error);
    }
}


export const addServicePrice = (payload, refresh_record) => async dispatch => {
    try {
        let { provider_id, remarks, edit_id, service, service_type, service_type_id, make, model, discount, from, to, service_code, unit_cost, start_date, end_date, type } = payload;

        let request_payload = {
            "PSC_Id": edit_id || 0,
            "ProviderService_Id": service.value,
            "ServiceType_Id": service_type_id,
            "PSC_Code": service_code,
            "PSC_Description": remarks,
            "Provider_Id": provider_id,
            "PS_Prices": {
                "PSC_Id": edit_id || 0,
                "Make": make.value,
                "Model": model.value,
                "Year": from,
                "Price": unit_cost,
                "Start_Date": new Date(start_date),
                "End_Date": new Date(end_date),
                "Discount": discount,
                "Remark": remarks,

            }
        }


        dispatch({ type: SET_SERVICE_PROIVDER_GETTERS_PRICES, payload: { data: true, name: "loading" } });
        let { data } = edit_id ? await instance.put(`/api/ProviderServicesContract`, request_payload) : await instance.post(`/api/ProviderServicesContract`, request_payload);
        successAlert({ title: data || "Added Successfully" });
        refresh_record();
        // navigate(`/admin/view_provider_services/${type}/${provider_id}`);
        dispatch({ type: SET_SERVICE_PROIVDER_GETTERS_PRICES, payload: { data: false, name: "loading" } });
    } catch (error) {
        dispatch({ type: SET_SERVICE_PROIVDER_GETTERS_PRICES, payload: { data: false, name: "loading" } });
        console.log(error);
    }
}


export const handleAddProviderServiceInputValue = ({ name, value }) => async dispatch => {
    dispatch({ type: SET_SERVICE_PROIVDER_VALUES_PRICES, payload: { name, value } });

}


export const clearInputValues = () => async dispatch => {
    try {
        dispatch({ type: CLEAR_PROVIDER_SERVICES_STATE_PRICES});
    } catch (error) {
        console.log(error);
    }
}


export const getProviderServicePriceDetails = (id) => async dispatch => {
    try {
        dispatch({ type: GET_PROVIDER_SERVICES_REQUEST_PRICES, payload: { loading: true } });
        let { data } = await instance.get(`/api/ProviderServicesContract/ProviderServicesContract?Id=${id}`);
        dispatch({ type: GET_PROVIDER_SERVICE_DETAILS_PRICES, payload: data });
        // dispatch({ type: GET_PROVIDER_SERVICES, payload: data || [] });
    } catch (error) {
        dispatch({ type: GET_PROVIDER_SERVICES_REQUEST_PRICES, payload: { loading: false } });
        console.log(error);
    }
}


export const setValuesProviderServices = ({name, value}) => async dispatch => {
    dispatch({ type: GET_PROVIDER_SERVICES_REQUEST_PRICES, payload: { [name]: value } });
}







