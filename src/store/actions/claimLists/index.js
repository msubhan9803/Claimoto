import instance from "config/axios/instance";
import { SweetAlert, successAlert } from "functions";
import {
    SET_PAGINATED_REQUEST_CLAIM_LIST,
    CHANGE_HANDLER_PROVIDER,
    CLAIM_LIST_SWITCHED_TABLE_DATA_CHANGE,
    CLEAR_PROVIDER_LIST_DATA
} from "store/types/claimList";

// Get paginated Agencies, Garages & Surveyors list
export const SetPaginatedAgenciesGarages = (
    providers_per_page,
    providers_page_index,
    search_text,
    search_option,
    sort_name,
    sort_type
) => async dispatch => {
    try {
        let { data } = await instance.get(`/api/Claims/AllClaims?PageIndex=${providers_page_index}&PageSize=${providers_per_page}&SearchText=${search_text}&SearchOption=${search_option}&SortType=${sort_type}&SortName=${sort_name}`);
        dispatch({
            type: SET_PAGINATED_REQUEST_CLAIM_LIST,
            payload: {
                list: data.AllClaims,
                count: data.Count
            }
        });
    } catch (error) {
        console.log(error);
    }
}

export const HandleTableInputValue = ({ name, value }) => (dispatch) => {
    try {
        dispatch({
            type: CLAIM_LIST_SWITCHED_TABLE_DATA_CHANGE,
            payload: { name, value },
        });
    } catch (err) {
        console.log("err", err);
    }
};

export const ClearProviderListData = () => (dispatch) => {
    try {
        dispatch({
            type: CLEAR_PROVIDER_LIST_DATA
        });
    } catch (err) {
        console.log("err", err);
    }
};