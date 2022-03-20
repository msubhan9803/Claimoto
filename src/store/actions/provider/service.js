




import instance from "config/axios/instance";
import { successAlert } from "functions";
import { GET_PROVIDER_SERVICES_REQUEST, GET_PROVIDER_SERVICES, SET_SERVICE_PROIVDER_GETTERS, SET_SERVICE_PROIVDER_VALUES } from "store/types/providers";



export const getProviderServices = (id) => async dispatch => {
    try {
        dispatch({ type: GET_PROVIDER_SERVICES_REQUEST, payload: { loading_list: true } });
        let { data } = await instance.get(`/api/ProviderServicesContract/Services?ProviderId=${id}`);
        dispatch({ type: GET_PROVIDER_SERVICES, payload: data || [] });
    } catch (error) {
        dispatch({ type: GET_PROVIDER_SERVICES_REQUEST, payload: { loading_list: false } });
        console.log(error);
    }
}

export const deleteProviderService = (id) => async dispatch => {
    try {
        let { data } = await instance.delete(`/api/ProviderServicesContract/ProviderServicesContract?id${id}`);
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
            type: SET_SERVICE_PROIVDER_GETTERS,
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
            type: SET_SERVICE_PROIVDER_GETTERS,
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
            type: SET_SERVICE_PROIVDER_GETTERS,
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
            type: SET_SERVICE_PROIVDER_GETTERS,
            payload: { data: data, name: "services" }
        });
    } catch (error) {
        console.log(error);
    }
}


export const addService = (payload) => async dispatch => {
    try {
        let { provider_id, remarks, edit_id, service, service_type, service_type_id  ,make, model, discount, from, to, service_code, unit_cost } = payload;
        let req_payload = {
            "PSC_Id": edit_id,
            "ProviderService_Id": service.value,
            "ServiceType_Id": service_type_id,
            "PSC_Code": service_code,
            "PSC_Description": remarks,
            "Provider_Id": provider_id,
            "PS_Prices": {
                "Make": make.value,
                "Model": model.value,
                "Year": from,
                "Price": unit_cost,
                "Discount": discount,
                "Remark": remarks
            }
        };
        dispatch({ type: SET_SERVICE_PROIVDER_GETTERS, payload: { data: true, name: "loading" } });
        let { data } = edit_id ? await instance.put(`/api/ProviderServicesContract`, req_payload) : await instance.post(`/api/ProviderServicesContract`, req_payload);
        successAlert({ title: data || "Added Successfully" });
        dispatch({ type: SET_SERVICE_PROIVDER_GETTERS, payload: { data: false, name: "loading" } });
    } catch (error) {
        dispatch({ type: SET_SERVICE_PROIVDER_GETTERS, payload: { data: false, name: "loading" } });
        console.log(error);
    }
}


export const handleAddProviderServiceInputValue = ({ name, value }) => async dispatch => {
    dispatch({ type: SET_SERVICE_PROIVDER_VALUES, payload: { name, value } });

}


export const clearInputValues = (id) => async dispatch => {
    // try {
    //     let { data } = await instance.get(`/api/ProviderServicesContract/ProviderServicesContract?Id=${id}`);
    //     dispatch({ type: GET_PROVIDER_SERVICES, payload: data || [] });
    // } catch (error) {
    //     console.log(error);
    // }
}







