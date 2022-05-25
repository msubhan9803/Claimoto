import {
    CHANGE_TAB,
    CHANGE_HANDLER_RULES,
} from '../../types/rules';

import { SET_TASKS_BY_DND, GET_MY_TASKS_REQUEST, GET_MY_TASKS, GET_PENDING_TASKS_REQUEST, GET_PENDING_TASKS, SET_CLAIM_STATUSES } from "store/types/tasks";


import MyTaskList from 'components/ClaimOffice/Tasks/MyTasks';
import PendingTaskList from 'components/ClaimOffice/Tasks/PendingTasks';



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
        loading_list: false,
        list: []
    },
    pending_tasks: {
        loading_list: false,
        list: []
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



    task_status: [

    ]


};


const taskListScreenReducer = (state = initialState, action) => {
    switch (action.type) {


        case SET_CLAIM_STATUSES: {
            return { ...state, task_status: action.payload }
        }

        case SET_TASKS_BY_DND: {
            return { ...state, [action.payload.screen]: action.payload.state }
        }


        case GET_MY_TASKS_REQUEST: {
            return {
                ...state,
                my_tasks: {
                    ...state.my_tasks,
                    ...action.payload
                }
            }
        }


        case GET_MY_TASKS: {
            return {
                ...state,
                my_tasks: {
                    ...state.my_tasks,
                    list: action.payload
                }
            }
        }


        case GET_PENDING_TASKS_REQUEST: {
            return {
                ...state,
                pending_tasks: {
                    ...state.pending_tasks,
                    ...action.payload
                }
            }
        }

        case GET_PENDING_TASKS: {
            return {
                ...state,
                pending_tasks: {
                    ...state.pending_tasks,
                    list: action.payload
                }
            }
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





        default:
            return { ...state };
    }
}

export default taskListScreenReducer;
