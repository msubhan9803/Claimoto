import React from 'react'
import carImg1 from "assets/img/icons/mc/png/11.png";
import TrackIcon from "assets/img/icons/mc/png/14.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

function ClaimList({
    tabs,
    selectedTab,
    taskList,
    _handleClaimListTabChange
}) {
    return (
        <React.Fragment>
            <div className="select-availability-area mt-30">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>New claims</h2>
                        <div className="ltn__shop-details-tab-inner ltn__shop-details-tab-inner-2">
                            <div className="ltn__shop-details-tab-menu mb-20">
                                <div className="nav">
                                    <a className="active show" data-bs-toggle="tab" href="#ltn__tab_3_1">All</a>
                                    <a data-bs-toggle="tab" href="#ltn__tab_3_2">(5) Pending</a>
                                    <a data-bs-toggle="tab" href="#ltn__tab_3_3" className="">(3) In progress</a>
                                    <a data-bs-toggle="tab" href="#ltn__tab_3_4" className="">(5) Under assesment</a>
                                    <a data-bs-toggle="tab" href="#ltn__tab_3_5" className="">(3) Under repair</a>
                                    <a data-bs-toggle="tab" href="#ltn__tab_3_6" className="">(3) Ready for delivery </a>
                                </div>
                            </div>
                            <div className="tab-content">
                                <div className="tab-pane fade active show" id="ltn__tab_3_1">
                                    <div className="ltn__apartments-tab-content-inner">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="ltn__select-availability-table-wrap ltnd__policies-table-wrap ltnd__garage-table-wrap">
                                                    <div className="ltn__select-availability-table  d-none--- d-md-block">
                                                        <ul className="ltn__select-availability-table-head">
                                                            <li className="table-data-9">Policy no.</li>
                                                            <li className="table-data-3 ltn__color-1">Claim no.</li>
                                                            <li className="table-data-10">Registration no.</li>
                                                            <li className="table-data-4">Claim type</li>
                                                            <li className="table-data-4">Incident date</li>
                                                            <li className="table-data-4">Modified date</li>
                                                            <li className="table-data-6">Status </li>
                                                            <li className="table-data-8">Details </li>
                                                            <li className="table-data-3">Track</li>
                                                        </ul>
                                                        <ul className="ltn__select-availability-table-row">
                                                            <li className="table-data-9"><strong> 10/tpl2020/001 </strong></li>
                                                            <li className="table-data-3 ltn__color-1">10/tpl2020/001</li>
                                                            <li className="table-data-10"><img src={carImg1} alt="#" />AB-123</li>
                                                            <li className="table-data-4">Front glass</li>
                                                            <li className="table-data-4">Dec 12, 2021</li>
                                                            <li className="table-data-4">Dec 12, 2021</li>
                                                            <li className="table-data-6">
                                                                <strong>
                                                                    <a href="#" className="invoice-btn invoice-btn-2---"><FontAwesomeIcon icon={faCircle} size="sm" /> In progress</a>
                                                                </strong>
                                                            </li>
                                                            <li className="table-data-8"><a className="ltn__secondary-color" href="#"><strong>Details</strong></a> </li>
                                                            <li className="table-data-3">
                                                                <strong>
                                                                    <a className="ltn__secondary-color" href="#"><img src={TrackIcon} alt="#" /> Track</a>
                                                                </strong>
                                                            </li>
                                                        </ul>
                                                        <ul className="ltn__select-availability-table-row">
                                                            <li className="table-data-9"><strong> 10/tpl2020/001 </strong></li>
                                                            <li className="table-data-3 ltn__color-1">10/tpl2020/001</li>
                                                            <li className="table-data-10"><img src={carImg1} alt="#" />AB-123</li>
                                                            <li className="table-data-4">Front glass</li>
                                                            <li className="table-data-4">Dec 12, 2021</li>
                                                            <li className="table-data-4">Dec 12, 2021</li>
                                                            <li className="table-data-6">
                                                                <strong>
                                                                    <a href="#" className="invoice-btn invoice-btn-4"><FontAwesomeIcon icon={faCircle} size="sm" /> Pending</a>
                                                                </strong>
                                                            </li>
                                                            <li className="table-data-8"><a className="ltn__secondary-color" href="#"><strong>Details</strong></a> </li>
                                                            <li className="table-data-3">
                                                                <strong>
                                                                    <a className="ltn__secondary-color" href="#"><img src={TrackIcon} alt="#" /> Track</a>
                                                                </strong>
                                                            </li>
                                                        </ul>
                                                        <ul className="ltn__select-availability-table-row">
                                                            <li className="table-data-9"><strong> 10/tpl2020/001 </strong></li>
                                                            <li className="table-data-3 ltn__color-1">10/tpl2020/001</li>
                                                            <li className="table-data-10"><img src={carImg1} alt="#" />AB-123</li>
                                                            <li className="table-data-4">Front glass</li>
                                                            <li className="table-data-4">Dec 12, 2021</li>
                                                            <li className="table-data-4">Dec 12, 2021</li>
                                                            <li className="table-data-6">
                                                                <strong>
                                                                    <a href="#" className="invoice-btn invoice-btn-2"><FontAwesomeIcon icon={faCircle} size="sm" /> Under repair</a>
                                                                </strong>
                                                            </li>
                                                            <li className="table-data-8"><a className="ltn__secondary-color" href="#"><strong>Details</strong></a> </li>
                                                            <li className="table-data-3">
                                                                <strong>
                                                                    <a className="ltn__secondary-color" href="#"><img src={TrackIcon} alt="#" /> Track</a>
                                                                </strong>
                                                            </li>
                                                        </ul>
                                                        <ul className="ltn__select-availability-table-row">
                                                            <li className="table-data-9"><strong> 10/tpl2020/001 </strong></li>
                                                            <li className="table-data-3 ltn__color-1">10/tpl2020/001</li>
                                                            <li className="table-data-10"><img src={carImg1} alt="#" />AB-123</li>
                                                            <li className="table-data-4">Front glass</li>
                                                            <li className="table-data-4">Dec 12, 2021</li>
                                                            <li className="table-data-4">Dec 12, 2021</li>
                                                            <li className="table-data-6">
                                                                <strong>
                                                                    <a href="#" className="invoice-btn invoice-btn-5"><FontAwesomeIcon icon={faCircle} size="sm" /> Under assesment</a>
                                                                </strong>
                                                            </li>
                                                            <li className="table-data-8"><a className="ltn__secondary-color" href="#"><strong>Details</strong></a> </li>
                                                            <li className="table-data-3">
                                                                <strong>
                                                                    <a className="ltn__secondary-color" href="#"><img src={TrackIcon} alt="#" /> Track</a>
                                                                </strong>
                                                            </li>
                                                        </ul>
                                                        <ul className="ltn__select-availability-table-row">
                                                            <li className="table-data-9"><strong> 10/tpl2020/001 </strong></li>
                                                            <li className="table-data-3 ltn__color-1">10/tpl2020/001</li>
                                                            <li className="table-data-10"><img src={carImg1} alt="#" />AB-123</li>
                                                            <li className="table-data-4">Front glass</li>
                                                            <li className="table-data-4">Dec 12, 2021</li>
                                                            <li className="table-data-4">Dec 12, 2021</li>
                                                            <li className="table-data-6">
                                                                <strong>
                                                                    <a href="#" className="invoice-btn invoice-btn-3"><FontAwesomeIcon icon={faCircle} size="sm" /> Ready for delivery </a>
                                                                </strong>
                                                            </li>
                                                            <li className="table-data-8"><a className="ltn__secondary-color" href="#"><strong>Details</strong></a> </li>
                                                            <li className="table-data-3">
                                                                <strong>
                                                                    <a className="ltn__secondary-color" href="#"><img src={TrackIcon} alt="#" /> Track</a>
                                                                </strong>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="ltn__tab_3_2">
                                    <div className="ltn__product-tab-content-inner">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="ltn__select-availability-table-wrap ltnd__policies-table-wrap ltnd__agencies-table-wrap">
                                                    <div className="ltn__select-availability-table  d-none--- d-md-block">
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
                                                            <li className="table-data-1"><strong><img src={carImg1} alt="#" /> Agent orange </strong></li>
                                                            <li className="table-data-2 ltn__color-1">15869</li>
                                                            <li className="table-data-3">Yasmin Ali</li>
                                                            <li className="table-data-4">079 079 1189</li>
                                                            <li className="table-data-5">Dec 31, 2021</li>
                                                            <li className="table-data-6">Prince Nails' bent Asem St...</li>
                                                            <li className="table-data-7">
                                                                <strong>
                                                                    <a href="#" className="" title="Quick View" data-bs-toggle="modal" data-bs-target="#edit_table_item_modal_agency">
                                                                        Edit
                                                                    </a>
                                                                </strong>
                                                            </li>
                                                            <li className="table-data-8"><a className="ltn__secondary-color" href="#"><strong>Details</strong></a> </li>
                                                        </ul>
                                                        <ul className="ltn__select-availability-table-row">
                                                            <li className="table-data-1"><strong><img src={carImg1} alt="#" /> Agent orange </strong></li>
                                                            <li className="table-data-2 ltn__color-1">15869</li>
                                                            <li className="table-data-3">Yasmin Ali</li>
                                                            <li className="table-data-4">079 079 1189</li>
                                                            <li className="table-data-5">Dec 31, 2021</li>
                                                            <li className="table-data-6">Prince Nails' bent Asem St...</li>
                                                            <li className="table-data-7">
                                                                <strong>
                                                                    <a href="#" className="" title="Quick View" data-bs-toggle="modal" data-bs-target="#edit_table_item_modal_agency">
                                                                        Edit
                                                                    </a>
                                                                </strong>
                                                            </li>
                                                            <li className="table-data-8"><a className="ltn__secondary-color" href="#"><strong>Details</strong></a> </li>
                                                        </ul>
                                                        <ul className="ltn__select-availability-table-row">
                                                            <li className="table-data-1"><strong><img src={carImg1} alt="#" /> Agent orange </strong></li>
                                                            <li className="table-data-2 ltn__color-1">15869</li>
                                                            <li className="table-data-3">Yasmin Ali</li>
                                                            <li className="table-data-4">079 079 1189</li>
                                                            <li className="table-data-5">Dec 31, 2021</li>
                                                            <li className="table-data-6">Prince Nails' bent Asem St...</li>
                                                            <li className="table-data-7">
                                                                <strong>
                                                                    <a href="#" className="" title="Quick View" data-bs-toggle="modal" data-bs-target="#edit_table_item_modal_agency">
                                                                        Edit
                                                                    </a>
                                                                </strong>
                                                            </li>
                                                            <li className="table-data-8"><a className="ltn__secondary-color" href="#"><strong>Details</strong></a> </li>
                                                        </ul>
                                                        <ul className="ltn__select-availability-table-row">
                                                            <li className="table-data-1"><strong><img src={carImg1} alt="#" /> Agent orange </strong></li>
                                                            <li className="table-data-2 ltn__color-1">15869</li>
                                                            <li className="table-data-3">Yasmin Ali</li>
                                                            <li className="table-data-4">079 079 1189</li>
                                                            <li className="table-data-5">Dec 31, 2021</li>
                                                            <li className="table-data-6">Prince Nails' bent Asem St...</li>
                                                            <li className="table-data-7">
                                                                <strong>
                                                                    <a href="#" className="" title="Quick View" data-bs-toggle="modal" data-bs-target="#edit_table_item_modal_agency">
                                                                        Edit
                                                                    </a>
                                                                </strong>
                                                            </li>
                                                            <li className="table-data-8"><a className="ltn__secondary-color" href="#"><strong>Details</strong></a> </li>
                                                        </ul>
                                                        <ul className="ltn__select-availability-table-row">
                                                            <li className="table-data-1"><strong><img src={carImg1} alt="#" /> Agent orange </strong></li>
                                                            <li className="table-data-2 ltn__color-1">15869</li>
                                                            <li className="table-data-3">Yasmin Ali</li>
                                                            <li className="table-data-4">079 079 1189</li>
                                                            <li className="table-data-5">Dec 31, 2021</li>
                                                            <li className="table-data-6">Prince Nails' bent Asem St...</li>
                                                            <li className="table-data-7">
                                                                <strong>
                                                                    <a href="#" className="" title="Quick View" data-bs-toggle="modal" data-bs-target="#edit_table_item_modal_agency">
                                                                        Edit
                                                                    </a>
                                                                </strong>
                                                            </li>
                                                            <li className="table-data-8"><a className="ltn__secondary-color" href="#"><strong>Details</strong></a> </li>
                                                        </ul>
                                                        <ul className="ltn__select-availability-table-row">
                                                            <li className="table-data-1"><strong><img src={carImg1} alt="#" /> Agent orange </strong></li>
                                                            <li className="table-data-2 ltn__color-1">15869</li>
                                                            <li className="table-data-3">Yasmin Ali</li>
                                                            <li className="table-data-4">079 079 1189</li>
                                                            <li className="table-data-5">Dec 31, 2021</li>
                                                            <li className="table-data-6">Prince Nails' bent Asem St...</li>
                                                            <li className="table-data-7">
                                                                <strong>
                                                                    <a href="#" className="" title="Quick View" data-bs-toggle="modal" data-bs-target="#edit_table_item_modal_agency">
                                                                        Edit
                                                                    </a>
                                                                </strong>
                                                            </li>
                                                            <li className="table-data-8"><a className="ltn__secondary-color" href="#"><strong>Details</strong></a> </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="ltn__tab_3_3">
                                    <div className="ltn__product-tab-content-inner">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="ltn__select-availability-table-wrap ltnd__policies-table-wrap ltnd__car-agencies-table-wrap">
                                                    <div className="ltn__select-availability-table  d-none--- d-md-block">
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
                                                            <li className="table-data-1"><strong><img src={carImg1} alt="#" /> Local car agent </strong></li>
                                                            <li className="table-data-2 ltn__color-1">15869</li>
                                                            <li className="table-data-3">Yasmin Ali</li>
                                                            <li className="table-data-4">079 079 1189</li>
                                                            <li className="table-data-5">Dec 31, 2021</li>
                                                            <li className="table-data-6">Prince Nails' bent Asem St...</li>
                                                            <li className="table-data-7">
                                                                <strong>
                                                                    <a href="#" className="" title="Quick View" data-bs-toggle="modal" data-bs-target="#edit_table_item_modal_car_agency">
                                                                        Edit
                                                                    </a>
                                                                </strong>
                                                            </li>
                                                            <li className="table-data-8"><a className="ltn__secondary-color" href="car-agency-details.html"><strong>Details</strong></a> </li>
                                                        </ul>
                                                        <ul className="ltn__select-availability-table-row">
                                                            <li className="table-data-1"><strong><img src={carImg1} alt="#" /> Local car agent </strong></li>
                                                            <li className="table-data-2 ltn__color-1">15869</li>
                                                            <li className="table-data-3">Yasmin Ali</li>
                                                            <li className="table-data-4">079 079 1189</li>
                                                            <li className="table-data-5">Dec 31, 2021</li>
                                                            <li className="table-data-6">Prince Nails' bent Asem St...</li>
                                                            <li className="table-data-7">
                                                                <strong>
                                                                    <a href="#" className="" title="Quick View" data-bs-toggle="modal" data-bs-target="#edit_table_item_modal_car_agency">
                                                                        Edit
                                                                    </a>
                                                                </strong>
                                                            </li>
                                                            <li className="table-data-8"><a className="ltn__secondary-color" href="car-agency-details.html"><strong>Details</strong></a> </li>
                                                        </ul>
                                                        <ul className="ltn__select-availability-table-row">
                                                            <li className="table-data-1"><strong><img src={carImg1} alt="#" /> Local car agent </strong></li>
                                                            <li className="table-data-2 ltn__color-1">15869</li>
                                                            <li className="table-data-3">Yasmin Ali</li>
                                                            <li className="table-data-4">079 079 1189</li>
                                                            <li className="table-data-5">Dec 31, 2021</li>
                                                            <li className="table-data-6">Prince Nails' bent Asem St...</li>
                                                            <li className="table-data-7">
                                                                <strong>
                                                                    <a href="#" className="" title="Quick View" data-bs-toggle="modal" data-bs-target="#edit_table_item_modal_car_agency">
                                                                        Edit
                                                                    </a>
                                                                </strong>
                                                            </li>
                                                            <li className="table-data-8"><a className="ltn__secondary-color" href="car-agency-details.html"><strong>Details</strong></a> </li>
                                                        </ul>
                                                        <ul className="ltn__select-availability-table-row">
                                                            <li className="table-data-1"><strong><img src={carImg1} alt="#" /> Local car agent </strong></li>
                                                            <li className="table-data-2 ltn__color-1">15869</li>
                                                            <li className="table-data-3">Yasmin Ali</li>
                                                            <li className="table-data-4">079 079 1189</li>
                                                            <li className="table-data-5">Dec 31, 2021</li>
                                                            <li className="table-data-6">Prince Nails' bent Asem St...</li>
                                                            <li className="table-data-7">
                                                                <strong>
                                                                    <a href="#" className="" title="Quick View" data-bs-toggle="modal" data-bs-target="#edit_table_item_modal_car_agency">
                                                                        Edit
                                                                    </a>
                                                                </strong>
                                                            </li>
                                                            <li className="table-data-8"><a className="ltn__secondary-color" href="car-agency-details.html"><strong>Details</strong></a> </li>
                                                        </ul>
                                                        <ul className="ltn__select-availability-table-row">
                                                            <li className="table-data-1"><strong><img src={carImg1} alt="#" /> Local car agent </strong></li>
                                                            <li className="table-data-2 ltn__color-1">15869</li>
                                                            <li className="table-data-3">Yasmin Ali</li>
                                                            <li className="table-data-4">079 079 1189</li>
                                                            <li className="table-data-5">Dec 31, 2021</li>
                                                            <li className="table-data-6">Prince Nails' bent Asem St...</li>
                                                            <li className="table-data-7">
                                                                <strong>
                                                                    <a href="#" className="" title="Quick View" data-bs-toggle="modal" data-bs-target="#edit_table_item_modal_car_agency">
                                                                        Edit
                                                                    </a>
                                                                </strong>
                                                            </li>
                                                            <li className="table-data-8"><a className="ltn__secondary-color" href="car-agency-details.html"><strong>Details</strong></a> </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="ltn__tab_3_4">
                                    <div className="ltn__apartments-tab-content-inner">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="ltn__select-availability-table-wrap ltnd__policies-table-wrap ltnd__garage-table-wrap">
                                                    <div className="ltn__select-availability-table  d-none--- d-md-block">
                                                        <ul className="ltn__select-availability-table-head">
                                                            <li className="table-data-9">Policy no.</li>
                                                            <li className="table-data-3 ltn__color-1">Claim no.</li>
                                                            <li className="table-data-10">Registration no.</li>
                                                            <li className="table-data-4">Claim type</li>
                                                            <li className="table-data-4">Incident date</li>
                                                            <li className="table-data-4">Modified date</li>
                                                            <li className="table-data-6">Status </li>
                                                            <li className="table-data-8">Details </li>
                                                            <li className="table-data-3">Track</li>
                                                        </ul>
                                                        <ul className="ltn__select-availability-table-row">
                                                            <li className="table-data-9"><strong> 10/tpl2020/001 </strong></li>
                                                            <li className="table-data-3 ltn__color-1">10/tpl2020/001</li>
                                                            <li className="table-data-10"><img src={carImg1} alt="#" />AB-123</li>
                                                            <li className="table-data-4">Front glass</li>
                                                            <li className="table-data-4">Dec 12, 2021</li>
                                                            <li className="table-data-4">Dec 12, 2021</li>
                                                            <li className="table-data-6">
                                                                <strong>
                                                                    <a href="#" className="invoice-btn invoice-btn-2---"><FontAwesomeIcon icon={faCircle} size="sm" /> In progress</a>
                                                                </strong>
                                                            </li>
                                                            <li className="table-data-8"><a className="ltn__secondary-color" href="#"><strong>Details</strong></a> </li>
                                                            <li className="table-data-3">
                                                                <strong>
                                                                    <a className="ltn__secondary-color" href="#"><img src={TrackIcon} alt="#" /> Track</a>
                                                                </strong>
                                                            </li>
                                                        </ul>
                                                        <ul className="ltn__select-availability-table-row">
                                                            <li className="table-data-9"><strong> 10/tpl2020/001 </strong></li>
                                                            <li className="table-data-3 ltn__color-1">10/tpl2020/001</li>
                                                            <li className="table-data-10"><img src={carImg1} alt="#" />AB-123</li>
                                                            <li className="table-data-4">Front glass</li>
                                                            <li className="table-data-4">Dec 12, 2021</li>
                                                            <li className="table-data-4">Dec 12, 2021</li>
                                                            <li className="table-data-6">
                                                                <strong>
                                                                    <a href="#" className="invoice-btn invoice-btn-4"><FontAwesomeIcon icon={faCircle} size="sm" /> Pending</a>
                                                                </strong>
                                                            </li>
                                                            <li className="table-data-8"><a className="ltn__secondary-color" href="#"><strong>Details</strong></a> </li>
                                                            <li className="table-data-3">
                                                                <strong>
                                                                    <a className="ltn__secondary-color" href="#"><img src={TrackIcon} alt="#" /> Track</a>
                                                                </strong>
                                                            </li>
                                                        </ul>
                                                        <ul className="ltn__select-availability-table-row">
                                                            <li className="table-data-9"><strong> 10/tpl2020/001 </strong></li>
                                                            <li className="table-data-3 ltn__color-1">10/tpl2020/001</li>
                                                            <li className="table-data-10"><img src={carImg1} alt="#" />AB-123</li>
                                                            <li className="table-data-4">Front glass</li>
                                                            <li className="table-data-4">Dec 12, 2021</li>
                                                            <li className="table-data-4">Dec 12, 2021</li>
                                                            <li className="table-data-6">
                                                                <strong>
                                                                    <a href="#" className="invoice-btn invoice-btn-2"><FontAwesomeIcon icon={faCircle} size="sm" /> Under repair</a>
                                                                </strong>
                                                            </li>
                                                            <li className="table-data-8"><a className="ltn__secondary-color" href="#"><strong>Details</strong></a> </li>
                                                            <li className="table-data-3">
                                                                <strong>
                                                                    <a className="ltn__secondary-color" href="#"><img src={TrackIcon} alt="#" /> Track</a>
                                                                </strong>
                                                            </li>
                                                        </ul>
                                                        <ul className="ltn__select-availability-table-row">
                                                            <li className="table-data-9"><strong> 10/tpl2020/001 </strong></li>
                                                            <li className="table-data-3 ltn__color-1">10/tpl2020/001</li>
                                                            <li className="table-data-10"><img src={carImg1} alt="#" />AB-123</li>
                                                            <li className="table-data-4">Front glass</li>
                                                            <li className="table-data-4">Dec 12, 2021</li>
                                                            <li className="table-data-4">Dec 12, 2021</li>
                                                            <li className="table-data-6">
                                                                <strong>
                                                                    <a href="#" className="invoice-btn invoice-btn-5"><FontAwesomeIcon icon={faCircle} size="sm" /> Under assesment</a>
                                                                </strong>
                                                            </li>
                                                            <li className="table-data-8"><a className="ltn__secondary-color" href="#"><strong>Details</strong></a> </li>
                                                            <li className="table-data-3">
                                                                <strong>
                                                                    <a className="ltn__secondary-color" href="#"><img src={TrackIcon} alt="#" /> Track</a>
                                                                </strong>
                                                            </li>
                                                        </ul>
                                                        <ul className="ltn__select-availability-table-row">
                                                            <li className="table-data-9"><strong> 10/tpl2020/001 </strong></li>
                                                            <li className="table-data-3 ltn__color-1">10/tpl2020/001</li>
                                                            <li className="table-data-10"><img src={carImg1} alt="#" />AB-123</li>
                                                            <li className="table-data-4">Front glass</li>
                                                            <li className="table-data-4">Dec 12, 2021</li>
                                                            <li className="table-data-4">Dec 12, 2021</li>
                                                            <li className="table-data-6">
                                                                <strong>
                                                                    <a href="#" className="invoice-btn invoice-btn-3"><FontAwesomeIcon icon={faCircle} size="sm" /> Ready for delivery </a>
                                                                </strong>
                                                            </li>
                                                            <li className="table-data-8"><a className="ltn__secondary-color" href="#"><strong>Details</strong></a> </li>
                                                            <li className="table-data-3">
                                                                <strong>
                                                                    <a className="ltn__secondary-color" href="#"><img src={TrackIcon} alt="#" /> Track</a>
                                                                </strong>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="ltn__tab_3_5">
                                    <div className="ltn__apartments-tab-content-inner">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="ltn__select-availability-table-wrap ltnd__policies-table-wrap ltnd__garage-table-wrap">
                                                    <div className="ltn__select-availability-table  d-none--- d-md-block">
                                                        <ul className="ltn__select-availability-table-head">
                                                            <li className="table-data-9">Policy no.</li>
                                                            <li className="table-data-3 ltn__color-1">Claim no.</li>
                                                            <li className="table-data-10">Registration no.</li>
                                                            <li className="table-data-4">Claim type</li>
                                                            <li className="table-data-4">Incident date</li>
                                                            <li className="table-data-4">Modified date</li>
                                                            <li className="table-data-6">Status </li>
                                                            <li className="table-data-8">Details </li>
                                                            <li className="table-data-3">Track</li>
                                                        </ul>
                                                        <ul className="ltn__select-availability-table-row">
                                                            <li className="table-data-9"><strong> 10/tpl2020/001 </strong></li>
                                                            <li className="table-data-3 ltn__color-1">10/tpl2020/001</li>
                                                            <li className="table-data-10"><img src={carImg1} alt="#" />AB-123</li>
                                                            <li className="table-data-4">Front glass</li>
                                                            <li className="table-data-4">Dec 12, 2021</li>
                                                            <li className="table-data-4">Dec 12, 2021</li>
                                                            <li className="table-data-6">
                                                                <strong>
                                                                    <a href="#" className="invoice-btn invoice-btn-2---"><FontAwesomeIcon icon={faCircle} size="sm" /> In progress</a>
                                                                </strong>
                                                            </li>
                                                            <li className="table-data-8"><a className="ltn__secondary-color" href="#"><strong>Details</strong></a> </li>
                                                            <li className="table-data-3">
                                                                <strong>
                                                                    <a className="ltn__secondary-color" href="#"><img src={TrackIcon} alt="#" /> Track</a>
                                                                </strong>
                                                            </li>
                                                        </ul>
                                                        <ul className="ltn__select-availability-table-row">
                                                            <li className="table-data-9"><strong> 10/tpl2020/001 </strong></li>
                                                            <li className="table-data-3 ltn__color-1">10/tpl2020/001</li>
                                                            <li className="table-data-10"><img src={carImg1} alt="#" />AB-123</li>
                                                            <li className="table-data-4">Front glass</li>
                                                            <li className="table-data-4">Dec 12, 2021</li>
                                                            <li className="table-data-4">Dec 12, 2021</li>
                                                            <li className="table-data-6">
                                                                <strong>
                                                                    <a href="#" className="invoice-btn invoice-btn-4"><FontAwesomeIcon icon={faCircle} size="sm" /> Pending</a>
                                                                </strong>
                                                            </li>
                                                            <li className="table-data-8"><a className="ltn__secondary-color" href="#"><strong>Details</strong></a> </li>
                                                            <li className="table-data-3">
                                                                <strong>
                                                                    <a className="ltn__secondary-color" href="#"><img src={TrackIcon} alt="#" /> Track</a>
                                                                </strong>
                                                            </li>
                                                        </ul>
                                                        <ul className="ltn__select-availability-table-row">
                                                            <li className="table-data-9"><strong> 10/tpl2020/001 </strong></li>
                                                            <li className="table-data-3 ltn__color-1">10/tpl2020/001</li>
                                                            <li className="table-data-10"><img src={carImg1} alt="#" />AB-123</li>
                                                            <li className="table-data-4">Front glass</li>
                                                            <li className="table-data-4">Dec 12, 2021</li>
                                                            <li className="table-data-4">Dec 12, 2021</li>
                                                            <li className="table-data-6">
                                                                <strong>
                                                                    <a href="#" className="invoice-btn invoice-btn-2"><FontAwesomeIcon icon={faCircle} size="sm" /> Under repair</a>
                                                                </strong>
                                                            </li>
                                                            <li className="table-data-8"><a className="ltn__secondary-color" href="#"><strong>Details</strong></a> </li>
                                                            <li className="table-data-3">
                                                                <strong>
                                                                    <a className="ltn__secondary-color" href="#"><img src={TrackIcon} alt="#" /> Track</a>
                                                                </strong>
                                                            </li>
                                                        </ul>
                                                        <ul className="ltn__select-availability-table-row">
                                                            <li className="table-data-9"><strong> 10/tpl2020/001 </strong></li>
                                                            <li className="table-data-3 ltn__color-1">10/tpl2020/001</li>
                                                            <li className="table-data-10"><img src={carImg1} alt="#" />AB-123</li>
                                                            <li className="table-data-4">Front glass</li>
                                                            <li className="table-data-4">Dec 12, 2021</li>
                                                            <li className="table-data-4">Dec 12, 2021</li>
                                                            <li className="table-data-6">
                                                                <strong>
                                                                    <a href="#" className="invoice-btn invoice-btn-5"><FontAwesomeIcon icon={faCircle} size="sm" /> Under assesment</a>
                                                                </strong>
                                                            </li>
                                                            <li className="table-data-8"><a className="ltn__secondary-color" href="#"><strong>Details</strong></a> </li>
                                                            <li className="table-data-3">
                                                                <strong>
                                                                    <a className="ltn__secondary-color" href="#"><img src={TrackIcon} alt="#" /> Track</a>
                                                                </strong>
                                                            </li>
                                                        </ul>
                                                        <ul className="ltn__select-availability-table-row">
                                                            <li className="table-data-9"><strong> 10/tpl2020/001 </strong></li>
                                                            <li className="table-data-3 ltn__color-1">10/tpl2020/001</li>
                                                            <li className="table-data-10"><img src={carImg1} alt="#" />AB-123</li>
                                                            <li className="table-data-4">Front glass</li>
                                                            <li className="table-data-4">Dec 12, 2021</li>
                                                            <li className="table-data-4">Dec 12, 2021</li>
                                                            <li className="table-data-6">
                                                                <strong>
                                                                    <a href="#" className="invoice-btn invoice-btn-3"><FontAwesomeIcon icon={faCircle} size="sm" /> Ready for delivery </a>
                                                                </strong>
                                                            </li>
                                                            <li className="table-data-8"><a className="ltn__secondary-color" href="#"><strong>Details</strong></a> </li>
                                                            <li className="table-data-3">
                                                                <strong>
                                                                    <a className="ltn__secondary-color" href="#"><img src={TrackIcon} alt="#" /> Track</a>
                                                                </strong>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="ltn__tab_3_6">
                                    <div className="ltn__apartments-tab-content-inner">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="ltn__select-availability-table-wrap ltnd__policies-table-wrap ltnd__garage-table-wrap">
                                                    <div className="ltn__select-availability-table  d-none--- d-md-block">
                                                        <ul className="ltn__select-availability-table-head">
                                                            <li className="table-data-9">Policy no.</li>
                                                            <li className="table-data-3 ltn__color-1">Claim no.</li>
                                                            <li className="table-data-10">Registration no.</li>
                                                            <li className="table-data-4">Claim type</li>
                                                            <li className="table-data-4">Incident date</li>
                                                            <li className="table-data-4">Modified date</li>
                                                            <li className="table-data-6">Status </li>
                                                            <li className="table-data-8">Details </li>
                                                            <li className="table-data-3">Track</li>
                                                        </ul>
                                                        <ul className="ltn__select-availability-table-row">
                                                            <li className="table-data-9"><strong> 10/tpl2020/001 </strong></li>
                                                            <li className="table-data-3 ltn__color-1">10/tpl2020/001</li>
                                                            <li className="table-data-10"><img src={carImg1} alt="#" />AB-123</li>
                                                            <li className="table-data-4">Front glass</li>
                                                            <li className="table-data-4">Dec 12, 2021</li>
                                                            <li className="table-data-4">Dec 12, 2021</li>
                                                            <li className="table-data-6">
                                                                <strong>
                                                                    <a href="#" className="invoice-btn invoice-btn-2---"><FontAwesomeIcon icon={faCircle} size="sm" /> In progress</a>
                                                                </strong>
                                                            </li>
                                                            <li className="table-data-8"><a className="ltn__secondary-color" href="#"><strong>Details</strong></a> </li>
                                                            <li className="table-data-3">
                                                                <strong>
                                                                    <a className="ltn__secondary-color" href="#"><img src={TrackIcon} alt="#" /> Track</a>
                                                                </strong>
                                                            </li>
                                                        </ul>
                                                        <ul className="ltn__select-availability-table-row">
                                                            <li className="table-data-9"><strong> 10/tpl2020/001 </strong></li>
                                                            <li className="table-data-3 ltn__color-1">10/tpl2020/001</li>
                                                            <li className="table-data-10"><img src={carImg1} alt="#" />AB-123</li>
                                                            <li className="table-data-4">Front glass</li>
                                                            <li className="table-data-4">Dec 12, 2021</li>
                                                            <li className="table-data-4">Dec 12, 2021</li>
                                                            <li className="table-data-6">
                                                                <strong>
                                                                    <a href="#" className="invoice-btn invoice-btn-4"><FontAwesomeIcon icon={faCircle} size="sm" /> Pending</a>
                                                                </strong>
                                                            </li>
                                                            <li className="table-data-8"><a className="ltn__secondary-color" href="#"><strong>Details</strong></a> </li>
                                                            <li className="table-data-3">
                                                                <strong>
                                                                    <a className="ltn__secondary-color" href="#"><img src={TrackIcon} alt="#" /> Track</a>
                                                                </strong>
                                                            </li>
                                                        </ul>
                                                        <ul className="ltn__select-availability-table-row">
                                                            <li className="table-data-9"><strong> 10/tpl2020/001 </strong></li>
                                                            <li className="table-data-3 ltn__color-1">10/tpl2020/001</li>
                                                            <li className="table-data-10"><img src={carImg1} alt="#" />AB-123</li>
                                                            <li className="table-data-4">Front glass</li>
                                                            <li className="table-data-4">Dec 12, 2021</li>
                                                            <li className="table-data-4">Dec 12, 2021</li>
                                                            <li className="table-data-6">
                                                                <strong>
                                                                    <a href="#" className="invoice-btn invoice-btn-2"><FontAwesomeIcon icon={faCircle} size="sm" /> Under repair</a>
                                                                </strong>
                                                            </li>
                                                            <li className="table-data-8"><a className="ltn__secondary-color" href="#"><strong>Details</strong></a> </li>
                                                            <li className="table-data-3">
                                                                <strong>
                                                                    <a className="ltn__secondary-color" href="#"><img src={TrackIcon} alt="#" /> Track</a>
                                                                </strong>
                                                            </li>
                                                        </ul>
                                                        <ul className="ltn__select-availability-table-row">
                                                            <li className="table-data-9"><strong> 10/tpl2020/001 </strong></li>
                                                            <li className="table-data-3 ltn__color-1">10/tpl2020/001</li>
                                                            <li className="table-data-10"><img src={carImg1} alt="#" />AB-123</li>
                                                            <li className="table-data-4">Front glass</li>
                                                            <li className="table-data-4">Dec 12, 2021</li>
                                                            <li className="table-data-4">Dec 12, 2021</li>
                                                            <li className="table-data-6">
                                                                <strong>
                                                                    <a href="#" className="invoice-btn invoice-btn-5"><FontAwesomeIcon icon={faCircle} size="sm" /> Under assesment</a>
                                                                </strong>
                                                            </li>
                                                            <li className="table-data-8"><a className="ltn__secondary-color" href="#"><strong>Details</strong></a> </li>
                                                            <li className="table-data-3">
                                                                <strong>
                                                                    <a className="ltn__secondary-color" href="#"><img src={TrackIcon} alt="#" /> Track</a>
                                                                </strong>
                                                            </li>
                                                        </ul>
                                                        <ul className="ltn__select-availability-table-row">
                                                            <li className="table-data-9"><strong> 10/tpl2020/001 </strong></li>
                                                            <li className="table-data-3 ltn__color-1">10/tpl2020/001</li>
                                                            <li className="table-data-10"><img src={carImg1} alt="#" />AB-123</li>
                                                            <li className="table-data-4">Front glass</li>
                                                            <li className="table-data-4">Dec 12, 2021</li>
                                                            <li className="table-data-4">Dec 12, 2021</li>
                                                            <li className="table-data-6">
                                                                <strong>
                                                                    <a href="#" className="invoice-btn invoice-btn-3"><FontAwesomeIcon icon={faCircle} size="sm" /> Ready for delivery </a>
                                                                </strong>
                                                            </li>
                                                            <li className="table-data-8"><a className="ltn__secondary-color" href="#"><strong>Details</strong></a> </li>
                                                            <li className="table-data-3">
                                                                <strong>
                                                                    <a className="ltn__secondary-color" href="#"><img src={TrackIcon} alt="#" /> Track</a>
                                                                </strong>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ClaimList;