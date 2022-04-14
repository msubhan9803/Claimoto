import React from "react";
import moment from "moment";

export default function ClaimDetailsViewOnly({ type, claimDetails, claimsList }) {
  const { IncidentDate, Location, InitialComments, ClaimTypeId } = claimDetails;

  const _getClaimTypeName = (claimTypeId) => {
      if (claimTypeId) {
          return claimsList.length > 0 ? claimsList.find(claimType => claimType.CT_Id == claimTypeId).ClaimName : "";
      } else {
          return "";
      }
  }

  return (
    <div class="ltnd__block-area">
      <div class="row">
        <div class="col-lg-12">
          <div class="ltnd__block-item mt-30">
            <div class="ltnd__space-between">
              <div class="ltnd__title ltnd__title-2">
                <h4>Claim details</h4>
              </div>
              <div class="btn-wrapper mt-0 d-none">
                <a href="#" class="invoice-btn invoice-btn-3">
                  <i class="fas fa-circle"></i> Ready for delivery
                </a>
              </div>
            </div>
            <div class="ltn__block-item-info ltnd__policies-details-info">
              <div class="row">
                <div class="col-lg-3 col-md-6">
                  <div class="policies-details-single-info">
                    <h6 class="ltnd__title-4">Incident date</h6>
                    <h6>{moment(IncidentDate).format("LL")}</h6>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="policies-details-single-info">
                    <h6 class="ltnd__title-4">Claim type</h6>
                    <h6>{_getClaimTypeName(ClaimTypeId)}</h6>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="policies-details-single-info">
                    <h6 class="ltnd__title-4">Area/location</h6>
                    <h6>{Location}</h6>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="policies-details-single-info">
                    <h6 class="ltnd__title-4">Comments</h6>
                    <h6>{InitialComments}</h6>
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
