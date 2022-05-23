//ACTION TYPES
import instance from 'config/axios/instance';
import { successAlert } from 'functions';
import {

    CHANGE_HANDLER_INVOICE,

    //Request
    GET_REQUEST,

    //Handle Change
    SET_INPUT_VALUES_INVOICE_SCREEN


} from '../../types/invoice';




export const changeHandlerProvider = ({modeule, key, val}) => async dispatch => {
    dispatch({ type: CHANGE_HANDLER_INVOICE, payload: {modeule, key, val} });
}


// Root Getters





//handle Change

export const handleInvoiceInputValue = ({ name, value, compnnt }) => dispatch => {

    try {
        dispatch({
            type: SET_INPUT_VALUES_INVOICE_SCREEN,
            payload: { name, value }
        })

    }
    catch (error) {
        console.log("err", error)
    }
}
