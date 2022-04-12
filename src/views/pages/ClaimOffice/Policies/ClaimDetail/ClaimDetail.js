import React, { useState, useEffect } from "react";
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
  ResetClaimDetails
} from "store/actions/claims";

const formSchema = Yup.object().shape({
  AddedById: Yup.number().required("User is required"),
});

const ClaimDetail = (props) => {
  const { type, layout } = props;
  const dispatch = useDispatch();
  const { claimDetails, usersList, policiesList, claimsList } = useSelector(
    (state) => state.claimsReducer
  );
  const { PolicyId, PolicyNo, CarNo } = claimDetails;
  const formOptions = { resolver: yupResolver(formSchema), mode: "onChange" };
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  useEffect(() => {
    dispatch(GetUsersList());
    dispatch(GetPoliciesList());
    dispatch(GetClaimsList());
    return () => {
      dispatch(ResetClaimDetails());
    }
  }, []);

  useEffect(() => {
    if (PolicyId) dispatch(GetProductDetails(PolicyId, claimDetails));
  }, [PolicyId]);

  const _handleFieldChange = (e) =>
    dispatch(HandleFieldChange(e.target.name, e.target.value));

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

      <div class="body-content-area-inner">
        {/* Initiate Claim Information Form */}
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

        {PolicyNo && <VehicleInformation type={type} claimDetails={claimDetails} />}

        {CarNo && <PolicyInformation type={type} claimDetails={claimDetails} />}

        {/* Uploaded Documents Section */}
        <UploadDocuments type={type} />

        {/* Accident Photo upload */}
        <CarPhotos type={type} />
      </div>

      <footer class="ltnd__footer-1 fixed-footer-1">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <FooterActions type={type} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ClaimDetail;
