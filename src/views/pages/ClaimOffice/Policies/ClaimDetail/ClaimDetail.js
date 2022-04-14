import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import InitiateClaimInformation from "components/ClaimOffice/ClaimDetails/InitiateClaimInformation";
import UploadDocuments from "components/ClaimOffice/ClaimDetails/UploadDocuments";
import CarPhotos from "components/ClaimOffice/ClaimDetails/CarPhotos";
import VehicleInformation from "components/ClaimOffice/ClaimDetails/VehicleInformation";
import PolicyInformation from "components/ClaimOffice/ClaimDetails/PolicyInformation";
import FooterActions from "components/ClaimOffice/ClaimDetails/FooterActions";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  GetUsersList,
  GetPoliciesList,
  HandleFieldChange,
  GetClaimsList,
  GetProductDetails,
  ResetClaimDetails,
  PostClaimDetials,
} from "store/actions/claims";
import { GetMake, GetMakeModel } from "store/actions/policies";
import { GetProducType } from "store/actions/product";
import LocationDetail from "components/ClaimOffice/ClaimDetails/LocationDetail";
import { msgAlert } from "functions";

const formSchema = Yup.object().shape({
  AddedById: Yup.string().required("User is required"),
  PolicyId: Yup.string().required("Policy number is required"),
  ClaimTypeId: Yup.string().required("Claim Type is required"),
  RepairOption: Yup.string().required("Repair Option is required"),
  InitialComments: Yup.string().required("Comment is required"),
});

const docType = {
  Civil_ID: 1,
  License: 2,
  Police_Certificate: 3,
  Registration_Book: 4,
};

const photoTypeIdList = {
  Front: 1,
  LeftRight: 2,
  FrontLeft: 3,
  FrontRight: 4,
  RearLeft: 5,
  RearRight: 6,
  Rear: 7,
};

const ClaimDetail = (props) => {
  const { type, layout } = props;
  const submitBtnRef = useRef();
  const dispatch = useDispatch();
  const { claimDetails, usersList, policiesList, claimsList } = useSelector(
    (state) => state.claimsReducer
  );
  const policyMakeList = useSelector((state) => state.policyReducer.make);
  const policyModelList = useSelector((state) => state.policyReducer.model);
  const productTypeList = useSelector(
    (state) => state.productReducer.product_Types
  );
  const { PolicyId, ClaimId, PolicyNo, CarNo, MakeId, ModeIld } = claimDetails;
  const formOptions = { resolver: yupResolver(formSchema), mode: "onChange" };
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [errorMessageClaimDocuments, setErrorMessageClaimDocuments] = useState("");
  const [errorClaimAccidentCarPhotos, setErrorClaimAccidentCarPhotos] = useState("");
  const [errorLocation, setErrorLocation] = useState("");
  const {
    register,
    control,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm(formOptions);

  useEffect(() => {
    dispatch(GetUsersList());
    dispatch(GetPoliciesList());
    dispatch(GetClaimsList());
    dispatch(GetProducType());

    dispatch(GetMake());
    return () => {
      dispatch(ResetClaimDetails());
    };
  }, []);

  useEffect(() => {
    if (PolicyId) dispatch(GetProductDetails(PolicyId, claimDetails));
  }, [PolicyId]);

  useEffect(() => {
    if (MakeId) dispatch(GetMakeModel(MakeId));
  }, [MakeId]);

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
    if (claimDetails.Location == "") {
      setErrorLocation("Location is requred");
      return;
    } else {
      setErrorLocation("");
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
    
    console.log("submitting... : ", claimDetails);
    dispatch(PostClaimDetials(claimDetails))
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
      };

      let docList = [...claimDetails.ClaimDocuments, temp];
      dispatch(HandleFieldChange("ClaimDocuments", docList));
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

  return (
    <div class="body-content-area body-bg-1 pb-80 ml-0">
      <div class="ltnd__header-area ltnd__header-area-2 section-bg-2---">
        <div class="ltnd__header-middle-area mt-30">
          <div class="row">
            <div class="col-lg-9">
              <div class="ltnd__page-title-area">
                <p className="page-back-btn">
                  <Link to={`/${layout}/policies`}>
                    <i className="icon-left-arrow-1" />
                    Back
                  </Link>
                </p>
                <h2>Submit claim</h2>
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
              <InitiateClaimInformation
                state={claimDetails}
                usersList={usersList}
                policiesList={policiesList}
                claimsList={claimsList}
                handleFieldChange={_handleFieldChange}
                HandleFieldChangeAction={HandleFieldChange}
                register={register}
                errors={errors}
                control={control}
              />
            ) : (
              ""
            )}

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
          </div>

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

          {CarNo ? (
            <PolicyInformation
              type={type}
              claimDetails={claimDetails}
              _handlePolicyTypeName={_handlePolicyTypeName}
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
                <FooterActions type={type} submitBtnRef={submitBtnRef} />
              </div>
            </div>
          </div>
        </footer>
      </form>
    </div>
  );
};

export default ClaimDetail;
