import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import InitiateCustomerInformation from "components/ClaimOffice/ClaimDetails/InitiateCustomerInformation";
import InitiateClaimInformation from "components/ClaimOffice/ClaimDetails/InitiateClaimInformation";
import UploadDocuments from "components/ClaimOffice/ClaimDetails/UploadDocuments";
import CarPhotos from "components/ClaimOffice/ClaimDetails/CarPhotos";
import VehicleInformation from "components/ClaimOffice/ClaimDetails/VehicleInformation";
import PolicyInformation from "components/ClaimOffice/ClaimDetails/PolicyInformation";
import FooterActions from "components/ClaimOffice/ClaimDetails/FooterActions";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  GetUsersList,
  GetPoliciesList,
  HandleFieldChange,
  GetClaimsList,
  GetProductDetails,
  GetClaimActionsByRoleId,
  ResetClaimDetails,
  PostClaimDetials,
  GetClaimDetails,
  GetCivilIdBySearchVal,
  GetPoliciesByCivilId,
  GetUserById,
  HandleUpdateDocAttatchment,
} from "store/actions/claims";
import { GetMake, GetMakeModel } from "store/actions/policies";
import { GetProducType } from "store/actions/product";
import { getAreas, getCities } from "store/actions/provider";
import LocationDetail from "components/ClaimOffice/ClaimDetails/LocationDetail";
import { msgAlert } from "functions";
import jwt_decode from "jwt-decode";
import { localStorageVarible } from "variables";
import LoaderAnimation from "components/Loader/AnimatedLoaded";
import ClaimDetailsViewOnly from "components/ClaimOffice/ClaimDetails/ClaimDetailsViewOnly";
import CustomerDetailsViewOnly from "components/ClaimOffice/ClaimDetails/CustomerDetailsViewOnly";

const formSchema = Yup.object().shape({
  // AddedById: Yup.string().required("User is required"),
  ClaimTypeId: Yup.string().required("Claim Type is required"),
  Region: Yup.string().required("Region is required"),
  Area: Yup.string().required("Area is required"),
  RepairOption: Yup.string().required("Repair Option is required"),
  InitialComments: Yup.string().required("Comment is required"),
});

const docType = {
  Civil_ID: 1,
  License: 2,
  Police_Certificate: 3,
  Registration_Book: 4,
};

const repairOptions = [
  { value: 1, title: "Repair By Agency" },
  { value: 2, title: "Repair By Garage" },
  { value: 3, title: "Repair By Agency/Garage" },
];

const photoTypeIdList = {
  Front: 1,
  FrontLeft: 4,
  FrontRight: 5,
  Rear: 8,
  RearLeft: 6,
  RearRight: 7,
  Left: 2,
  Right: 3,
};

const actionButtonsListByStatus = {
  approve: "Approve",
  reject: "Reject",
  assignToGarage: "Assign to garage",
  assignToAgency: "Assign to agency",
  call: "Call",
  leaveAMessage: "Leave a message",
  scheduleACall: "Schedule a call",
  history: "History",
  initialEstimate: "Initial estimate",
  viewEstimation: "View Estimation",
  assignToSurveyor: "Assign to surveyor",
  approveTimeEstimate: "Approve time estimate",
  assignReplacementCar: "Assign replacement car",
  readyForDelivery: "Ready for delivery",
  reassign: "Reassign",
  finalSettlement: "Final settlement",
  repairDetails: "Repair details",
  phoneButton: "Phone Button",
};

