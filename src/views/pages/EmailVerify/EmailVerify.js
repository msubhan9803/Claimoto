import React from 'react'
function EmailVerify() {
    return (
        <React.Fragment>
            <>
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
              <h1 className="section-title">Email verification successful</h1>
              <p>Continue to setup your account</p>
            </div>
            <div className="btn-wrapper mt-30">
              <a
                href="index.html"
                className="theme-btn-1 btn btn-block w-100 btn-round-12"
                type="submit"
              >
                Continue
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* LOGIN AREA END */}
    </div>
    {/* Body Content Area End */}
  </div>
  {/* Body main wrapper end */}
</>

    
    
    
</React.Fragment>

    )
}

export default EmailVerify
