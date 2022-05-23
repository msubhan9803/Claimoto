import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ClaimLeaveAMessageModal from "../ClaimActions/ClaimLeaveAMessageModal";
import ClaimScheduleCallModal from "../ClaimActions/ClaimScheduleCallModal";
import ClaimStatusChangeModal from "../ClaimActions/ClaimStatusChangeModal";
import CallIcon from "assets/img/call/icon.png"
export default function FooterActions({
  type,
  submitBtnRef,
  claimActionPermissions,
  showFooterButtonsState,
  getClaimDetails
}) {
  const { id } = useParams();
  const [otherCallActions, setOtherCallActions] = useState(false);
  const initialState = {
    openModal: false,
    action: null,
    scheduleCallModal: false,
    leaveAMessageModal: false
  }
  const [comState, setComState] = useState(initialState);

  const _closeModal = (modal) => {
    setComState({
      [modal]: false,
      action: null
    })
  }

  const _openModal = (action) => {
    setComState({
      ...initialState,
      openModal: true,
      action
    })
  }

  const _openScheduleCallModal = () => {
    setComState({
      ...initialState,
      scheduleCallModal: true
    })
  }

  const _openLeaveAMessageModal = () => {
    setComState({
      ...initialState,
      leaveAMessageModal: true
    })
  }

  return (
    <>
      <ClaimStatusChangeModal getClaimDetails={getClaimDetails} claim_id={id} action={comState.action} toggleModal={() => _closeModal("openModal")} openModal={comState.openModal} />
      <ClaimScheduleCallModal getClaimDetails={getClaimDetails} sc_id={null} title="Schedule a Call" claim_id={id} toggleModal={() => _closeModal("scheduleCallModal")} openModal={comState.scheduleCallModal} />
      <ClaimLeaveAMessageModal getClaimDetails={getClaimDetails} claim_id={id} toggleModal={() => _closeModal("leaveAMessageModal")} openModal={comState.leaveAMessageModal} />
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
                Submit
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
                        {showFooterButtonsState.leaveAMessage && (
                          <a
                            role="button"
                            onClick={() => _openLeaveAMessageModal()}

                          >
                            leave a message
                          </a>
                        )}

                        {showFooterButtonsState.scheduleACall && (
                          <a
                            role="button"
                            onClick={() => _openScheduleCallModal()}
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


                {showFooterButtonsState.assignToSurveyor && (
                <li>
                  <Link to={`/claim/assign_to_provider/4/${id}`} className="ltn__secondary-color--- ltn__color-9---"><strong>Assign to Surveyor</strong></Link>

                </li>
                 )}

                {showFooterButtonsState.assignReplacementCar && (
                <li>
                  <Link to={`/claim/assign_to_provider/3/${id}`} className="ltn__secondary-color--- ltn__color-9---"><strong>Assign Replacement Car</strong></Link>
                </li>
                )}

                {showFooterButtonsState.assignToGarage && (
                  <li>

                    <Link to={`/claim/assign_to_provider/1/${id}`} className="ltn__secondary-color--- ltn__color-9---"><strong>Assign to Garage</strong></Link>

                  </li>
                )}

                {showFooterButtonsState.assignToAgency && (
                  <li>

                    <Link to={`/claim/assign_to_provider/2/${id}`} className="ltn__secondary-color--- ltn__color-9---"><strong>Assign to Agency</strong></Link>

                  </li>
                )}

                {/* {showFooterButtonsState.leaveAMessage && (
                  <li>
                    <a class="ltn__secondary-color--- ltn__color-9---"
                      role="button"
                      onClick={() => _openLeaveAMessageModal()}
                    >
                      <strong>Leave a Message</strong>
                    </a>
                  </li>
                )} */}

                {showFooterButtonsState.phoneButton && (
                  <li>
                    <a class="ltnd__scheduled-item-icon"
                      role="button"
                      onClick={() => _openScheduleCallModal()}
                    >
                                            <img src={CallIcon} />

                    </a>
                  </li>
                )}

                {showFooterButtonsState.reject && (
                  <li>
                    <a
                      role="button"
                      onClick={() => _openModal("reject")}
                      class="btn theme-btn-1--- btn-round-12 btn-danger"
                    >
                      Reject
                    </a>
                  </li>
                )}

                {showFooterButtonsState.approve && (
                  <li>
                    <a
                      role="button"
                      onClick={() => _openModal("approve")}
                      class="btn theme-btn-1 btn-round-12">
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
