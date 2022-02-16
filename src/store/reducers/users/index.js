import { CHANGE_TAB, CLEAR_INPUT_VALUES_USER_SCREEN, SET_INPUT_VALUES_USER_SCREEN, SET_INPUT_VALUES_ACCESS_GROUP_SCREEN, SET_ROLES, SET_ACCESS_GROUPS, SET_MODULES, SET_USERS, SET_USER_DETAILS } from '../../types/users';
import RoleList from 'components/Admin/RoleManage/RoleList';
import UserList from 'components/Admin/UserManage/UserList';
import AccessGroupList from 'components/Admin/AccessManage/AccessGroupList';



import Img from 'assets/img/testimonial/1.jpg';

const initialState = {
    tabs: [
        {
            label: "Members",
            id: "ltn__tab_3_1",
            name: "members",
            component: <UserList />,
            short:"Members"
        },
        {
            label: "User roles",
            id: "ltn__tab_3_2",
            name: "user_roles",
            component: <RoleList />,
            short:"Roles"
        },
        {
            label: "Access Groups",
            id: "ltn__tab_3_3",
            name: "access_management",
            component: <AccessGroupList />,
            short:"Groups"
        }
    ],
    selectedTab: 0,
    userValues: {
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        access_role: "",
        access_group: [],
        selected_image: "",
        password:"",
        confirm_password:""
    },
    accessValues: {
        access_group: "",
        name: "",
        modules: [],
        module: ""
    },
    modules: [],
    actions: [
        {
            name: "Add Product",
            status: true,
            module_id: 1,
            id: 1,
            disabled: false
        },
        {
            name: "Edit Product",
            status: false,
            module_id: 1,
            id: 2,
            disabled: true
        },
        {
            name: "Delete Product",
            status: false,
            module_id: 1,
            id: 3,
            disabled: true
        },
        {
            name: "View Product",
            status: true,
            module_id: 1,
            id: 4,
            disabled: false
        },
        {
            name: "View Details",
            status: true,
            module_id: 1,
            id: 5,
            disabled: false
        },
        {
            name: "Add Policy",
            status: true,
            module_id: 2,
            id: 6,
            disabled: false
        },
        {
            name: "Edit Policy",
            status: false,
            module_id: 2,
            id: 7,
            disabled: true
        },
        {
            name: "Delete Policy",
            status: false,
            module_id: 2,
            id: 8,
            disabled: true
        },
        {
            name: "View Policy",
            status: true,
            module_id: 2,
            id: 9,
            disabled: false
        },
        {
            name: "View Details",
            status: true,
            module_id: 2,
            id: 10,
            disabled: false
        }

    ],
    users: [],
    roles: [],
    access_groups: [],
    modules_access_groups: [],
    modules_actions: []
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
                userValues: {
                    ...state.userValues,
                    [name]: value,
                    access_group: name === "access_role" ? initialState.userValues.access_group : name === "access_group" ? value : state.userValues.access_group,

                }
            }
        }

        case CLEAR_INPUT_VALUES_USER_SCREEN: {
            return {
                ...state,
                userValues: initialState.userValues
            }
        }

        case SET_INPUT_VALUES_ACCESS_GROUP_SCREEN: {
            const { name, value } = action.payload;
            if (name === "actions") {
                let indexOfAction = state.actions.findIndex(act => act.id === parseInt(value));
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
                    modules_actions: name === "module" ? state.actions.filter(act => act.module_id === parseInt(value.value)) : state.modules_actions,
                    accessValues: {
                        ...state.accessValues,
                        [name]: value,
                        modules: name === "access_group" ? initialState.accessValues.modules : name === "modules" ? value : state.accessValues.modules,
                        // module: name === "access_group" ? initialState.accessValues.module : name === "module" ? value : state.accessValues.module
                    }
                }
            }
        }

        case SET_ROLES: {
            return {
                ...state,
                roles: action.payload
            }
        }

        case SET_ACCESS_GROUPS: {
            return {
                ...state,
                access_groups: action.payload
            }
        }


        case SET_MODULES: {
            return {
                ...state,
                modules_access_groups: action.payload
            }
        }

        case SET_USERS: {
            return {
                ...state,
                users: action.payload
            }
        }

        case SET_USER_DETAILS: {
            let user_details = action.payload;
            if (user_details) {
                let role = state.roles.find(role => role.RoleId === parseInt(user_details.RoleId));
                return {
                    ...state,
                    userValues: {
                        first_name: user_details.FirstName,
                        last_name: user_details.LastName,
                        phone: user_details.MobileNo,
                        email: user_details.Email,
                        access_role: { label: role.RoleName, value: role.RoleId },
                        access_group: [],
                    }
                }
            }
        }

        default:
            return { ...state };
    }
}

export default usersScreenReducer;
