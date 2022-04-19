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
  SET_ACTION_PERMISSIONS,
  RESET_CLAIMS_DETAILS,
  HANDLE_FIELD_CHANGE,
  RESET_CLAIMS_LIST_AND_PAGINATION,
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

// GET /api/Claims/Claim
export const GetClaimDetails = (claimId) => async (dispatch) => {
  try {
    let res = await instance.get("api/Claims/Claim?id=" + claimId);
    console.log("res", res);
    let payload = res.data;
    dispatch({ type: SET_CLAIMS_DETAILS, payload: payload });
  } catch (err) {
    console.log("err", err);
  }
};

// GET /api/Policy/GetProductDetails/{id}
export const GetProductDetails =
  (policyId, prevClaimState) => async (dispatch) => {
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

// GET /api/Claims/ClaimActions
export const GetClaimActionsByRoleId = (roleId) => async (dispatch) => {
  try {
    let res = await instance.get("api/Claims/ClaimActions?Id=" + roleId);
    console.log("res", res);
    dispatch({ type: SET_ACTION_PERMISSIONS, payload: res.data });
  } catch (err) {
    console.log("err", err);
  }
};

export const HandleFieldChange = (name, value) => (dispatch) => {
  try {
    console.log("typeof", typeof value);
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
      type: RESET_CLAIMS_DETAILS,
    });
  } catch (err) {
    console.log("err", err);
  }
};

export const ResetClaimListAndPagination = (name, value) => (dispatch) => {
  try {
    dispatch({
      type: RESET_CLAIMS_LIST_AND_PAGINATION,
    });
  } catch (err) {
    console.log("err", err);
  }
};

// POST /api/Claims
export const PostClaimDetials =
  (claimDetials, layout, setIsLoading, navigate, msgAlert) =>
  async (dispatch) => {
    try {
      let claimDocuments = claimDetials.ClaimDocuments;
      let claimPhotos = claimDetials.ClaimAccidentCarPhotos;

      let payload = claimDetials;
      delete payload.ClaimAccidentCarPhotos;
      delete payload.ClaimDocuments;
      payload.SubmissionDate = new Date();
      payload.CreatedDate = new Date();
      payload.UpdatedDate = new Date();

      await instance.post("api/Claims", payload).then(async (res) => {
        console.log("Posted Claim res: ", res);

        for (let index = 0; index < claimDocuments.length; index++) {
          const doc = claimDocuments[index];
          let formData = new FormData();
          formData.append("ClaimId", res.data.ClaimId);
          formData.append("PolicyId", payload.PolicyId);
          formData.append("MakeId", payload.MakeId);
          formData.append("ModelId", payload.ModeIld);
          formData.append("DocumentTypeId", doc.DocumentTypeId);
          formData.append("ClaimAttachmentId", doc.DocumentTypeId);
          formData.append("File", doc.file);

          await instance
            .post("api/Claims/ClaimAttachment", formData)
            .then((res) => {
              console.log(
                "uploaded document with doc Id: ",
                doc.DocumentTypeId
              );
            })
            .catch((err) => console.log("err FileUpload: ", err));
        }

        for (let index = 0; index < claimPhotos.length; index++) {
          const doc = claimPhotos[index];
          let formData = new FormData();
          formData.append("ClaimId", res.data.ClaimId);
          formData.append("PolicyId", payload.PolicyId);
          formData.append("MakeId", payload.MakeId);
          formData.append("ModelId", payload.ModeIld);
          formData.append("AccidentCarPhotoId", doc.ClaimPhotoTypeId);
          formData.append("ClaimAttachmentId", doc.ClaimPhotoTypeId);
          formData.append("ClaimPhotoTypeId", doc.ClaimPhotoTypeId);
          formData.append("File", doc.file);

          await instance
            .post("api/Claims/ClaimImages", formData)
            .then((res) => {
              console.log("uploaded photo with doc Id: ", doc.DocumentTypeId);
            })
            .catch((err) => console.log("err FileUpload: ", err));
        }

        setIsLoading(false);
        navigate(`/${layout}/policies`);
        msgAlert({
          title: "Claim initiated successfully!",
          text: "",
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
      type: CLAIMS_LIST_TABLE_FILTERING,
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
        type: CLAIMS_LIST_TABLE_DATA_CHANGE,
        payload: { name, value },
      });
    } catch (err) {
      console.log("err", err);
    }
  };
