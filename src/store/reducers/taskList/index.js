import {
    CHANGE_TAB,
    CHANGE_HANDLER_RULES,
} from '../../types/rules';

import { SET_TASKS_BY_DND, GET_MY_TASKS_REQUEST, GET_MY_TASKS, GET_PENDING_TASKS_REQUEST, GET_PENDING_TASKS, SET_CLAIM_STATUSES, CHANGE_ROOT_TASKS_SCREEN } from "store/types/tasks";


import MyTaskList from 'components/ClaimOffice/Tasks/MyTasks';
import PendingTaskList from 'components/ClaimOffice/Tasks/PendingTasks';
import CompletedTaskList from 'components/ClaimOffice/Tasks/CompletedTasks';



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
            label: "Pending & Follow-up Tasks",
            id: "ltn__tab_3_2",
            name: "pending_task",
            component: <PendingTaskList />,
            short: "Pending Tasks"
        },
        {
            label: "Completed Tasks",
            id: "ltn__tab_3_3",
            name: "complete_task",
            component: <CompletedTaskList />,
            short: "Completed Tasks"
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
            label: "Policy Id",
            value: "PolicyId",
        },
        {
            label: "Claim Id",
            value: "ClaimId",
        },
        {
            label: "Claim Type",
            value: "ClaimTypeName",
        },
        // {
        //     label: "Incident Date",
        //     value: "IncidentDate",
        // },
        {
            label: "Car Number",
            value: "CarNo",

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


        case CHANGE_ROOT_TASKS_SCREEN: {
            let { key, val } = action.payload;

            return {
                ...state,
                [key]: val,
            }
        }
            break;




        default:
            return { ...state };
    }
}

export default taskListScreenReducer;
