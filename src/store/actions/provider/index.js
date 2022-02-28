//ACTION TYPES
import instance from 'config/axios/instance'
import { successAlert } from 'functions'
import {
    CHANGE_TAB,
    SET_INPUT_VALUES_PROVIDER_TAB1_SCREEN,
    ADD_CONTACTS,
    DELETE_CONTACT,
    EDIT_CONTACT,
    EDIT_CONTACT_INDEX
} from '../../types/providers';




export const handleInputValue = ({ name, value }) =>  dispatch =>  {
    dispatch({
        type: SET_INPUT_VALUES_PROVIDER_TAB1_SCREEN,
        payload: {name, value}
    })
}


export const addContacts = (contact) => dispatch => {
    dispatch({
        type:ADD_CONTACTS,
        payload:contact
    })
}


export const removeContact = (index) => dispatch => {
    dispatch({
        type:DELETE_CONTACT,
        payload:index
    })
}

export const editContactIndex = (index) => dispatch => {
    dispatch({
        type:EDIT_CONTACT_INDEX,
        payload:index
    })
}


export const editContact = (contact) => dispatch => {
    dispatch({
        type:EDIT_CONTACT,
        payload:contact
    })
}

//Tabs 2




export const handleInputValue2 = ({ name, value }) =>  dispatch =>  {
    dispatch({
        type: SET_INPUT_VALUES_PROVIDER_TAB1_SCREEN,
        payload: {name, value}
    })
}