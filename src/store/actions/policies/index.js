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
        let check = Array.isArray(data.Benefit) && data.Benefit.length

        let policyDetail = {
            TenantId: 2,
            CarNumber: data.CarNumber,
            PolicyNo : data.PolicyNo,
            PolicyType: data.PolicyType,
            IdentityNo: data.IdentityNo,
            PolicyHolderName: data.PolicyHolderName,
            MakeId: data.MakeId,
            ModelId: data.ModelId,
            AnnualPremium: data.AnnualPremium,
            DOB: data.DOB,
            StartDate: data.StartDate,
            EndDate: data.EndDate,
            Address: data.Address,
            DrivingLicenseValidityExpiryDate: data.DrivingLicenseValidityExpiryDate,
            CoPayPercentage: data.CoPayPercentage,
            Deductibles: data.Deductibles,
            IsAgencyRepair: data.IsAgencyRepair,
            ProductId: data.ProductId,
            PlateNumber: data.PlateNumber,
            Year: data.Year,
            ColourId: data.ColourId,
            Capacity: data.Capacity,
            ChassisNumber: data.ChassisNumber,
            Benefits: check == 1 ? data.Benefit : null


               }
                      
               
            let Imgdata = {
            Image1: data.Image1,
            Image2: data.Image2,
            Image3: data.Image3,
            Image4: data.Image4,
            Image5: data.Image5,
        }

        console.log("Daa", policyDetail)

         await instance.post('api/Policy', policyDetail)
            .then(async (res) => {
                console.log("res policy" , res )
                let formData = new FormData();
                for (let [key, value] of Object.entries(Imgdata)) {
                    formData.append(key, value);
                }
                formData.append('Id', 31)
               let resd =  await instance.post('api/FileUpload', formData)
                 console.log("data" , resd)


            })
        // if (res.status == 200) {
        //     dispatch({
        //         type: REGISTER_POLICIES,
        //         payload: data
        //     })
        // SweetAlert({
        //     text: "Policy are successfully register",
        //     icon: "Success"
        // })
        // }

    }
    catch (err) {
        console.log("err", err)
    }
}


// Get Policies 
export const GetPolicies = () => async dispatch => {
    try {
        let res = await instance.get('api/Policy/Policies')
        console.log("res", res)
        dispatch({ type: GET_POLICIES, payload: res.data })
    }
    catch (err) {
        console.log("err", err)
    }
}


// Get Single Policies 
export const GetSinglePolicy = (id) => async dispatch => {
    try {
        let res = await instance.get(`api/Policy/PolicyById?id=${id}`)
        console.log("res", res)
        dispatch({ type: GET_SINGLE_POLICIES, payload: res.data })
    }
    catch (err) {
        console.log("err", err)
    }
}

// Get car colors  
export const GetColor = () => async dispatch => {
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
    try {
        let res = await instance.get('api/Policy/PolicyMake')
        dispatch({ type: GET_POLICY_MAKE, payload: res.data })
    }
    catch (err) {
        console.log("err", err)
    }
}

// Get make model 

export const GetMakeModel = (Id) => async dispatch => {
    try {
        let res = await instance.get(`api/Policy/PolicyModel/?Id=${Id}`)
        dispatch({ type: "GET_POLICY_MAKE_MODEL", payload: res.data })
    }
    catch (err) {
        console.log("err", err)

    }
}

// Get product Names according to product type 

export const GetProductNames = (type) => async dispatch => {
    try {
        let res = await instance.get(`api/Policy/GetPolicyType/${type}`)
        console.log("res", res)
        dispatch({ type: GET_PRODUCT_NAMES, payload: res.data })
    }
    catch (err) {

    }
}

// Get product Names according to product type 

export const GetProductBeniftCov = (type) => async dispatch => {
    try {
        let res = await instance.get(`api/Policy/GetProductDetails/${type}`)
        console.log("res", res)
        dispatch({ type: GET_PRODUCT_BENEFIT_COV, payload: res.data })
    }
    catch (err) {

    }
}



// Delete Policies
export const DeletePolicies = (id) => async dispatch => {
    try {
        let res = await instance.delete(`api/Policy/PolicyDel?id=${id}`)
        dispatch({ type: DELETE_POLICIES, payload: "res.data" })

    }
    catch (err) {
        console.log("err", err)
    }
}



// Update Policies
export const UpdatePolicies = (data , params) => async dispatch => {
    try {
        let check = Array.isArray(data.Benefit) && data.Benefit.length

        let policyDetail = {
            TenantId: 2,
            Id : params,
            CarNumber: data.CarNumber,
            PolicyNo : data.PolicyNo,
            PolicyType: data.PolicyType,
            IdentityNo: data.IdentityNo,
            PolicyHolderName: data.PolicyHolderName,
            MakeId: data.MakeId,
            ModelId: data.ModelId,
            AnnualPremium: data.AnnualPremium,
            DOB: data.DOB,
            StartDate: data.StartDate,
            EndDate: data.EndDate,
            Address: data.Address,
            DrivingLicenseValidityExpiryDate: data.DrivingLicenseValidityExpiryDate,
            CoPayPercentage: data.CoPayPercentage,
            Deductibles: data.Deductibles,
            IsAgencyRepair: data.IsAgencyRepair,
            ProductId: data.ProductId,
            PlateNumber: data.PlateNumber,
            Year: data.Year,
            ColourId: data.ColourId,
            Capacity: data.Capacity,
            ChassisNumber: data.ChassisNumber,
            Benefits: check == 1 ? data.Benefit : null


               }
        

                let Imgdata = {
            Image1: data.Image1,
            Image2: data.Image2,
            Image3: data.Image3,
            Image4: data.Image4,
            Image5: data.Image5,
        }
   console.log("data" , policyDetail )

        let ress = await instance.put('api/Policy', policyDetail)
        console.log("data", ress)
            // .then((res) => {
            //     let formData = new FormData();
            //     for (let [key, value] of Object.entries(Imgdata)) {
            //         formData.append(key, value);
            //     }
            //     formData.append('Id', res.data)
            //     instance.post('api/FileUpload', formData)


            // })
        console.log("ress", ress)
        // if (res.status == 200) {
        //     dispatch({
        //         type: REGISTER_POLICIES,
        //         payload: data
        //     })
        // SweetAlert({
        //     text: "Policy are successfully register",
        //     icon: "Success"
        // })
        // }

        // let res = await instance.post('api/Product', data)
        // dispatch({ type: UPDATE_POLICIES, payload: data })

    }
    catch (err) {
        console.log("err", err)
    }
}

