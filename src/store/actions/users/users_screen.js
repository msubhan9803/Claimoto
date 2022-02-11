//ACTION TYPES
import {
    CHANGE_TAB,
    SET_INPUT_VALUES_USER_SCREEN,
    CLEAR_INPUT_VALUES_USER_SCREEN,
    SET_INPUT_VALUES_ACCESS_GROUP_SCREEN
} from '../../types/users'


export const changeTab = (activeTab) => async dispatch => {
    try {
        dispatch({
            type: CHANGE_TAB,
            payload: activeTab
        })
    }
    catch (error) {
        console.log("err", error)
    }
}



export const handleInputValue = ({name, value, compnnt}) => dispatch =>  {
        
    try {
        dispatch({
            type: compnnt === "user" ? SET_INPUT_VALUES_USER_SCREEN : SET_INPUT_VALUES_ACCESS_GROUP_SCREEN,
            payload: { name, value }
        })

    }
    catch (error) {
        console.log("err", error)
    }  
}


export const clearInputValues = () => dispatch => {
        try {
            dispatch({
                type: CLEAR_INPUT_VALUES_USER_SCREEN,
                payload: null
            })
        } catch (error) {
            console.log("err", error)
        }
}


