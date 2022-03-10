import {
    CLEAR_ADD_RULE_STATE,
    HANDLE_CHANGE_RULES,
    GET_INIT_RULE_MAKES,
    GET_INIT_RULE_MODELS,
    GET_INIT_RULE_PRODUCTS,
    GET_INIT_RULE_USERS
} from '../../types/rules';

const initialState = {

    initials: {
        makes: [],
        models: [],
        users: [],
        values: {
            name: "Test",
            make: {},
            model: {},
            from: "",
            to: "",
            garage: false,
            agency: false,
            selected_products: [
                {}
            ],
            user: {},
            remarks: ""
        }
    },
    afters: {
        services: [],
        users: [],
        values: {
            name: "",
            type: "",
            from: 0,
            to: 0,
            sevice_type: "",
            assign_to: "",
            user: {},
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

        default:
            return { ...state };
            break
    }

}

export default addRuleScreenReducer;
