import instance from 'config/axios/instance'
import { SweetAlert } from 'functions'
import {
    REGISTER_PRODUCT,
    REGISTER_BENEFIT,
    GET_PRODUCTS,
    GET_PRODUCT_TYPE,
    GET_SINGLE_PRODUCT,
    GET_PRODUCT_INPUTS,
    EDIT_PRODUCT_BENEFIT,
    DELETE_PRODUCT,
    DELETE_PRODUCT_BENEFIT,
    UPDATE_PRODUCT,
    UPDATE_PRODUCT_BENEFIT,
} from 'store/types/types'
// import instance from 'config/axios/instance'

import { history } from 'functions/history'


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


// CheckProductType

export const SortProducts = (value, products) => (dispatch) => {
    const product = products.slice();
    if (value === "ProductName") {
        product.sort((a, b) =>

            a > b
                ? 1
                : -1
        );
    } else {
        product.sort((a, b) => (a < b ? 1 : -1));
    }
    dispatch({
        type: "CHECK_PRODUCT_TYPE",
        payload: product
    });
};

export const ProductStatus = (value) => dispatch => {
    try {
        if (value === "active") {
            dispatch({
                type: "CHECK_PRODUCT_ACTIVE",
                payload: true
            });
        }
        else {
            dispatch({
                type: "CHECK_PRODUCT_ACTIVE",
                payload: false
            });
        }
    }
    catch (err) {
        console.log("err", err)
    }
}



export const CheckProductName = (value) => dispatch => {
    try {

        dispatch({
            type: "CHECK_PRODUCT_NAME",
            payload: value
        })
    }
    catch (err) {
        console.log("err", err)
    }
}



// Register Products 

export const RegisterProduct = (data) => async dispatch => {
    try {
        const {
            ProductDetails,
            CoPayPercentage, ProductName,
            ProductType, Status,
            AnnualPremium,
            Deductibles, IsAgencyRepair,
            Benefit
        } = data
        let check = Array.isArray(Benefit) && Benefit.length

        let value = {
            ProductName,
            ProductType,
            ProductDetails,
            Status,
            AnnualPremium,
            TenantId: 12345,
            Coverage: {
                CoPayPercentage,
                Deductibles,
                IsAgencyRepair,
            },
            Benefit : check === 1 ? Benefit : null

        }

        let res  = await instance.post('api/product', value )
        console.log("res" , value )
        // if(res.data )
        // SweetAlert({
        //     text: "Product are successfully register",
        //     icon: "success"
        // })

        history.push('/admin/products')

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
        dispatch({ type: GET_PRODUCTS, payload: res.data })
    }
    catch (err) {
        console.log("err", err)
    }
}


// Get Single Products 
export const GetSingleProduct = (ID) => async dispatch => {
    try {
        let res = await instance.get(`api/Product/${ID}`)
        dispatch({ type: GET_SINGLE_PRODUCT, payload: res.data })
    }
    catch (err) {
        SweetAlert({ text: err.response.data.Message, icon: 'warning' })
        console.log("err", err.response.data)
    }
}



// Edit Product Benifit

export const EditProductBenifit = (id) => dispatch => {
    try {
        dispatch({
            type: EDIT_PRODUCT_BENEFIT,
            payload: id
        })
    }
    catch (err) {

    }
}


// Cancel Product Benifit

export const CencelProductBenifit = () => dispatch => {
    debugger
    try {
        dispatch({
            type: EDIT_PRODUCT_BENEFIT,
        })
    }
    catch (err) {
        console.log("err", err)
    }
}




// Delete Product
export const DeleteProduct = (ID, navigate) => async (dispatch) => {
    try {

        await instance.delete(`api/product/${ID}`)
        SweetAlert({
            text: "Product are successfully Deleted",
            icon: "success"
        })
        history.push('/admin/products')

        dispatch({ type: DELETE_PRODUCT, payload: ID })

    }
    catch (err) {
        console.log("err", err)
    }
}


// Delete Product Type
export const DeleteProductBenifit = (id) => async dispatch => {
    try {

        dispatch({ type: DELETE_PRODUCT_BENEFIT, payload: id })

    }
    catch (err) {
        console.log("err", err)
    }
}

// Update Product
export const UpdateProduct = (data) => async dispatch => {
    const {
        Id, ProductDetails,
        CoPayPercentage, ProductName,
        ProductType, Status,
        TenantId, AnnualPremium,
        Deductibles, IsAgencyRepair,
        Benefit
    } = data
    try {

        let BenefitId = Benefit.map(obj => ({ ...obj, ProductId: Id, }))
        let Copy = Number(CoPayPercentage)
        let value = {
            Id,
            ProductName,
            ProductType,
            ProductDetails,
            Status,
            TenantId,
            AnnualPremium,
            Coverage: {
                ProductId: Id,
                CoPayPercentage: Copy,
                Deductibles,
                IsAgencyRepair,
            },
            Benefit: BenefitId,
        }

        await instance.put('api/Product/PutProduct', value)

        SweetAlert({
            text: "Product are successfully upDated",
            icon: "success"
        })

        dispatch({ type: UPDATE_PRODUCT, payload: value })

    }
    catch (err) {
        console.log("err", err)
    }
}


// Update Product Type
export const UpdateProductBenifit = (id) => async dispatch => {
    try {
        dispatch({ type: UPDATE_PRODUCT_BENEFIT, payload: id })

    }
    catch (err) {
        console.log("err", err)
    }
}