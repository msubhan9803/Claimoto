import React from 'react'
import { useCallback, useReducer, useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import TrackIcon from "assets/img/icons/mc/png/14.png";
import BMWIcon from "assets/img/icons/mc/png/11.png";
import TrackTaskModal from './TrackTaskModal';
import { getPendingTaskList } from 'store/actions/taskList';
import LoaderAnimation from 'components/Loader/AnimatedLoaded';
import { formatDateTime } from 'functions';
import { Link } from 'react-router-dom';
import { getStatusesOfClaim } from 'store/actions/taskList';


function CompletedTaskList() {
    const [component, setComponent] = useState({
        openModal: false
    });
    const { pending_tasks } = useSelector(state => state.taskListScreenReducer);
    const { UserId } = useSelector(state => state.authReducer.user_details);

    const dispatch = useDispatch();
    const { list, loading_list } = pending_tasks;


    useEffect(() => {
        // dispatch(getPendingTaskList(UserId));
    }, []);

    useEffect(() => {
        return () => {
            setComponent({
                ...component,
                openModal: false
            })
        };
    }, []);

    const _toggleModal = (id) => {
        if (typeof id === "number") {
            dispatch(getStatusesOfClaim(id));
        }
        setComponent({
            ...component,
            openModal: !component.openModal
        })
    }

    return (
        <div className="ltn__apartments-tab-content-inner">
            <TrackTaskModal toggleModal={_toggleModal} openModal={component.openModal} />
            {loading_list ? <LoaderAnimation /> :
                <div style={{ overflowX: "auto", display: "flex", flexDirection: "row" }}>
                    {/* {list?.map((k, index) => (
                        <div className="col-lg-3 col-md-3 col-sm-6" >
                            <div className={`ltnd__tasks-item-column ltnd__tasks-column-border tasks-border-${index + 1}`}>
                                <h6>{k.ListName} ({k.List.Count})</h6>
                                <div>
                                    {k.List.List.map((claim, index) => {
                                        return (

                                            <div className="ltnd__tasks-item">
                                                <h6 className="ltnd__product-title"><a ><img src={claim?.MakeImage || ""} alt="#" /> {claim?.CarNo || ""}</a></h6>
                                                <p className="ltnd__space-between">Policy no. <strong>{claim?.PolicyId || ""}</strong></p>
                                                <p className="ltnd__space-between">Claim no. <strong>{claim?.ClaimId || ""}</strong></p>
                                                <p className="ltnd__space-between">Claim type <strong>{claim?.ClaimTypeName || ""}</strong></p>
                                                <p className="ltnd__space-between">Incident date <strong>{formatDateTime(claim?.IncidentDate || "").date}</strong></p>
                                                <div className="btn-wrapper ltnd__space-between">
                                                    <Link to={`/claim/claim_detail/${claim.ClaimId}`} lassName="ltn__secondary-color" ><strong>Claim details</strong></Link>
                                                    <a className="ltn__secondary-color" onClick={() => _toggleModal(claim?.ClaimId || "")} role="button" title="Quick View" ><img src={TrackIcon} alt="#" /> Track</a>
                                                </div>
                                            </div>

                                        );
                                    }) || []}
                                </div>
                            </div>
                        </div>
                    ))} */}
                </div>
            }
        </div>
    )
}

export default CompletedTaskList;