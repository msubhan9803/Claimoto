import { CHANGE_TAB, CLEAR_INPUT_VALUES_USER_SCREEN, SET_INPUT_VALUES_USER_SCREEN, SET_INPUT_VALUES_ACCESS_GROUP_SCREEN } from '../../types/users';
import RoleList from 'components/Admin/RoleManage/RoleList';
import UserList from 'components/Admin/UserManage/UserList';
import AccessGroupList from 'components/Admin/AccessManage/AccessGroupList';

const initialState = {
    tabs: [
        {
            label: "Members",
            id: "ltn__tab_3_1",
            name: "members",
            component: <UserList />
        },
        {
            label: "User roles",
            id: "ltn__tab_3_2",
            name: "user_roles",
            component: <RoleList />
        },
        {
            label: "Access Management",
            id: "ltn__tab_3_3",
            name: "access_management",
            component: <AccessGroupList />
        }
    ],
    selectedTab: "members",
    userValues: {
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        access_role: "",
        access_group:"",
    },
    accessValues:{
        access_role:"",
        name:"",
        module
    },
    modules: [
        {
            name:"Products",
            id:1,
            role_id:1
        }
    ],
    actions:[
        {
            name:"Add",
            status:true,
            module_id:1,
            id:1,
            disabled:false
        },
        {
            name:"Edit",
            status:false,
            module_id:1,
            id:2,
            disabled:true
        },
        {
            name:"Delete",
            status:false,
            module_id:1,
            id:3,
            disabled:true
        },
        {
            name:"View",
            status:true,
            module_id:1,
            id:4,
            disabled:false
        },
        {
            name:"View Details",
            status:true,
            module_id:1,
            id:5,
            disabled:false
        }

    ],
    users: [
        {
            name: "Ahmad Housam",
            id: 1,
            email: "yasminali@claimoto.com",
            mobile_number: "079 079 1189",
            role: 1,
            status: true
        },
        {
            name: "Jahanzaib Ahmad",
            id: 2,
            email: "jehanxaibahmed@claimoto.com",
            mobile_number: "03337767438",
            role: 1,
            status: false
        },

    ],
    roles: [
        {
            id: 1,
            name: "Administrator",
            modifyBy: "admin@claimoto.com",
            modifyAt: new Date(),
            status: true
        },
        {
            id: 2,
            name: "Insurance Agent",
            modifyBy: "agent@claimoto.com",
            modifyAt: new Date(),
            status: true
        },
        {
            id: 3,
            name: "Replacement",
            modifyBy: "replacement@claimoto.com",
            modifyAt: new Date(),
            status: true
        },
        {
            id: 4,
            name: "surveyor",
            modifyBy: "surveyor@claimoto.com",
            modifyAt: new Date(),
            status: true
        },
        {
            id: 5,
            name: "Customer",
            modifyBy: "customer@claimoto.com",
            modifyAt: new Date(),
            status: true
        }

    ],
    access_groups:[
        {
            name:"Access Group 1",
            id:1,
            role_id:1
        },
        {
            name:"Access Group 2",
            id:2,
            role_id:2
        },
        {
            name:"Access Group 3",
            id:3,
            role_id:3
        },
        {
            name:"Access Group 4",
            id:4,
            role_id:1
        },
        {
            name:"Access Group 5",
            id:5,
            role_id:4
        },

    ],
    access_groups_role:[],
    modules_role:[],
    modules_actions:[]
};


const usersScreenReducer = (state = initialState, action) => {
    switch (action.type) {

        case CHANGE_TAB: {
            return { ...state, selectedTab: action.payload }
        }

        case SET_INPUT_VALUES_USER_SCREEN: {
            const { name, value } = action.payload;
            return {
                ...state,
                access_groups_role:name === "access_role" ? state.access_groups.filter(ag=>ag.role_id === parseInt(value)) : state.access_groups_role,
                userValues: {
                    ...state.userValues,
                    [name]: value
                }
            }
        }

        case CLEAR_INPUT_VALUES_USER_SCREEN : {
            return {
                ...state,
                userValues: initialState.userValues
            }
        }

        case SET_INPUT_VALUES_ACCESS_GROUP_SCREEN : {
            const { name, value } = action.payload;
            if(name === "actions"){
                let indexOfAction = state.actions.findIndex(act=>act.id === parseInt(value));
                let actions = state.actions;
                actions[indexOfAction].status = !actions[indexOfAction].status;
                return { 
                    ...state,
                    actions
                }
            }
            else {
            return {
                ...state,
                modules_role:name === "access_role" ? state.modules.filter(mod=>mod.role_id === parseInt(value.value)) : state.modules_role,
                modules_actions:name === "module" ? state.actions.filter(act=>act.module_id === parseInt(value.value)) : state.modules_actions,
                accessValues: {
                    ...state.accessValues,
                    [name]: value,
                    module: name === "access_role" ? initialState.accessValues.module : name === "module" ? value : state.accessValues.module
                }
            }
        }
        }

        default:
            return { ...state };
    }
}

export default usersScreenReducer;
