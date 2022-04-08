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

import { SET_TASKS_BY_DND } from "store/types/tasks";


import MyTaskList from 'components/ClaimOffice/Tasks/MyTasks';
import PendingTaskList from 'components/ClaimOffice/Tasks/PendingTasks';


const task1 = [

    {
        id: "5f8323416ecbb23bb434925363a",
        picture: "http://placehold.it/32x32",
        name: {
            first: "Vonda",
            last: "Nieves",
        },
    },
    {
        id: "5f832341eee23239783dfccbfa6d",
        picture: "http://placehold.it/32x32",
        name: {
            first: "Sheree",
            last: "Reynolds",
        },
    },
    {
        id: "5f832341c0b01316767eeade1b00",
        picture: "http://placehold.it/32x32",
        name: {
            first: "Lilian",
            last: "Russell",
        },
    },

];
const task2 = [
    {
        id: "5f832341ef54d5654da7b80930da",
        picture: "http://placehold.it/32x32",
        name: {
            first: "Nolan",
            last: "Bright",
        },
    },
    {
        id: "5f8323410a6b91564555385bd47d",
        picture: "http://placehold.it/32x32",
        name: {
            first: "Fran",
            last: "Buchanan",
        },
    },
];

const task3 = [
    {
        id: "5f832341daae2cc0af8610a4",
        picture: "http://placehold.it/32x32",
        name: {
            first: "Taylor",
            last: "Campos",
        },
    },
];
const task4 = [
    {
        id: "5f832341cc119a50d1adb972",
        picture: "http://placehold.it/32x32",
        name: {
            first: "Goff",
            last: "Robbins",
        },
    },
    {
        id: "5f832341434e1d0f20fc283177a",
        picture: "http://placehold.it/32x32",
        name: {
            first: "Pickett",
            last: "Burks",
        },
    },
];

const task5 = [
    {
        id: "5f832341cc119a50d1adb8787321321972",
        picture: "http://placehold.it/32x32",
        name: {
            first: "Goff",
            last: "Robbins",
        },
    },
    {
        id: "5f832341e1d0f20f4545c283177a",
        picture: "http://placehold.it/32x32",
        name: {
            first: "Pickett",
            last: "Burks",
        },
    },
];

const task6 = [
    {
        id: "5f832341cc119a50d143543123213adb972",
        picture: "http://placehold.it/32x32",
        name: {
            first: "Goff",
            last: "Robbins",
        },
    },
    {
        id: "5f832341e1d0f20fc28345345177a",
        picture: "http://placehold.it/32x32",
        name: {
            first: "Pickett",
            last: "Burks",
        },
    },
];


const initialState = {

    tabs: [
        {
            label: "My Tasks",
            id: "ltn__tab_3_1",
            name: "my_tasks",
            component: <MyTaskList />,
            short: "My Tasks"
        },
        {
            label: "Pending Tasks",
            id: "ltn__tab_3_2",
            name: "pending_task",
            component: <PendingTaskList />,
            short: "Pending Tasks"
        },
    ],


    selectedTab: 0,


    my_tasks: {
        task1: task1,
        task2: task2,
        task3: task3,
        task4: task4,
        task5: task5,
        task6: task6,
    },
    pending_tasks: {
        task1: task2,
        task2: task1,
        task3: task4,
        task4: task3,
    },
    my_tasks_column_names: ["New Claims", "Appeal Claims", "Assessed by Garage/Agency", "Revision During Repair", "Scheduled Calls", "Replacement Cars" ],
    pending_tasks_column_names: ["Todo Claims", "Over Due Claims", "In Progress Claims", "Closed Claims"],
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


const taskListScreenReducer = (state = initialState, action) => {
    switch (action.type) {


        case SET_TASKS_BY_DND : {
            return { ...state, [action.payload.screen]: action.payload.state }
        }
        
        case CHANGE_TAB: {
            return { ...state, selectedTab: action.payload }
        }
            break;

        case CHANGE_HANDLER_RULES: {
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




        case GET_REQUEST_RULES: {
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

export default taskListScreenReducer;
