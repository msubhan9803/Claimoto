import {
    CLEAR_ADD_RULE_STATE,
    HANDLE_CHANGE_RULES,
    SET_ADD_RULE_ROOT_VALUES,
    GET_INIT_RULE_MAKES,
    GET_INIT_RULE_MODELS,
    GET_INIT_RULE_PRODUCTS,
    GET_INIT_RULE_USERS,

    GET_AFTER_RULE_SERVICES,
    GET_AFTER_RULE_USERS,

    SET_AFTER_RULE_DETAILS,
    SET_INIT_RULE_DETAILS
} from '../../types/rules';

const initialState = {

    initials: {
        makes: [],
        models: [],
        users: [],
        products: [],
        values: {
            name: "",
            make: { label: "All", value: 0 },
            model: [{ label: "All Models", value: 0 }],
            from: "",
            to: "",
            garage: true,
            agency: false,
            selected_products: [{ label: "All Products", value: 0 }],
            user: null,
            remarks: ""
        }
    },
    afters: {
        services: [],
        users: [],
        values: {
            name: "",
            type: "claim",
            from: 2000,
            to: 2012,
            service_type: "include",
            selected_services: [{ label: "All Services", value: 0 }],
            assign_to: { label: "Auto", value: 1 },
            user: null,
            remarks: ""
        },

    },
    success: false,
    loading: false,
    rule_loading: false,
    edit_index: null,
    deleting: false

};


const addRuleScreenReducer = (state = initialState, action) => {
    switch (action.type) {

        case CLEAR_ADD_RULE_STATE: {
            return { ...initialState }
        }
            break;

        case HANDLE_CHANGE_RULES: {
            const { name, value, objName } = action.payload;
            return {
                ...state,
                [objName]: {
                    ...state[objName],
                    values: {
                        ...state[objName].values,
                        [name]: value
                    }
                }

            }
        }
            break;

        case GET_INIT_RULE_MAKES: {
            return {
                ...state, initials: {
                    ...state.initials,
                    makes: action.payload
                }
            };
        }
            break;

        case GET_INIT_RULE_MODELS: {
            return {
                ...state, initials: {
                    ...state.initials,
                    models: action.payload
                }
            };
        }
            break;

        case GET_INIT_RULE_PRODUCTS: {
            return {
                ...state, initials: {
                    ...state.initials,
                    products: action.payload
                }
            };
        }
            break;
        case GET_INIT_RULE_USERS: {
            return {
                ...state, initials: {
                    ...state.initials,
                    users: action.payload
                }
            };
        }
            break;





        case GET_AFTER_RULE_SERVICES: {
            return {
                ...state, afters: {
                    ...state.afters,
                    services: action.payload
                }
            };
        }
            break;


        case GET_AFTER_RULE_USERS: {
            return {
                ...state, afters: {
                    ...state.afters,
                    users: action.payload
                }
            };
        }
            break;

        case SET_ADD_RULE_ROOT_VALUES: {
            let { name, value } = action.payload;
            return {
                ...state,
                [name]: value
            };
        }
            break;

        case SET_INIT_RULE_DETAILS : {
            let payload = action.payload;
            let model = JSON.parse(payload.AM_Assign_ModelID);
            let selected_products = JSON.parse(payload.AM_Assign_Product);
            let make = JSON.parse(payload.AM_Assign_MakeID);
            let user = {label:`User ${payload?.AM_Assign_ToUser || ""}`, value:payload?.AM_Assign_ToUser || ""};
            return { 
                ...state,
                initials:{
                    ...state.initials,
                    values:{
                        ...state.initials.values,
                        name:payload?.AM_Assign_Name || "",
                        model,
                        selected_products,
                        make,
                        from:payload?.AM_Assign_YearFrom || "",
                        to:payload?.AM_Assign_YearTo || "",
                        user,
                        garage:(payload.AM_Assign_RepairOption === 3 || payload.AM_Assign_RepairOption === 2 ),
                        agency:(payload.AM_Assign_RepairOption === 3 || payload.AM_Assign_RepairOption === 1 ),
                        remarks:payload.AM_Assign_Details
                    }
                },
                edit_index:payload.AM_Assign_ID,
                rule_loading:false
            };
        }

        case SET_AFTER_RULE_DETAILS : {
            let payload = action.payload[0];
            let user = {label:`User ${payload?.AM_Assign_ToUser || ""}`, value:payload?.AM_Assign_ToUser || ""};
            let assign_to = payload.AM_Assess_AssignType ?{ label: "Auto", value: 1 }:{ label: "Manual", value: 2 };
            let selected_services = payload.AMatrixAssess_Service.map(srvs=> {return {label:`Service ${srvs.AMA_Service_Code}`, value:srvs.AMA_Service_Code}});
            let service_type = payload.AMatrixAssess_Service[0].AMA_Service_Type ? "include" : 'exclude';
            return { 
                ...state,
                afters:{
                    ...state.afters,
                    values:{
                        ...state.afters.values,
                        name:payload.AM_Assess_Name,
                        type:payload.AM_Assess_Type ? "claim" : "service",
                        from:payload.AM_Assess_AmountFrom,
                        to:payload.AM_Assess_AmountTo,
                        user,
                        assign_to,
                        selected_services,
                        service_type
                    }
                },
                edit_index:payload.AM_Assess_ID,
                rule_loading:false 
            };
        }

        default:
            return { ...state };
            break
    }

}

export default addRuleScreenReducer;
