import { CHANGE_TAB } from '../../types/users';
import RoleList from 'components/Admin/RoleManage/RoleList';
import UserList from 'components/Admin/UserManage/UserList';

const initialState = {
    tabs:[
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
        }
    ],
    selectedTab:"members",
    userValues:{
        firstName:"",
        lastName:"",
        phone:"",
        email:"",
        access_role:""
    },
    modules:[],
    roles:[],
    users:[]
};


const usersScreenReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TAB: {
            return {...state, selectedTab:action.payload }
        }
        default:
            return { ...state };
    }
}

export default usersScreenReducer;
