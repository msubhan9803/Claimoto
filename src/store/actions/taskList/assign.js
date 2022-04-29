//ACTION TYPES
import instance from 'config/axios/instance';
import { successAlert } from 'functions';
import {
    CHANGE_HANDLER_ASSIGN_PROVIDER,
    //Get Providers
    GET_ASSIGN_PROVIDER,
    //Request
    GET_ASSIGN_PROVIDER_REQUEST,
    //Save Provider Details
    // SET_ASSIGN_PROVIDER_DETAILS,
    // SET_ASSIGN_PROVIDER_DETAILS_REQUEST,
    //Handle Change
    SET_INPUT_VALUES_ASSIGN_PROVIDER_SCREEN,


    GET_ASSIGN_PROVIDER_BRANCH,
    GET_ASSIGN_PROVIDER_BRANCH_REQUEST

} from '../../types/claims';




export const changeHandlerAssignProvider = ({modeule, key, val}) => async dispatch => {
    dispatch({ type: CHANGE_HANDLER_ASSIGN_PROVIDER, payload: {modeule, key, val} });
}



// Root Getters
export const getAssignProvider = ({ provider_id ,records_per_page, page_index, search_text, search_option, sort_name, sort_type }) => async dispatch => {
    try {
        let ProviderTypeId = provider_id;
        search_option = search_text.length < 3 ?  "" : search_option;
        dispatch({ type: GET_ASSIGN_PROVIDER_REQUEST, payload: { modeule: "garages", bool: true, list: [] } });
        let { data } = await instance.get(`api/AgencyGarage/AgencyGarage?PageIndex=${page_index}&PageSize=${records_per_page}&SearchText=${search_text}&SearchOption=${search_option}&SortType=${sort_type}&SortName=${sort_name}&ProviderTypeId=${ProviderTypeId}`);
        dispatch({
            type: GET_ASSIGN_PROVIDER,
            payload: data
        });
    } catch (error) {
        dispatch({ type: GET_ASSIGN_PROVIDER_REQUEST, payload: { modeule: "record", bool: false, list: [] } });
        console.log(error);
    }
}


export const getAssignProviderBranches = ({ provider_id }) => async dispatch => {
    try {
        let ProviderTypeId = provider_id;
        dispatch({ type: GET_ASSIGN_PROVIDER_BRANCH_REQUEST, payload: { modeule: "record_branches", bool: true, list: [] } });
        let {data} = await instance.get(`api/AgencyGarage/ProviderBranches?Id=${ProviderTypeId}`);
        dispatch({
            type: GET_ASSIGN_PROVIDER_BRANCH,
            payload: data
        });
    } catch (error) {
        dispatch({ type: GET_ASSIGN_PROVIDER_BRANCH_REQUEST, payload: { modeule: "record_branches", bool: false, list: [] } });
        console.log(error);
    }
}



export const assignClaimToBranch = (payload) => async dispatch => {
    try {
        let { data } = await instance.post("/api/AgencyGarage/AgencyGarage", payload);
        successAlert({title:"Claim Assigned Successfully"});
        
    } catch (error) {
        console.log(error);
    }
}





// export const setAssignProviderDetails = (id) => async dispatch => {
//     try {
//         dispatch({ type: SET_ASSIGN_PROVIDER_DETAILS_REQUEST, payload: { user_loading: true } });

//         let { data } = await instance.get(`/api/Provider/ProviderByID?Id=${id}`);
//         dispatch({
//             type: SET_ASSIGN_PROVIDER_DETAILS,
//             payload: data
//         })
//     } catch (error) {
//         dispatch({ type: SET_ASSIGN_PROVIDER_DETAILS_REQUEST, payload: { user_loading: false } });
//         console.log(error);
//     }
// }


//handle Change

export const handleAssignProviderInputValue = ({ name, value, compnnt }) => dispatch => {

    try {
        dispatch({
            type: SET_INPUT_VALUES_ASSIGN_PROVIDER_SCREEN,
            payload: { name, value }
        })

    }
    catch (error) {
        console.log("err", error)
    }
}
