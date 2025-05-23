import instance from "config/axios/instance";
import { SweetAlert, successAlert } from "functions";
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
  GET_PRODUCT_BENEFIT_COV,
  POLICIES_LIST_TABLE_FILTERING,
  POLICIES_LIST_TABLE_DATA_CHANGE,
  GET_CLAIM_LIST_SWITCHED,
  CLAIMS_LIST_SWITCHED_TABLE_DATA_CHANGE,
  CLAIMS_LIST_SWITCHED_TABLE_FILTERING
} from "store/types/types";
// import instance from 'config/axios/instance'
import moment from "moment";

export const GetInputs = (name, value) => (dispatch) => {
  try {
    dispatch({
      type: GET_POLICIES_INPUTS,
      payload: { name, value },
    });
  } catch (err) {
    console.log("err", err);
  }
};

// Register Policies

export const RegisterPolicies = (data) => async (dispatch) => {
  try {
    let check = Array.isArray(data.Benefit) && data.Benefit.length;

    let policyDetail = {
      TenantId: 2,
      CarNumber: data.CarNumber,
      PolicyNo: data.PolicyNo,
      PolicyType: Number(data.PolicyType),
      IdentificationNumber: data.IdentityNo,
      PolicyHolderName: data.PolicyHolderName,
      MakeId: Number(data.MakeId),
      ModelId: Number(data.ModelId),
      DOB: moment(data.DOB).format("L"),
      StartDate: moment(data.StartDate).format("L"),
      EndDate: moment(data.EndDate).format("L"),
      DrivingLicenseValidity: "12/01/2022",
      Address: data.Address,
      CoPayPercentage: data.CoPayPercentage,
      Deductibles: data.Deductibles,
      IsAgencyRepair: data.IsAgencyRepair,
      ProductId: Number(data.ProductId),
      PlateNumber: data.PlateNumber,
      Year: data.Year,
      ColourId: Number(data.ColourId),
      Capacity: Number(data.Capacity),
      ChassisNumber: data.ChassisNumber,
      Benefits: check == 1 ? data.Benefit : null,
    };

    let Imgdata = {
      Image1: data.Image1,
      Image2: data.Image2,
      Image3: data.Image3,
      Image4: data.Image4,
      Image5: data.Image5,
    };

    await instance.post("api/Policy", policyDetail).then(async (res) => {
      let formData = new FormData();
      formData.append("Id", res.data.Id);
      for (let [key, value] of Object.entries(Imgdata)) {
        formData.append(key, value);
      }
      await instance
        .post("api/File/Insert", formData)
        .then((res) => {
          dispatch({
            type: REGISTER_POLICIES,
            payload: data,
          });
          SweetAlert({
            text: "Policy are successfully register",
            icon: "Success",
          });
          window.location.href = "/admin/policies";
        })
        .catch((err) => console.log("err FileUpload: ", err));
    });
  } catch (err) {
    console.log("err", err);
  }
};

// Get Policies
export const GetPolicies = () => async (dispatch) => {
  try {
    let res = await instance.get("api/Policy/Policies");
    console.log("res", res);
    dispatch({ type: GET_POLICIES, payload: res.data });
    dispatch({
      type: POLICIES_LIST_TABLE_FILTERING,
      payload: res.data,
    });
    dispatch({
      type: POLICIES_LIST_TABLE_DATA_CHANGE,
      payload: { name: "policies_count", value: res.data.length },
    });
  } catch (err) {
    console.log("err", err);
  }
};

// Get Single Policies
export const GetSinglePolicy = (id) => async (dispatch) => {
  // debugger
  try {
    let res = await instance.get(`api/Policy/PolicyById?id=${id}`);
    if (res.data) {
      let names = await instance.get(
        `api/Policy/GetPolicyType/${res.data.PolicyType}`
      );
      dispatch({ type: GET_PRODUCT_NAMES, payload: names.data });

      let types = await instance.get(
        `api/Policy/PolicyModel/?Id=${res.data.MakeId}`
      );
      dispatch({ type: "GET_POLICY_MAKE_MODEL", payload: types.data });
    }
    dispatch({ type: GET_SINGLE_POLICIES, payload: res.data });

    let color = await instance.get(`api/Policy/Colour`);
    dispatch({ type: GET_CAR_COLORS, payload: color.data });
  } catch (err) {
    console.log("err", err);
  }
};

// Get car colors
export const GetColor = () => async (dispatch) => {
  try {
    let res = await instance.get(`api/Policy/Colour`);
    dispatch({ type: GET_CAR_COLORS, payload: res.data });
  } catch (err) {
    console.log("err", err);
  }
};

// Get policy make
export const GetMake = () => async (dispatch) => {
  try {
    let res = await instance.get("api/Policy/PolicyMake");
    dispatch({ type: GET_POLICY_MAKE, payload: res.data });
  } catch (err) {
    console.log("err", err);
  }
};

// Get make model

export const GetMakeModel = (Id) => async (dispatch) => {
  try {
    let res = await instance.get(`api/Policy/PolicyModel/?Id=${Id}`);
    dispatch({ type: "GET_POLICY_MAKE_MODEL", payload: res.data });
  } catch (err) {
    console.log("err", err);
  }
};

