import instance from "config/axios/instance";
import { SweetAlert, successAlert } from "functions";
import {
  GET_CLAIMS,
  CLAIMS_LIST_TABLE_FILTERING,
  CLAIMS_LIST_TABLE_DATA_CHANGE,
  SET_USERS_LIST,
  SET_POLICIES_LIST,
  SET_CLAIMS_LIST,
  SET_CLAIMS_DETAILS,
  RESET_CLAIMS_DETAILS,
  HANDLE_FIELD_CHANGE
} from "store/types/claims";

// GET /api/Claims/Claims
export const GetClaimsByPolicyId = (policyId) => async (dispatch) => {
  try {
    let res = await instance.get("api/Claims/Claims?Id=" + policyId);
    console.log("res", res);
    dispatch({ type: GET_CLAIMS, payload: res.data });
    dispatch({
      type: CLAIMS_LIST_TABLE_FILTERING,
      payload: res.data,
    });
    dispatch({
      type: CLAIMS_LIST_TABLE_DATA_CHANGE,
      payload: { name: "claims_count", value: res.data.length },
    });
  } catch (err) {
    console.log("err", err);
  }
};

// GET /api/UserProfile
export const GetUsersList = () => async (dispatch) => {
  try {
    let res = await instance.get("api/UserProfile");
    console.log("res", res);
    dispatch({ type: SET_USERS_LIST, payload: res.data });
  } catch (err) {
    console.log("err", err);
  }
};

// GET /api/Policy/Policies
export const GetPoliciesList = () => async (dispatch) => {
  try {
    let res = await instance.get("api/Policy/Policies");
    console.log("res", res);
    dispatch({ type: SET_POLICIES_LIST, payload: res.data });
  } catch (err) {
    console.log("err", err);
  }
};

// GET /api/Claims/ClaimType
export const GetClaimsList = () => async (dispatch) => {
  try {
    let res = await instance.get("api/Claims/ClaimType");
    console.log("res", res);
    dispatch({ type: SET_CLAIMS_LIST, payload: res.data });
  } catch (err) {
    console.log("err", err);
  }
};

// GET /api/Policy/GetProductDetails/{id}
export const GetProductDetails = (policyId, prevClaimState) => async (dispatch) => {
  try {
    let res = await instance.get(`api/Policy/PolicyById?id=${policyId}`);
    let newState = prevClaimState;

    newState.PolicyId = res.data.Id;
    newState.MakeId = res.data.MakeId;
    newState.ModeIld = res.data.ModelId;
    newState.CarNo = res.data.CarNumber;
    newState.PolicyNo = res.data.PolicyNo;
    newState.PolicyType = res.data.PolicyType;
    newState.PolicyValidity = res.data.EndDate;

    dispatch({ type: SET_CLAIMS_DETAILS, payload: newState });
  } catch (err) {
    console.log("err", err);
  }
};

export const HandleFieldChange = (name, value) => (dispatch) => {
  try {
    console.log("typeof", typeof(value))
    dispatch({
      type: HANDLE_FIELD_CHANGE,
      payload: { name, value },
    });
  } catch (err) {
    console.log("err", err);
  }
};

export const ResetClaimDetails = (name, value) => (dispatch) => {
  try {
    dispatch({
      type: RESET_CLAIMS_DETAILS
    });
  } catch (err) {
    console.log("err", err);
  }
};

// POST /api/Claims
export const PostClaimDetials = (claimDetials) => async (dispatch) => {
  try {
    let payload = claimDetials;
    delete payload.ClaimAccidentCarPhotos;
    delete payload.ClaimDocuments;
    payload.SubmissionDate = new Date();
    payload.CreatedDate = new Date();
    payload.UpdatedDate = new Date();

    await instance.post("api/Claims", claimDetials).then(async (res) => {
      console.log("Posted Claim res: ", res)
      // let formData = new FormData();
      // formData.append("Id", res.data);
      // for (let [key, value] of Object.entries(Imgdata)) {
      //   formData.append(key, value);
      // }
      // await instance
      //   .post("api/File/Insert", formData)
      //   .then((res) => {
      //     dispatch({
      //       type: REGISTER_POLICIES,
      //       payload: data,
      //     });
      //     SweetAlert({
      //       text: "Policy are successfully register",
      //       icon: "Success",
      //     });
      //     window.location.href = "/admin/policies";
      //   })
      //   .catch((err) => console.log("err FileUpload: ", err));
    });
  } catch (err) {
    console.log("err", err);
  }
};