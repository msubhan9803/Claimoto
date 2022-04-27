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

  //Claim Actions
  SET_REJECTION_REASONS,
  HANDLE_CHANGE_INPUT_STATUS,
  HANDLE_CHANGE_INPUT_SCHEDULE_CALL,
  HANDLE_CHANGE_INPUT_LEAVE_MESSAGE,
  SET_USER_PROFILES_LIST,
} from "store/types/claims";
import { getAreas } from "store/actions/provider";

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

// GET /api/UserProfile/ByID
export const GetUserById = async (id) => {
  try {
    let res = await instance.get("api/UserProfile/ByID?Id=" + id);
    return res.data;
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

// GET /api/Policy/Policies
export const GetPoliciesByCivilId = (civilId) => async (dispatch) => {
  try {
    let res = await instance.get("api/Claims/Policies?CivialId=" + civilId);
    console.log("GetPoliciesByCivilId response: ", res.data);
    dispatch({
      type: SET_POLICIES_LIST,
      payload: res.data === "Policies not found" ? [] : res.data,
    });
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
    console.log("GetClaimDetails res", res);
    let payload = res.data;
    // For testing Region & Area
    // payload.Region = 2;
    // payload.Area = 2;
    // dispatch(getAreas(payload.Region))

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

// GET /api/AuthorityMatrix/UserProfiles
export const GetCivilIdBySearchVal = async (civilIdSearch) => {
  try {
    return await instance.get(
      "api/AuthorityMatrix/UserProfiles?SearchText=" + civilIdSearch
    );
    // dispatch({ type: SET_USER_PROFILES_LIST, payload: res.data });
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
          formData.append("AlreadyAddedPath", doc.AlreadyAddedPath);
          if (doc.file) formData.append("File", doc.file);

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
      } catch (err) {
        console.log("err", err);
      }
    };

export const HandleAddDocAttatchment = (obj) => async (dispatch) => {
  try {
    let formData = new FormData();
    formData.append("ClaimId", obj.ClaimId);
    formData.append("PolicyId", obj.PolicyId);
    formData.append("MakeId", obj.MakeId);
    formData.append("ModelId", obj.ModelId);
    formData.append("DocumentTypeId", obj.DocumentTypeId);
    formData.append("ClaimAttachmentId", obj.DocumentTypeId);
    formData.append("File", obj.file);

    await instance
      .post("api/Claims/ClaimAttachment", formData)
      .then((res) => {
        console.log("uploaded document with doc Id: ", obj.DocumentTypeId);
        window.location.reload();
      })
      .catch((err) => console.log("err FileUpload: ", err));
  } catch (err) {
    console.log("err", err);
  }
};

export const HandleUpdateDocAttatchment = (claimDocumentsList) => async (dispatch) => {
  try {
    for (let index = 0; index < claimDocumentsList.length; index++) {
      const doc = claimDocumentsList[index];
      let formData = new FormData();
      formData.append("ClaimId", doc.ClaimId);
      formData.append("PolicyId", doc.PolicyId);
      formData.append("MakeId", doc.MakeId);
      formData.append("ModelId", doc.ModelId);
      formData.append("DocumentTypeId", doc.DocumentTypeId);
      formData.append("ClaimAttachmentId", doc.DocumentTypeId);
      formData.append("AlreadyPath", doc.file ? "" : doc.Path);
      formData.append("CD_Id", doc.CD_Id);
      formData.append("File", doc.file);

      await instance
        .put("api/Claims/ClaimAttachment", formData)
        .then((res) => {
          console.log("Update ClaimAttachment res: ", res);
        })
        .catch((err) => console.log("err FileUpload: ", err));
    }
    window.location.reload()
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






//Claim Actions 
export const getRejectionReasons = () => async (dispatch) => {
  try {
    let res = await instance.get("api/Claims/ClaimRejectionReason");
    dispatch({ type: SET_REJECTION_REASONS, payload: res.data });
  } catch (err) {
    console.log("err", err);
  }
}

export const handleChangeInputStatus = ({ name, value }) =>
  (dispatch) => {
    try {
      dispatch({
        type: HANDLE_CHANGE_INPUT_STATUS,
        payload: { name, value },
      });
    } catch (err) {
      console.log("err", err);
    }
  };


  export const handleChangeInputSchedule = ({ name, value }) =>
  (dispatch) => {
    try {
      dispatch({
        type: HANDLE_CHANGE_INPUT_SCHEDULE_CALL,
        payload: { name, value },
      });
    } catch (err) {
      console.log("err", err);
    }
  };


  


export const initialHandleClaim = (values, callback) => async (dispatch) => {
  try {
    let payload = {
      "ClaimId": values.claimId,
      "ClaimStatusId": values.statusId,
      "InternalNote": values.internal_comments,
      "ExternalNote": values.external_comments,
      "RejectionReason": values.rejection_reason
    }
    dispatch({ type: HANDLE_CHANGE_INPUT_STATUS, payload: { name: "loading", value: true } });
    await instance.put("api/Claims/UpdateStatusRejectApprove", payload);
    dispatch({ type: HANDLE_CHANGE_INPUT_STATUS, payload: { name: "loading", value: false } });
    callback();
  } catch (err) {
    dispatch({ type: HANDLE_CHANGE_INPUT_STATUS, payload: { name: "loading", value: false } });
    console.log("err", err);
  }
}


export const handleChangeInputMessage = ({ name, value }) =>
(dispatch) => {
  try {
    dispatch({
      type: HANDLE_CHANGE_INPUT_LEAVE_MESSAGE,
      payload: { name, value },
    });
  } catch (err) {
    console.log("err", err);
  }
};



export const sendMessagePolicyHolder = (values, callback) => async (dispatch) => {
  try {
    let payload = {
      
    }
    dispatch({ type: HANDLE_CHANGE_INPUT_LEAVE_MESSAGE, payload: { name: "loading", value: true } });
    await instance.put("api/Claims/", payload);
    dispatch({ type: HANDLE_CHANGE_INPUT_LEAVE_MESSAGE, payload: { name: "loading", value: false } });
    callback();
  } catch (err) {
    dispatch({ type: HANDLE_CHANGE_INPUT_LEAVE_MESSAGE, payload: { name: "loading", value: false } });
    console.log("err", err);
  }
}




