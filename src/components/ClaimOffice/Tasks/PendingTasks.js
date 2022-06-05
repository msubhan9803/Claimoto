import React from 'react'
import { useCallback, useReducer, useEffect, useState, createRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import TrackIcon from "assets/img/icons/mc/png/14.png";
import BMWIcon from "assets/img/icons/mc/png/11.png";
import TrackTaskModal from './TrackTaskModal';
import { getPendingTaskList } from 'store/actions/taskList';
import LoaderAnimation from 'components/Loader/AnimatedLoaded';
import { formatDateTime } from 'functions';
import { Link } from 'react-router-dom';
import { getStatusesOfClaim } from 'store/actions/taskList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCaretRight, faSquareCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { useHorizontalScroll } from 'hooks/useHorizentalScroll';


function PendingTaskList() {
    const hScrollRef = createRef();

    const [component, setComponent] = useState({
        openModal: false
    });
    const { pending_tasks } = useSelector(state => state.taskListScreenReducer);
    const { UserId } = useSelector(state => state.authReducer.user_details);
    const { tabs, search_options, search_option, search_text, sort_type, sort_name, initials, afters } = useSelector(state => state.taskListScreenReducer);

    const dispatch = useDispatch();
    const { list, loading_list } = pending_tasks;


    useEffect(() => {
        dispatch(getPendingTaskList(UserId));
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



    const _returnColumn = (claim) => {
        return (
            <div className="ltnd__tasks-item">
                <h6 className="ltnd__product-title"><a ><img style={{ maxWidth: 100, maxHeight: 50 }} src={`${process.env.REACT_APP_API_ENVIRONMENT}${claim?.MakeImage}`} alt="make_image" /> {claim?.CarNo || ""}</a></h6>
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
    }




    const scroll = (scrollOffset) => {
        hScrollRef.current.scrollLeft += scrollOffset;
    };




    return (
        <div className="ltn__apartments-tab-content-inner">
            <TrackTaskModal toggleModal={_toggleModal} openModal={component.openModal} />
            {loading_list ? <LoaderAnimation /> :
                <>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                        <>
                            <FontAwesomeIcon role="button" onClick={() => scroll(-320)} icon={faSquareCaretLeft} size="lg" />
                        </><>
                            <FontAwesomeIcon role="button" onClick={() => scroll(320)} icon={faSquareCaretRight} size="lg" />
                        </>
                    </div>
                    <div ref={hScrollRef} style={{ overflowX: "auto", display: "flex", flexDirection: "row" }}>
                        {list?.map((k, index) => (
                            <div className="col-lg-3 col-md-3 col-sm-6" >
                                <div className={`ltnd__tasks-item-column ltnd__tasks-column-border tasks-border-${index + 1}`}>
                                    <h6>{k.ListName} ({k.List.Count})</h6>
                                    <div>
                                        {search_text && search_option ? k.List.List.filter((recrd) => recrd[search_option]?.toString()?.toUpperCase()?.startsWith(search_text.toUpperCase())).map((claim, index) => {
                                            return _returnColumn(claim)
                                        }) : k.List.List.map((claim, index) => {
                                            return _returnColumn(claim)
                                        }) || []}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            }

        </div>
    )
}

export default PendingTaskList;