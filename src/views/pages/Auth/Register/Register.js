import React from 'react'
import motorImg from '../../../../assets/img/motor/login-bg-1.png'
function Register() {
    return (
        <React.Fragment>
            <div className="body-wrapper">
                {/* Body Content Area Start */}
                <div className="body-content-area ltnd__no-sidebar-menu body-100vh body-bg-1---">
                    {/* LOGIN AREA START */}
                    <div className="ltn__login-area">
                        <div
                            className="ltn__login-area-img bg-image"
                            data-bs-bg={motorImg}
                        />
                        <div className="ltnd__login-wrap">
                            <div className="account-login-inner">
                                <div className="section-title-area mb-30">
                                    <h1 className="section-title">Create an account</h1>
                                    <p>Enter your details below</p>
                                </div>
                                <form action="#" className="ltn__form-box ">
                                    <input type="text" name="name" placeholder="Full name" />
                                    <input type="text" name="email" placeholder="Email*" />
                                    <input type="password" name="password" placeholder="Password*" />
                                    <div className="btn-wrapper mt-20">
                                        <button
                                            className="theme-btn-1 btn btn-block w-100 btn-round-12"
                                            type="submit"
                                        >
                                            Create account
                </button>
                                    </div>
                                    <div className="btn-normal mt-30">
                                        <span>
                                            Already have an account?{" "}
                                            <a href="#" className="ltn__secondary-color">
                                                Sign in
                  </a>
                                        </span>
                                    </div>
                                </form>
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

export default Register
