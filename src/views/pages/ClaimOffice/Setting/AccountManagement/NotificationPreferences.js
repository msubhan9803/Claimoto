import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";

const NotificationPreferences = ({ layout }) => {
  const { FirstName, LastName, Username, Email, ImageUrl } = useSelector(state => state.authReducer.user_details);
  return (
    <>
      <div className="body-bg-1">
        <div className="ltnd__header-area ltnd__header-area-2 section-bg-2---">
          <div className="ltnd__header-middle-area mt-30">
            <div className="row">
              <div className="col-lg-9">
                <div className="ltnd__page-title-area">
                  <h2>Notification</h2>
                  <p className="page-back-btn">
                    <Link to={`/${layout}/settings`}>
                      <i className="icon-left-arrow-1" /> Back
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-lg-3 align-self-center text-end">
                <div className="btn-wrapper btn-inline text-center mt-0 d-none">
                  <a
                    href="#"
                    className="btn theme-btn-1 btn-round-12 btn-2"
                    title="Quick View"
                    data-bs-toggle="modal"
                    data-bs-target="#adding_modal"
                  >
                    Edit
                  </a>
                </div>
                <div className="ltnd__date-area d-none">
                  <div className="ltn__datepicker">
                    <div className="ltn_datepicker-title">
                      <span>Date</span>
                    </div>
                    <div className="input-group date" data-provide="datepicker">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Select Date"
                      />
                      <div className="input-group-addon">
                        <i className="far fa-calendar-alt"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="body-content-area-inner mb-80">
          <div className="ltnd__block-area">
            <div className="row">
              <div className="col-lg-12">
                <div className="ltnd__block-item mt-30">
                  <div className="ltnd__title ltnd__title-2">
                    <h4>Notification preferences</h4>
                  </div>
                  <div className="ltn__block-item-info">
                    <div className="row">
                      <div className="col-lg-5">
                        <div className="notification-item mb-30">
                          <p className="ltn__color-1">Content language</p>
                          <p>{Email}</p>
                          <div className="ltn__checkbox-radio-group inline---">
                            <label class="ltn__checkbox">
                              <input
                                type="checkbox"
                              />{" "}
                              <div class="icon">
                                <FontAwesomeIcon icon={faCheck} color="white" />
                              </div>
                              Don’t send any email
                            </label>
                            <label class="ltn__checkbox">
                              <input
                                type="checkbox"
                              />{" "}
                              <div class="icon">
                                <FontAwesomeIcon icon={faCheck} color="white" />
                              </div>
                              Offers
                            </label>
                            <label class="ltn__checkbox">
                              <input
                                type="checkbox"
                              />{" "}
                              <div class="icon">
                                <FontAwesomeIcon icon={faCheck} color="white" />
                              </div>
                              Surveys
                            </label>
                            <label class="ltn__checkbox">
                              <input
                                type="checkbox"
                              />{" "}
                              <div class="icon">
                                <FontAwesomeIcon icon={faCheck} color="white" />
                              </div>
                              Now on Aurora
                            </label>
                            <label class="ltn__checkbox">
                              <input
                                type="checkbox"
                              />{" "}
                              <div class="icon">
                                <FontAwesomeIcon icon={faCheck} color="white" />
                              </div>
                              Latest updates
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="notification-item mb-30">
                          <p className="ltn__color-1">Content language</p>
                          <p className="text-primary">
                            <strong>Add your phone number</strong>
                          </p>
                          <div className="ltn__checkbox-radio-group inline---">
                            <label class="ltn__checkbox">
                              <input
                                type="checkbox"
                              />{" "}
                              <div class="icon">
                                <FontAwesomeIcon icon={faCheck} color="white" />
                              </div>
                              Don’t send messages on mobile
                            </label>
                            <label class="ltn__checkbox">
                              <input
                                type="checkbox"
                              />{" "}
                              <div class="icon">
                                <FontAwesomeIcon icon={faCheck} color="white" />
                              </div>
                              Accounts messages
                            </label>
                            <label class="ltn__checkbox">
                              <input
                                type="checkbox"
                              />{" "}
                              <div class="icon">
                                <FontAwesomeIcon icon={faCheck} color="white" />
                              </div>
                              Aurora information
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="notification-item mb-30">
                          <p className="ltn__color-1">Marketing communication</p>
                          <div className="ltn__checkbox-radio-group inline--- mb-30">
                            <label class="ltn__checkbox">
                              <input
                                type="checkbox"
                              />{" "}
                              <div class="icon">
                                <FontAwesomeIcon icon={faCheck} color="white" />
                              </div>
                              Use my information to send promotional communications
                              on thrd party services
                            </label>
                            <label class="ltn__checkbox">
                              <input
                                type="checkbox"
                              />{" "}
                              <div class="icon">
                                <FontAwesomeIcon icon={faCheck} color="white" />
                              </div>
                              Send me newsletters
                            </label>
                          </div>
                          <p>
                            Note: You will always receive transactional emails
                            related to your account.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="ltnd__footer-1 bg-white mt-80">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="ltnd__footer-1-inner">
                  <div className="ltnd__left btn-normal"></div>
                  <div className="ltnd__right btn-normal">
                    <div className="btn-wrapper">
                      <Link to={`/${layout}/settings`}>
                        <i className="icon-left-arrow-1" /> Back
                      </Link>
                      <a href="#" className="btn theme-btn-1 btn-round-12">
                        Save
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default NotificationPreferences;
