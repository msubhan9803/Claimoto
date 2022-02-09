import SearchBar from 'components/Admin/SearchBar/SearchBar'
import React from 'react'
import { Link } from 'react-router-dom'
function Product() {
    return (
        <React.Fragment>
            <div className="ltnd__header-area ltnd__header-area-2 section-bg-2---">

                {/* header-middle-area start */}
                <div className="ltnd__header-middle-area mt-30">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="ltnd__page-title-area">

                                <h2>Products</h2>
                            </div>
                        </div>
                        <div className="col-lg-3 align-self-center text-end">
                            <div className="ltnd__date-area d-none">
                                <div className="ltn__datepicker">
                                    <div className="ltn_datepicker-title">
                                        <span>Date</span>
                                    </div>
                                    <div className="input-group date" data-provide="datepicker">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Select Date"
                                        />
                                        <div className="input-group-addon">
                                            <i className="far fa-calendar-alt" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* header-middle-area end */}
            </div>
            {/* <!-- Body main wrapper start --> */}
            <div className="body-wrapper">
                <div className="body-content-area-inner">
                    {/* PRODUCT AREA START */}
                    <div className="ltn__product-area ltn__product-gutter mb-120">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="ltn__search-widget ltnd__product-search-widget mb-30">
                                    <SearchBar />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="ltn__shop-options ltnd__shop-options select-list-right">
                                    <ul>
                                        <li>
                                            <div className="short-by text-center">
                                                <div className="short-by-title">
                                                    <p>Status</p>
                                                </div>
                                                <div className="short-by-menu">
                                                    <select className="nice-select">
                                                        <option>All</option>
                                                        <option>Sort by </option>
                                                        <option>Sort by new </option>
                                                        <option>Sort by price</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="short-by text-center">
                                                <div className="short-by-title">
                                                    <p>Date Added</p>
                                                </div>
                                                <div className="short-by-menu">
                                                    <select className="nice-select">
                                                        <option>All</option>
                                                        <option>Sort by </option>
                                                        <option>Sort by new </option>
                                                        <option>Sort by price</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="short-by text-center">
                                                <select className="nice-select">
                                                    <option>Download</option>
                                                    <option>Sort by </option>
                                                    <option>Sort by new </option>
                                                    <option>Sort by price</option>
                                                </select>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="short-by text-center">
                                                <select className="nice-select">
                                                    <option>Import</option>
                                                    <option>Sort by </option>
                                                    <option>Sort by new </option>
                                                    <option>Sort by price</option>
                                                </select>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="btn-wrapper text-center mt-0">
                                                <Link to="/product_detail" className="btn theme-btn-1 btn-round-12">
                                                    Add +
                                                </Link>
                                                {/* <button type="submit" class="btn theme-btn-1 btn-round">Add +</button> */}
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {/* product-item */}
                            <div className="col-lg-3 col-md-6">
                                <div className="ltnd__product-item">
                                    <h6 className="ltnd__product-title">
                                        <Link to="/product_detail">Liability Coverage</Link>
                                    </h6>
                                    <p className="ltnd__product-availability">158696</p>
                                    <div className="ltnd__product-brief">
                                        <p>
                                            Auto liability coverage is mandatory in most states. Drivers are
                                            legally required to purchase at least the minimum amount of
                                            liability...
                                        </p>
                                    </div>
                                    <div className="ltnd__product-btn">
                                        <Link to="/product_detail">
                                            <strong>View details</strong>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* product-item */}
                            <div className="col-lg-3 col-md-6">
                                <div className="ltnd__product-item">
                                    <h6 className="ltnd__product-title">
                                        <Link to="/product_detail">Motorist coverage</Link>
                                    </h6>
                                    <p className="ltnd__product-availability">158696</p>
                                    <div className="ltnd__product-brief">
                                        <p>
                                            If you're hit by a driver who doesn't have insurance, uninsured
                                            motorist coverage may help pay for your medical bills or, in
                                            some states, repairs ...
                                        </p>
                                    </div>
                                    <div className="ltnd__product-btn">
                                        <Link to="/product_detail">
                                            <strong>View details</strong>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* product-item */}
                            <div className="col-lg-3 col-md-6">
                                <div className="ltnd__product-item">
                                    <h6 className="ltnd__product-title">
                                        <Link to="/product_detail">Comprehensive coverage</Link>
                                    </h6>
                                    <p className="ltnd__product-availability">158696</p>
                                    <div className="ltnd__product-brief">
                                        <p>
                                            Comprehensive may help cover damage to your car from things like
                                            theft, fire, hail or vandalism. If your car is damaged by a
                                            covered peril...
                                        </p>
                                    </div>
                                    <div className="ltnd__product-btn">
                                        <Link to="/admin/product_detail">
                                            <strong>View details</strong>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* product-item */}
                            <div className="col-lg-3 col-md-6">
                                <div className="ltnd__product-item">
                                    <h6 className="ltnd__product-title">
                                        <Link to="/product_detail">Bronze policy</Link>
                                    </h6>
                                    <p className="ltnd__product-availability">158696</p>
                                    <div className="ltnd__product-brief">
                                        <p>
                                            If you're involved in an accident with another vehicle, or if
                                            you hit an object such as a fence, collision coverage may help
                                            pay to repair or replace your ca...
                                        </p>
                                    </div>
                                    <div className="ltnd__product-btn">
                                        <Link to="/product_detail">
                                            <strong>View details</strong>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* product-item */}
                            <div className="col-lg-3 col-md-6">
                                <div className="ltnd__product-item">
                                    <h6 className="ltnd__product-title">
                                        <Link to="/product_detail">Silver policy</Link>
                                    </h6>
                                    <p className="ltnd__product-availability">158696</p>
                                    <div className="ltnd__product-brief">
                                        <p>
                                            Auto liability coverage is mandatory in most states. Drivers are
                                            legally required to purchase at least the minimum amount of
                                            liability...
                                        </p>
                                    </div>
                                    <div className="ltnd__product-btn">
                                        <Link to="/product_detail">
                                            <strong>View details</strong>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* product-item */}
                            <div className="col-lg-3 col-md-6">
                                <div className="ltnd__product-item">
                                    <h6 className="ltnd__product-title">
                                        <Link to="/product_detail">Gold policy</Link>
                                    </h6>
                                    <p className="ltnd__product-availability">158696</p>
                                    <div className="ltnd__product-brief">
                                        <p>
                                            Auto liability coverage is mandatory in most states. Drivers are
                                            legally required to purchase at least the minimum amount of
                                            liability...
                                        </p>
                                    </div>
                                    <div className="ltnd__product-btn">
                                        <Link to="/product_detail">
                                            <strong>View details</strong>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                        </div>
                    </div>
                    {/* PRODUCT AREA END */}
                </div>
                {/* Body Content Area Inner End */}
            </div>
            {/* <!-- Body main wrapper end --> */}

        </React.Fragment>
    )
}

export default Product
