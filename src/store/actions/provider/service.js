




import instance from "config/axios/instance";
import { GET_PROVIDER_SERVICES_REQUEST, GET_PROVIDER_SERVICES } from "store/types/providers";



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


