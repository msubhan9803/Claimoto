import React, { useState, useEffect, useRef, createRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { getAllowActions } from 'functions';
import { getAssignProviderBranches, assignClaimToBranch } from 'store/actions/taskList/assign';
import LoaderAnimation from 'components/Loader/AnimatedLoaded';

function ClaimAssignToBranch() {
    let { id, claim_id } = useParams();
    const navigate = useNavigate();
    let dispatch = useDispatch();
    let [searchParams, setSearchParams] = useSearchParams();

    //Permissions Controlling
    const { permissions } = useSelector(state => state.authReducer);

    //Redux State
    const { record_branch } = useSelector(state => state.assignProviderScreenReducer);

    const {
        list,
        loading
    } = record_branch;


    const _getProviderBranchList = () => {
        dispatch(getAssignProviderBranches({
            provider_id: id,
        }));

    }

    const _assignClaimToBranchCallback = () => {
        navigate(`/claim/claim_detail/${claim_id}`);
    }


    const _assignClaimToBranch = (branchId) => {
        let payload = {
            "ClaimId": claim_id,
            "AgencyGarageId": id,
            "AgencyGarageBranchId": branchId,
        }
        dispatch(assignClaimToBranch(payload, _assignClaimToBranchCallback));
    }




    useEffect(() => {
        _getProviderBranchList();
    }, []);



    return (
        <React.Fragment>
            <div className="body-wrapper">
                <div className="ltnd__header-area ltnd__header-area-2 section-bg-2---">
                    <div className="ltnd__page-title-area">
                        <p onClick={() => navigate(-1)} role="button" className="page-back-btn">
                            <i className="icon-left-arrow-1" /> Back
                        </p>
                    </div>
                    <div className="ltnd__header-middle-area mt-30">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="ltnd__page-title-area">
                                    <h2>Branches</h2>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* header-middle-area end */}

                </div>
                {/* <!-- Body Content Area Inner Start --> */}

                <div className="body-content-area-inner">


                    {/* SELECT AVAILABILITY AREA START */}
                    <div className="select-availability-area pb-120">
                        <div className="row">
                            <div className="col-lg-12">
                                {/* ltnd__policies-table start */}
                                <div className="select-availability-area pb-120">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            {
                                                loading ? <LoaderAnimation /> :
                                                    <div className="ltn__apartments-tab-content-inner">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="ltn__select-availability-table-wrap ltnd__policies-table-wrap ltnd__garage-table-wrap">
                                                                    <div className="ltn__select-availability-table  d-none d-md-block">
                                                                        <ul className="ltn__select-availability-table-head">
                                                                            <li className="table-data-1">Name</li>
                                                                            <li className="table-data-1">Location</li>
                                                                            <li className="table-data-2">Pending</li>
                                                                            <li className="table-data-2">Under Assesment</li>
                                                                            <li className="table-data-2">Close</li>
                                                                            <li className="table-data-2"></li>

                                                                        </ul>
                                                                        {list.map(record => {
                                                                            return (
                                                                                <ul className="ltn__select-availability-table-row">

                                                                                    <li className="table-data-1">
                                                                                        <strong>
                                                                                            {record?.BranchName || ""}
                                                                                        </strong>
                                                                                    </li>
                                                                                    <li className="table-data-1">
                                                                                        <p>
                                                                                            {record.StreetAddress}
                                                                                        </p>
                                                                                    </li>
                                                                                    <li className="table-data-2 dot_pending">
                                                                                        <span class="dot_assign_provider "></span>
                                                                                        <b>{record?.Pending}</b>
                                                                                    </li>
                                                                                    <li className="table-data-2 dot_under_assesment">
                                                                                        <span class="dot_assign_provider "></span>
                                                                                        <b>{record?.Under_Assessment}</b>
                                                                                    </li>
                                                                                    <li className="table-data-2 dot_close">
                                                                                        <span class="dot_assign_provider "></span>
                                                                                        <b>{record?.Closed}</b>
                                                                                    </li>

                                                                                    <li className="table-data-2 text-primary float-end">
                                                                                        <strong>
                                                                                            <a onClick={() => _assignClaimToBranch(record.Id)} role="button">Assign</a>
                                                                                        </strong>
                                                                                    </li>


                                                                                </ul>
                                                                            )
                                                                        }
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                            }
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

export default ClaimAssignToBranch;
