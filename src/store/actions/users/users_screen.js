
import { CHANGE_TAB } from '../../types/users'


export const changeTab = (activeTab) => async dispatch => {
    try {
        dispatch({
            type: CHANGE_TAB,
            payload: activeTab
        })
    }
    catch (err) {

    }
}



