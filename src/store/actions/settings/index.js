import { successAlert, successWithoutConfirmAlert } from "functions";
import {
  GET_ALL_TIMEZONES,
  GET_SMTP_CONFIG,
  HANDLE_SMTP_VALUES,
  NAVIGATE_SMTP_BACK,
  GET_EMAIL_CONFIG,
  NAVIGATE_EMAIL_BACK,
  HANDLE_EMAIL_VALUES,
  GET_ACCOUNT_CONFIG,
  GET_ALL_COUNTRIES,
  HANDLE_ACCOUNT_VALUES,
  HANDLE_ACCOUNT_VALUES_OUTER,
  NAVIGATE_ACCOUNT_BACK,
  GET_ALL_ACTIVITY_LOGS,
  GET_ALL_ACTIVITY_BY_ID,
  SET_LOGS_PAGE_INDEX
} from "store/types/settings.js";
import instance from "config/axios/instance";

// For SMTP & Timezone
export const GetAllTimezones = () => async (dispatch) => {
  try {
    let res = await instance.get(`api/EmailTemplate/TimeZone`);
    dispatch({
      type: GET_ALL_TIMEZONES,
      payload: res.data,
    });
  } catch (err) {
    console.log("err", err);
  }
};

export const GetSmtpConfig = () => async (dispatch) => {
  try {
    let res = await instance.get(`api/EmailTemplate/SMTP_Configuration`);
    dispatch({
      type: GET_SMTP_CONFIG,
      payload: res.data,
    });
  } catch (err) {
    console.log("err", err);
  }
};

export const UpdateSettingsPart = (settingsObj) => async (dispatch) => {
  try {
    instance
      .put(`api/EmailTemplate/Put_SMTP_Configuration`, settingsObj)
      .then((res) => {
        successAlert({
          text: res.data,
          icon: "success",
        });
        dispatch({
          type: NAVIGATE_SMTP_BACK,
          payload: true,
        });
      });
  } catch (err) {
    console.log("err", err);
  }
};

export const HandleSmtpValues = (name, value) => async (dispatch) => {
  try {
    dispatch({
      type: HANDLE_SMTP_VALUES,
      payload: { name, value },
    });
  } catch (err) {
    console.log("err", err);
  }
};

// For Email Signature
export const GetEmailConfig = () => async (dispatch) => {
  try {
    let res = await instance.get(`api/EmailTemplate/GlobelEmail_Signature`);
    let data = res.data;
    data.EmailCC = data.EmailCC.split(",");
    data.EmailBCC = data.EmailBCC.split(",");

    dispatch({
      type: GET_EMAIL_CONFIG,
      payload: data,
    });
  } catch (err) {
    console.log("err", err);
  }
};

export const UpdateEmailPart = (settingsObj) => async (dispatch) => {
  try {
    let temp = settingsObj;
    temp.EmailCC = temp.EmailCC.join(",");
    temp.EmailBCC = temp.EmailBCC.join(",");

    instance
      .put(`api/EmailTemplate/Put_GlobelEmail_Signature`, temp)
      .then((res) => {
        successWithoutConfirmAlert({
          text: res.data,
          icon: "success",
        });
        setTimeout(() => {
          dispatch({
            type: NAVIGATE_EMAIL_BACK,
            payload: true,
          });
        }, 1500);
      });
  } catch (err) {
    console.log("err", err);
  }
};

export const HandleEmailValues = (name, value) => async (dispatch) => {
  try {
    dispatch({
      type: HANDLE_EMAIL_VALUES,
      payload: { name, value },
    });
  } catch (err) {
    console.log("err", err);
  }
};

// For Account
export const GetAllCountry = () => async (dispatch) => {
  try {
    let res = await instance.get(`api/Account/Country`);
    dispatch({
      type: GET_ALL_COUNTRIES,
      payload: res.data,
    });
  } catch (err) {
    console.log("err", err);
  }
};

export const GetAccountConfig = (id) => async (dispatch) => {
  try {
    let res = await instance.get(`api/UserProfile/${id}`);
    dispatch({
      type: GET_ACCOUNT_CONFIG,
      payload: res,
    });
  } catch (err) {
    console.log("err", err);
  }
};

