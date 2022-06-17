import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { aSquareCaretLeft } from '@fortawesome/free-solid-svg-icons'

function Counter() {
    return (
        <React.Fragment>
            {/* TOP REPORT AREA START */}
            <div className="ltnd__top-report-area mt--30 mt-30">
                <div className="row">
                    {/* top-report-item */}
                    <div className="col-xl-3 col-lg-6 col-sm-6">
                        <div className="ltnd__top-report-item">
                            <div className="ltnd__top-report-icon bg-ltn-color-5">
                                <i className="ti-shield" />
                            </div>
                            <div className="ltnd__top-report-info">
                                <h2>
                                    <span className="counter animated fadeInDownBig">312</span>
                                    {/* <span className="counterUp-icon">+</span> */}
                                </h2>
                                <p>Number of policies</p>
                            </div>
                        </div>
                    </div>
                    {/* top-report-item */}
                    <div className="col-xl-3 col-lg-6 col-sm-6">
                        <div className="ltnd__top-report-item">
                            <div className="ltnd__top-report-icon bg-ltn-color-6">
                                <i className="ti-receipt" />
                            </div>
                            <div className="ltnd__top-report-info">
                                <h2>
                                    <span className="counter animated fadeInDownBig">78</span>
                                    {/* <span className="counterUp-icon">+</span> */}
                                </h2>
                                <p>Active claims</p>
                            </div>
                        </div>
                    </div>
                    {/* top-report-item */}
                    <div className="col-xl-3 col-lg-6 col-sm-6">
                        <div className="ltnd__top-report-item">
                            <div className="ltnd__top-report-icon bg-ltn-color-7">
                                <i className="ti-home" />
                            </div>
                            <div className="ltnd__top-report-info">
                                <h2>
                                    <span className="counter animated fadeInDownBig">15</span>
                                    {/* <span className="counterUp-icon">+</span> */}
                                </h2>
                                <p>Registered garages</p>
                            </div>
                        </div>
                    </div>
                    {/* top-report-item */}
                    <div className="col-xl-3 col-lg-6 col-sm-6">
                        <div className="ltnd__top-report-item">
                            <div className="ltnd__top-report-icon bg-ltn-color-8">
                                <i className="ti-agenda" />
                            </div>
                            <div className="ltnd__top-report-info">
                                <h2>
                                    <span className="counter animated fadeInDownBig">50</span>
                                    {/* <span className="counterUp-icon">+</span> */}
                                </h2>
                                <p>Registered agencies</p>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                </div>
            </div>
            {/* TOP REPORT AREA END */}


        </React.Fragment>
    )
}

export default Counter
