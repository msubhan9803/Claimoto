import React from 'react'
import logo from '../../../../assets/img/logo.png'
function ResetPassEmail() {
    return (
        <React.Fragment>
                {/* Body main wrapper start */}
                <div className="body-wrapper">
                    {/* Body Content Area Start */}
                    <div className="body-content-area ltnd__no-sidebar-menu body-100vh body-bg-1---">
                        {/* LOGIN AREA START */}
                        <div className="ltn__login-area verify-email-area">
                            <div className="ltnd__login-wrap">
                                <div className="account-login-inner align-self-center text-center">
                                    <div className="logo-img mb-55">
                                        <img src={logo} alt="#" />
                                    </div>
                                    <div className="section-title-area ">
                                        <h1 className="section-title">Email has been sent</h1>
                                        <p>
                                            Click on the verification link sent to your <br /> email so we
                can reset your password{" "}
                                        </p>
                                    </div>
                                    <div className="btn-normal mt-25">
                                        <span>
                                            Didn't receive an Email yet?{" "}
                                            <a href="forgot-password.html" className="ltn__secondary-color">
                                                Resend email
                </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* LOGIN AREA END */}
                    </div>
                    {/* Body Content Area End */}
                </div>
                {/* Body main wrapper end */}

        </React.Fragment>

    )
}

export default ResetPassEmail
