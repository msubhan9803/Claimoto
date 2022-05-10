import React from 'react'
import { Link } from 'react-router-dom'
function PasswordSetSuccess() {
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
                                <div className="checkmark-icon mb-55">
                                    <i className="ti-check" />
                                </div>
                                <div className="section-title-area ">
                                    <h1 className="section-title">
                                        Password has been reset successfully
                                    </h1>
                                    <p>
                                        You can now login with your new <br /> password
                                    </p>
                                </div>
                                <div className="btn-wrapper mt-30">
                                    <Link
                                        to="/login"
                                        className="theme-btn-1 btn btn-block w-100 btn-round-12"
                                        type="submit"
                                    >
                                        Login
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* LOGIN AREA END */}
                </div>
                {/* Body Content Area End */}
            </div>


        </React.Fragment>

    )
}

export default PasswordSetSuccess
