import React from "react";

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
                          <div className="settings-single-item mb-40">
                            <div className="settings-single-item-icon">
                              <i className="far fa-user"></i>
                            </div>
                            <div className="settings-single-item-info">
                              <h6>Account</h6>
                              <p>Manage account preferences</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="settings-single-item mb-40">
                            <div className="settings-single-item-icon">
                              <i className="far fa-bell"></i>
                            </div>
                            <div className="settings-single-item-info">
                              <h6>Notification</h6>
                              <p>Manage notifcation preferences </p>
                            </div>
                          </div>
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
                          <div className="settings-single-item mb-40">
                            <div className="settings-single-item-icon">
                              <i class="far fa-file-signature"></i>
                            </div>
                            <div className="settings-single-item-info">
                              <h6>Email Signature</h6>
                              <p>Manage email signature</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="settings-single-item mb-40">
                            <div className="settings-single-item-icon">
                              <i className="far fa-envelope"></i>
                            </div>
                            <div className="settings-single-item-info">
                              <h6>Email/Notification Template</h6>
                              <p>
                                Manage email/motification templates <br />
                                for different events.
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
            {/* BLOCK AREA END */}
            {/* BLOCK AREA START ( Product Details section - 2 ) */}
            <div className="ltnd__block-area">
              <div className="row">
                <div className="col-lg-12">
                  <div className="ltnd__block-item mt-30">
                    <div className="ltnd__title ltnd__title-2">
                      <h4 className="border-bottom pb-10">Log Management</h4>
                    </div>
                    <div className="ltn__block-item-info">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="settings-single-item mb-40">
                            <div className="settings-single-item-icon">
                              <i className="far fa-file-lines"></i>
                            </div>
                            <div className="settings-single-item-info">
                              <h6>Acitivity Logs</h6>
                              <p>
                                View activity hostry and <br /> error logs{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="settings-single-item mb-40">
                            <div className="settings-single-item-icon">
                              <i className="fa fa-regular fa-file-xmark"></i>
                            </div>
                            <div className="settings-single-item-info">
                              <h6>Error Logs</h6>
                              <p>
                                View error hostry and <br /> error logs{" "}
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
                          <div className="settings-single-item mb-40">
                            <div className="settings-single-item-icon">
                              <i className="ti-bell" />
                            </div>
                            <div className="settings-single-item-info">
                              <h6>SMTP</h6>
                              <p>Manage smtp configuration.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="settings-single-item mb-40">
                            <div className="settings-single-item-icon">
                              <i className="ti-bell" />
                            </div>
                            <div className="settings-single-item-info">
                              <h6>Timezone</h6>
                              <p>Manage timezone configuration.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* BLOCK AREA END */}
          </div>
          {/* Body Content Area Inner End */}
          <footer className="ltnd__footer-1 fixed-footer-1 bg-white mt-80 d-none">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="ltnd__footer-1-inner">
                    <div className="ltnd__left btn-normal">
                      <a href="#" className="ltn__color-1">
                        <i className="ti-trash" /> Delete
                      </a>
                    </div>
                    <div className="ltnd__right btn-normal">
                      <div className="btn-wrapper">
                        <a href="product.html" className="ltn__color-1">
                          <i className="ti-angle-left" /> Back
                        </a>
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
      </div>
    </React.Fragment>
  );
}

export default Setting;
