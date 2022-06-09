import {
    SET_DASHBOARD_TASK_LIST,
    CHANGE_TAB,
    CHANGE_HANDLER_RULES
} from '../../types/claimDashboard.js';

const initialState = {
    tabs: [
        {
            id: 0,
            label: "All",
            name: "all_tasks",
            className: "ltn__tab_3_1",
        },
        {
            id: 1,
            label: "Pending",
            name: "pending",
            className: "ltn__tab_3_2",
        },
        {
            id: 2,
            label: "In progress",
            name: "in_progress",
            className: "ltn__tab_3_3",
        },
        {
            id: 3,
            label: "Under assesment",
            name: "under_assesment",
            className: "ltn__tab_3_4",
        },
        {
            id: 4,
            label: "Under repair",
            name: "under_repair",
            className: "ltn__tab_3_5",
        },
        {
            id: 5,
            label: "Ready for delivery",
            name: "ready_for_delivery",
            className: "ltn__tab_3_6",
        },
    ],
    selectedTab: 0,
    taskList: []
};

const claimDashboardScreenReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DASHBOARD_TASK_LIST: {
            return { ...state, task_status: action.payload }
        }

        case CHANGE_TAB: {
            return { ...state, selectedTab: action.payload }
        }

        default:
            return { ...state };
    }
}

export default claimDashboardScreenReducer;