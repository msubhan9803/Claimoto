import instance from 'config/axios/instance'
import { SweetAlert } from 'functions'
import {
    REGISTER_POLICIES,
    GET_POLICIES,
    GET_SINGLE_POLICIES,
    GET_POLICIES_INPUTS,
    DELETE_POLICIES,
    UPDATE_POLICIES,
    GET_CAR_COLORS,
    GET_POLICY_MAKE,
    GET_PRODUCT_NAMES,
    GET_PRODUCT_BENEFIT_COV
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
                title: "Success Job!",
                text: "Product are successfully register",
                icon: "Success"
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

// Get car colors  
export const GetColor = () => async dispatch => {
    debugger
    try {
        let res = await instance.get(`api/Policy/Colour`)
        dispatch({ type: GET_CAR_COLORS, payload: res.data })
    }
    catch (err) {
        console.log("err", err)
    }
}

// Get policy make  
export const GetMake = () => async dispatch => {
    debugger
    try {
        let res = await instance.get('api/Policy/PolicyMake')
        dispatch({ type: GET_POLICY_MAKE, payload: res.data })
    }
    catch (err) {
        console.log("err", err)
    }
}

// Get product Names according to product type 

export const GetProductNames = (type) => async dispatch =>{
    debugger
    try{
        let res = await instance.get(`api/Policy/GetPolicyType/${type}`)
        console.log("res", res)
        dispatch({ type: GET_PRODUCT_NAMES, payload: res.data })  
    }
    catch(err){

    }
}

// Get product Names according to product type 

export const GetProductBeniftCov = (type) => async dispatch =>{
    debugger
    try{
        let res = await instance.get(`api/Policy/GetProductDetails/${type}`)
        console.log("res", res)
        dispatch({ type: GET_PRODUCT_BENEFIT_COV, payload: res.data })  
    }
    catch(err){

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

