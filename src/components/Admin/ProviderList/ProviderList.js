import React from 'react'
import carImg from 'assets/img/icons/mc/png/3.png'
function ProviderList() {
    return (
        <React.Fragment>
            {/* SELECT AVAILABILITY AREA START */}
            <div className="select-availability-area pb-120">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ltn__shop-details-tab-inner ltn__shop-details-tab-inner-2">
                            <div className="ltn__shop-details-tab-menu mb-20">
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
                                                            <li className="table-data-1">Garage name</li>
                                                            <li className="table-data-2 ltn__color-1">ID</li>
                                                            <li className="table-data-3">POC name</li>
                                                            <li className="table-data-4">Contact number</li>
                                                            <li className="table-data-5">Expiry</li>
                                                            <li className="table-data-6">Garage address</li>
                                                            <li className="table-data-7">Edit </li>
                                                            <li className="table-data-8">Details</li>
                                                        </ul>
                                                        <ul className="ltn__select-availability-table-row">
                                                            <li className="table-data-1">
                                                                <strong>
                                                                    <img src={carImg} alt="car" /> Car
                              and body shop{" "}
                                                                </strong>
                                                            </li>
                                                            <li className="table-data-2 ltn__color-1">15869</li>
                                                            <li className="table-data-3">Yasmin Ali</li>
                                                            <li className="table-data-4">079 079 1189</li>
                                                            <li className="table-data-5">Dec 31, 2021</li>
                                                            <li className="table-data-6">
                                                                Prince Nails' bent Asem St...
                          </li>
                                                            <li className="table-data-7">
                                                                <strong>
                                                                    <a
                                                                        href="#"
                                                                        className=""
                                                                        title="Quick View"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#edit_table_item_modal"
                                                                    >
                                                                        Edit
                              </a>
                                                                </strong>
                                                            </li>
                                                            <li className="table-data-8">
                                                                <a
                                                                    className="ltn__secondary-color"
                                                                    href="garage-details.html"
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
                                {/* ltnd__agencies-table-wrap  */}
                                <div className="tab-pane fade" id="ltn__tab_3_2">
                                    <div className="ltn__product-tab-content-inner">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="ltn__select-availability-table-wrap ltnd__policies-table-wrap ltnd__agencies-table-wrap">
                                                    <div className="ltn__select-availability-table  d-none d-md-block">
                                                        <ul className="ltn__select-availability-table-head">
                                                            <li className="table-data-1">Agency</li>
                                                            <li className="table-data-2 ltn__color-1">ID</li>
                                                            <li className="table-data-3">POC name</li>
                                                            <li className="table-data-4">Contact number</li>
                                                            <li className="table-data-5">Expiry</li>
                                                            <li className="table-data-6">Garage address</li>
                                                            <li className="table-data-7">Edit </li>
                                                            <li className="table-data-8">Details</li>
                                                        </ul>
                                                        <ul className="ltn__select-availability-table-row">
                                                            <li className="table-data-1">
                                                                <strong>
                                                                <img src={carImg} alt="car" />
                                                                Agent orange{" "}
                                                                </strong>
                                                            </li>
                                                            <li className="table-data-2 ltn__color-1">15869</li>
                                                            <li className="table-data-3">Yasmin Ali</li>
                                                            <li className="table-data-4">079 079 1189</li>
                                                            <li className="table-data-5">Dec 31, 2021</li>
                                                            <li className="table-data-6">Prince Nails' bent Asem St...</li>
                                                            <li className="table-data-7">
                                                                <strong>
                                                                    <a
                                                                        href="#"
                                                                        className=""
                                                                        title="Quick View"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#edit_table_item_modal_agency"
                                                                    >
                                                                        Edit
                    </a>
                                                                </strong>
                                                            </li>
                                                            <li className="table-data-8">
                                                                <a
                                                                    className="ltn__secondary-color"
                                                                    href="agency-details.html"
                                                                >
                                                                    <strong>Details</strong>
                                                                </a>{" "}
                                                            </li>
                                                        </ul>
                                                        <ul className="ltn__select-availability-table-row">
                                                            <li className="table-data-1">
                                                                <strong>
                                                                <img src={carImg} alt="car" />
                                                                    Agent orange{" "}
                                                                </strong>
                                                            </li>
                                                            <li className="table-data-2 ltn__color-1">15869</li>
                                                            <li className="table-data-3">Yasmin Ali</li>
                                                            <li className="table-data-4">079 079 1189</li>
                                                            <li className="table-data-5">Dec 31, 2021</li>
                                                            <li className="table-data-6">Prince Nails' bent Asem St...</li>
                                                            <li className="table-data-7">
                                                                <strong>
                                                                    <a
                                                                        href="#"
                                                                        className=""
                                                                        title="Quick View"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#edit_table_item_modal_agency"
                                                                    >
                                                                        Edit
                    </a>
                                                                </strong>
                                                            </li>
                                                            <li className="table-data-8">
                                                                <a
                                                                    className="ltn__secondary-color"
                                                                    href="agency-details.html"
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

                                {/* ltnd__car-agencies-table-wrap */}
                                <div className="tab-pane fade" id="ltn__tab_3_3">
                                    <div className="ltn__product-tab-content-inner">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="ltn__select-availability-table-wrap ltnd__policies-table-wrap ltnd__car-agencies-table-wrap">
                                                    <div className="ltn__select-availability-table  d-none d-md-block">
                                                        <ul className="ltn__select-availability-table-head">
                                                            <li className="table-data-1">Car agency name</li>
                                                            <li className="table-data-2 ltn__color-1">ID</li>
                                                            <li className="table-data-3">POC name</li>
                                                            <li className="table-data-4">Contact number</li>
                                                            <li className="table-data-5">Expiry</li>
                                                            <li className="table-data-6">Garage address</li>
                                                            <li className="table-data-7">Edit </li>
                                                            <li className="table-data-8">Details</li>
                                                        </ul>
                                                        <ul className="ltn__select-availability-table-row">
                                                            <li className="table-data-1">
                                                                <strong>
                                                                <img src={carImg} alt="car" />
                                                                    Local car agent{" "}
                                                                </strong>
                                                            </li>
                                                            <li className="table-data-2 ltn__color-1">15869</li>
                                                            <li className="table-data-3">Yasmin Ali</li>
                                                            <li className="table-data-4">079 079 1189</li>
                                                            <li className="table-data-5">Dec 31, 2021</li>
                                                            <li className="table-data-6">Prince Nails' bent Asem St...</li>
                                                            <li className="table-data-7">
                                                                <strong>
                                                                    <a
                                                                        href="#"
                                                                        className=""
                                                                        title="Quick View"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#edit_table_item_modal_car_agency"
                                                                    >
                                                                        Edit
                    </a>
                                                                </strong>
                                                            </li>
                                                            <li className="table-data-8">
                                                                <a
                                                                    className="ltn__secondary-color"
                                                                    href="car-agency-details.html"
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
                            {/*  */}

                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default ProviderList
