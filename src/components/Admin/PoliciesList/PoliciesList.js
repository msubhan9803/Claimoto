import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {GetPolicies} from 'store/actions/policies'
import { useDispatch, useSelector } from 'react-redux'
import  moment  from 'moment'
function PoliciesList() {
    const dispatch = useDispatch()


    const policies = useSelector(state => state.policyReducer.allPolicies)
    console.log("policies" , policies)

    useEffect(() => {
        dispatch(GetPolicies())

    }, [])
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
                                {policies?.map((p) => {
                                    return (
                                        <ul className="ltn__select-availability-table-row">
                                            <li className="table-data-1">
                                                <strong>{p.PolicyNo}</strong>
                                            </li>
                                            <li className="table-data-2">{p.PolicyHolderName}</li>
                                            <li className="table-data-3 ltn__color-1">{p.IdentificationNumber}</li>
                                            <li className="table-data-4">{moment(p.DOB).format("LL")}</li>
                                            <li className="table-data-5">{moment(p.DrivingLicenseValidity).format("LL")}</li>
                                            <li className="table-data-6">{p.Address}</li>
                                            <li className="table-data-7">
                                                <strong>
                                                    <Link to={`/admin/vehical_detail/${1}`}>Vehicle</Link>
                                                </strong>{" "}
                                            </li>
                                            <li className="table-data-8">
                                                <Link
                                                    className="ltn__secondary-color"
                                                    to={`/admin/policy_detail/${p.Id}`}
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

                                    )
                                })}


                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </React.Fragment>
    )
}

export default PoliciesList