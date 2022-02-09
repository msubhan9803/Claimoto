import { REGISTER_USER , SET_TOKEN } from '../../types/types'
const initialState = {
    token: null,
    user: {
        name: "",
        email: "",
        password: ''
    },
};


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER: {
            return {
                ...state,
             user: {
                    ...state.user,
                    [action.payload.name]: action.payload.value
                }
            }
        }
        case SET_TOKEN: {
            return { ...state , token : action.payload };

        }
        default:
            return { ...state };
    }
}

export default userReducer;
