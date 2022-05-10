import { SET_RESET_PASSWORD_VALUES,  } from 'store/types/auth';



const initialState = {
    values: {
        email: "",
        loading:"",
        password:"",
        confirm_password:""
    }
};


const forgetPasswordReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RESET_PASSWORD_VALUES: {
            return {
                ...state,
                values: {
                    ...state.values,
                    [action.payload.name]: action.payload.value
                }
            }
        }
            break;

        default:
            return { ...state };
    }
}




export default forgetPasswordReducer;
