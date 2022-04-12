import React from "react";

export default function VehicleInformation({ type, claimDetails }) {
  const { MakeId, ModeIld, CarNo } = claimDetails;

  return (
    <div class="ltnd__block-area">
      <div class="row">
        <div class="col-lg-12">
          <div class="ltnd__block-item mt-30">
            <div class="ltnd__space-between">
              <div class="ltnd__title ltnd__title-2">
                <h4>Vehicle information</h4>
              </div>
              {type !== "create" && (
                <div class="btn-wrapper mt-0">
                  <a href="#" class="invoice-btn invoice-btn-3">
                    <i class="fas fa-circle"></i> Ready for delivery
                  </a>
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
                      <img src="img/icons/mc/png/1.png" alt="#" /> {MakeId}
                    </h6>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="policies-details-single-info">
                    <h6 class="ltnd__title-4">Model</h6>
                    <h6>{ModeIld}</h6>
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
