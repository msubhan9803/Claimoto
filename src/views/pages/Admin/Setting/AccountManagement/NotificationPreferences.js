import React from "react";

const NotificationPreferences = () => {
  return (
    <>
      <div class="body-bg-1">
        <div class="ltnd__header-area ltnd__header-area-2 section-bg-2---">
          <div class="ltn__header-top-area top-area-color-white--- ltnd__header-top-area">
            <div class="row">
              <div class="col-md-7"></div>
              <div class="col-md-5">
                <div class="top-bar-right text-end">
                  <div class="ltn__top-bar-menu">
                    <ul>
                      <li class="ltnd-dropdown">
                        <a class="toggle" href="#">
                          <i class="far fa-bell"></i>
                        </a>
                        <div class="ltnd-dropdown-menu dropdown-menu-notifications">
                          <div class="head">
                            <h4 class="title">Notifications (7)</h4>
                          </div>
                          <div class="ltnd-dropdown-menu-inner ltn__scrollbar">
                            <ul>
                              <li>
                                <div class="ltnd-dropdown-menu-item">
                                  <a href="#">
                                    <div class="image">
                                      <img
                                        src="img/icons/mc/png/10.png"
                                        alt="#"
                                      />
                                    </div>
                                    <div class="content">
                                      <h6>
                                        <strong>Yasmin Ali has</strong> viewed
                                        the <strong>vehicle 13454</strong>
                                      </h6>
                                      <p class="ltn__color-1">2 mins ago </p>
                                    </div>
                                  </a>
                                </div>
                              </li>
                              <li>
                                <div class="ltnd-dropdown-menu-item">
                                  <a href="#">
                                    <div class="image">
                                      <img
                                        src="img/icons/mc/png/10.png"
                                        alt="#"
                                      />
                                    </div>
                                    <div class="content">
                                      <h6>
                                        <strong>Yasmin Ali has</strong> viewed
                                        the <strong>vehicle 13454</strong>
                                      </h6>
                                      <p class="ltn__color-1">2 mins ago </p>
                                    </div>
                                  </a>
                                </div>
                              </li>
                              <li>
                                <div class="ltnd-dropdown-menu-item">
                                  <a href="#">
                                    <div class="image">
                                      <img
                                        src="img/icons/mc/png/10.png"
                                        alt="#"
                                      />
                                    </div>
                                    <div class="content">
                                      <h6>
                                        <strong>Yasmin Ali has</strong> viewed
                                        the <strong>vehicle 13454</strong>
                                      </h6>
                                      <p class="ltn__color-1">2 mins ago </p>
                                    </div>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>

                      <li class="ltnd-dropdown ltnd__user-img">
                        <a class="toggle" href="#">
                          <img src="img/blog/author.jpg" alt="User" />
                        </a>
                        <div class="ltnd-dropdown-menu dropdown-menu-user">
                          <div class="head">
                            <div class="dropdown-menu-user-img">
                              <img src="img/icons/mc/png/10.png" alt="#" />
                            </div>
                            <div class="dropdown-menu-user-info">
                              <h6>Yasmin Ali</h6>
                              <p class="dropdown-menu-user-mail">
                                yasminali@gmail.com
                              </p>
                              <p class="dropdown-menu-user-title">
                                <strong>Account</strong>
                              </p>
                            </div>
                          </div>
                          <div class="ltnd-dropdown-menu-inner ltn__scrollbar">
                            <ul>
                              <li>
                                <div class="ltnd-dropdown-menu-item">
                                  <p class="dropdown-menu-user-language">
                                    <strong>Language</strong>
                                  </p>
                                  <div class="btn-wrapper btn-normal mt-0">
                                    <a href="#" class="btn-active">
                                      English
                                    </a>
                                    <a href="#" class="btn-inactive">
                                      ةيبرعلا
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div class="ltnd-dropdown-menu-item">
                                  <p>
                                    <a href="terms-conditions.html">
                                      Terms and conditions
                                    </a>
                                  </p>
                                  <p>
                                    <a href="login.html">Logout</a>
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ltnd__header-middle-area mt-30">
            <div class="row">
              <div class="col-lg-9">
                <div class="ltnd__page-title-area">
                  <h2>Notification</h2>
                  <p class="page-back-btn">
                    <a href="settings.html">
                      <i class="icon-left-arrow-1"></i> Back
                    </a>
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
                  <div class="ltnd__title ltnd__title-2">
                    <h4>Notification preferences</h4>
                  </div>
                  <div class="ltn__block-item-info">
                    <h6 class="ltnd__title-3">Two-factor authentication </h6>

                    <div class="ltn__checkbox-radio-group inline mt-20 mb-20">
                      <label class="ltn__switch-2">
                        <input type="checkbox" checked="" />{" "}
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
                              <input type="checkbox" /> <i class="icon"></i>{" "}
                              Don’t send any email
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
                              <input type="checkbox" /> <i class="icon"></i>{" "}
                              Don’t send messages on mobile
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
                              my information to send promotional communications
                              on thrd party services
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

        <footer class="ltnd__footer-1 fixed-footer-1 bg-white mt-80 d-none">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12">
                <div class="ltnd__footer-1-inner">
                  <div class="ltnd__left btn-normal">
                    <a href="#" class="ltn__color-1">
                      <i class="ti-trash"></i> Delete
                    </a>
                  </div>
                  <div class="ltnd__right btn-normal">
                    <div class="btn-wrapper">
                      <a href="product.html" class="ltn__color-1">
                        <i class="ti-angle-left"></i> Back
                      </a>
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

export default NotificationPreferences;
