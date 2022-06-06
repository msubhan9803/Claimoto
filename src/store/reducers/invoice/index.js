import Invoices from 'components/ClaimOffice/Invoice/Invoices';
import ServiceListAdmin from 'components/ClaimOffice/Invoice/ServiceListAdmin';
import StatementOfAccount from 'components/ClaimOffice/Invoice/StatementOfAccount';
import {
    CHANGE_TAB,
    //Request
    GET_REQUEST,
    //Handle Change
    SET_INPUT_VALUES_INVOICE_SCREEN,
    CHANGE_HANDLER_INVOICE
} from '../../types/invoice';

const initialState = {

    tabs: [
        // {
        //     label: "Service List Admin",
        //     id: "ltn__tab_3_1",
        //     name: "service%20List",
        //     component: <ServiceListAdmin />,
        //     short: "SL"
        // },
        {
            label: "Statement of Account",
            id: "ltn__tab_3_2",
            name: "State%20of%20Account",
            component: <StatementOfAccount />,
            short: "SOA"
        },
        {
            label: "Invoice",
            id: "ltn__tab_3_3",
            name: "invoice",
            component: <Invoices />,
            short: "INV"
        },
    ],


    selectedTab: 0,


    service_list: {
        list: [],
        records_per_page: 10,
        page_index: 1,
        count: 0,
        loading: false
    },
    state_of_account: {
        list: [],
        records_per_page: 10,
        page_index: 1,
        count: 0,
        loading: false
    },
    invoice: {
        list: [],
        records_per_page: 10,
        page_index: 1,
        count: 0,
        loading: false
    },


    search_options: [
        {
            label: "Name",
            value: "name",
        },
        {
            label: "POC",
            value: "pocname",
        },
        {
            label: "Mobile",
            value: "contactnumber",
        },
        {
            label: "Address",
            value: "Garageaddress"
        }
    ],


    search_option: "",
    search_text: "",
    sort_type: "asc",
    sort_name: "",



};


const invoiceScreenReducer = (state = initialState, action) => {
    switch (action.type) {

        case CHANGE_TAB: {
            return { ...state, selectedTab: action.payload }
        }
            break;

        case CHANGE_HANDLER_INVOICE: {
            let { modeule, key, val } = action.payload;
            return {
                ...state,
                [modeule]:
                {
                    ...state[modeule],
                    [key]: val,
                }
            }
        }
            break;




        case GET_REQUEST: {
            let { modeule, bool, list } = action.payload;
            return {
                ...state,
                [modeule]:
                {
                    ...state[modeule],
                    loading: bool,
                    list
                }
            }
        }
            break;



        case SET_INPUT_VALUES_INVOICE_SCREEN: {
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

export default invoiceScreenReducer;
