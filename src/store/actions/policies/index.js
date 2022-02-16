import instance from 'config/axios/instance'
import { SweetAlert } from 'functions'
import {
    REGISTER_POLICIES,
    GET_POLICIES,
    GET_SINGLE_POLICIES,
    GET_POLICIES_INPUTS,
    DELETE_POLICIES,
    UPDATE_POLICIES,
} from 'store/types/types'
// import instance from 'config/axios/instance'



export const GetInputs = (name, value) => dispatch => {
    try {
        dispatch({
            type: GET_POLICIES_INPUTS,
            payload: { name, value }
        })

    }
    catch (err) {
        console.log("err", err)
    }
}



// Register Policies 

export const RegisterPolicies = (data) => async dispatch => {
    try {
        let res = await instance.post('api/Product/PostProduct', data)
        if (res.status == 200) {
            dispatch({
                type: REGISTER_POLICIES,
                payload: data
            })

            SweetAlert({
                title : "Success Job!",
                text:"Product are successfully register",
                icon:"Success"
            })
        }

    }
    catch (err) {
        console.log("err", err)
    }
}


// Get Policies 
export const GetPolicies = () => async dispatch => {
    try {
        let res = await instance.get('api/product')
        console.log("res", res)
        dispatch({ type: GET_POLICIES, payload: res.data })
    }
    catch (err) {
        console.log("err", err)
    }
}


// Get Single Policies 
export const GetSinglePolicies = (ProductID) => async dispatch => {
    debugger
    try {
        let res = await instance.get(`Product/${ProductID}`)
        console.log("res", res)
        dispatch({ type: GET_SINGLE_POLICIES, payload: res.data })
    }
    catch (err) {
        console.log("err", err)
    }
}





// Delete Policies
export const DeletePolicies = (ProductID) => async dispatch => {
    try {
        let res = await instance.delete(`Product/${ProductID}`)
        console.log("res", res)
        dispatch({ type: DELETE_POLICIES, payload: "res.data" })

    }
    catch (err) {
        console.log("err", err)
    }
}



// Update Policies
export const UpdatePolicies = (data) => async dispatch => {
    debugger
    try {
        let res = await instance.post('api/Product', data)
        dispatch({ type: UPDATE_POLICIES, payload: data })

    }
    catch (err) {
        console.log("err", err)
    }
}

