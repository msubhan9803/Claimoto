import React from "react";
import moment from "moment";

export default function ClaimDetailsViewOnly({
  type,
  claimDetails,
  claimsList,
  repairOptions,
  cities,
  areas,
}) {
  const { IncidentDate, Location, InitialComments, ClaimTypeId, RepairOption, Area, Region } =
    claimDetails;

  const _getClaimTypeName = (claimTypeId) => {
    if (claimTypeId) {
      return claimsList.length > 0
        ? claimsList.find((claimType) => claimType.CT_Id == claimTypeId)
            .ClaimName
        : "";
    } else {
      return "";
    }
  };

  return (
    <div class="ltnd__block-area">
      <div class="row">
        <div class="col-lg-12">
          <div class="ltnd__block-item mt-30">
            <div class="ltnd__space-between">
              <div class="ltnd__title ltnd__title-2">
                <h4>Claim information</h4>
              </div>
            </div>
            <div class="ltn__block-item-info ltnd__policies-details-info">
              <div class="row">
                <div class="col-lg-3 col-md-6 mt-2">
                  <div class="policies-details-single-info">
                    <h6 class="ltnd__title-4">Claim type</h6>
                    <h6>{_getClaimTypeName(ClaimTypeId)}</h6>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 mt-2">
                  <div class="policies-details-single-info">
                    <h6 class="ltnd__title-4">Repair option</h6>
                    <h6>
                      {
                        repairOptions.find((opt) => opt.value == RepairOption)
                          ?.title
                      }
                    </h6>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 mt-2">
                  <div class="policies-details-single-info">
                    <h6 class="ltnd__title-4">Incident date</h6>
                    <h6>{moment(IncidentDate).format("LL")}</h6>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 mt-2">
                  <div class="policies-details-single-info">
                    <h6 class="ltnd__title-4">Region</h6>
                    <h6>
                      {Region
                        ? cities?.find((city) => city.Id === Region)?.Name
                        : ""}
                    </h6>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 mt-2">
                  <div class="policies-details-single-info">
                    <h6 class="ltnd__title-4">Area</h6>
                    <h6>
                      {Area
                        ? areas?.find((area) => area.Id === Area)?.Name
                        : ""}
                    </h6>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 mt-2">
                  <div class="policies-details-single-info">
                    <h6 class="ltnd__title-4">How it happened?</h6>
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
