import React from 'react'

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
                                <i className="far fa-bell" />
                            </div>
                            <div className="ltnd__top-report-info">
                                <h2>
                                    <span className="counter animated fadeInDownBig">312</span>
                                    {/* <span class="counterUp-icon">+</span> */}
                                </h2>
                                <p>Number of policies</p>
                            </div>
                        </div>
                    </div>
                    {/* top-report-item */}
                    <div className="col-xl-3 col-lg-6 col-sm-6">
                        <div className="ltnd__top-report-item">
                            <div className="ltnd__top-report-icon bg-ltn-color-6">
                                <i className="far fa-bell" />
                            </div>
                            <div className="ltnd__top-report-info">
                                <h2>
                                    <span className="counter animated fadeInDownBig">78</span>
                                    {/* <span class="counterUp-icon">+</span> */}
                                </h2>
                                <p>Active claims</p>
                            </div>
                        </div>
                    </div>
                    {/* top-report-item */}
                    <div className="col-xl-3 col-lg-6 col-sm-6">
                        <div className="ltnd__top-report-item">
                            <div className="ltnd__top-report-icon bg-ltn-color-7">
                                <i className="far fa-bell" />
                            </div>
                            <div className="ltnd__top-report-info">
                                <h2>
                                    <span className="counter animated fadeInDownBig">15</span>
                                    {/* <span class="counterUp-icon">+</span> */}
                                </h2>
                                <p>Registered garages</p>
                            </div>
                        </div>
                    </div>
                    {/* top-report-item */}
                    <div className="col-xl-3 col-lg-6 col-sm-6">
                        <div className="ltnd__top-report-item">
                            <div className="ltnd__top-report-icon bg-ltn-color-8">
                                <i className="far fa-bell" />
                            </div>
                            <div className="ltnd__top-report-info">
                                <h2>
                                    <span className="counter animated fadeInDownBig">50</span>
                                    {/* <span class="counterUp-icon">+</span> */}
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
