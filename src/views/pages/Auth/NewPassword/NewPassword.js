import React from 'react'
import logo from '../../../../assets/img/logo.png'
function NewPassword() {
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
                                    <h1 className="section-title">Let’s choose a new Password</h1>
                                    <p>Enter your new password </p>
                                </div>
                                <form action="#" className="ltn__form-box form-width-360">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Enter your new password"
                                    />
                                    <input
                                        type="password"
                                        name="password-2"
                                        placeholder="Confrim your new password"
                                    />
                                    <div className="btn-wrapper mt-20">
                                        <button
                                            className="theme-btn-1 btn btn-block w-100 btn-round-12"
                                            type="submit"
                                        >
                                            Reset password
                </button>
                                    </div>
                                </form>
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

export default NewPassword
