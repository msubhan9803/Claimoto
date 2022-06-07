import instance from "config/axios/instance";
import { SweetAlert, successAlert } from "functions";
import {
    SET_PAGINATED_REQUEST,
    SET_PAGINATED_REQUEST_AGENCY,
    SET_PAGINATED_REQUEST_GARAGE,
    SET_PAGINATED_REQUEST_SURVEYOR,
    CHANGE_HANDLER_PROVIDER,
    PROVIDERS_LIST_TABLE_DATA_CHANGE,
    CLEAR_PROVIDER_LIST_DATA
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
        let sortNameTemp = "";
        if (sort_name === "Surveyor" || sort_name === "Garage") {
            sortNameTemp = "Name";
        } else {
            sortNameTemp = sort_name;
        }

        let sortOptionTemp = "";
        if (search_option === "Surveyor" || search_option === "Garage") {
            sortOptionTemp = "Name";
        } else {
            sortOptionTemp = search_option;
        }

        let { data } = await instance.get(`/api/AgencyGarage/AgencyGarage?PageIndex=${providers_page_index}&PageSize=${providers_per_page}&SearchText=${search_text}&SearchOption=${sortOptionTemp}&SortType=${sort_type}&SortName=${sortNameTemp}&ProviderTypeId=${providerTypeId}`);

        let type = "";
        if (providerTypeId === 1) {
            type = SET_PAGINATED_REQUEST_GARAGE;
        } else if (providerTypeId === 2) {
            type = SET_PAGINATED_REQUEST_AGENCY;
        } else if (providerTypeId === 4) {
            type = SET_PAGINATED_REQUEST_SURVEYOR;
        }
        dispatch({
            type: type,
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
        dispatch({
            type: PROVIDERS_LIST_TABLE_DATA_CHANGE,
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