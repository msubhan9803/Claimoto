import React from "react";
import { Link } from "react-router-dom";

function Setting({ layout }) {
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
                          <Link to={`/${layout}/settings/account_preferences`}>
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
                          <Link to={`/${layout}/settings/notification_preferences`}>
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
                          <Link to={`/${layout}/settings/logs_activity`}>
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
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Setting;
