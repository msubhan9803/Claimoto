import React from 'react'
import { Link } from 'react-router-dom'
function PoliciesList() {
    return (
        <React.Fragment>
            {/* SELECT AVAILABILITY AREA START */}
            <div className="select-availability-area pb-120">
                <div className="row">
                    <div className="col-lg-12">
                        {/* ltnd__policies-table start */}
                        <div className="ltn__select-availability-table-wrap ltnd__policies-table-wrap">
                            <div className="ltn__select-availability-table  d-none d-md-block">
                                <ul className="ltn__select-availability-table-head">
                                    <li className="table-data-1">Policy number</li>
                                    <li className="table-data-2">Policy holder</li>
                                    <li className="table-data-3 ltn__color-1">Identity</li>
                                    <li className="table-data-4">Date of birth</li>
                                    <li className="table-data-5">Driving license validity</li>
                                    <li className="table-data-6">Address</li>
                                    <li className="table-data-7">Vehicle </li>
                                    <li className="table-data-8">Details</li>
                                    <li className="table-data-8">Edit</li>
                                </ul>
                                <ul className="ltn__select-availability-table-row">
                                    <li className="table-data-1">
                                        <strong>10/tpl2020/001</strong>
                                    </li>
                                    <li className="table-data-2">Yasmin Ali</li>
                                    <li className="table-data-3 ltn__color-1">15869632423</li>
                                    <li className="table-data-4">May 19, 1992</li>
                                    <li className="table-data-5">Dec 31, 2021</li>
                                    <li className="table-data-6">Prince Nails' bent Asem St...</li>
                                    <li className="table-data-7">
                                        <strong>
                                            <Link to={`/admin/vehical_detail/${1}`}>Vehicle</Link>
                                        </strong>{" "}
                                    </li>
                                    <li className="table-data-8">
                                        <Link
                                            className="ltn__secondary-color"
                                            to={`/admin/policy_detail/${1}`}
                                        >
                                            <strong>Details</strong>
                                        </Link>{" "}
                                    </li>
                                    <li className="table-data-8">
                                        <Link
                                            className="ltn__secondary-color"
                                            to={`/admin/policy_detail/${1}`}
                                        >
                                            <strong>Edit</strong>
                                        </Link>{" "}
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </React.Fragment>
    )
}

export default PoliciesList