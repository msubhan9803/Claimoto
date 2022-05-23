import React, { useEffect } from "react";
import carImg from "assets/img/icons/mc/png/3.png";
import Pagination from "components/Pagination/Pagination";
import Loader from "components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllowActions } from "functions";
import LoaderAnimation from "components/Loader/AnimatedLoaded";

const StatementOfAccount = ({ loading, allProviders }) => {
    //Permissions Controlling
    const { permissions } = useSelector((state) => state.authReducer);

    return (
        <React.Fragment>
            <div className="ltn__product-tab-content-inner">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ltn__select-availability-table-wrap ltnd__policies-table-wrap ltnd__garage-table-wrap">
                            <div className="ltn__select-availability-table  d-none d-md-block">
                                <ul className="ltn__select-availability-table-head">
                                    <li className="table-data-2">Serial</li>
                                    <li className="table-data-2 ltn__color-1">Claim no.</li>
                                    <li className="table-data-8">Policy</li>
                                    <li className="table-data-3">Invoice date</li>
                                    <li className="table-data-3">Claimant name</li>
                                    <li className="table-data-8">ID</li>
                                    <li className="table-data-3">Service</li>
                                    <li className="table-data-2">Unit cost</li>
                                    <li className="table-data-8">Quantity</li>
                                    <li className="table-data-8">Discount</li>
                                    <li className="table-data-2">Co-payment</li>
                                    <li className="table-data-2">Net amount</li>
                                </ul>
                                <ul className="ltn__select-availability-table-row">
                                    <li className="table-data-2"><strong>134123</strong></li>
                                    <li className="table-data-2">134123</li>
                                    <li className="table-data-8">134123</li>
                                    <li className="table-data-3">Dec, 21 2021</li>
                                    <li className="table-data-3">Yasmin Ali</li>
                                    <li className="table-data-8">134123</li>
                                    <li className="table-data-3">Fixing bumper</li>
                                    <li className="table-data-2"><strong>1700 KWD</strong></li>
                                    <li className="table-data-8">4</li>
                                    <li className="table-data-8">15%</li>
                                    <li className="table-data-2">1700 KWD</li>
                                    <li className="table-data-2"><strong>1700 KWD</strong></li>
                                </ul>
                                <ul className="ltn__select-availability-table-row">
                                    <li className="table-data-2"><strong>134123</strong></li>
                                    <li className="table-data-2">134123</li>
                                    <li className="table-data-8">134123</li>
                                    <li className="table-data-3">Dec, 21 2021</li>
                                    <li className="table-data-3">Yasmin Ali</li>
                                    <li className="table-data-8">134123</li>
                                    <li className="table-data-3">Fixing bumper</li>
                                    <li className="table-data-2"><strong>1700 KWD</strong></li>
                                    <li className="table-data-8">4</li>
                                    <li className="table-data-8">15%</li>
                                    <li className="table-data-2">1700 KWD</li>
                                    <li className="table-data-2"><strong>1700 KWD</strong></li>
                                </ul>
                                <ul className="ltn__select-availability-table-row">
                                    <li className="table-data-2"><strong>134123</strong></li>
                                    <li className="table-data-2">134123</li>
                                    <li className="table-data-8">134123</li>
                                    <li className="table-data-3">Dec, 21 2021</li>
                                    <li className="table-data-3">Yasmin Ali</li>
                                    <li className="table-data-8">134123</li>
                                    <li className="table-data-3">Fixing bumper</li>
                                    <li className="table-data-2"><strong>1700 KWD</strong></li>
                                    <li className="table-data-8">4</li>
                                    <li className="table-data-8">15%</li>
                                    <li className="table-data-2">1700 KWD</li>
                                    <li className="table-data-2"><strong>1700 KWD</strong></li>
                                </ul>
                                <ul className="ltn__select-availability-table-row">
                                    <li className="table-data-2"><strong>134123</strong></li>
                                    <li className="table-data-2">134123</li>
                                    <li className="table-data-8">134123</li>
                                    <li className="table-data-3">Dec, 21 2021</li>
                                    <li className="table-data-3">Yasmin Ali</li>
                                    <li className="table-data-8">134123</li>
                                    <li className="table-data-3">Fixing bumper</li>
                                    <li className="table-data-2"><strong>1700 KWD</strong></li>
                                    <li className="table-data-8">4</li>
                                    <li className="table-data-8">15%</li>
                                    <li className="table-data-2">1700 KWD</li>
                                    <li className="table-data-2"><strong>1700 KWD</strong></li>
                                </ul>
                                <ul className="ltn__select-availability-table-row">
                                    <li className="table-data-2"><strong>134123</strong></li>
                                    <li className="table-data-2">134123</li>
                                    <li className="table-data-8">134123</li>
                                    <li className="table-data-3">Dec, 21 2021</li>
                                    <li className="table-data-3">Yasmin Ali</li>
                                    <li className="table-data-8">134123</li>
                                    <li className="table-data-3">Fixing bumper</li>
                                    <li className="table-data-2"><strong>1700 KWD</strong></li>
                                    <li className="table-data-8">4</li>
                                    <li className="table-data-8">15%</li>
                                    <li className="table-data-2">1700 KWD</li>
                                    <li className="table-data-2"><strong>1700 KWD</strong></li>
                                </ul>
                            </div>
                            <div className="ltn__select-availability-table-responsive d-md-none">
                                <ul className="ltn__select-availability-table-row-responsive-item">
                                    <li><span>Policy number</span> <span className="tower-name"><strong>10/tpl2020/001</strong></span></li>
                                    <li><span>Policy holder</span> <span>Yasmin Ali</span></li>
                                    <li><span>Identity</span> <span>15869632423</span></li>
                                    <li><span>Date of birth</span> <span>May 19, 1992</span></li>
                                    <li><span>Driving license validity</span> <span>Dec 31, 2021</span></li>
                                    <li><span>Address</span> <span>Prince Nails' bent Asem St...</span></li>
                                    <li><span>Vehicle</span>
                                        <span>
                                            <strong>
                                                <a href="#" className="" title="Quick View" data-bs-toggle="modal" data-bs-target="#edit_table_item_modal">
                                                    Edit
                                                </a>
                                            </strong>
                                        </span>
                                    </li>
                                    <li><span>Details</span> <span><a className="ltn__secondary-color" href="garage-details.html"><strong>Details</strong></a></span></li>
                                </ul>
                                <ul className="ltn__select-availability-table-row-responsive-item">
                                    <li><span>Policy number</span> <span className="tower-name"><strong>10/tpl2020/001</strong></span></li>
                                    <li><span>Policy holder</span> <span>Yasmin Ali</span></li>
                                    <li><span>Identity</span> <span>15869632423</span></li>
                                    <li><span>Date of birth</span> <span>May 19, 1992</span></li>
                                    <li><span>Driving license validity</span> <span>Dec 31, 2021</span></li>
                                    <li><span>Address</span> <span>Prince Nails' bent Asem St...</span></li>
                                    <li><span>Vehicle</span>
                                        <span>
                                            <strong>
                                                <a href="#" className="" title="Quick View" data-bs-toggle="modal" data-bs-target="#edit_table_item_modal">
                                                    Edit
                                                </a>
                                            </strong>
                                        </span>
                                    </li>
                                    <li><span>Details</span> <span><a className="ltn__secondary-color" href="garage-details.html"><strong>Details</strong></a></span></li>
                                </ul>
                                <ul className="ltn__select-availability-table-row-responsive-item">
                                    <li><span>Policy number</span> <span className="tower-name"><strong>10/tpl2020/001</strong></span></li>
                                    <li><span>Policy holder</span> <span>Yasmin Ali</span></li>
                                    <li><span>Identity</span> <span>15869632423</span></li>
                                    <li><span>Date of birth</span> <span>May 19, 1992</span></li>
                                    <li><span>Driving license validity</span> <span>Dec 31, 2021</span></li>
                                    <li><span>Address</span> <span>Prince Nails' bent Asem St...</span></li>
                                    <li><span>Vehicle</span>
                                        <span>
                                            <strong>
                                                <a href="#" className="" title="Quick View" data-bs-toggle="modal" data-bs-target="#edit_table_item_modal">
                                                    Edit
                                                </a>
                                            </strong>
                                        </span>
                                    </li>
                                    <li><span>Details</span> <span><a className="ltn__secondary-color" href="garage-details.html"><strong>Details</strong></a></span></li>
                                </ul>
                            </div>
                            <div className="invoice-table-footer">
                                <div className="invoice-table-footer-inner">
                                    <div className="single-content">
                                        <h1>50</h1>
                                        <p>Total claims</p>
                                    </div>
                                    <div className="single-content">
                                        <h1>1700 KWD</h1>
                                        <p>Total Amount</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default StatementOfAccount;
