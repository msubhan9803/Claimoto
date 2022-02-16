import instance from 'config/axios/instance'
import {
    REGISTER_PRODUCT,
    REGISTER_BENEFIT,
    GET_PRODUCTS,
    GET_PRODUCT_TYPE,
    GET_SINGLE_PRODUCT,
    GET_PRODUCT_INPUTS,
    EDIT_PRODUCT_TYPE,
    EDIT_PRODUCT,
    DELETE_PRODUCT,
    DELETE_PRODUCT_TYPE,
    UPDATE_PRODUCT,
    UPDATE_PRODUCT_TYPE,
} from 'store/types/types'



export const GetInputs = (name, value) => dispatch => {
    try {
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
        let res = await instance.post('api/Product/PostProduct',data)
        console.log("data register" , res )
        dispatch({
            type: REGISTER_PRODUCT,
            payload: data
        })

    }
    catch (err) {
        console.log("err", err)
    }
}

// Register Benifits


export const RegisterBenft = (data) => async dispatch => {
    try {
        dispatch({
            type: REGISTER_BENEFIT,
            payload: data
        })
    }
    catch (err) { }
}

// Get Product Type 

export const GetProducType = () => async dispatch => {
    try {
        let res = await instance.get('api/producttype');
        dispatch({
            type: GET_PRODUCT_TYPE,
            payload: res.data
        })
    }
    catch (err) {

    }
}



// Get Products 
export const GetProduct = () => async dispatch => {
    try {
        let res = await instance.get('api/product')
        console.log("res" ,res )
        dispatch({ type: GET_PRODUCTS, payload: res.data })
    }
    catch (err) {
        console.log("err", err)
    }
}


// Get Single Products 
export const GetSingleProduct = (id) => async dispatch => {
    try {
        let res = await instance.get(`api/product/${id}`)
        console.log("res" , res)
        dispatch({ type: GET_SINGLE_PRODUCT, payload: res.data })
    }
    catch (err) {
        console.log("err", err)
    }
}



// Edit Product 

// export const EditProduct = (data) => async dispatch => {
//     try{

//         dispatch({
//             type:EDIT_PRODUCT,
//             pyaload : data
//         })
//     }
//     catch(err){

//     }
// }


// Edit Product 

// export const EditProductType = (data) => async dispatch => {
//     try{

//         dispatch({
//             type:EDIT_PRODUCT_TYPE,
//             pyaload : data
//         })
//     }
//     catch(err){

//     }
// }


// Delete Product
export const DeleteProduct = (id) => async dispatch => {
    try {
        let res = await instance.post('api/product/')
        dispatch({ type: DELETE_PRODUCT, payload: "res.data" })

    }
    catch (err) {
        console.log("err", err)
    }
}


// Delete Product Type
export const DeleteProductType = (id) => async dispatch => {
    try {
        // let res = await instance.post('/')

        dispatch({ type: DELETE_PRODUCT_TYPE, payload: "res.data" })

    }
    catch (err) {
        console.log("err", err)
    }
}

// Update Product
export const UpdateProduct = (data) => async dispatch => {
    try {
        let res = await instance.post('api/product')
        dispatch({ type: UPDATE_PRODUCT, payload: "res.data" })

    }
    catch (err) {
        console.log("err", err)
    }
}


// Update Product Type
export const UpdateProductType = (data) => async dispatch => {
    try {
        // let res = await instance.post('/')
        dispatch({ type: UPDATE_PRODUCT_TYPE, payload: "res.data" })

    }
    catch (err) {
        console.log("err", err)
    }
}