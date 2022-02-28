//ACTION TYPES
import instance from 'config/axios/instance'
import { successAlert } from 'functions'
import {
    CHANGE_TAB,
    GET_COUNTRIES,
    GET_SERVICES,
    SET_INPUT_VALUES_PROVIDER_TAB1_SCREEN,
    SET_INPUT_VALUES_PROVIDER_TAB2_SCREEN,
    ADD_CONTACTS,
    DELETE_CONTACT,
    EDIT_CONTACT,
    EDIT_CONTACT_INDEX,
    GET_SERVICES_CHILDS,
    SAVE_SERVICE,
    DELETE_SERVICE,
    EDIT_SERVICE_INDEX
} from '../../types/providers';




export const getCountries = () => async dispatch => {
    let { data } = await instance.get(`api/Provider/Country`);
    dispatch({
        type: GET_COUNTRIES,
        payload: data
    })
}


export const getServices = () => async dispatch => {
    let { data } = await instance.get(`api/Provider/ServiceType`);
    dispatch({
        type: GET_SERVICES,
        payload: data
    })
}


export const getServiceChilds = (id) => async dispatch => {
    let { data } = await instance.get(`api/Provider/ProviderService?ServiceTypeId=${id}`);
    dispatch({
        type: GET_SERVICES_CHILDS,
        payload: data
    })
    
}


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




export const handleInputValue2 = ({ name, value, comp }) =>  dispatch =>  {
    dispatch({
        type: SET_INPUT_VALUES_PROVIDER_TAB2_SCREEN,
        payload: {name, value, comp}
    })
}



export const saveService = (service) => dispatch => {
    dispatch({
        type:SAVE_SERVICE,
        payload:service
    })
}


export const editServiceIndex = (index) => dispatch => {
    dispatch({
        type:EDIT_SERVICE_INDEX,
        payload:index
    })
}


export const removeService = (index) => dispatch => {
    dispatch({
        type:DELETE_SERVICE,
        payload:index
    })
}

