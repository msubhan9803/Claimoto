import React from "react";
import { Link } from "react-router-dom";

function Setting() {
  return (
    <React.Fragment>
      <div className="body-wrapper">
        <div className="ltnd__header-area ltnd__header-area-2 section-bg-2---">
          <div className="ltnd__header-middle-area mt-30">
            <div className="row">
              <div className="col-lg-9">
                <div className="ltnd__page-title-area">
                  <h2>Setting</h2>
                </div>
              </div>
            </div>
          </div>
          {/* Body Content Area Inner Start */}
          <div className="body-content-area-inner">
            {/* BLOCK AREA START ( Product Details section - 2 ) */}
            <div className="ltnd__block-area">
              <div className="row">
                <div className="col-lg-12">
                  <div className="ltnd__block-item mt-30">
                    <div className="ltnd__title ltnd__title-2">
                      <h4 className="border-bottom pb-10">
                        Account Management
                      </h4>
                    </div>
                    <div className="ltn__block-item-info">
                      <div className="row">
                        <div className="col-lg-6">
                          <Link to={"/admin/settings/account_preferences"}>
                            <div className="settings-single-item mb-40">
                              <div className="settings-single-item-icon">
                                <i className="ti-user"></i>
                              </div>
                              <div className="settings-single-item-info">
                                <h6>Account</h6>
                                <p>Manage account preferences</p>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-6">
                          <Link to={"/admin/settings/notification_preferences"}>
                            <div className="settings-single-item mb-40">
                              <div className="settings-single-item-icon">
                                <i className="ti-bell"></i>
                              </div>
                              <div className="settings-single-item-info">
                                <h6>Notification</h6>
                                <p>Manage notifcation preferences </p>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-6">
                          <Link to={"/admin/settings/logs_activity"}>
                            <div className="settings-single-item mb-40">
                              <div className="settings-single-item-icon">
                                <i className="ti-pulse"></i>
                              </div>
                              <div className="settings-single-item-info">
                                <h6>Audit</h6>
                                <p>
                                  View activity history and <br /> error logs{" "}
                                </p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* BLOCK AREA END */}
            {/* BLOCK AREA START ( Product Details section - 2 ) */}
            <div className="ltnd__block-area">
              <div className="row">
                <div className="col-lg-12">
                  <div className="ltnd__block-item mt-30">
                    <div className="ltnd__title ltnd__title-2">
                      <h4 className="border-bottom pb-10">Email Management</h4>
                    </div>
                    <div className="ltn__block-item-info">
                      <div className="row">
                        <div className="col-lg-6">
                          <Link to={"/admin/settings/email_signature"}>
                            <div className="settings-single-item mb-40">
                              <div className="settings-single-item-icon">
                                <i class="ti-marker-alt"></i>
                              </div>
                              <div className="settings-single-item-info">
                                <h6>Email Signature</h6>
                                <p>Manage email signature configurations</p>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-6">
                          <Link to={"/admin/settings/email_management"}>
                            <div className="settings-single-item mb-40">
                              <div className="settings-single-item-icon">
                                <i className="ti-email"></i>
                              </div>
                              <div className="settings-single-item-info">
                                <h6>Email/Notification Template</h6>
                                <p>
                                  Manage email/motification templates <br />
                                  for different events.
                                </p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* BLOCK AREA END */}
            {/* BLOCK AREA START ( Product Details section - 2 ) */}
            {/* <div className="ltnd__block-area">
              <div className="row">
                <div className="col-lg-12">
                  <div className="ltnd__block-item mt-30">
                    <div className="ltnd__title ltnd__title-2">
                      <h4 className="border-bottom pb-10">Log Management</h4>
                    </div>
                    <div className="ltn__block-item-info">
                      <div className="row">
                        <div className="col-lg-6">
                          <Link to={"/admin/settings/logs_activity"}>
                            <div className="settings-single-item mb-40">
                              <div className="settings-single-item-icon">
                                <i className="ti-pulse"></i>
                              </div>
                              <div className="settings-single-item-info">
                                <h6>Acitivity Logs</h6>
                                <p>
                                  View activity hostry and <br /> error logs{" "}
                                </p>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-6">
                          <Link to={"/admin/settings/logs_error"}>
                            <div className="settings-single-item mb-40">
                              <div className="settings-single-item-icon">
                                <i className="ti-na"></i>
                              </div>
                              <div className="settings-single-item-info">
                                <h6>Error Logs</h6>
                                <p>
                                  View error hostry and <br /> error logs{" "}
                                </p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* BLOCK AREA END */}
            {/* BLOCK AREA START ( Product Details section - 2 ) */}
            <div className="ltnd__block-area">
              <div className="row">
                <div className="col-lg-12">
                  <div className="ltnd__block-item mt-30">
                    <div className="ltnd__title ltnd__title-2">
                      <h4 className="border-bottom pb-10">
                        SMTP/Timezone Management
                      </h4>
                    </div>
                    <div className="ltn__block-item-info">
                      <div className="row">
                        <div className="col-lg-6">
                          <Link to={"/admin/settings/smtp_management"}>
                            <div className="settings-single-item mb-40">
                              <div className="settings-single-item-icon">
                                <i className="ti-view-list-alt" />
                              </div>
                              <div className="settings-single-item-info">
                                <h6>SMTP/Timezone</h6>
                                <p>Manage SMTP and Timezone configuration.</p>
                              </div>
                            </div>
                          </Link>
                        </div>
                        {/* <div className="col-lg-6">
                          <Link to={"/admin/settings/timezone_management"}>
                            <div className="settings-single-item mb-40">
                              <div className="settings-single-item-icon">
                                <i className="ti-time" />
                              </div>
                              <div className="settings-single-item-info">
                                <h6>Timezone</h6>
                                <p>Manage timezone configuration.</p>
                              </div>
                            </div>
                          </Link>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* BLOCK AREA END */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Setting;
