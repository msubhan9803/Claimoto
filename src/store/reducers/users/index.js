import {
CHANGE_TAB,
CLEAR_INPUT_VALUES_USER_SCREEN,
SET_INPUT_VALUES_USER_SCREEN,
SET_INPUT_VALUES_ACCESS_GROUP_SCREEN,
SET_ROLES, SET_ACCESS_GROUPS,
SET_MODULES,
SET_USERS, SET_USER_DETAILS,
SET_USER_DETAILS_REQUEST,
SET_USER_DELETE_REQUEST,
SET_USERS_REQUEST,
SET_USER_PAGE_INDEX,
SET_ACTIONS,
SET_MODULES_ACTIONS,
SET_ACCESS_GROUP_DETAILS_REQUEST,
SET_ACCESS_GROUP_DETAILS
} from '../../types/users';
import RoleList from 'components/Admin/RoleManage/RoleList';
import UserList from 'components/Admin/UserManage/UserList';
import AccessGroupList from 'components/Admin/AccessManage/AccessGroupList';



import Img from 'assets/img/testimonial/1.jpg';

const initialState = {
    search_options: [
        {
            label: "User Id",
            value: "UserId",
        },
        {
            label: "Name",
            value: "FirstName",
        },
        {
            label: "Email",
            value: "Email",
        },
        {
            label: "Mobile Number",
            value: "MobileNo",
        },
    ],
    tabs: [
        {
            label: "Members",
            id: "ltn__tab_3_1",
            name: "members",
            component: <UserList />,
            short: "Members"
        },
        {
            label: "User roles",
            id: "ltn__tab_3_2",
            name: "user_roles",
            component: <RoleList />,
            short: "Roles"
        },
        {
            label: "Access Groups",
            id: "ltn__tab_3_3",
            name: "access_management",
            component: <AccessGroupList />,
            short: "Groups"
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
        status: 2,
        selected_image: {
            Base64: "",
            file: null,
            ImageName: "",
            ImageType: "",
        },
        password: "",
        confirm_password: "",
        loading: false,
        deletingUser: false,
        search_option: "",
        search_text: "",
        sort_type: "asc",
        sort_name: "name"
    },
    accessValues: {
        access_group: "",
        name: "",
        modules: [],
        module: ""
    },
    modules: [],
    actions: [],
    users: [],
    roles: [],
    access_groups: [],
    modules_access_groups: [],
    modules_actions: [],
    actions: [],
    users_per_page: 10,
    users_page_index: 1,
    users_count: 0
};


const usersScreenReducer = (state = initialState, action) => {
    switch (action.type) {

        case CHANGE_TAB: {
            return { ...state, selectedTab: action.payload }
        }
            break;
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
            break;
        case CLEAR_INPUT_VALUES_USER_SCREEN: {
            return {
                ...state,
                userValues: initialState.userValues
            }
        }
        break;
        case SET_INPUT_VALUES_ACCESS_GROUP_SCREEN: {
            const { name, value } = action.payload;
            if (name === "actions") {
                let indexOfAction = state.modules_actions.findIndex(act => act.Id === parseInt(value));
                let actions = state.modules_actions;
                actions[indexOfAction].status = actions[indexOfAction].status ? false : true;
                return {
                    ...state,
                    modules_actions:actions
                }
            }
            else {
                return {
                    ...state,
                    accessValues: {
                        ...state.accessValues,
                        [name]: value,
                    }
                }
            }
        }
            break;
        case SET_ROLES: {
            return {
                ...state,
                roles: action.payload
            }
        }
            break;
        case SET_ACCESS_GROUPS: {
            return {
                ...state,
                access_groups: action.payload
            }
        }
            break;
        case SET_MODULES: {
            return {
                ...state,
                modules_access_groups: action.payload
            }
        }
            break;
        case SET_USERS_REQUEST: {
            return {
                ...state,
                loadingUsers: action.payload,
            }
        }
            break;
        case SET_USERS: {
            let counts = parseInt(action.payload[0]?.TotalRecord) || 0;
            return {
                ...state,
                users: action.payload,
                loadingUsers: false,
                users_count: counts

            }
        }
            break;
        case SET_USER_DETAILS_REQUEST: {
            return {
                ...state,
                userValues: {
                    ...initialState.userValues,
                    loading: action.payload
                }
            }
        }
            break;
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
                        status: user_details.Status,
                        loading: false
                    }
                }
            } else {
                return {
                    ...state
                }
            }
        }
            break;
        case SET_USER_DELETE_REQUEST: {
            return {
                ...state,
                userValues: {
                    ...state.userValues,
                    deletingUser: action.payload
                }
            }
        }

        case SET_USER_PAGE_INDEX: {
            return {
                ...state,
                users_page_index: action.payload
            }
        }

        case SET_ACTIONS: {
            return {
                ...state,
                actions: action.payload
            }
        }
        break;

        case SET_MODULES_ACTIONS: {
            return {
                ...state,
                modules_actions: action.payload
            }
        }
        break;


        case SET_ACCESS_GROUP_DETAILS_REQUEST:{
            return {
                ...state,
                accessValues:{
                    ...initialState.accessValues,
                    loading:action.payload
                }
            }
        }

        case SET_ACCESS_GROUP_DETAILS:{
            let { modules , group_details, actions  } = action.payload;
            let modified_actions = state.modules_actions.map((act)=>{
                return {
                    ...act,
                    status:actions.find(acti=> acti.ModuleId === act.ModuleId && acti.ActionId === act.ActionId) ? true : false
                }
            })
            return {
                ...state,
                modules_actions:modified_actions,
                accessValues:{
                    ...state.accessValues,
                    name:group_details.GroupName,
                    access_group:  {label:group_details.GroupName,value:group_details.Id},
                    modules:modules.map((mod)=>{ return {label:mod.ModuleMenuName, value:mod.Id}}),
                    loading:false
                },
            }
        }

        default:
            return { ...state };
    }
}

export default usersScreenReducer;
