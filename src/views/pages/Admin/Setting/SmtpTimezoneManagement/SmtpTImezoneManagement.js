import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  GetAllTimezones,
  GetSmtpConfig,
  HandleSmtpValues,
  UpdateSettingsPart,
  sendTestEmail
} from "../../../../../store/actions/settings/index.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { ErrorMessage } from "@hookform/error-message";
import { event } from "jquery";

const schema = Yup.object().shape({
  HostName: Yup.string().required("Host name is required"),
  UserName: Yup.string().required("User name is required"),
  Password: Yup.string().required("Password is required"),
  PortNo: Yup.string().required("Port is required"),
  test_email: Yup.string().required("Test Email is required"),

  // Email: Yup.string().required("Emailis required"),
  // IsActive: Yup.string().required("IsActiveis required"),
  // IsDeleted: Yup.string().required("IsDeletedis required"),
  // SMTPConfig_ID: Yup.string().required("SMTPConfig_IDis required"),
  // TenantId: Yup.string().required("TenantIdis required"),
  // TimeZone_ID: Yup.string().required("TimeZone_IDis required"),
  // UpdatedBy: Yup.string().required("UpdatedByis required"),
  // UpdatedDate: Yup.string().required("UpdatedDateis required"),
});

const defaultValues = {
  CreatedBy: "",
  CreatedDate: "",
  Email: "",
  HostName: "",
  IsActive: "",
  IsDeleted: "",
  Password: "",
  PortNo: "",
  SMTPConfig_ID: "",
  SSL_Enabled: false,
  TenantId: "",
  TimeZone_ID: "",
  UpdatedBy: "",
  UpdatedDate: "",
  UserName: "",
};

