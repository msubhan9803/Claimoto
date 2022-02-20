import React from 'react'
import carImg from 'assets/img/icons/mc/png/3.png';
import Pagination from 'components/Pagination/Pagination';

function AgenciesList() {
    return (
        <React.Fragment>
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



            {/* <Pagination /> */}
        </React.Fragment>
    )
}

export default AgenciesList;
