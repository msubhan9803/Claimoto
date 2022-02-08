import React from 'react'

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
                                            <h4 className="border-bottom pb-10">Account management</h4>
                                        </div>
                                        <div className="ltn__block-item-info">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="settings-single-item mb-40">
                                                        <div className="settings-single-item-icon">
                                                            <i className="ti-user" />
                                                        </div>
                                                        <div className="settings-single-item-info">
                                                            <h6>Account</h6>
                                                            <p>
                                                                Manage email, passwords <br /> and personal data{" "}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="settings-single-item mb-40">
                                                        <div className="settings-single-item-icon">
                                                            <i className="ti-bell" />
                                                        </div>
                                                        <div className="settings-single-item-info">
                                                            <h6>Notification</h6>
                                                            <p>Manage notification settings </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  */}
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
                                            <h4 className="border-bottom pb-10">Account management</h4>
                                        </div>
                                        <div className="ltn__block-item-info">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="settings-single-item mb-40">
                                                        <div className="settings-single-item-icon">
                                                            <i className="ti-bell" />
                                                        </div>
                                                        <div className="settings-single-item-info">
                                                            <h6>Acitivity</h6>
                                                            <p>
                                                                View activity hostry and <br /> error logs{" "}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  */}
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
                                            <h4>Services</h4>
                                        </div>
                                        <div className="ltn__block-item-info">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="garage-details-single-item mb-40">
                                                        <h6 className="ltnd__title-3 mb-10">Battery</h6>
                                                        <ul>
                                                            <li>
                                                                The battery in a car is a rechargeable. It supplies
                                                                power (electric energy) to the car. Normally this
                                                                battery is used to help provide power to start the car
                                                                and then it is used only when extra power is needed. The
                                                                car battery alone is can't supply power to all the
                                                                electrical systems. The alternator does this.
                      </li>
                                                        </ul>
                                                    </div>
                                                    <div className="garage-details-single-item mb-40">
                                                        <h6 className="ltnd__title-3 mb-10">Brakes</h6>
                                                        <ul>
                                                            <li>
                                                                The battery in a car is a rechargeable. It supplies
                                                                power (electric energy) to the car. Normally this
                                                                battery is used to help provide power to start the car
                                                                and then it is used only when extra power is needed. The
                                                                car battery alone is can't supply power to all the
                                                                electrical systems. The alternator does this.
                      </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  */}
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
    )
}

export default Setting
