import React from 'react'
import logo from 'assets/img/logo/logo-icon-1.png'

function RespHeader() {
    return (
        <React.Fragment>
            <div className="ltnd__responsive-header-area border-bottom d-xl-none">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ltnd__responsive-header-inner">
                                <div className="ltnd__site-logo">
                                    <a href="index.html">
                                        <img src={logo} alt="Logo" />
                                    </a>
                                </div>
                                {/* Mobile Menu Button */}
                                <div className="mobile-menu-toggle d-xl-none">
                                    <a href="#ltn__utilize-mobile-menu" className="ltn__utilize-toggle">
                                        <svg viewBox="0 0 800 600">
                                            <path
                                                d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                                                id="top"
                                            />
                                            <path d="M300,320 L540,320" id="middle" />
                                            <path
                                                d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                                                id="bottom"
                                                transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default RespHeader