const SmtpManagement = () => {
  let dispatch = useDispatch();
  const navigateHook = useNavigate();
  const { timezoneList, smptValues, smtpNavigate } = useSelector(
    (state) => state.settingsReducer
  );
  const {
    CreatedBy,
    CreatedDate,
    Email,
    HostName,
    IsActive,
    IsDeleted,
    Password,
    PortNo,
    SMTPConfig_ID,
    SSL_Enabled,
    TenantId,
    TimeZone_ID,
    UpdatedBy,
    UpdatedDate,
    UserName,
    test_email
  } = smptValues;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
    setValue,
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
    defaultValues: smptValues,
  });

  useEffect(() => {
    dispatch(GetAllTimezones());
    dispatch(GetSmtpConfig());

    return () => {
      dispatch({
        type: "NAVIGATE_SMTP_BACK",
        payload: false,
      });
      reset(defaultValues);
    };
  }, []);

  useEffect(() => {
    if (HostName !== "") {
      reset(smptValues)
    }
  }, [smptValues])

  useEffect(() => {
    if (smtpNavigate) {
      navigateHook("/admin/settings");
    }
  }, [smtpNavigate]);

  const _handleChangeValue = (e) => {
    e.persist();
    console.log("value: ", e.target.value);
    let name = e.target.name;
    let value = e.target.value;
    if (name === "TimeZone_ID") {
      value = parseInt(value);
    }
    if (name === "SSL_Enabled") {
      value = !SSL_Enabled;
    }
    dispatch(HandleSmtpValues(name, value));
  };

  const _onSubmit = (data) => {
    dispatch(UpdateSettingsPart(smptValues));
    // setState(initialState)
  };


  const _onSubmitTestEmail = (data) => {
    dispatch(sendTestEmail(smptValues));
    // setState(initialState)
  };

  return (
    <div class="body-bg-1">
      <form is="smtp-form" onSubmit={handleSubmit(_onSubmit)}>
        <div class="ltnd__header-area ltnd__header-area-2 section-bg-2---">
          <div class="ltnd__header-middle-area mt-30">
            <div class="row">
              <div class="col-lg-9">
                <div class="ltnd__page-title-area">
                  <h2>SMTP/Timezone Management</h2>
                  <p class="page-back-btn">
                    <Link to="/admin/settings">
                      <i className="icon-left-arrow-1" /> Back
                    </Link>
                  </p>
                </div>
              </div>
              <div class="col-lg-3 align-self-center text-end">
                <div class="btn-wrapper btn-inline text-center mt-0 d-none">
                  <a
                    href="#"
                    class="btn theme-btn-1 btn-round-12 btn-2"
                    title="Quick View"
                    data-bs-toggle="modal"
                    data-bs-target="#adding_modal"
                  >
                    Edit
                  </a>
                </div>
                <div class="ltnd__date-area d-none">
                  <div class="ltn__datepicker">
                    <div class="ltn_datepicker-title">
                      <span>Date</span>
                    </div>
                    <div class="input-group date" data-provide="datepicker">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Select Date"
                      />
                      <div class="input-group-addon">
                        <i class="far fa-calendar-alt"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="body-content-area-inner">
          <div class="ltnd__block-area">
            <div class="row">
              <div class="col-lg-12">
                <div class="ltnd__block-item mt-30">
                  <h1 class="ltnd__title-3">SMTP Configuration</h1>
                  <div class="ltn__block-item-info">
                    <form id="#" action="#" method="#" class="ltnd__form-1">
                      <div class="row">
                        <div class="col-md-3">
                          <h6 className="ltnd__title-4">SMTP Host</h6>
                          <div class="input-item">
                            <input
                              type="text"
                              name="HostName"
                              value={HostName}
                              {...register("HostName")}
                              onChange={_handleChangeValue}
                              placeholder="Enter Smtp Host"
                            />
                            <ErrorMessage
                              errors={errors}
                              name="HostName"
                              render={({ message }) => (
                                <p style={{ color: "red", paddingTop: "20px" }}>
                                  {message}
                                </p>
                              )}
                            />
                          </div>
                        </div>
                        <div class="col-md-3">
                          <h6 className="ltnd__title-4">Auth User</h6>
                          <div class="input-item">
                            <input
                              type="text"
                              name="UserName"
                              value={UserName}
                              {...register("UserName")}
                              onChange={_handleChangeValue}
                              placeholder="Auth User"
                            />
                            <ErrorMessage
                              errors={errors}
                              name="UserName"
                              render={({ message }) => (
                                <p style={{ color: "red", paddingTop: "20px" }}>
                                  {message}
                                </p>
                              )}
                            />
                          </div>
                        </div>
                        <div class="col-md-3">
                          <h6 className="ltnd__title-4">Auth Pass</h6>
                          <div class="input-item">
                            <input
                              type="password"
                              name="Password"
                              value={Password}
                              {...register("Password")}
                              onChange={_handleChangeValue}
                              placeholder="Auth Pass"
                            />
                            <ErrorMessage
                              errors={errors}
                              name="Password"
                              render={({ message }) => (
                                <p style={{ color: "red", paddingTop: "20px" }}>
                                  {message}
                                </p>
                              )}
                            />
                          </div>
                        </div>
                        <div class="col-md-3">
                          <h6 className="ltnd__title-4">Port</h6>
                          <div class="input-item">
                            <input
                              type="number"
                              name="PortNo"
                              value={PortNo}
                              {...register("PortNo")}
                              onChange={_handleChangeValue}
                              placeholder="Enter Smtp Host"
                            />
                            <ErrorMessage
                              errors={errors}
                              name="PortNo"
                              render={({ message }) => (
                                <p style={{ color: "red", paddingTop: "20px" }}>
                                  {message}
                                </p>
                              )}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="col-10">
                          <p style={{ marginBottom: "0px" }}>Secure</p>
                          <p style={{ marginBottom: "0px" }}>
                            Connection Security (SSL ENABLED)
                          </p>
                        </div>
                        <div className="col-2 text-right">
                          <input
                            style={{
                              width: "20px",
                              height: "20px",
                              float: "right",
                              margin: "auto",
                            }}
                            onChange={_handleChangeValue}
                            type="checkbox"
                            name="SSL_Enabled"
                            checked={SSL_Enabled}
                            value={SSL_Enabled}
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="ltnd__block-area">
            <div class="row">
              <div class="col-lg-12">
                <div class="ltnd__block-item mt-30">
                  <h6 class="ltnd__title-3">Test SMTP Configrations</h6>
                  <div class="ltn__block-item-info">
                      <div class="row">
                        <div class="col-md-12">
                          <div class="input-item">
                            <input
                              type="email"
                              name="test_email"
                              value={test_email}
                              onChange={_handleChangeValue}
                              placeholder="Enter Email"
                            />
                          </div>
                          <div class="input-item mt-2">
                            <button
                            type="button"
                            onClick={_onSubmitTestEmail}
                              class="btn theme-btn-1 btn-round-12"
                            >
                              Send Test Mail
                            </button>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>




          <div class="ltnd__block-area">
            <div class="row">
              <div class="col-lg-12">
                <div class="ltnd__block-item mt-30">
                  <h6 class="ltnd__title-3">Timezone Configuration</h6>
                  <div class="ltn__block-item-info">
                    <form id="#" action="#" method="#" class="ltnd__form-1">
                      <div class="row">
                        <div class="col-md-12">
                          <div class="input-item">
                            <select
                              value={TimeZone_ID}
                              onChange={_handleChangeValue}
                              className="nice-select"
                              name="TimeZone_ID"
                            >
                              {timezoneList.map((timezone, index) => (
                                <option
                                  key={index}
                                  value={timezone.TimeZoneConfig_ID}
                                >
                                  {`(${timezone.TimeZone_Offset}) ${timezone.TimeZone}`}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer class="ltnd__footer-1 bg-white mt-80">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12">
                <div class="ltnd__footer-1-inner">
                  <div class="ltnd__left btn-normal"></div>
                  <div class="ltnd__right btn-normal">
                    <div class="btn-wrapper">
                      <Link to="/admin/settings">
                        <i className="icon-left-arrow-1" /> Back
                      </Link>
                      <button
                        type="submit"
                        class="btn theme-btn-1 btn-round-12"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </form>
    </div>
  );
};

export default SmtpManagement;
