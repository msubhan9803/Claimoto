import React from 'react'

function VihicleList() {
    return (
        <React.Fragment>
            {/* SELECT AVAILABILITY AREA START */}
            <div className="select-availability-area pb-120">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ltn__shop-details-tab-inner ltn__shop-details-tab-inner-2">
                            <div className="ltn__shop-details-tab-menu mb-20 d-none">
                                <div className="nav">
                                    <a
                                        className="active show"
                                        data-bs-toggle="tab"
                                        href="#ltn__tab_3_1"
                                    >
                                        Garages
              </a>
                                    <a data-bs-toggle="tab" href="#ltn__tab_3_2">
                                        Agencies
              </a>
                                    <a data-bs-toggle="tab" href="#ltn__tab_3_3" className="">
                                        Car agencies
              </a>
                                </div>
                            </div>
                            <div className="tab-content">
                                {/* ltnd__garage-table-wrap  */}
                                <div className="tab-pane fade active show" id="ltn__tab_3_1">
                                    <div className="ltn__apartments-tab-content-inner">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="ltn__select-availability-table-wrap ltnd__policies-table-wrap ltnd__garage-table-wrap">
                                                    <div className="ltn__select-availability-table  d-none d-md-block">
                                                        <ul className="ltn__select-availability-table-head">
                                                            <li className="table-data-1">Part name</li>
                                                            <li className="table-data-2 ltn__color-1">ID</li>
                                                            <li className="table-data-2">Make</li>
                                                            <li className="table-data-2">Model</li>
                                                            <li className="table-data-2">Brand</li>
                                                            <li className="table-data-2">Year</li>
                                                            <li className="table-data-4">OEM number </li>
                                                            <li className="table-data-4">Artificial number</li>
                                                            <li className="table-data-8">Details</li>
                                                        </ul>
                                                        <ul className="ltn__select-availability-table-row">
                                                            <li className="table-data-1">
                                                                <strong>Break pads </strong>
                                                            </li>
                                                            <li className="table-data-2 ltn__color-1">15869</li>
                                                            <li className="table-data-2">BMW</li>
                                                            <li className="table-data-2">BMW X3</li>
                                                            <li className="table-data-2">BMW</li>
                                                            <li className="table-data-2">2021</li>
                                                            <li className="table-data-4">E00912</li>
                                                            <li className="table-data-4">A276-0192</li>
                                                            <li className="table-data-8">
                                                                <a
                                                                    className="ltn__secondary-color"
                                                                    href="vehicle-parts-details.html"
                                                                >
                                                                    <strong>Details</strong>
                                                                </a>{" "}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <>
                                {/* pagination */}
                                <div className="ltn__pagination-area text-center">
                                    <div className="ltn__pagination">
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fas fa-chevron-left" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">1</a>
                                            </li>
                                            <li className="active">
                                                <a href="#">2</a>
                                            </li>
                                            <li>
                                                <a href="#">3</a>
                                            </li>
                                            <li>
                                                <a href="#">...</a>
                                            </li>
                                            <li>
                                                <a href="#">10</a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fas fa-chevron-right" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </>



                        </div>
                    </div>
                </div>
            </div>


        </React.Fragment>
    )
}

export default VihicleList
