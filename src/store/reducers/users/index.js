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
    modules:[
        {}
    ],
    users:[
        {
            name:"Ahmad Housam",
            id:1,
            email:"yasminali@claimoto.com",
            mobile_number:"079 079 1189",
            role:1,
            status:true
        },
        {
            name:"Jahanzaib Ahmad",
            id:2,
            email:"jehanxaibahmed@claimoto.com",
            mobile_number:"03337767438",
            role:1,
            status:false
        },

    ],
    roles:[
        {
            id:1,
            name:"Administrator",
            modifyBy:"admin@claimoto.com",
            modifyAt:new Date(),
            status:true
        },
        {
            id:2,
            name:"Insurance Agent",
            modifyBy:"agent@claimoto.com",
            modifyAt:new Date(),
            status:true
        },
        {
            id:3,
            name:"Replacement",
            modifyBy:"replacement@claimoto.com",
            modifyAt:new Date(),
            status:true
        },
        {
            id:4,
            name:"surveyor",
            modifyBy:"surveyor@claimoto.com",
            modifyAt:new Date(),
            status:true
        },
        {
            id:5,
            name:"Customer",
            modifyBy:"customer@claimoto.com",
            modifyAt:new Date(),
            status:true
        }

    ]
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
