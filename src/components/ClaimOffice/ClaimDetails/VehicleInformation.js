import React from "react";

export default function VehicleInformation({
  type,
  claimDetails,
  _handleVehicleMakeName,
  _handleVehicleModeName,
}) {
  const { MakeId, ModeIld, CarNo, StatusName } = claimDetails;

  return (
    <div class="ltnd__block-area">
      <div class="row">
        <div class="col-lg-12">
          <div class="ltnd__block-item mt-30">
            <div class="ltnd__space-between">
              <div class="ltnd__title ltnd__title-2">
                <h4>Vehicle information</h4>
              </div>
              {type !== "create" && StatusName && (
                <div class="btn-wrapper mt-0">
                  <span class="invoice-btn invoice-btn-3">
                    <i class="fas fa-circle"></i> {StatusName}
                  </span>
                </div>
              )}
            </div>
            <div class="ltn__block-item-info ltnd__policies-details-info">
              <div class="row">
                <div class="col-lg-4 col-md-6">
                  <div class="policies-details-single-info">
                    <h6 class="ltnd__title-4">Car no.</h6>
                    <h6>{CarNo}</h6>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="policies-details-single-info">
                    <h6 class="ltnd__title-4">Make</h6>
                    <h6>
                      {_handleVehicleMakeName(MakeId) ? (
                        <>
                          <img src={_handleVehicleMakeName(MakeId).Image} />{" "}
                          {_handleVehicleMakeName(MakeId).MakeName}
                        </>
                      ) : (
                        ""
                      )}
                    </h6>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="policies-details-single-info">
                    <h6 class="ltnd__title-4">Model</h6>
                    <h6>
                      {_handleVehicleModeName(ModeIld)
                        ? _handleVehicleModeName(ModeIld).ModelName
                        : ""}
                    </h6>
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
