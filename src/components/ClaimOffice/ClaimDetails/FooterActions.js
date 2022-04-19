import React, { useState } from "react";

export default function FooterActions({
  type,
  submitBtnRef,
  claimActionPermissions,
  showFooterButtonsState,
}) {
  const [otherCallActions, setOtherCallActions] = useState(false);
  return (
    <>
      {type === "create" || type === "edit" ? (
        <div class="ltnd__footer-1-inner bg-white">
          <div class="ltnd__left btn-normal"></div>
          <div class="ltnd__right btn-normal">
            <div class="btn-wrapper">
              {showFooterButtonsState.initialEstimate && (
                <a href="product.html"> Initial estimate</a>
              )}
              <button
                type="submit"
                class="btn theme-btn-1 btn-round-12"
                ref={submitBtnRef}
              >
                Submitted
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {type === "view" ? (
        <div class="ltnd__footer-1-inner bg-white">
          <div class="ltnd__left btn-normal"></div>
          <div class="ltnd__right btn-normal">
            <div class="btn-wrapper btn-list-inline">
              <ul>
                {showFooterButtonsState.history && (
                  <li>
                    <a class="ltn__secondary-color--- ltn__color-9---" href="#">
                      <strong>History</strong>
                    </a>
                  </li>
                )}

                {showFooterButtonsState.showContact && (
                  <li
                    class="ltnd__footer-btn-dropdown-contact cursor-pointer"
                    onClick={() => setOtherCallActions(!otherCallActions)}
                  >
                    <a class="toggle">
                      <strong>Contact</strong>
                      <i class="fas fa-ellipsis-v"></i>
                    </a>
                    {otherCallActions && (
                      <div class="dropdown-menu">
                        {showFooterButtonsState.call && (
                          <a
                            onClick={() =>
                              setOtherCallActions(!otherCallActions)
                            }
                          >
                            Call
                          </a>
                        )}

                        {showFooterButtonsState.leaveAMessage && (
                          <a
                            onClick={() =>
                              setOtherCallActions(!otherCallActions)
                            }
                          >
                            leave a message
                          </a>
                        )}

                        {showFooterButtonsState.scheduleACall && (
                          <a
                            onClick={() =>
                              setOtherCallActions(!otherCallActions)
                            }
                          >
                            Schedule a call
                          </a>
                        )}
                      </div>
                    )}
                  </li>
                )}

                {showFooterButtonsState.viewEstimation && (
                  <li>
                    <a class="ltn__secondary-color--- ltn__color-9---" href="#">
                      <strong>View Estimation</strong>
                    </a>
                  </li>
                )}

                {showFooterButtonsState.assignToGarageAgency && (
                  <li>
                    <a class="ltn__secondary-color--- ltn__color-9---" href="#">
                      <strong>Assign to garage/agency</strong>
                    </a>
                  </li>
                )}

                {showFooterButtonsState.assignToSurveyor && (
                  <li>
                    <a class="ltn__secondary-color--- ltn__color-9---" href="#">
                      <strong>Assign to surveyor</strong>
                    </a>
                  </li>
                )}

                {showFooterButtonsState.finalSettlement && (
                  <li>
                    <a class="ltn__secondary-color--- ltn__color-9---" href="#">
                      <strong>Final settlement</strong>
                    </a>
                  </li>
                )}

                {showFooterButtonsState.repairDetails && (
                  <li>
                    <a class="ltn__secondary-color--- ltn__color-9---" href="#">
                      <strong>Repair details</strong>
                    </a>
                  </li>
                )}

                {showFooterButtonsState.phoneButton && (
                  <li>
                    <a class="ltnd__scheduled-item-icon" href="#">
                      <i class="fas fa-phone-alt"></i>
                    </a>
                  </li>
                )}

                {showFooterButtonsState.reject && (
                  <li>
                    <a
                      href="#"
                      class="btn theme-btn-1--- btn-round-12 btn-danger"
                    >
                      Reject
                    </a>
                  </li>
                )}

                {showFooterButtonsState.approve && (
                  <li>
                    <a href="#" class="btn theme-btn-1 btn-round-12">
                      Approve
                    </a>
                  </li>
                )}

                {showFooterButtonsState.approveTimeEstimate && (
                  <li>
                    <a href="#" class="btn theme-btn-1 btn-round-12">
                      Approve time estimate
                    </a>
                  </li>
                )}

                {showFooterButtonsState.assignReplacementCar && (
                  <li>
                    <a href="#" class="btn theme-btn-1 btn-round-12">
                      Assign replacement car
                    </a>
                  </li>
                )}

                {showFooterButtonsState.readyForDelivery && (
                  <li>
                    <a href="#" class="btn theme-btn-1 btn-round-12">
                      Ready for delivery
                    </a>
                  </li>
                )}

                {showFooterButtonsState.reassign && (
                  <li>
                    <a href="#" class="btn theme-btn-1 btn-round-12">
                      Reassign
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