const ClaimDetail = (props) => {
  const { type, layout } = props;
  const [isLoading, setIsLoading] = useState(false);
  const submitBtnRef = useRef();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  let params = useParams();
  const {
    claimDetails,
    usersList,
    policiesList,
    claimsList,
    claimActionPermissions,
    userProfileList,
  } = useSelector((state) => state.claimsReducer);
  const policyMakeList = useSelector((state) => state.policyReducer.make);
  const policyModelList = useSelector((state) => state.policyReducer.model);
  const productTypeList = useSelector(
    (state) => state.productReducer.product_Types
  );
  const {
    PolicyId,
    ClaimId,
    PolicyNo,
    CarNo,
    MakeId,
    ModeIld,
    AddedById,
    CivilId,
    Region,
  } = claimDetails;
  const formOptions = { resolver: yupResolver(formSchema), mode: "all" };
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [errorMessageClaimDocuments, setErrorMessageClaimDocuments] =
    useState("");
  const [errorClaimAccidentCarPhotos, setErrorClaimAccidentCarPhotos] =
    useState("");
  const [errorLocation, setErrorLocation] = useState("");
  const [selectedUserValue, setSelectedUserValue] = useState(null);
  const [selectedPolicyValue, setSelectedPolicyValue] = useState(null);
  const [civilIdError, setCivilIdError] = useState("");
  const [policyNoError, setPolicyNoError] = useState("");
  const {
    register,
    control,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm(formOptions);
  const [showFooterButtonsState, setShowFooterButtonsState] = useState({
    approve: false,
    reject: false,
    assignToGarageAgency: false,
    assignToAgency: false,
    showContact: false,
    call: false,
    leaveAMessage: false,
    scheduleACall: false,
    history: false,
    initialEstimate: false,
    viewEstimation: false,
    assignToSurveyor: false,
    approveTimeEstimate: false,
    assignReplacementCar: false,
    readyForDelivery: false,
    reassign: false,
    finalSettlement: false,
    repairDetails: false,
    phoneButton: false,
  });
  const { tab3 } = useSelector((state) => state.addProviderScreenReducer);
  const { cities, areas, selected_locations } = tab3;

  useEffect(() => {
    dispatch(GetUsersList());
    // dispatch(GetPoliciesList());
    dispatch(GetClaimsList());
    dispatch(GetProducType());
    dispatch(GetMake());

    dispatch(getCities(1));

    if (type === "create") {
      let userDetials = jwt_decode(localStorage.getItem(localStorageVarible));
      dispatch(HandleFieldChange("AddedById", userDetials.RoleId));
    }

    return () => {
      dispatch(ResetClaimDetails());
    };
  }, []);



  const _getClaimDetails = () => {
    // If type is equal to view or edit then load claim details state
    if (type === "view" || type === "edit") {
      if (params.id) {
        dispatch(GetClaimDetails(params.id));
        let userDetials = jwt_decode(localStorage.getItem(localStorageVarible));
        dispatch(GetClaimActionsByRoleId(userDetials.RoleId, params.id));
      }
    }
  }


  useEffect(() => {
    _getClaimDetails();
  }, [params.id, type, dispatch]);

  useEffect(() => {
    if (PolicyId) dispatch(GetProductDetails(PolicyId, claimDetails));
  }, [PolicyId]);

  useEffect(() => {
    if (MakeId) dispatch(GetMakeModel(MakeId));
  }, [MakeId]);

  useEffect(() => {
    // Get Policy list by Civil Id
    if (CivilId) {
      dispatch(GetPoliciesByCivilId(CivilId));
    }

    if (CivilId && type === "create") {
      // **** Setting file of User selected in Civil Id ****
      if (selectedUserValue.Civil_IdFront) {
        let temp = {
          CD_Id: 0,
          ClaimId: ClaimId,
          PolicyId: PolicyId,
          MakeId: MakeId,
          ModelId: ModeIld,
          DocumentTypeId: docType["Civil_ID"],
          Path: "",
          ClaimAttachmentId: 0,
          TenantId: 0,
          CreatedBy: 0,
          CreatedDate: "",
          UpdatedBy: 0,
          UpdatedDate: "",
          IsDeleted: false,
          IsActive: false,
          AlreadyAddedPath: selectedUserValue.Civil_IdFront
        };

        let docList = [...claimDetails.ClaimDocuments, temp];
        dispatch(HandleFieldChange("ClaimDocuments", docList));
      }
    }
  }, [CivilId]);

  useEffect(() => {
    if (Region) dispatch(getAreas(Region));
  }, [Region]);

  // Action button useEffect
  useEffect(() => {
    if (JSON.stringify(claimActionPermissions) !== "{}") {
      console.log("claimActionPermissions: ", claimActionPermissions)
      // hanlde permission buttons
      let approve = claimActionPermissions.PrimaryAction?.includes(
        actionButtonsListByStatus.approve
      );
      let reject = claimActionPermissions.PrimaryAction?.includes(
        actionButtonsListByStatus.reject
      );
      let assignToGarage = claimActionPermissions.PrimaryAction?.includes(
        actionButtonsListByStatus.assignToGarage
      );
      let assignToAgency = claimActionPermissions.PrimaryAction?.includes(
        actionButtonsListByStatus.assignToAgency
      );
      let initialEstimate = claimActionPermissions.PrimaryAction?.includes(
        actionButtonsListByStatus.initialEstimate
      );
      let history = claimActionPermissions.PrimaryAction?.includes(
        actionButtonsListByStatus.history
      );

      let showContact =
        claimActionPermissions?.OtherAction?.includes(
          actionButtonsListByStatus.call
        ) &&
        claimActionPermissions?.OtherAction?.includes(
          actionButtonsListByStatus.leaveAMessage
        ) &&
        claimActionPermissions?.OtherAction?.includes(
          actionButtonsListByStatus.scheduleACall
        );
      console.log("showContact: ", showContact)
      let call = claimActionPermissions?.OtherAction?.includes(
        actionButtonsListByStatus.call
      );
      let leaveAMessage = claimActionPermissions?.OtherAction?.includes(
        actionButtonsListByStatus.leaveAMessage
      );
      let scheduleACall = claimActionPermissions?.OtherAction?.includes(
        actionButtonsListByStatus.scheduleACall
      );

      let viewEstimation = claimActionPermissions?.PrimaryAction?.includes(
        actionButtonsListByStatus.viewEstimation
      );

      let assignToSurveyor = claimActionPermissions?.PrimaryAction?.includes(
        actionButtonsListByStatus.assignToSurveyor
      );

      let approveTimeEstimate = claimActionPermissions?.PrimaryAction?.includes(
        actionButtonsListByStatus.approveTimeEstimate
      );

      let assignReplacementCar = claimActionPermissions?.PrimaryAction?.includes(
        actionButtonsListByStatus.assignReplacementCar
      );

      let readyForDelivery = claimActionPermissions?.PrimaryAction?.includes(
        actionButtonsListByStatus.readyForDelivery
      );

      let reassign = claimActionPermissions?.PrimaryAction?.includes(
        actionButtonsListByStatus.reassign
      );

      let finalSettlement = claimActionPermissions?.PrimaryAction?.includes(
        actionButtonsListByStatus.finalSettlement
      );

      let repairDetails = claimActionPermissions?.PrimaryAction?.includes(
        actionButtonsListByStatus.repairDetails
      );

      let phoneButton = claimActionPermissions?.PrimaryAction?.includes(
        actionButtonsListByStatus.phoneButton
      );

      setShowFooterButtonsState({
        ...showFooterButtonsState,
        approve: approve,
        reject: reject,
        assignToGarage: assignToGarage,
        assignToAgency: assignToAgency,

        showContact: showContact,
        call: call,
        leaveAMessage: leaveAMessage,
        scheduleACall: scheduleACall,

        history: history,
        initialEstimate: initialEstimate,

        viewEstimation: viewEstimation,
        assignToSurveyor: assignToSurveyor,
        approveTimeEstimate: approveTimeEstimate,
        assignReplacementCar: assignReplacementCar,
        readyForDelivery: readyForDelivery,
        reassign: reassign,
        finalSettlement: finalSettlement,
        repairDetails: repairDetails,
        phoneButton: phoneButton,
      });
    }
  }, [claimActionPermissions]);

  const _handleFieldChange = (e) =>
    dispatch(HandleFieldChange(e.target.name, e.target.value));

  const _handleVehicleMakeName = (makeId) => {
    if (policyMakeList.length > 0) {
      return policyMakeList.find((make) => make.Id == makeId);
    }
  };

  const _handleVehicleModeName = (modelId) => {
    if (policyModelList.length > 0) {
      return policyModelList.find((model) => model.Id == modelId);
    }
  };

  const _handlePolicyTypeName = (modelId) => {
    if (productTypeList.length > 0) {
      return productTypeList.find((model) => model.Id == modelId);
    }
  };

  const _hanldeLocationSave = (location, lat, long) => {
    onSubmit();
    setValue("Location", location);
    setValue("Latitude", lat);
    setValue("Longitude", long);
    setShowLocationModal(false);
  };

  const onSubmit = () => {
    if (claimDetails.CivilId == "" || claimDetails.CivilId == 0) {
      setCivilIdError("Civil Id is required");
      return;
    } else {
      setCivilIdError("");
    }

    if (claimDetails.PolicyId == "" || claimDetails.PolicyId == 0) {
      setPolicyNoError("Policy Number is required");
      return;
    } else {
      setPolicyNoError("");
    }

    if (claimDetails.ClaimDocuments.length < 4) {
      setErrorMessageClaimDocuments("Please upload all documents");
      return;
    } else {
      setErrorMessageClaimDocuments("");
    }

    if (claimDetails.ClaimAccidentCarPhotos.length < 7) {
      msgAlert({
        title: "Please upload all car photos",
        text: "",
        icon: "error",
      });
      return;
    } else {
      setErrorClaimAccidentCarPhotos("");
    }

    setIsLoading(true);
    console.log("submitting... : ", claimDetails);
    dispatch(
      PostClaimDetials(claimDetails, layout, setIsLoading, navigate, msgAlert)
    );
  };

  const _handleDocumentPush = (file, documentType) => {
    if (PolicyId === 0 || MakeId === 0 || ModeIld === 0) {
      msgAlert({
        title: "Please fill Claim details first",
        text: "",
        icon: "error",
      });
      submitBtnRef.current.click();
    } else {
      if (type === "create") {
        let temp = {
          CD_Id: 0,
          ClaimId: ClaimId,
          PolicyId: PolicyId,
          MakeId: MakeId,
          ModelId: ModeIld,
          DocumentTypeId: docType[documentType],
          Path: "",
          ClaimAttachmentId: 0,
          TenantId: 0,
          CreatedBy: 0,
          CreatedDate: "",
          UpdatedBy: 0,
          UpdatedDate: "",
          IsDeleted: false,
          IsActive: false,
          file: file,
          AlreadyAddedPath: ""
        };

        let docList = [...claimDetails.ClaimDocuments, temp];
        dispatch(HandleFieldChange("ClaimDocuments", docList));
      } else {
        // type === view || type === edit
        let index = claimDetails.ClaimDocuments.findIndex(
          (doc) => doc.ClaimAttachmentId === docType[documentType]
        );

        let claimDocumentsList = [...claimDetails.ClaimDocuments];
        if (claimDocumentsList[index]) {
          claimDocumentsList[index].file = file;
          claimDocumentsList[index].ClaimId = ClaimId;
          dispatch(HandleUpdateDocAttatchment(claimDocumentsList));
        } else {
          claimDocumentsList[index] = {
            CD_Id: 0,
            ClaimId: ClaimId,
            PolicyId: PolicyId,
            MakeId: MakeId,
            ModelId: ModeIld,
            DocumentTypeId: docType[documentType],
            Path: "",
            ClaimAttachmentId: 0,
            TenantId: 0,
            CreatedBy: 0,
            CreatedDate: "",
            UpdatedBy: 0,
            UpdatedDate: "",
            IsDeleted: false,
            IsActive: false,
            file: file,
            AlreadyAddedPath: ""
          };
          dispatch(HandleUpdateDocAttatchment(claimDocumentsList));
        }
      }
    }
  };

  const _handlePhotoPush = (file, photoType) => {
    if (PolicyId === 0 || MakeId === 0 || ModeIld === 0) {
      msgAlert({
        title: "Please fill Claim details first",
        text: "",
        icon: "error",
      });
      submitBtnRef.current.click();
    } else {
      readFileAsDataURL(file).then((base64) => {
        let index = claimDetails.ClaimAccidentCarPhotos.findIndex(
          (photo) => photo.ClaimPhotoTypeId === photoTypeIdList[photoType]
        );
        if (index === -1) {
          // Pushing image
          let temp = {
            CACP_Id: 0,
            ClaimId: ClaimId,
            PolicyId: PolicyId,
            MakeId: MakeId,
            ModelId: ModeIld,
            AccidentCarPhotoId: 0,
            Path: "",
            ClaimAttachmentId: 0,
            ClaimPhotoTypeId: photoTypeIdList[photoType],
            TenantId: 0,
            CreatedBy: 0,
            CreatedDate: "",
            UpdatedBy: 0,
            UpdatedDate: "",
            IsDeleted: 0,
            IsActive: 0,
            file: file,
            base64: base64,
          };

          let photoList = [...claimDetails.ClaimAccidentCarPhotos, temp];
          dispatch(HandleFieldChange("ClaimAccidentCarPhotos", photoList));
        } else {
          // Updating Image
          let temp = claimDetails.ClaimAccidentCarPhotos;
          temp[index].file = file;
          temp[index].base64 = base64;

          dispatch(HandleFieldChange("ClaimAccidentCarPhotos", temp));
        }
      });
    }
  };

  const readFileAsDataURL = async (file) => {
    let result_base64 = await new Promise((resolve) => {
      let fileReader = new FileReader();
      fileReader.onload = (e) => resolve(fileReader.result);
      fileReader.readAsDataURL(file);
    });

    return result_base64;
  };

  const getPageTitle = (type) => {
    if (type === "view") {
      return "Claim details";
    } else if (type === "edit") {
      return "Update Claim details";
    } else {
      return "Submit Claim";
    }
  };

  // handle prolicy Id selection
  const handlePolicyIdChange = (value) => {
    setSelectedPolicyValue(value);
    dispatch(HandleFieldChange("PolicyId", value.value));
  };

  // handle Civil Id input change event
  const handleCivilInputChange = (value) => {
    console.log("handle Civil Id input change event: ", value);
  };

  // handle Civil Id selection
  const handleCivilChange = (value) => {
    setSelectedUserValue(value);
    dispatch(HandleFieldChange("CivilId", value.value));
    dispatch(HandleFieldChange("PolicyId", 0));
    setSelectedPolicyValue(null);
  };

  const handleUserIdSearch = (inputValue) =>
    new Promise((resolve) => {
      setTimeout(() => {
        GetCivilIdBySearchVal(inputValue).then((res) => {
          let response = res.data;
          let parsed = [];
          for (let index = 0; index < response.length; index++) {
            const profile = response[index];
            parsed.push({
              label: profile.UserName,
              value: profile.UserName,
              userId: profile.UserId,
              Civil_IdFront: profile.Civil_IdFront,
            });
          }
          resolve(parsed);
        });
      }, 1000);
    });

  return (
    <>
      {isLoading ? (
        <LoaderAnimation />
      ) : (
        <div class="body-content-area body-bg-1 pb-80 ml-0">
          <div class="ltnd__header-area ltnd__header-area-2 section-bg-2---">
            <div class="ltnd__header-middle-area mt-30">
              <div class="row">
                <div class="col-lg-9">
                  <div class="ltnd__page-title-area">
                    <p className="page-back-btn cursor-pointer">
                      <span onClick={() => window.history.back()}>
                        <i className="icon-left-arrow-1" />
                        Back
                      </span>
                    </p>
                    <h2>{getPageTitle(type)}</h2>
                  </div>
                </div>
                <div class="col-lg-3 align-self-center text-end">
                  <div class="btn-wrapper mt-0">
                    <a class="btn btn-2 btn-border border-radius-12">History</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="body-content-area-inner">
              {/* Initiate Claim Information Form */}
              <div class="ltnd__block-area">
                {type === "create" || type === "edit" ? (
                  <InitiateCustomerInformation
                    state={claimDetails}
                    usersList={usersList}
                    policiesList={policiesList}
                    claimsList={claimsList}
                    userProfileList={userProfileList}
                    handleFieldChange={_handleFieldChange}
                    HandleFieldChangeAction={HandleFieldChange}
                    handleUserIdSearch={handleUserIdSearch}
                    handleCivilInputChange={handleCivilInputChange}
                    selectedUserValue={selectedUserValue}
                    handleCivilChange={handleCivilChange}
                    handlePolicyIdChange={handlePolicyIdChange}
                    selectedPolicyValue={selectedPolicyValue}
                    register={register}
                    errors={errors}
                    control={control}
                    civilIdError={civilIdError}
                    policyNoError={policyNoError}
                  />
                ) : (
                  ""
                )}

                {type === "view" ? (
                  <CustomerDetailsViewOnly
                    type={type}
                    claimDetails={claimDetails}
                    claimsList={claimsList}
                  />
                ) : (
                  ""
                )}

                {CarNo ? (
                  <PolicyInformation
                    type={type}
                    claimDetails={claimDetails}
                    _handlePolicyTypeName={_handlePolicyTypeName}
                  />
                ) : (
                  ""
                )}

                {type === "create" || type === "edit" ? (
                  <InitiateClaimInformation
                    state={claimDetails}
                    usersList={usersList}
                    policiesList={policiesList}
                    claimsList={claimsList}
                    handleFieldChange={_handleFieldChange}
                    HandleFieldChangeAction={HandleFieldChange}
                    register={register}
                    cities={cities}
                    areas={areas}
                    errors={errors}
                    control={control}
                    repairOptions={repairOptions}
                  />
                ) : (
                  ""
                )}

                {/* {type === "create" || type === "edit" ? (
                  <LocationDetail
                    showLocationModal={showLocationModal}
                    setShowLocationModal={setShowLocationModal}
                    claimDetails={claimDetails}
                    register={register}
                    errors={errors}
                    _hanldeLocationSave={_hanldeLocationSave}
                    handleFieldChange={_handleFieldChange}
                    error={errorLocation}
                    setError={setErrorLocation}
                  />
                ) : (
                  ""
                )} */}
              </div>

              {type === "view" ? (
                <ClaimDetailsViewOnly
                  type={type}
                  claimDetails={claimDetails}
                  claimsList={claimsList}
                  repairOptions={repairOptions}
                  cities={cities}
                  areas={areas}
                />
              ) : (
                ""
              )}

              {PolicyNo ? (
                <VehicleInformation
                  type={type}
                  claimDetails={claimDetails}
                  policyMakeList={policyMakeList}
                  _handleVehicleMakeName={_handleVehicleMakeName}
                  _handleVehicleModeName={_handleVehicleModeName}
                />
              ) : (
                ""
              )}

              {/* Uploaded Documents Section */}
              <UploadDocuments
                type={type}
                claimDetails={claimDetails}
                _handleDocumentPush={_handleDocumentPush}
                docType={docType}
                error={errorMessageClaimDocuments}
              />

              {/* Accident Photo upload */}
              <CarPhotos
                type={type}
                claimDetails={claimDetails}
                photoTypeIdList={photoTypeIdList}
                _handlePhotoPush={_handlePhotoPush}
                error={errorClaimAccidentCarPhotos}
              />
            </div>

            <footer class="ltnd__footer-1 fixed-footer-1">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-lg-12">
                    <FooterActions
                      type={type}
                      submitBtnRef={submitBtnRef}
                      claimActionPermissions={claimActionPermissions}
                      showFooterButtonsState={showFooterButtonsState}
                      getClaimDetails={_getClaimDetails}
                    />
                  </div>
                </div>
              </div>
            </footer>
          </form>
        </div>
      )}
    </>
  );
};

export default ClaimDetail;
