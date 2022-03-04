import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const EmailSignature = () => {
  return (
    <div class="body-bg-1">
      <div class="ltnd__header-area ltnd__header-area-2 section-bg-2---">
        <div class="ltnd__header-middle-area mt-30">
          <div class="row">
            <div class="col-lg-9">
              <div class="ltnd__page-title-area">
                <h2>Email Signature Configuration</h2>
                <p class="page-back-btn">
                  <Link to="/admin/settings">
                    <i className="icon-left-arrow-1" /> Back
                  </Link>
                </p>
              </div>
            </div>
            <div class="col-lg-3 align-self-center text-end">
              <div class="btn-wrapper btn-inline text-center mt-0 d-none">
                <a
                  href="#"
                  class="btn theme-btn-1 btn-round-12 btn-2"
                  title="Quick View"
                  data-bs-toggle="modal"
                  data-bs-target="#adding_modal"
                >
                  Edit
                </a>
              </div>
              <div class="ltnd__date-area d-none">
                <div class="ltn__datepicker">
                  <div class="ltn_datepicker-title">
                    <span>Date</span>
                  </div>
                  <div class="input-group date" data-provide="datepicker">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Select Date"
                    />
                    <div class="input-group-addon">
                      <i class="far fa-calendar-alt"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="body-content-area-inner">
        <div class="ltnd__block-area">
          <div class="row">
            <div class="col-lg-12">
              <div class="ltnd__block-item mt-30">
                <div class="ltn__block-item-info">
                  <h6 class="ltnd__title-3">Two-factor authentication </h6>

                  <div class="ltn__checkbox-radio-group inline mt-20 mb-20">
                    <label class="ltn__switch-2">
                      <input type="checkbox" checked="" />
                      <i class="lever"></i>{" "}
                      <span class="text">
                        <strong>Enable Two-factor authentication </strong>
                      </span>
                    </label>
                  </div>
                  <div class="row">
                    <div class="col-lg-5">
                      <div class="notification-item mb-30">
                        <p class="ltn__color-1">Content language</p>
                        <p>Yasminali@gmail.com</p>
                        <div class="ltn__checkbox-radio-group inline---">
                          <label class="ltn__checkbox">
                            <input type="checkbox" /> <i class="icon"></i> Don’t
                            send any email
                          </label>
                          <label class="ltn__checkbox">
                            <input type="checkbox" checked="" />{" "}
                            <i class="icon"></i> Offers
                          </label>
                          <label class="ltn__checkbox">
                            <input type="checkbox" /> <i class="icon"></i>{" "}
                            Surveys
                          </label>
                          <label class="ltn__checkbox">
                            <input type="checkbox" /> <i class="icon"></i> Now
                            on Aurora
                          </label>
                          <label class="ltn__checkbox">
                            <input type="checkbox" /> <i class="icon"></i>{" "}
                            Latest updates
                          </label>
                          <label class="ltn__checkbox">
                            <input type="checkbox" checked="" />{" "}
                            <i class="icon"></i> Checkbox Active
                          </label>
                          <label class="ltn__checkbox">
                            <input type="checkbox" disabled="" />{" "}
                            <i class="icon"></i> Checkbox Disabled
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-5">
                      <div class="notification-item mb-30">
                        <p class="ltn__color-1">Content language</p>
                        <p>
                          <strong>Add your phone number</strong>
                        </p>
                        <div class="ltn__checkbox-radio-group inline---">
                          <label class="ltn__checkbox">
                            <input type="checkbox" /> <i class="icon"></i> Don’t
                            send messages on mobile
                          </label>
                          <label class="ltn__checkbox">
                            <input type="checkbox" checked="" />{" "}
                            <i class="icon"></i> Accounts messages
                          </label>
                          <label class="ltn__checkbox">
                            <input type="checkbox" /> <i class="icon"></i>{" "}
                            Aurora information
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="notification-item mb-30">
                        <p class="ltn__color-1">Marketing communication</p>
                        <div class="ltn__checkbox-radio-group inline--- mb-30">
                          <label class="ltn__checkbox">
                            <input type="checkbox" /> <i class="icon"></i> Use
                            my information to send promotional communications on
                            thrd party services
                          </label>
                          <label class="ltn__checkbox">
                            <input type="checkbox" checked="" />{" "}
                            <i class="icon"></i> Send me newsletters
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

      <footer class="ltnd__footer-1 fixed-footer-1 bg-white mt-80">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <div class="ltnd__footer-1-inner">
                <div class="ltnd__left btn-normal"></div>
                <div class="ltnd__right btn-normal">
                  <div class="btn-wrapper">
                    <Link to="/admin/settings">
                      <i className="icon-left-arrow-1" /> Back
                    </Link>
                    <a href="#" class="btn theme-btn-1 btn-round-12">
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
  );
};

export default EmailSignature;
