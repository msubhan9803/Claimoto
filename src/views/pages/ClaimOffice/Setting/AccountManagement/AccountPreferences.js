import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import AccountUser from "assets/img/account-user.jpg";
import {
  GetAccountConfig,
  GetAllCountry,
  HandleAccountValues,
  UpdateAccountPart,
  HandleAccountValuesOuter,
} from "../../../../../store/actions/settings/index.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { ErrorMessage } from "@hookform/error-message";
import { msgAlert } from "functions";
import { getBase64FromFile } from "../../../../../functions/helpers.js";

const schema = Yup.object().shape({
  TenantPrimaryPersonName: Yup.string().required("Name is required"),
  TenantPrimaryPersonEmail: Yup.string().required("Email is required"),
  TenantPrimaryPersonPhone: Yup.string().required("Phone is required"),
});

const defaultValues = {
  TenantLogoPath: "",
  TenantPrimaryPersonName: "",
  TenantPrimaryPersonCountry: "",
  TenantPrimaryPersonEmail: "",
  TenantPrimaryPersonPhone: "",
  TenantPrimaryPersonPassword: "",
  TenantPrimaryPersonTwoFactorPhone: "",
};

const AccountPreferences = ({ layout }) => {
  let dispatch = useDispatch();
  const navigateHook = useNavigate();
  const imageRef = useRef();
  const {
    accountValues,
    countryList,
    navigateAccountSig,
    CurrentPassword,
    NewPassword,
    ConfirmNewPassword,
    UploadedImage,
    IsEditImage,
    fileExt,
    ImageName,
    navigateAccount,
  } = useSelector((state) => state.settingsReducer);
  const { UserId } = useSelector((state) => state.authReducer.user_details);
  const {
    TenantLogoPath,
    TenantPrimaryPersonName,
    TenantPrimaryPersonCountry,
    TenantPrimaryPersonEmail,
    TenantPrimaryPersonPhone,
    TenantPrimaryPersonPassword,
    TenantPrimaryPersonTwoFactorPhone,
  } = accountValues;
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
    defaultValues: defaultValues,
  });
  const [passwordErrors, setPasswordErrors] = useState({
    CurrentPassword: "",
    ConfirmNewPassword: "",
  });

  useEffect(() => {
    dispatch(GetAllCountry());
    dispatch(GetAccountConfig(Number(UserId)));

    return () => {
      dispatch({
        type: "NAVIGATE_ACCOUNT_BACK",
        payload: false,
      });
      reset(defaultValues);

      dispatch({
        type: "RESET_ACCOUNT_STATE",
      });
    };
  }, []);

  useEffect(() => {
    reset(accountValues);
  }, [accountValues]);

  useEffect(() => {
    if (navigateAccount) {
      navigateHook(`/${layout}/settings`);
    }
  }, [navigateAccount]);

  useEffect(() => {
    // if (CurrentPassword && CurrentPassword !== TenantPrimaryPersonPassword) {
    //   setPasswordErrors({
    //     ...passwordErrors,
    //     CurrentPassword: "Current Password is incorrect",
    //   });
    // } else {
    //   setPasswordErrors({
    //     ...passwordErrors,
    //     CurrentPassword: "",
    //   });
    // }
    if (NewPassword && ConfirmNewPassword) {
      if (NewPassword !== ConfirmNewPassword) {
        setPasswordErrors({
          ...passwordErrors,
          ConfirmNewPassword: "Confirm New Password does not match",
        });
      } else {
        setPasswordErrors({
          ...passwordErrors,
          ConfirmNewPassword: "",
        });
      }
    }
  }, [CurrentPassword, NewPassword, ConfirmNewPassword]);

  const _handleChangeValue = (e) => {
    e.persist();
    let name = e.target.name;
    let value = e.target.value;
    dispatch(HandleAccountValues(name, value));
  };

  const _handleChangeValueOuter = (e) => {
    e.persist();
    let name = e.target.name;
    let value = e.target.value;
    dispatch(HandleAccountValuesOuter(name, value));
  };

  // handle image
  const _onImageChange = (event) => {
    let s_file = event.target.files[0];
    let name = event.target.name;
    let selectedTypes = ["image/png", "image/jpg", "image/jpeg"];

    if (!selectedTypes?.includes(s_file.type)) {
      msgAlert({
        title: "Invalid Image Type",
        text: "Only Png and Jpeg images are allowed",
      });
      imageRef.current.value = "";
    } else if (s_file.size < 10000) {
      msgAlert({
        title: "Invalid Image Size",
        text: "Only < 1 MB are allowed",
      });
      imageRef.current.value = "";
    } else {
      console.log("file: ", s_file);
      // Dispatch
      getBase64FromFile(s_file).then((base64) => {
        dispatch(HandleAccountValuesOuter("UploadedImage", base64));
        dispatch(HandleAccountValuesOuter("IsEditImage", true));
        dispatch(HandleAccountValuesOuter("ImageName", s_file.name));
        dispatch(HandleAccountValuesOuter("fileExt", s_file.type.substring(6)));
        imageRef.current.value = "";
      });
    }
  };

  const _onSubmit = (data) => {
      dispatch(
        UpdateAccountPart({
          UserId,
          accountValues,
          UploadedImage,
          ImageName,
          fileExt,
          CurrentPassword,
          NewPassword,
          ConfirmNewPassword,
        })
      );
  };

  return (
    <>
      <div class="body-bg-1">
        <form is="account-form" onSubmit={handleSubmit(_onSubmit)}>
          <div class="ltnd__header-area ltnd__header-area-2 section-bg-2---">
            <div class="ltnd__header-middle-area mt-30">
              <div class="row">
                <div class="col-lg-9">
                  <div class="ltnd__page-title-area">
                    <h2>Account</h2>
                    <p class="page-back-btn">
                      <Link to={`/${layout}/settings`}>
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
                    <div class="ltn__block-item-info">
                      <h6 class="ltnd__title-3">Personal information</h6>
                      <div class="ltnd__edit-table-logo-title mb-20">
                        <div class="ltnd__edit-table-logo">
                          <div style={{ cursor: "pointer" }}>
                            {IsEditImage ? (
                              <img
                                src={UploadedImage}
                                alt="#"
                                onClick={() => imageRef.current.click()}
                              />
                            ) : (
                              <>
                                {TenantLogoPath ? (
                                  <img
                                    src={
                                      process.env.REACT_APP_API_ENVIROMENT +
                                      TenantLogoPath.substring(1)
                                    }
                                    onClick={() => imageRef.current.click()}
                                    alt="#"
                                  />
                                ) : (
                                  <img
                                    src={AccountUser}
                                    alt="#"
                                    onClick={() => imageRef.current.click()}
                                  />
                                )}
                              </>
                            )}
                          </div>
                          <input
                            type="file"
                            id="file_5"
                            name="Image5"
                            style={{ display: "none" }}
                            ref={imageRef}
                            onChange={_onImageChange}
                          />
                        </div>
                        <div class="ltnd__edit-table-title">
                          <h1 class="mb-0">{TenantPrimaryPersonName}</h1>
                          <p class="ltn__color-1">{TenantPrimaryPersonEmail}</p>
                        </div>
                      </div>
                      <h6>Your legal name</h6>

                      <form id="#" action="#" method="#" class="ltnd__form-1">
                        <div class="row">
                          <div class="col-md-5">
                            <div class="input-item">
                              <input
                                type="text"
                                name="TenantPrimaryPersonName"
                                value={TenantPrimaryPersonName}
                                {...register("TenantPrimaryPersonName")}
                                onChange={_handleChangeValue}
                                placeholder="Enter User Name"
                              />
                              <ErrorMessage
                                errors={errors}
                                name="TenantPrimaryPersonName"
                                render={({ message }) => (
                                  <p
                                    style={{ color: "red", paddingTop: "20px" }}
                                  >
                                    {message}
                                  </p>
                                )}
                              />
                            </div>
                          </div>
                          <div class="col-md-5">
                            <div class="input-item">
                              <select
                                value={TenantPrimaryPersonCountry}
                                onChange={_handleChangeValue}
                                className="nice-select"
                                name="TenantPrimaryPersonCountry"
                              >
                                {countryList.map((country, index) => (
                                  <option key={index} value={country.Id}>
                                    {`${country.Name}`}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div class="col-md-5">
                            <div class="input-item">
                              <input
                                type="email"
                                name="TenantPrimaryPersonEmail"
                                value={TenantPrimaryPersonEmail}
                                {...register("TenantPrimaryPersonEmail")}
                                onChange={_handleChangeValue}
                                placeholder="Enter Email"
                              />
                              <ErrorMessage
                                errors={errors}
                                name="TenantPrimaryPersonEmail"
                                render={({ message }) => (
                                  <p
                                    style={{ color: "red", paddingTop: "20px" }}
                                  >
                                    {message}
                                  </p>
                                )}
                              />
                            </div>
                          </div>
                          <div class="col-md-5">
                            <div class="input-item">
                              <input
                                type="number"
                                name="TenantPrimaryPersonPhone"
                                value={TenantPrimaryPersonPhone}
                                {...register("TenantPrimaryPersonPhone")}
                                onChange={_handleChangeValue}
                                placeholder="Enter Phone"
                              />
                              <ErrorMessage
                                errors={errors}
                                name="TenantPrimaryPersonPhone"
                                render={({ message }) => (
                                  <p
                                    style={{ color: "red", paddingTop: "20px" }}
                                  >
                                    {message}
                                  </p>
                                )}
                              />
                            </div>
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
                    <div class="ltn__block-item-info">
                      <h6 class="ltnd__title-3">Password</h6>
                      <form id="#" action="#" method="#" class="ltnd__form-1">
                        <div class="row">
                          <div class="col-md-5">
                            <div class="input-item">
                              <input
                                type="password"
                                name="CurrentPassword"
                                value={CurrentPassword}
                                {...register("CurrentPassword")}
                                onChange={_handleChangeValueOuter}
                                placeholder="Enter current password"
                              />
                              {passwordErrors.CurrentPassword !== "" && (
                                <p style={{ color: "red", paddingTop: "20px" }}>
                                  {passwordErrors.CurrentPassword}
                                </p>
                              )}
                            </div>
                          </div>
                          <div class="col-md-5">
                            <div class="input-item">
                              <input
                                type="password"
                                name="NewPassword"
                                value={NewPassword}
                                {...register("NewPassword")}
                                onChange={_handleChangeValueOuter}
                                placeholder="Enter new password"
                              />
                            </div>
                          </div>
                          <div class="col-md-5">
                            <div class="input-item">
                              <input
                                type="password"
                                name="ConfirmNewPassword"
                                value={ConfirmNewPassword}
                                {...register("ConfirmNewPassword")}
                                onChange={_handleChangeValueOuter}
                                placeholder="Enter confirm new password"
                              />
                              {passwordErrors.ConfirmNewPassword !== "" && (
                                <p style={{ color: "red", paddingTop: "20px" }}>
                                  {passwordErrors.ConfirmNewPassword}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div class="ltnd__block-area mb-50">
              <div class="row">
                <div class="col-lg-12">
                  <div class="ltnd__block-item mt-30">
                    <div class="ltn__block-item-info">
                      <h6 class="ltnd__title-3">Two-factor authentication </h6>

                      <div class="ltn__checkbox-radio-group inline mt-20 mb-20">
                        <label class="ltn__switch-2">
                          <input type="checkbox" checked="true" />
                          <i class="lever"></i>{" "}
                          <span class="text">
                            <strong>Enable Two-factor authentication </strong>
                          </span>
                        </label>
                      </div>
                      <form id="#" action="#" method="#" class="ltnd__form-1">
                        <div class="row">
                          <div class="col-md-2">
                            <div class="input-item">
                              <select
                                value={TenantPrimaryPersonCountry}
                                onChange={_handleChangeValue}
                                className="nice-select"
                                name="TenantPrimaryPersonCountry"
                              >
                                {countryList.map((country, index) => (
                                  <option key={index} value={country.Id}>
                                    {`${country.Name}`}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="input-item">
                              <input
                                type="number"
                                name="TenantPrimaryPersonTwoFactorPhone"
                                value={TenantPrimaryPersonTwoFactorPhone}
                                {...register(
                                  "TenantPrimaryPersonTwoFactorPhone"
                                )}
                                onChange={_handleChangeValue}
                                placeholder="Enter Phone"
                              />
                              <ErrorMessage
                                errors={errors}
                                name="TenantPrimaryPersonTwoFactorPhone"
                                render={({ message }) => (
                                  <p
                                    style={{ color: "red", paddingTop: "20px" }}
                                  >
                                    {message}
                                  </p>
                                )}
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          <footer class="ltnd__footer-1 bg-white mt-80">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-12">
                  <div class="ltnd__footer-1-inner">
                    <div class="ltnd__left btn-normal"></div>
                    <div class="ltnd__right btn-normal">
                      <div class="btn-wrapper">
                        <Link to={`/${layout}/settings`}>
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
    </>
  );
};

export default AccountPreferences;
