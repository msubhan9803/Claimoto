import {
    CHANGE_TAB,
    CLEAR_INPUT_VALUES_USER_SCREEN,
    SET_INPUT_VALUES_USER_SCREEN,
    SET_INPUT_VALUES_ACCESS_GROUP_SCREEN,
    SET_ROLES, SET_ACCESS_GROUPS,
    SET_MODULES,
    SET_USERS,
    SET_USER_DETAILS,
    SET_USER_DETAILS_REQUEST,
    SET_USER_DELETE_REQUEST,
    SET_USERS_REQUEST,
    SET_USER_PAGE_INDEX,
    SET_ACTIONS,
    SET_MODULES_ACTIONS,
    SET_ACCESS_GROUP_DETAILS_REQUEST,
    SET_ACCESS_GROUP_DETAILS,
    SET_GROUP_ADD_REQUEST,
    SET_GROUP_ADD,
    SET_GROUP_DELETE_REQUEST,
    SET_USER_ADD_REQUEST
} from '../../types/users';
import RoleList from 'components/Admin/RoleManage/RoleList';
import UserList from 'components/Admin/UserManage/UserList';
import AccessGroupList from 'components/Admin/AccessManage/AccessGroupList';



import Img from 'assets/img/testimonial/1.jpg';

const initialState = {
    search_options: [
        {
            label: "Name",
            value: "FirstName",
        },
        {
            label: "Email",
            value: "Email",
        },
        {
            label: "Mobile",
            value: "MobileNo",
        },
    ],
    tabs: [
        {
            label: "Members",
            id: "ltn__tab_3_1",
            name: "members",
            component: <UserList />,
            short: "AUM"
        },
        {
            label: "User roles",
            id: "ltn__tab_3_2",
            name: "user_roles",
            component: <RoleList />,
            short: "ARM"
        },
        {
            label: "Access Groups",
            id: "ltn__tab_3_3",
            name: "access_management",
            component: <AccessGroupList />,
            short: "AGM"
        }
    ],
    selectedTab: 0,
    userValues: {
        user_name: "",
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        access_role: "",
        access_group: [],
        status: 2,
        selected_image: {
            Base64: null,
            file: null,
            ImageName: null,
            ImageType: null,
        },
        password: "",
        confirm_password: "",
        loading: false,
        success: false,
        error: "",
        deletingUser: false,
        search_option: "",
        search_text: "",
        sort_type: "asc",
        sort_name: "",
        loading_action:false
    },
    accessValues: {
        access_group: "",
        name: "",
        modules: [],
        module: "",
        status:false
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
                userValues: initialState.userValues,
                accessValues: initialState.accessValues
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
                    modules_actions: actions
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
            return {
                ...state,
                users: action.payload.users,
                loadingUsers: false,
                users_count: action.payload.counts

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
                        user_name: user_details.UserName,
                        first_name: user_details.FirstName,
                        last_name: user_details.LastName,
                        phone: user_details.MobileNo,
                        email: user_details.Email,
                        access_role: { label: role.RoleName, value: role.RoleId },
                        selected_image: user_details.ImageUrl,
                        access_group: user_details.AccessGroupIds?.map(ag => { return { label: ag.AccessGroupName, value: ag.AccessGroupId } }) || [],
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

        case SET_USER_ADD_REQUEST: {
            return {
                ...state,
                userValues: {
                    ...state.userValues,
                    ...action.payload
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


        case SET_ACCESS_GROUP_DETAILS_REQUEST: {
            return {
                ...state,
                accessValues: {
                    ...initialState.accessValues,
                    loading: action.payload
                }
            }
        }

        case SET_ACCESS_GROUP_DETAILS: {
            let { modules, group_details, actions } = action.payload;
            let InheritAccessGroup = state.access_groups.find(ag => ag.Id === group_details?.InheritAccessGroupId) || null;
            let modified_actions = state.modules_actions.map((act) => {
                return {
                    ...act,
                    status: actions.find(acti => acti.ModuleId === act.ModuleId && acti.ActionId === act.ActionId) ? true : false
                }
            })
            return {
                ...state,
                modules_actions: modified_actions,
                accessValues: {
                    ...state.accessValues,
                    name: group_details?.GroupName || "",
                    access_group: group_details ? { label: InheritAccessGroup?.GroupName ||  "", value: InheritAccessGroup?.Id || "" } : "",
                    modules: modules.map((mod) => { return { label: mod.ModuleMenuName, value: mod.Id } }),
                    loading: false,
                    status:group_details?.IsActive || false
                },
            }
        }



        case SET_GROUP_ADD_REQUEST: {
            return {
                ...state,
                accessValues: {
                    ...state.accessValues,
                    loading: action.payload
                }
            }
        }
            break;


        case SET_GROUP_ADD: {
            return {
                ...state,
                accessValues: {
                    ...initialState.accessValues,
                    loading: false
                }
            }
        }
            break;

        case SET_GROUP_DELETE_REQUEST: {
            return {
                ...state,
                accessValues: {
                    ...state.accessValues,
                    deletingGroup: action.payload
                }
            }
        }



        default:
            return { ...state };
    }
}

export default usersScreenReducer;
