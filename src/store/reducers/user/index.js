
const initialState = {
    token: null,
    userListData: {},

};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TOKEN": {
            return { ...state};
        }
        default:
            return { ...state };
    }
}

export default userReducer;
