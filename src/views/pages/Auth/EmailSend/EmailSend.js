import React from 'react'
import logo from '../../../../assets/img/logo.png'
function EmailSend() {
    return (
        <React.Fragment>
            <div className="body-wrapper">
                {/* Body Content Area Start */}
                <div className="body-content-area ltnd__no-sidebar-menu body-100vh body-bg-1---">
                    {/* LOGIN AREA START */}
                    <div className="ltn__login-area">
                        <div className="ltnd__login-wrap">
                            <div className="account-login-inner align-self-center text-center">
                                <div className="logo-img mb-55">
                                    <img src={logo} alt="logo_img" />
                                </div>
                                <div className="section-title-area ">
                                    <h1 className="section-title">Verify your email address</h1>
                                    <p>
                                        You are one step away! Please verify your <br /> email address
                                    </p>
                                </div>
                                <div className="btn-normal mt-25">
                                    <span>
                                        Didn't receive an Email yet?{" "}
                                        <span className="ltn__secondary-color" style={{ fontWeight: '600' }}>
                                            Resend email
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* LOGIN AREA END */}
                </div>
                {/* Body Content Area End */}
            </div>
            Body main wrapper end



        </React.Fragment>

    )
}

export default EmailSend
