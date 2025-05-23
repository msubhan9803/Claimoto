import React from "react";
import moment from "moment";

export default function ClaimDetailsViewOnly({ type, claimDetails, claimsList }) {
  return (
    <div class="ltnd__block-area">
      <div class="row">
        <div class="col-lg-12">
          <div class="ltnd__block-item mt-30">
            <div class="ltnd__space-between">
              <div class="ltnd__title ltnd__title-2">
                <h4>Customer information</h4>
              </div>
            </div>
            <div class="ltn__block-item-info ltnd__policies-details-info">
              <div class="row">
                <div class="col-lg-3 col-md-6">
                  <div class="policies-details-single-info">
                    <h6 class="ltnd__title-4">Civil Id</h6>
                    <h6>{claimDetails?.IdentityNo || ""}</h6>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="policies-details-single-info">
                    <h6 class="ltnd__title-4">Name</h6>
                    <h6>{`${claimDetails?.FirstName || ""} ${claimDetails?.LastName || ""}`}</h6>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="policies-details-single-info">
                    <h6 class="ltnd__title-4">Email</h6>
                    <h6>{claimDetails?.Email || ""}</h6>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="policies-details-single-info">
                    <h6 class="ltnd__title-4">Mobile no.</h6>
                    <h6>{claimDetails?.MobileNo || ""}</h6>
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
