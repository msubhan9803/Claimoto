import instance from "config/axios/instance";
import { SweetAlert, successAlert } from "functions";
import {
  GET_CLAIMS,
  CLAIMS_LIST_TABLE_FILTERING,
  CLAIMS_LIST_TABLE_DATA_CHANGE,
} from "store/types/claims";

// GET /api/Claims/Claims
export const GetClaimsByPolicyId = (policyId, handleClaimsNotFound) => async (dispatch) => {
  try {
    let res = await instance.get("api/Claims/Claims?Id=" + policyId);
    console.log("res", res);
    if (res) {
      dispatch({ type: GET_CLAIMS, payload: res.data });
      dispatch({
        type: CLAIMS_LIST_TABLE_FILTERING,
        payload: res.data,
      });
      dispatch({
        type: CLAIMS_LIST_TABLE_DATA_CHANGE,
        payload: { name: "claims_count", value: res.data.length },
      });
    } else {
        handleClaimsNotFound();
    }
  } catch (err) {
    console.log("err", err);
  }
};
