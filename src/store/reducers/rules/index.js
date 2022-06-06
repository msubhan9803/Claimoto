import {
    CHANGE_TAB,
    //Request
    GET_REQUEST_RULES,
    //Handle Change
    CHANGE_HANDLER_RULES,
    SET_INPUT_VALUES_RULES_SCREEN,
    SET_ADD_RULE_ROOT_VALUES,
    //GET
    GET_INITIAL,
    GET_AFTER

} from '../../types/rules';


import InitialRuleList from 'components/Admin/Rules/InitialRuleList';
import AfterRuleList from 'components/Admin/Rules/AfterRuleList';

const initialState = {

    tabs: [
        {
            label: "Initial Assessment",
            id: "ltn__tab_3_1",
            name: "init_assessment",
            component: <InitialRuleList />,
            short: "RIA"
        },
        {
            label: "After Assessment",
            id: "ltn__tab_3_2",
            name: "after_assessment",
            component: <AfterRuleList />,
            short: "RAA"
        },
    ],


    selectedTab: 0,


    initials: {
        list: [],
        records_per_page: 10,
        page_index: 1,
        count: 0,
        loading: false
    },
    afters: {
        list: [],
        records_per_page: 10,
        page_index: 1,
        count: 0,
        loading: false
    },

    search_options: [
        {
            label: "Name",
            value: "Name",
        },
        {
            label: "Amount",
            value: "amount",
        }
    ],


    search_option: "",
    search_text: "",
    sort_type: "asc",
    sort_name: "",



};


const rulesScreenReducer = (state = initialState, action) => {
    switch (action.type) {

        case CHANGE_TAB: {
            return { ...state, selectedTab: action.payload }
        }
            break;

        case CHANGE_HANDLER_RULES: {
            let { module, key, val } = action.payload;
            return {
                ...state,
                [module]:
                {
                    ...state[module],
                    [key]: val,
                }
            }
        }
            break;




        case GET_REQUEST_RULES: {
            let { module, bool, list } = action.payload;
            return {
                ...state,
                [module]:
                {
                    ...state[module],
                    loading: bool,
                    list
                }
            }
        }
            break;

        case GET_INITIAL: {
            const { Records, TotalRecord } = action.payload;
            return {
                ...state,
                initials:
                {
                    ...state.initials,
                    list: Records || [],
                    count: TotalRecord || 0,
                    loading: false
                }
            }
        }
            break;

        case GET_AFTER: {
            const { Records, TotalRecord } = action.payload;
            return {
                ...state,
                afters:
                {
                    ...state.afters,
                    list: Records || [],
                    count: TotalRecord || 0,
                    loading: false
                }
            }
        }
            break;

        case SET_ADD_RULE_ROOT_VALUES: {
            const { name, value } = action.payload;
            return {
                ...state,
                [name]: value,
            }
        }
            break;


        default:
            return { ...state };
    }
}

export default rulesScreenReducer;
