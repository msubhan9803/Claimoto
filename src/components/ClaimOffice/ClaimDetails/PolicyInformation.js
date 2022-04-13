import React from "react";
import moment from "moment";

export default function PolicyInformation({ type, claimDetails, _handlePolicyTypeName }) {
  const { PolicyNo, PolicyType, PolicyValidity } = claimDetails;

  return (
    <div class="ltnd__block-area">
      <div class="row">
        <div class="col-lg-12">
          <div class="ltnd__block-item mt-30">
            <div class="ltnd__space-between">
              <div class="ltnd__title ltnd__title-2">
                <h4>Policy information</h4>
              </div>
            </div>
            <div class="ltn__block-item-info ltnd__policies-details-info">
              <div class="row">
                <div class="col-lg-4 col-md-6">
                  <div class="policies-details-single-info">
                    <h6 class="ltnd__title-4">Policy no.</h6>
                    <h6>{PolicyNo}</h6>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="policies-details-single-info">
                    <h6 class="ltnd__title-4">Policy Type</h6>
                    <h6>{_handlePolicyTypeName(PolicyType) ? _handlePolicyTypeName(PolicyType).ProductTypeName : ""}</h6>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="policies-details-single-info">
                    <h6 class="ltnd__title-4">Policy validity</h6>
                    <h6>{moment(PolicyValidity).format("LL")}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
