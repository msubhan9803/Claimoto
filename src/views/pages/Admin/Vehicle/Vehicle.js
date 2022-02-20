import React from 'react'
import VehicleList from '../../../../components/Admin/VehicleList/VehicleList'
function Vehicle() {
    return (
        <React.Fragment>
            {/* <!-- Body main wrapper start --> */}
            <div className="body-wrapper">
                <div className="body-content-area-inner">
                    {/* PRODUCT AREA START */}
                    <div className="ltn__product-area ltn__product-gutter mb-120">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="ltn__search-widget ltnd__product-search-widget mb-30">
                                    <form action="#" _lpchecked={1}>
                                        <input
                                            type="text"
                                            name="search"
                                            placeholder="Search product..."
                                            className=""
                                        />
                                        <button type="submit">
                                            <i className="fas fa-search" />
                                        </button>
                                    </form>
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
                                                <a href="#" className="btn theme-btn-1 btn-round-12">
                                                    Add +
                  </a>
                                                {/* <button type="submit" className="btn theme-btn-1 btn-round">Add +</button> */}
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* SELECT AVAILABILITY AREA START */}
                        <div className="select-availability-area pb-120">
                            <div className="row">
                                <div className="col-lg-12">
                                    {/* ltnd__policies-table start */}
                                    <VehicleList />
                                </div>
                            </div>
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

export default Vehicle
