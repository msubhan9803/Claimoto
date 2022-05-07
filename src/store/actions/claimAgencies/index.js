import instance from "config/axios/instance";
import { SweetAlert, successAlert } from "functions";
import {
    SET_PAGINATED_REQUEST,
    CHANGE_HANDLER_PROVIDER,
    PROVIDERS_LIST_TABLE_DATA_CHANGE
} from "store/types/claimAgencies";

// Get paginated Agencies, Garages & Surveyors list
export const SetPaginatedAgenciesGarages = (
    providerTypeId,
    providers_per_page,
    providers_page_index,
    search_text,
    search_option,
    sort_name,
    sort_type
) => async dispatch => {
    try {
        let { data } = await instance.get(`/api/AgencyGarage/AgencyGarage?PageIndex=${providers_page_index}&PageSize=${providers_per_page}&SearchText=${search_text}&SearchOption=${search_option}&SortType=${sort_type}&SortName=${sort_name}&ProviderTypeId=${providerTypeId}`);
        dispatch({
            type: SET_PAGINATED_REQUEST,
            payload: {
                list: data.AgencyGarage,
                count: data.Count
            }
        });
    } catch (error) {
        console.log(error);
    }
}

export const HandleTableInputValue = ({ name, value }) => (dispatch) => {
    try {
        console.log("new name: ", name)
        console.log("new index: ", value)
        dispatch({
            type: PROVIDERS_LIST_TABLE_DATA_CHANGE,
            payload: { name, value },
        });
    } catch (err) {
        console.log("err", err);
    }
};