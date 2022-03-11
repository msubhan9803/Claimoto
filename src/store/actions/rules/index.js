//ACTION TYPES
import instance from 'config/axios/instance';
import { successAlert } from 'functions';
import { HANDLE_CHANGE_RULES } from 'store/types/rules';
import { CLEAR_ADD_RULE_STATE } from 'store/types/rules';
import {
    CHANGE_HANDLER_RULES,
    CHANGE_TAB,
    //Request
    GET_REQUEST_RULES,
    //Handle Change
    SET_INPUT_VALUES_RULES_SCREEN,
    SET_ADD_RULE_ROOT_VALUES,
    //GET
    GET_INITIAL,
    GET_AFTER,
    //GET ROOT
    GET_INIT_RULE_MAKES,
    GET_INIT_RULE_MODELS,
    GET_INIT_RULE_PRODUCTS,
    GET_INIT_RULE_USERS,

    GET_AFTER_RULE_SERVICES,
    GET_AFTER_RULE_USERS,

    SET_AFTER_RULE_DETAILS,
    SET_INIT_RULE_DETAILS
} from "store/types/rules";

export const getInitials = ({ records_per_page, page_index, search_text, search_option, sort_name, sort_type }) => async dispatch => {
    try {
        dispatch({ type: GET_REQUEST_RULES, payload: { modeule: "initials", bool: true, list: [] } });
        // let { data } = await instance.get(`/api/Provider/Pagination?PageIndex=${page_index}&PageSize=${records_per_page}&SearchText=${search_text}&SearchOption=${search_option}&SortType=${sort_type}&SortName=${sort_name}`);
        let { data } = await instance.get(`/api/AuthorityMatrix/AuthorityMatrixs`);
        let Records = data ; let TotalRecord = 0;
        dispatch({
            type: GET_INITIAL,
            payload: {Records, TotalRecord}
        });
    } catch (error) {
        dispatch({ type: GET_REQUEST_RULES, payload: { modeule: "initials", bool: false, list: [] } });
        console.log(error);
    }
}


export const getAfters = ({ records_per_page, page_index, search_text, search_option, sort_name, sort_type }) => async dispatch => {
    try {
        dispatch({ type: GET_REQUEST_RULES, payload: { modeule: "afters", bool: true, list: [] } });
        // let { data } = await instance.get(`/api/Provider/Pagination?PageIndex=${page_index}&PageSize=${records_per_page}&SearchText=${search_text}&SearchOption=${search_option}&SortType=${sort_type}&SortName=${sort_name}`);
        let { data } = await instance.get(`/api/AuthorityMatrix/AuthorityMatrixsAssess`);
        let Records = data ; let TotalRecord = 0;
        dispatch({
            type: GET_AFTER,
            payload: {Records, TotalRecord}
        });
    } catch (error) {
        dispatch({ type: GET_REQUEST_RULES, payload: { modeule: "afters", bool: false, list: [] } });
        console.log(error);
    }
}


export const changeHandlerRule = ({ modeule, key, val }) => async dispatch => {
    dispatch({ type: CHANGE_HANDLER_RULES, payload: { modeule, key, val } });
}



//handle Change

export const handleRulesInputValue = ({ name, value, compnnt }) => dispatch => {

    try {
        dispatch({
            type: SET_INPUT_VALUES_RULES_SCREEN,
            payload: { name, value }
        })

    }
    catch (error) {
        console.log("err", error)
    }
}




//handle Change

export const handleAddRulesInputValue = ({ name, value, objName }) => dispatch => {

    try {
        dispatch({
            type: HANDLE_CHANGE_RULES,
            payload: { name, value, objName }
        })

    }
    catch (error) {
        console.log("err", error)
    }
}




//handle Change

export const clearAddRuleState = () => dispatch => {

    try {
        dispatch({
            type: CLEAR_ADD_RULE_STATE,
        })

    }
    catch (error) {
        console.log("err", error)
    }
}




export const getMakes = (text) => async dispatch => {
    try {
        let { data } = await instance.get(`/api/AuthorityMatrix/Make?SearchText=${text}`);
        dispatch({
            type: GET_INIT_RULE_MAKES,
            payload: data
        });
    } catch (error) {
        console.log(error);
    }
}


export const getModels = (text, id) => async dispatch => {
    try {
        let { data } = await instance.get(`/api/AuthorityMatrix/Model?SearchText=${text}&Id=${id}`);
        dispatch({
            type: GET_INIT_RULE_MODELS,
            payload: data
        });
    } catch (error) {
        console.log(error);
    }

}


export const getProducts = (text) => async dispatch => {
    try {
        let { data } = await instance.get(`/api/AuthorityMatrix/Products?SearchText=${text}`);
        dispatch({
            type: GET_INIT_RULE_PRODUCTS,
            payload: data
        });
    } catch (error) {
        console.log(error);
    }
}



