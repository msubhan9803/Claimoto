import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Garage_Icon from "assets/img/user-account.png";

const AccountPreferences = () => {
  return (
    <>
      <div class="body-bg-1">
        <div class="ltnd__header-area ltnd__header-area-2 section-bg-2---">
          <div class="ltnd__header-middle-area mt-30">
            <div class="row">
              <div class="col-lg-9">
                <div class="ltnd__page-title-area">
                  <h2>Account</h2>
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
                    <h6 class="ltnd__title-3">Personal information</h6>
                    <div class="ltnd__edit-table-logo-title mb-20">
                      <div class="ltnd__edit-table-logo">
                        <img src={Garage_Icon} alt="#" />
                      </div>
                      <div class="ltnd__edit-table-title">
                        <h1 class="mb-0">User </h1>
                        <p class="ltn__color-1">user@gmail.com</p>
                      </div>
                    </div>
                    <h6>Your legal name</h6>

                    <form id="#" action="#" method="#" class="ltnd__form-1">
                      <div class="row">
                        <div class="col-md-5">
                          <div class="input-item">
                            <input
                              type="text"
                              name="name"
                              placeholder="Yasmin Ali"
                            />
                          </div>
                        </div>
                        <div class="col-md-5">
                          <div class="input-item">
                            <select class="nice-select">
                              <option>Jordanian</option>
                              <option>Option 1 </option>
                              <option>Option 2 </option>
                              <option>Option 3 </option>
                            </select>
                          </div>
                        </div>
                        <div class="col-md-5">
                          <div class="input-item">
                            <input
                              type="email"
                              name="name"
                              placeholder="Yasminali@gmail.com"
                            />
                          </div>
                        </div>
                        <div class="col-md-5">
                          <div class="input-item">
                            <input
                              type="email"
                              name="phone"
                              placeholder="1234567890"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="ltnd__block-area">
            <div class="row">
              <div class="col-lg-12">
                <div class="ltnd__block-item mt-30">
                  <div class="ltn__block-item-info">
                    <h6 class="ltnd__title-3">Password</h6>
                    <form id="#" action="#" method="#" class="ltnd__form-1">
                      <div class="row">
                        <div class="col-md-5">
                          <div class="input-item">
                            <input
                              type="password"
                              name="name"
                              placeholder="Current password"
                            />
                          </div>
                        </div>
                        <div class="col-md-5">
                          <div class="input-item">
                            <input
                              type="password"
                              name="name"
                              placeholder="New password"
                            />
                          </div>
                        </div>
                        <div class="col-md-5">
                          <div class="input-item">
                            <input
                              type="password"
                              name="name"
                              placeholder="Confirm new password"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="ltnd__block-area mb-50">
            <div class="row">
              <div class="col-lg-12">
                <div class="ltnd__block-item mt-30">
                  <div class="ltn__block-item-info">
                    <h6 class="ltnd__title-3">Two-factor authentication </h6>

                    <div class="ltn__checkbox-radio-group inline mt-20 mb-20">
                      <label class="ltn__switch-2">
                        <input type="checkbox" checked="true" />
                        <i class="lever"></i>{" "}
                        <span class="text">
                          <strong>Enable Two-factor authentication </strong>
                        </span>
                      </label>
                    </div>
                    <form id="#" action="#" method="#" class="ltnd__form-1">
                      <div class="row">
                        <div class="col-md-2">
                          <div class="input-item">
                            <select class="nice-select">
                              <option>Jordanian</option>
                              <option>Option 1 </option>
                              <option>Option 2 </option>
                              <option>Option 3 </option>
                            </select>
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="input-item">
                            <input
                              type="email"
                              name="phone"
                              placeholder="1234567890"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
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
    </>
  );
};

export default AccountPreferences;