export const HandleAccountValues = (name, value) => async (dispatch) => {
  try {
    dispatch({
      type: HANDLE_ACCOUNT_VALUES,
      payload: { name, value },
    });
  } catch (err) {
    console.log("err", err);
  }
};

export const HandleAccountValuesOuter = (name, value) => async (dispatch) => {
  try {
    dispatch({
      type: HANDLE_ACCOUNT_VALUES_OUTER,
      payload: { name, value },
    });
  } catch (err) {
    console.log("err", err);
  }
};

export const UpdateAccountPart = (accountObj) => async (dispatch) => {
  try {
    let temp = accountObj.accountValues;
    if (accountObj.UploadedImage !== "") {
      temp.ImageModel = {
        Base64: accountObj.UploadedImage,
        ImageName: accountObj.ImageName,
        Type: accountObj.fileExt,
      };
    }
    if (accountObj.ConfirmNewPassword !== "") {
      temp.TenantPrimaryPersonPassword = accountObj.ConfirmNewPassword;
    }

    let payload = {
      "UserName": 0,
      "UserId": parseInt(accountObj?.UserId) || "",
      "FirstName": temp?.TenantPrimaryPersonName || "",
      "MobileNo": temp?.TenantPrimaryPersonPhone || "",
      "Email": temp?.TenantPrimaryPersonEmail || "",
      "Password": temp?.TenantPrimaryPersonPassword || "",
      "RoleId": 0,
      "AccessGroupIds": 0,
      "ImageModel": temp.ImageModel || temp.TenantLogoPath,
      "CurrentPassword": accountObj.CurrentPassword || "",
      "Status": 0
    };

    instance.put(`api/UserAccount`, payload).then((res) => {
      successAlert({
        text: res.data,
        icon: "success",
      });
      setTimeout(() => {
        dispatch({
          type: NAVIGATE_ACCOUNT_BACK,
          payload: true,
        });
      }, 1500);
    });
  } catch (err) {
    console.log("err", err);
  }
};

// Activity Log
export const GetAllActivityLogs =
  (
    PageIndex,
    PageSize,
    SearchText,
    SearchOption,
    SortType,
    SortName,
    ToDate,
    FromDate,
    ActivityType
  ) =>
    async (dispatch) => {
      try {
        let params = {
          PageIndex: PageIndex,
          PageSize: PageSize,
          SearchText: SearchText,
          SearchOption: SearchOption,
          SortType: SortType,
          SortName: SortName,
          ToDate: ToDate,
          FromDate: FromDate,
          ActivityType: ActivityType,
        };

        let res = await instance.get(`api/ActivityLogs/Pagination`, {
          params: params,
        });
        dispatch({
          type: GET_ALL_ACTIVITY_LOGS,
          payload: res.data,
        });
      } catch (err) {
        console.log("err", err);
      }
    };

export const GetAllActivityById = (activityId) => async (dispatch) => {
  try {
    let res = await instance.get(`api/ActivityDetails?Id=${activityId}`);
    dispatch({
      type: GET_ALL_ACTIVITY_BY_ID,
      payload: res.data,
    });
  } catch (err) {
    console.log("err", err);
  }
};

export const SetPageIndex = (pageIndex) => async (dispatch) => {
  try {
    dispatch({ type: SET_LOGS_PAGE_INDEX, payload: pageIndex });
  } catch (err) {
    console.log("err", err);
  }
};


export const sendTestEmail = (stmp) => async (dispatch) => {
  let {
    test_email,
    HostName,
    Password,
    PortNo,
    SSL_Enabled,
    UserName
  } = stmp;
  try {
    let res = await instance.get(`api/EmailTemplate/SendEmail?SMTP_Host=${HostName}&Auth_Password=${Password}&Port=${PortNo}&&SSL=${SSL_Enabled}&&ToText=${test_email}&Auth_User=${UserName}`);
    successAlert({
      text: res.data,
      icon: "success",
    });
  } catch (err) {
    console.log("err", err);
  }
}