export const getUsers = (text) => async dispatch => {
    try {
        let { data } = await instance.get(`/api/AuthorityMatrix/UserProfiles?SearchText=${text}`);
        dispatch({ type: GET_INIT_RULE_USERS, payload: data });
        dispatch({ type: GET_AFTER_RULE_USERS, payload: data });
    } catch (error) {
        console.log(error);
    }
}


export const getServices = (text) => async dispatch => {
    try {
        let { data } = await instance.get(`/api/AuthorityMatrix/Services?SearchText=${text}`);
        dispatch({ type: GET_AFTER_RULE_SERVICES, payload: data });
    } catch (error) {
        console.log(error);
    }
}


export const save_initial = (values, navigate) => async dispatch => {
    try {
        let id = values?.id || 0;
        let payload = {
            "AM_Assign_ID": id,
            "AM_Assign_Name": values?.name || "",
            "AM_Assign_Details": values?.remarks || "",
            "AM_Assign_MakeID": JSON.stringify(values?.make),
            "AM_Assign_ModelID": JSON.stringify(values?.model || []),
            "AM_Assign_YearFrom": values?.from | "",
            "AM_Assign_YearTo": values?.to || "",
            "AM_Assign_Product": JSON.stringify(values?.selected_products|| []),
            "AM_Assign_RepairOption": (values.garage && values?.agency) ? 3 : values.garage ? 2 : values.agency ? 1 : null,
            "AM_Assign_ToUser": values?.user.value,
        };
        let { data } = id ? await instance.put(`/api/AuthorityMatrix/AuthorityMatrix`, payload) : await instance.post(`/api/AuthorityMatrix/AuthorityMatrix`, payload);
        successAlert({ title: "Success", text: data })
        navigate('/admin/rules');
    } catch (error) {
        console.log(error);
    }
}



export const save_after = (values, navigate) => async dispatch => {
    try {
        let id = values?.id || 0;
        let payload = {
            "AM_Assess_ID": id,
            "AM_Assess_Name": values?.name || "",
            "AM_Assess_Details": values?.remarks || "",
            "AM_Assess_Type": values?.type === "claim" ? true : false,
            "AM_Assess_AmountFrom": values?.from || "",
            "AM_Assess_AmountTo": values?.to || "",
            "AM_Assess_AssignType": values?.assign_to.value === 1 ? true : false,
            "AM_Assess_AssignUser": JSON.stringify(values?.user) || null,
            "AMatrixAssess_Service": values?.selected_services?.map(servs => { return { "AMA_Service_Code": servs.value, "AMA_Service_Type": values?.service_type === "include", } }) || []
        };
        let { data } = id ? await instance.put(`/api/AuthorityMatrix/AfterInitialAssessment`, payload) : await instance.post(`/api/AuthorityMatrix/InitialAssessment`, payload);
        successAlert({ title: "Success", text: data })
        navigate('/admin/rules');
    } catch (error) {
        console.log(error);
    }
}



export const getInitRuleDetails = (id) => async dispatch => {
    try {
        dispatch({type:SET_ADD_RULE_ROOT_VALUES, payload:{name:'rule_loading',value:true}})
        let { data } = await instance.get(`/api/AuthorityMatrix/AuthorityMatrixId?Id=${id}`);
        dispatch({type: SET_INIT_RULE_DETAILS, payload:data})

    } catch (error) {
        dispatch({type:SET_ADD_RULE_ROOT_VALUES, payload:{name:'rule_loading',value:false}})
        console.log(error);
    }
}





export const getAfterRuleDetails = (id) => async dispatch => {
    try {
        dispatch({type:SET_ADD_RULE_ROOT_VALUES, payload:{name:'rule_loading',value:true}})
        let { data } = await instance.get(`/api/AuthorityMatrix/AuthorityMatrixAssessId?Id=${id}`);
        dispatch({type: SET_AFTER_RULE_DETAILS, payload:data});
        
    } catch (error) {
        dispatch({type:SET_ADD_RULE_ROOT_VALUES, payload:{name:'rule_loading',value:false}})
        console.log(error);
    }
}



export const deleteRule = (navigate, id, type) => async dispatch => {
    try {
        dispatch({type:SET_ADD_RULE_ROOT_VALUES, payload:{name:'deleting',value:true}})
        let { data } =  type === "1" ? await instance.delete(`/api/AuthorityMatrix/AuthorityMatrix?Id=${id}`) : await instance.delete(`/api/AuthorityMatrix/AuthorityMatrixAssess?Id=${id}`);
        dispatch({type:SET_ADD_RULE_ROOT_VALUES, payload:{name:'deleting',value:false}})
        successAlert({ title: "Success", text: data })
        navigate('/admin/rules');
    } catch (error) {
        dispatch({type:SET_ADD_RULE_ROOT_VALUES, payload:{name:'deleting',value:false}})
        console.log(error);
    }
}

