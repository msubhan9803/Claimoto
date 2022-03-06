import {
  SweetAlert,
  successAlert,
  successWithoutConfirmAlert,
} from "functions";
import {
  GET_ALL_TIMEZONES,
  GET_SMTP_CONFIG,
  HANDLE_SMTP_VALUES,
  NAVIGATE_SMTP_BACK,
  GET_EMAIL_CONFIG,
  NAVIGATE_EMAIL_BACK,
  HANDLE_EMAIL_VALUES,
  EMAIL_VALUES_LOADED,
} from "store/types/settings.js";
import instance from "config/axios/instance";

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
      .put(`api/EmailTemplate/Put_GlobelEmail_Signature`, settingsObj)
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
