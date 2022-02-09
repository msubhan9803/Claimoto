import { REGISTER_PRODUCT, GET_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT , GET_PRODUCT_INPUTS } from 'store/types/types'
// import instance from 'config/axios/instance'



export const GetInputs = (name , value ) => dispatch =>  {
        
    try {
        // let res = instance.post('/')


        dispatch({
            type: GET_PRODUCT_INPUTS,
            payload: { name, value }
        })

    }
    catch (err) {
        console.log("err", err)
    }  
}


// Register Products 

export const RegisterProduct = (data) => async dispatch => {
    try {
        // let res = instance.post('/')
        dispatch({
            type: REGISTER_PRODUCT,
            payload: data
        })

    }
    catch (err) {
        console.log("err", err)
    }
}


// Get Products 


export const GetProduct = () => async dispatch => {
    try {
        // let res = insta nce.post('/')

        dispatch({ type: GET_PRODUCT, payload: "res.data" })
    }
    catch (err) {
        console.log("err", err)
    }
}



// Delete Product
export const DeleteProduct = (id) => async dispatch => {
    try {
        // let res = instance.post('/')

        dispatch({ type: DELETE_PRODUCT, payload: "res.data" })

    }
    catch (err) {
        console.log("err", err)
    }
}


// Update Product
export const UpdateProduct = (data) => async dispatch => {
    try {
        // let res = instance.post('/')
        dispatch({ type: UPDATE_PRODUCT, payload: "res.data" })

    }
    catch (err) {
        console.log("err", err)
    }
}