// Get product Names according to product type

export const GetProductNames = (type) => async (dispatch) => {
  try {
    let res = await instance.get(`api/Policy/GetPolicyType/${type}`);
    console.log("res", res);
    dispatch({ type: GET_PRODUCT_NAMES, payload: res.data });
  } catch (err) {}
};

// Get product Names according to product type

export const GetProductBeniftCov = (type) => async (dispatch) => {
  try {
    let res = await instance.get(`api/Policy/GetProductDetails/${type}`);
    console.log("res", res);
    dispatch({ type: GET_PRODUCT_BENEFIT_COV, payload: res.data });
  } catch (err) {}
};

// Delete Policies
export const DeletePolicies = (id) => async (dispatch) => {
  debugger;
  try {
    let res = await instance.delete(`api/Policy/PolicyDel?id=${id}`);
    dispatch({ type: DELETE_POLICIES, payload: res.data });
    successAlert({
      text: "Policy are succefully Deactive",
      icon: "success",
    });
  } catch (err) {
    console.log("err", err);
  }
};

// Update Policies
export const UpdatePolicies = (data, params) => async (dispatch) => {
  try {
    debugger;
    let check = Array.isArray(data.Benefits) && data.Benefits.length;

    let policyDetail = {
      TenantId: data.TenantId,
      Id: Number(params),
      PolicyId: Number(params),
      CarNumber: data.CarNumber,
      PolicyNo: data.PolicyNo,
      PolicyType: data.PolicyType,
      IdentificationNumber: data.IdentityNo,
      IdentityNo: data.IdentityNo,
      PolicyHolderName: data.PolicyHolderName,
      MakeId: data.MakeId,
      ModelId: data.ModelId,
      // AnnualPremium: data.AnnualPremium,
      DOB: moment(data.DOB).format("L"),
      StartDate: moment(data.StartDate).format("L"),
      EndDate: moment(data.EndDate).format("L"),
      Address: data.Address,
      DrivingLicenseValidity: moment(data.DrivingLicenseValidity).format("L"),
      CoPayPercentage: data.CoPayPercentage,
      Deductibles: data.Deductibles,
      IsAgencyRepair: data.IsAgencyRepair,
      ProductId: data.ProductId,
      PlateNumber: data.PlateNumber,
      Year: data.Year,
      ColourId: data.ColourId,
      Capacity: data.Capacity,
      ChassisNumber: data.ChassisNumber,
      Benefits: check == 1 ? data.Benefits : null,
    };

    await instance.put("api/Policy", policyDetail).then(async (res) => {
      dispatch({ type: UPDATE_POLICIES, payload: data });
      SweetAlert({
        text: "Policy are successfully update",
        icon: "success",
      });
    });
  } catch (err) {
    console.log("err", err);
  }
};

export const HandleFilterTable = (filteredList) => (dispatch) => {
  try {
    dispatch({
      type: POLICIES_LIST_TABLE_FILTERING,
      payload: filteredList,
    });
  } catch (err) {
    console.log("err", err);
  }
};

export const HandleTableInputValue =
  ({ name, value }) =>
  (dispatch) => {
    try {
      dispatch({
        type: POLICIES_LIST_TABLE_DATA_CHANGE,
        payload: { name, value },
      });
    } catch (err) {
      console.log("err", err);
    }
  };

// Get Single Policies
export const UpdateVehcileImage =
  (policyId, fieldName, file) => async (dispatch) => {
    let formData = new FormData();
    formData.append("Id", policyId);
    formData.append("Fieldname", fieldName);
    formData.append("Image", file);
    // debugger
    try {
      await instance
        .put(`api/file/update`, formData, {
          "Content-Type": "multipart/form-data",
        })
        .then((res) => {
          // if (res.data) {
          dispatch(GetSinglePolicy(policyId));
          // }
        })
        .catch((err) => console.log("err: ", err));
      // dispatch({ type: GET_SINGLE_POLICIES, payload: res.data });
    } catch (err) {
      console.log("err", err);
    }
  };

// Claim List actions

// Get ClaimsList
export const GetClaimsList = () => async (dispatch) => {
  try {
    let res = await instance.get("api/Claims/AllClaims");
    console.log("res", res);
    dispatch({ type: GET_CLAIM_LIST_SWITCHED, payload: res.data });
    dispatch({
      type: CLAIMS_LIST_SWITCHED_TABLE_FILTERING,
      payload: res.data,
    });
    dispatch({
      type: CLAIMS_LIST_SWITCHED_TABLE_DATA_CHANGE,
      payload: { name: "policies_count", value: res.data.length },
    });
  } catch (err) {
    console.log("err", err);
  }
};

export const HandleClaimListTableInputValue =
  ({ name, value }) =>
  (dispatch) => {
    try {
      dispatch({
        type: CLAIMS_LIST_SWITCHED_TABLE_DATA_CHANGE,
        payload: { name, value },
      });
    } catch (err) {
      console.log("err", err);
    }
  };