import React, { useEffect, useState } from "react";
// import carIcon from 'assets/img/icons/mc/png/2.png'
// import imgUpload from 'assets/img/upload.png'
import { Link } from "react-router-dom";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { msgAlert } from "functions";
import { useDispatch, useSelector } from "react-redux";
import {
  RegisterPolicies,
  GetInputs,
  UpdatePolicies,
  GetSinglePolicy,
  GetColor,
  DeletePolicies,
  UpdateVehcileImage,
} from "store/actions/policies";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { confirmAlert } from "functions";
import Carasole from "components/Admin/Carasole/Carasole";
import { getAllowActions } from "functions";
import Imageviewer from "../../../../components/Admin/General/ImageViewer.js";

function VehicalDetail() {
  //Permissions Controlling
  const { permissions } = useSelector((state) => state.authReducer);
  let vehicle_actions = getAllowActions({ permissions, module_name: "AVP" });
  // state hook
  const [isEdit, setIsEdit] = useState(false);
  // params hook
  const params = useParams();
  const navigate = useNavigate();
  let location = useLocation();
  let path = location.pathname;
  const checkUrl = path.split("/")[2];
  const Url = checkUrl === "vehical_detail";
  const isVehicleDetailEditUrl = checkUrl === "vehical_detail_edit";
  const [isView, setIsView] = useState(false);
  const [showImageViewer, setShowImageViewer] = useState(false);
  const [imageViewerList, setImageViewerList] = useState([]);
  const [currenctImageIndex, setCurrenctImageIndex] = useState(0);
  const { layout } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  // form validation
  const formSchema = Yup.object().shape({
    PlateNumber: Yup.string().required("Plate Number  is required"),
    ColourId: Yup.string().required("Colour is required"),
    Year: Yup.string().required("Year is required"),
    Capacity: Yup.string()
      .required("Capacity is required")
      .max(2, "Enter 2 digits"),
    ChassisNumber: Yup.string().required("Chassis Number is required"),
  });
  // use selector hook
  const car_colors = useSelector((state) => state.policyReducer.color);
  const policy = useSelector((state) => state.policyReducer.policy);
  const policy_make = useSelector((state) => state.policyReducer.make);
  const { isSuccess } = useSelector((state) => state.policyReducer);
  // destrute policy values
  const {
    PlateNumber,
    Year,
    ColourId,
    Capacity,
    ChassisNumber,
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    isLoading,
    MakeId,
  } = policy;
  // initialize react hook form
  const formOptions = { resolver: yupResolver(formSchema), mode: "onChange" };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  useEffect(() => {
    if (checkUrl == "vehical_detail" || checkUrl == "vehical_detail_view") {
      // if (!isVehicleDetailEditUrl) {
      setIsView(true);
      if (params.id) {
        dispatch(GetSinglePolicy(params.id));
      }
    } else {
      setIsView(false);
    }
  }, []);

  // get single policy
  useEffect(() => {
    // if (params.id) {
    //   dispatch(GetSinglePolicy(params.id));
    // }
    dispatch(GetColor());
  }, [params.id]);

  useEffect(() => {
    if (isSuccess) {
      // console.log("==== isSuccess =====");
      navigate(`/${layout}/policies`);
    }
  }, [isSuccess]);

  useEffect(() => {
    let imagesList = [Image1, Image2, Image3, Image4, Image5];
    let temp = [];
    for (let index = 0; index < imagesList.length; index++) {
      const image = imagesList[index];
      temp.push(`${process.env.REACT_APP_API_ENVIROMENT}/${image}`);
    }
    console.log("temp: ", temp);
    setImageViewerList(temp);
  }, [policy]);

  // handle input
  const changeValue = (e) => {
    e.persist();
    const { name, value } = e.target;
    dispatch(GetInputs(name, value));
  };

  // handle image
  const _onImageChange = (event) => {
    let s_file = event.target.files[0];
    console.log("s_file", s_file);
    let name = event.target.name;
    let selectedTypes = ["image/png", "image/jpg", "image/jpeg"];
    if (!selectedTypes?.includes(s_file.type)) {
      msgAlert({
        title: "Invalid Image Type",
        text: "Only Png and Jpeg images are allowed",
      });
      // imageRef.current.value = "";
    } else if (s_file.size < 10000) {
      msgAlert({
        title: "Invalid Image Size",
        text: "Only < 1 MB are allowed",
      });
    } else {
      if (params.id) {
        dispatch(GetInputs(name, s_file));
        let index = null;
        if (name == "Image1") {
          index = 0;
        } else if (name == "Image2") {
          index = 1;
        } else if (name == "Image3") {
          index = 2;
        } else if (name == "Image4") {
          index = 3;
        } else {
          index = 4;
        }
        dispatch(UpdateVehcileImage(params.id, index, s_file));
      } else {
        dispatch(GetInputs(name, s_file));
      }
    }
  };

  // Send Form data

  const SendForm = () => {
    dispatch(RegisterPolicies(policy));
  };

  // update form data

  const updatProduct = () => {
    console.log("policy payload: ", policy);
    dispatch(UpdatePolicies(policy, params.id));
  };

  const delPolicy = (id) => {
    const dative = () => {
      dispatch(DeletePolicies(id));
    };
    if (id) {
      confirmAlert({
        title: "Are you sure?",
        text: "",
        buttonText: "Yes, Deactivate it",
        action: dative,
      });
    }
  };

  const onSubmit = () => {
    // let checkImg = Image1 || Image2 || Image3 || Image4 || Image5
    return params.id ? updatProduct() : SendForm();
  };

  let makeName = policy_make.find((i) => i.Id === MakeId);

  const _handleImageViewer = (index) => {
    console.log("index: ", index);
    setCurrenctImageIndex(index);
    setShowImageViewer(!showImageViewer);
  };

  const _handleImageViewerModalClose = () => {
    setShowImageViewer(!showImageViewer);
  };

  return (
    <React.Fragment>
      {/* <Carasole openModal={isEdit} closeModel={(value) => setIsEdit(value)} /> */}
      {showImageViewer && (
        <Imageviewer
          src={imageViewerList}
          currentIndex={currenctImageIndex}
          onClose={_handleImageViewerModalClose}
          disableScroll={false}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)",
          }}
          closeOnClickOutside={true}
        />
      )}
      {params.id && isLoading ? (
        <div className="spinner-grow" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <>
          <div className="ltnd__header-area ltnd__header-area-2 section-bg-2---">
            <div className="ltnd__header-middle-area mt-30">
              <div className="row">
                <div className="col-lg-9">
                  <div className="ltnd__page-title-area">
                    <p className="page-back-btn">
                      <Link
                        to={
                          params.id
                            ? checkUrl == "vehical_detail_view"
                              ? `/${layout}/policies`
                              : isVehicleDetailEditUrl
                              ? `/admin/policy_detail_edit/${params.id}`
                              : `/${layout}/policy_detail/${params.id}`
                            : "/admin/create_policy"
                        }
                      >
                        <i className="icon-left-arrow-1" /> Back
                      </Link>
                    </p>
                    <h2>Vehicle details</h2>
                  </div>
                </div>
                <div className="col-lg-3 align-self-center text-end">
                  <div className="ltnd__date-area d-none">
                    <div className="ltn__datepicker">
                      <div className="ltn_datepicker-title">
                        <span>Date</span>
                      </div>
                      <div
                        className="input-group date"
                        data-provide="datepicker"
                      >
                        <input
                          type="text"
                          placeholder=""
                          className="form-control"
                          placeholder="Select Date"
                        />
                        <div className="input-group-addon">
                          <i className="far fa-calendar-alt" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* header-middle-area end */}
            {/* HEADER AREA END */}
          </div>

          {/* Body Content Area Inner Start */}

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="body-content-area-inner">
              {/* BLOCK AREA START ( Vehicle Details section - 1 ) */}

              <div className="ltnd__block-area">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="ltnd__block-item mt-30">
                      <div className="ltnd__title ltnd__title-2---">
                        <h1>
                          {policy_make
                            .filter((i) => i.Id == MakeId)
                            .map((p) => (
                              <div>
                                <img
                                  src={`http://103.173.62.74:70${p.Image}`}
                                  height="50px"
                                  width="50px"
                                />
                                {p.MakeName}{" "}
                              </div>
                            ))}
                        </h1>
                      </div>
                      <div className="ltn__block-item-info ltnd__policies-details-info">
                        <div className="row">
                          <div className="col-lg-3 col-md-6">
                            <div className="policies-details-single-info">
                              <h6 className="ltnd__title-4">Plate number</h6>
                              <input
                                disabled={
                                  Url || checkUrl == "vehical_detail_view"
                                    ? true
                                    : false
                                }
                                type="text"
                                {...register("PlateNumber")}
                                onChange={changeValue}
                                name="PlateNumber"
                                value={PlateNumber}
                                placeholder="Plate number"
                              />
                              <ErrorMessage
                                errors={errors}
                                name="PlateNumber"
                                render={({ message }) => (
                                  <p style={{ color: "red" }}>{message}</p>
                                )}
                              />
                            </div>

                            <div className="policies-details-single-info">
                              <h6 className="ltnd__title-4">Capacity</h6>
                              <input
                                disabled={
                                  Url || checkUrl == "vehical_detail_view"
                                    ? true
                                    : false
                                }
                                type="number"
                                min={0}
                                {...register("Capacity")}
                                onChange={changeValue}
                                name="Capacity"
                                value={Capacity}
                                placeholder="Capacity"
                              />
                              <ErrorMessage
                                errors={errors}
                                name="Capacity"
                                render={({ message }) => (
                                  <p style={{ color: "red" }}>{message}</p>
                                )}
                              />
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <div className="policies-details-single-info">
                              <h6 className="ltnd__title-4">Chassis number</h6>
                              <input
                                disabled={
                                  Url || checkUrl == "vehical_detail_view"
                                    ? true
                                    : false
                                }
                                type="text"
                                {...register("ChassisNumber")}
                                onChange={changeValue}
                                name="ChassisNumber"
                                value={ChassisNumber}
                                placeholder="Chassis number"
                              />
                              <ErrorMessage
                                errors={errors}
                                name="ChassisNumber"
                                render={({ message }) => (
                                  <p style={{ color: "red" }}>{message}</p>
                                )}
                              />
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <div className="policies-details-single-info">
                              <h6 className="ltnd__title-4">Color</h6>
                              <select
                                disabled={
                                  Url || checkUrl == "vehical_detail_view"
                                    ? true
                                    : false
                                }
                                className="nice-select"
                                {...register("ColourId")}
                                onChange={changeValue}
                                name="ColourId"
                                value={ColourId}
                              >
                                <option value="">--- Please Select ---</option>
                                {car_colors.map((colr) => {
                                  return (
                                    <option value={colr.Id} key={colr.Id}>
                                      {colr.ColourName}
                                    </option>
                                  );
                                })}
                              </select>
                              <ErrorMessage
                                errors={errors}
                                name="ColourId"
                                render={({ message }) => (
                                  <p
                                    style={{ color: "red", marginTop: "4rem" }}
                                  >
                                    {message}
                                  </p>
                                )}
                              />
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <div className="policies-details-single-info">
                              <h6 className="ltnd__title-4">Year</h6>
                              <input
                                disabled={
                                  Url || checkUrl == "vehical_detail_view"
                                    ? true
                                    : false
                                }
                                type="number"
                                min={0}
                                name="Year"
                                {...register("Year")}
                                onChange={changeValue}
                                value={Year}
                                placeholder="Year"
                              />
                              <ErrorMessage
                                errors={errors}
                                name="Year"
                                render={({ message }) => (
                                  <p style={{ color: "red" }}>{message}</p>
                                )}
                              />
                            </div>
                          </div>
                        </div>
                        {/*  */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* BLOCK AREA END */}
              {/* BLOCK AREA START ( Vehicle Details section - 2 ) */}
              <div className="ltnd__block-area mt-15">
                {isVehicleDetailEditUrl && (
                  <div className="row ltn__custom-gutter">
                    <h6>
                      <i
                        className="ti-info-alt text-primary"
                        style={{ marginRight: "4px" }}
                      ></i>
                      Click on any image to change it
                    </h6>
                  </div>
                )}
                <div className="row ltn__custom-gutter">
                  <div className="col-lg-5">
                    <div className="ltnd__img-gallery mt-15">
                      {Image1 ? (
                        <>
                          <label htmlFor="file_2">
                            {checkUrl == "vehical_detail_edit" ||
                            checkUrl == "create_vehical" ? (
                              <>
                                <img
                                  onClick={() => setIsEdit(Url ? true : false)}
                                  // onClick={() => _handleImageViewer(0)}
                                  src={
                                    Image1?.Base64 ||
                                    (typeof Image1 === "string" &&
                                      `${process.env.REACT_APP_API_ENVIROMENT}/${Image1}`) ||
                                    URL.createObjectURL(Image1)
                                  }
                                  alt="Image"
                                />

                                <input
                                  type="file"
                                  id="file_2"
                                  disabled={
                                    Url || checkUrl == "vehical_detail_view"
                                      ? true
                                      : false
                                  }
                                  name="Image1"
                                  style={{ display: "none" }}
                                  onChange={_onImageChange}
                                />
                              </>
                            ) : (
                              <img
                                // onClick={() => setIsEdit(Url ? true : false)}
                                onClick={() => _handleImageViewer(0)}
                                src={
                                  Image1?.Base64 ||
                                  (typeof Image1 === "string" &&
                                    `${process.env.REACT_APP_API_ENVIROMENT}/${Image1}`) ||
                                  URL.createObjectURL(Image1)
                                }
                                alt="Image"
                              />
                            )}
                          </label>
                        </>
                      ) : (
                        <div className="Neon Neon-theme-dragdropboxs">
                          <input
                            type="file"
                            id="file_1"
                            disabled={
                              Url || checkUrl == "vehical_detail_view"
                                ? true
                                : false
                            }
                            name="Image1"
                            onChange={_onImageChange}
                          />
                          <div
                            className="Neon-input-dragDrop"
                            style={{ height: "98%" }}
                          >
                            <div
                              className="Neon-input-inner"
                              style={{ paddingTop: "6rem" }}
                            >
                              <div className="Neon-input-icon">
                                <i className="fas fa-file-image" />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="row ltn__custom-gutter">
                      <div className="col-lg-6">
                        <div className="ltnd__img-gallery mt-15">
                          {Image2 ? (
                            <>
                              <label htmlFor="files">
                                {checkUrl == "vehical_detail_edit" ||
                                checkUrl == "create_vehical" ? (
                                  <>
                                    <img
                                      onClick={() =>
                                        setIsEdit(Url ? true : false)
                                      }
                                      // onClick={() => _handleImageViewer(1)}
                                      src={
                                        Image2?.Base64 ||
                                        (typeof Image2 === "string" &&
                                          `${process.env.REACT_APP_API_ENVIROMENT}/${Image2}`) ||
                                        URL.createObjectURL(Image2)
                                      }
                                      alt="Image"
                                    />
                                    <input
                                      type="file"
                                      disabled={
                                        Url || checkUrl == "vehical_detail_view"
                                          ? true
                                          : false
                                      }
                                      id="files"
                                      name="Image2"
                                      style={{ display: "none" }}
                                      onChange={_onImageChange}
                                    />
                                  </>
                                ) : (
                                  <img
                                    // onClick={() => setIsEdit(Url ? true : false)}
                                    onClick={() => _handleImageViewer(1)}
                                    src={
                                      Image1?.Base64 ||
                                      (typeof Image1 === "string" &&
                                        `${process.env.REACT_APP_API_ENVIROMENT}/${Image2}`) ||
                                      URL.createObjectURL(Image1)
                                    }
                                    alt="Image"
                                  />
                                )}
                              </label>
                            </>
                          ) : (
                            <div className="Neon Neon-theme-dragdropbox">
                              <input
                                type="file"
                                disabled={
                                  Url || checkUrl == "vehical_detail_view"
                                    ? true
                                    : false
                                }
                                name="Image2"
                                onChange={_onImageChange}
                              />
                              <div className="Neon-input-dragDrop">
                                <div className="Neon-input-inner">
                                  <div className="Neon-input-icon">
                                    <i className="fas fa-file-image" />
                                  </div>
                                  <div className="Neon-input-text">
                                    {/* <h3>Drag&amp;Drop files here</h3> */}
                                    {/* <span >or</span> */}
                                  </div>
                                  {/* <button className="Neon-input-choose-btn blue">Browse Files</button> */}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="ltnd__img-gallery mt-15">
                          {Image3 ? (
                            <>
                              <label htmlFor="file_s">
                                {checkUrl == "vehical_detail_edit" ||
                                checkUrl == "create_vehical" ? (
                                  <>
                                    <img
                                      onClick={() =>
                                        setIsEdit(Url ? true : false)
                                      }
                                      // onClick={() => _handleImageViewer(2)}
                                      src={
                                        Image3?.Base64 ||
                                        (typeof Image3 === "string" &&
                                          `${process.env.REACT_APP_API_ENVIROMENT}/${Image3}`) ||
                                        URL.createObjectURL(Image3)
                                      }
                                      alt="Image"
                                    />
                                    <input
                                      type="file"
                                      disabled={
                                        Url || checkUrl == "vehical_detail_view"
                                          ? true
                                          : false
                                      }
                                      id="file_s"
                                      name="Image3"
                                      style={{ display: "none" }}
                                      onChange={_onImageChange}
                                    />
                                  </>
                                ) : (
                                  <img
                                    // onClick={() => setIsEdit(Url ? true : false)}
                                    onClick={() => _handleImageViewer(2)}
                                    src={
                                      Image1?.Base64 ||
                                      (typeof Image1 === "string" &&
                                        `${process.env.REACT_APP_API_ENVIROMENT}/${Image3}`) ||
                                      URL.createObjectURL(Image1)
                                    }
                                    alt="Image"
                                  />
                                )}
                              </label>
                            </>
                          ) : (
                            <div className="Neon Neon-theme-dragdropbox">
                              <input
                                type="file"
                                disabled={
                                  Url || checkUrl == "vehical_detail_view"
                                    ? true
                                    : false
                                }
                                name="Image3"
                                onChange={_onImageChange}
                              />
                              <div className="Neon-input-dragDrop">
                                <div className="Neon-input-inner">
                                  <div className="Neon-input-icon">
                                    <i className="fas fa-file-image" />
                                  </div>
                                  <div className="Neon-input-text">
                                    {/* <h3>Drag&amp;Drop files here</h3>{" "} */}
                                    {/* <span >or</span> */}
                                  </div>
                                  {/* <button className="Neon-input-choose-btn blue">Browse Files</button> */}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="ltnd__img-gallery mt-15">
                          {Image4 ? (
                            <>
                              <label htmlFor="file_4">
                                {checkUrl == "vehical_detail_edit" ||
                                checkUrl == "create_vehical" ? (
                                  <>
                                    <img
                                      onClick={() =>
                                        setIsEdit(Url ? true : false)
                                      }
                                      // onClick={() => _handleImageViewer(3)}
                                      src={
                                        Image4?.Base64 ||
                                        (typeof Image4 === "string" &&
                                          `${process.env.REACT_APP_API_ENVIROMENT}/${Image4}`) ||
                                        URL.createObjectURL(Image4)
                                      }
                                      alt="Image"
                                    />
                                    <input
                                      type="file"
                                      disabled={
                                        Url || checkUrl == "vehical_detail_view"
                                          ? true
                                          : false
                                      }
                                      id="file_4"
                                      name="Image4"
                                      style={{ display: "none" }}
                                      onChange={_onImageChange}
                                    />
                                  </>
                                ) : (
                                  <img
                                    // onClick={() => setIsEdit(Url ? true : false)}
                                    onClick={() => _handleImageViewer(3)}
                                    src={
                                      Image1?.Base64 ||
                                      (typeof Image1 === "string" &&
                                        `${process.env.REACT_APP_API_ENVIROMENT}/${Image4}`) ||
                                      URL.createObjectURL(Image1)
                                    }
                                    alt="Image"
                                  />
                                )}
                              </label>
                            </>
                          ) : (
                            <div className="Neon Neon-theme-dragdropbox">
                              <input
                                type="file"
                                disabled={
                                  Url || checkUrl == "vehical_detail_view"
                                    ? true
                                    : false
                                }
                                name="Image4"
                                onChange={_onImageChange}
                              />
                              <div className="Neon-input-dragDrop">
                                <div className="Neon-input-inner">
                                  <div className="Neon-input-icon">
                                    <i className="fas fa-file-image" />
                                  </div>
                                  <div className="Neon-input-text">
                                    {/* <h3>Drag&amp;Drop files here</h3>{" "} */}
                                    {/* <span >or</span> */}
                                  </div>
                                  {/* <button className="Neon-input-choose-btn blue">Browse Files</button> */}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="ltnd__img-gallery mt-15">
                          {Image5 ? (
                            <>
                              <label htmlFor="file_5">
                                {checkUrl == "vehical_detail_edit" ||
                                checkUrl == "create_vehical" ? (
                                  <>
                                    <img
                                      onClick={() =>
                                        setIsEdit(Url ? true : false)
                                      }
                                      // onClick={() => _handleImageViewer(4)}
                                      src={
                                        Image5?.Base64 ||
                                        (typeof Image5 === "string" &&
                                          `${process.env.REACT_APP_API_ENVIROMENT}/${Image5}`) ||
                                        URL.createObjectURL(Image5)
                                      }
                                      alt="Image"
                                    />
                                    <input
                                      type="file"
                                      disabled={
                                        Url || checkUrl == "vehical_detail_view"
                                          ? true
                                          : false
                                      }
                                      id="file_5"
                                      name="Image5"
                                      style={{ display: "none" }}
                                      onChange={_onImageChange}
                                    />
                                  </>
                                ) : (
                                  <img
                                    // onClick={() => setIsEdit(Url ? true : false)}
                                    onClick={() => _handleImageViewer(4)}
                                    src={
                                      Image1?.Base64 ||
                                      (typeof Image1 === "string" &&
                                        `${process.env.REACT_APP_API_ENVIROMENT}/${Image5}`) ||
                                      URL.createObjectURL(Image1)
                                    }
                                    alt="Image"
                                  />
                                )}
                              </label>
                            </>
                          ) : (
                            <div className="Neon Neon-theme-dragdropbox">
                              <input
                                type="file"
                                disabled={
                                  Url || checkUrl == "vehical_detail_view"
                                    ? true
                                    : false
                                }
                                name="Image5"
                                onChange={_onImageChange}
                              />
                              <div className="Neon-input-dragDrop">
                                <div className="Neon-input-inner">
                                  <div className="Neon-input-icon">
                                    <i className="fas fa-file-image" />
                                  </div>
                                  <div className="Neon-input-text">
                                    {/* <h3>Drag&amp;Drop files here</h3>{" "} */}
                                    {/* <span >or</span> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* BLOCK AREA END */}
            </div>
            {/* Body Content Area Inner End */}

            <footer className="ltnd__footer-1 mt-4">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="ltnd__footer-1-inner bg-white">
                      <div className="ltnd__left btn-normal">
                        {params?.id && !isView && (
                          <span
                            onClick={() => delPolicy(params.id)}
                            style={{ fontWeight: "600", cursor: "pointer" }}
                          >
                            <i className="ti-trash" /> Delete
                          </span>
                        )}
                      </div>

                      <div className="ltnd__right btn-normal">
                        <div className="btn-wrapper">
                          <Link
                            to={
                              params.id
                                ? checkUrl == "vehical_detail_view"
                                  ? `/${layout}/policies`
                                  : isVehicleDetailEditUrl
                                  ? `/admin/policy_detail_edit/${params.id}`
                                  : `/${layout}/policy_detail/${params.id}`
                                : "/admin/create_policy"
                            }
                          >
                            <i className="icon-left-arrow-1" /> Back
                          </Link>
                          {!isView && (
                            <button
                              type="submit"
                              className="btn theme-btn-1 btn-round-12"
                            >
                              Save
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </form>
        </>
      )}
    </React.Fragment>
  );
}

export default VehicalDetail;
