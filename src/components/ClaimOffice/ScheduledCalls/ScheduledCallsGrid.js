import React, { useEffect, useState } from 'react'
import carImg from 'assets/img/icons/mc/png/3.png';
import Loader from 'components/Loader/Loader';
import Pagination from 'components/Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getAllowActions } from 'functions';
import LoaderAnimation from 'components/Loader/AnimatedLoaded';
import { getInitials, changeHandlerRule } from 'store/actions/rules';
import { formatDateTime } from 'functions';
import { getScheduleCalls, cancelScheduledCall } from 'store/actions/scheduleCalls';
import ClaimScheduleCallModal from '../ClaimActions/ClaimScheduleCallModal';
import { confirmAlert } from 'functions';

const ScheduledCallGrid = () => {
    const navigate = useNavigate();
    //Permissions Controlling
    const { permissions } = useSelector(state => state.authReducer);
    let initial_rules_actions = getAllowActions({ permissions, module_name: "IAR" });
    const initialState = {
        openModal: false,
        action: null,
        claim_id: null,
        sc_id:null
    }
    const [comState, setComState] = useState(initialState);



    const dispatch = useDispatch();
    const {
        calls,
        search_option,
        search_text,
        sort_type,
        sort_name,
    } = useSelector(state => state.scheduleCalls);


    const {
        list,
        loading,
        records_per_page,
        page_index,
        count,
    } = calls;


    const _paginationHandler = (pageIndex) => {
        let module = "initials";
        let key = "page_index";
        let val = pageIndex;
        dispatch(changeHandlerRule({ module, key, val }));
    }


    const _getList = () => {
        dispatch(getScheduleCalls({
            records_per_page, page_index, search_option,
            search_text,
            sort_type,
            sort_name,
        }));
    }


    useEffect(() => {
        _getList();
    }, []);


    const _closeModal = (modal) => {
        setComState({
            [modal]: false,
            action: null
        })
    }


    const _openModal = (id, claim_id) => {
        setComState({
            ...initialState,
            openModal: true,
            sc_id:id,
            claim_id:claim_id
        })
    }

    const _cancelCallHandler = (id) => {
        dispatch(cancelScheduledCall(id, _getList))
    }

    const _cancelCall = (id) => {
        if (id) {
            confirmAlert({
                title: "Are you sure?",
                text: "",
                buttonText: "Yes, Cancel it",
                action: () => _cancelCallHandler(id)
            });
        }
    }


    const _returnColumn = (record) => {
        return (
            <ul key={record?.SC_Id} className="ltn__select-availability-table-row">
                <li className="table-data-5">
                    <strong>
                        {record?.PolicyNo || ""}
                    </strong>
                </li>
                <li className="table-data-5">{`${record?.ClaimId || ""}`}</li>
                <li className="table-data-5">{`${record?.PolicyHolderName || ""}`}</li>
                <li className="table-data-10">{`${record?.MakeName || ""}`}</li>
                <li className="table-data-4">
                    {formatDateTime(record?.StartTime).toAmPM || ""}
                </li>
                <li className="table-data-4">
                    {formatDateTime(record?.Date).toDate || ""}
                </li>
                <li className="table-data-4">
                    {!initial_rules_actions?.includes("UPDATE") &&
                        <strong>
                            <Link to={`/claim/call/${record?.ChannelId}/${record?.PolicyHolderName}`} >Join Call</Link>
                        </strong>
                    }
                </li>
                <li className="table-data-4">
                    {!initial_rules_actions?.includes("VIEW") &&
                        <strong className='text-danger' role="button" onClick={() => _cancelCall(record?.SC_Id)}>
                            Cancel
                        </strong>
                    }
                </li>
                <li className="table-data-4">
                    {!initial_rules_actions?.includes("UPDATE") &&
                        <strong role="button" onClick={()=>_openModal(record?.SC_Id, record?.ClaimId)} className='text-primary'>
                            Reschedule
                        </strong>
                    }
                </li>
                

            </ul>
        )
    }



    return (
        <React.Fragment>
            <ClaimScheduleCallModal getClaimDetails={_getList} sc_id={comState.sc_id} title="Reschedule" claim_id={comState.claim_id} toggleModal={() => _closeModal("openModal")} openModal={comState.openModal} />

            {
                loading ? <LoaderAnimation /> :
                    <div className="ltn__apartments-tab-content-inner">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="ltn__select-availability-table-wrap ltnd__policies-table-wrap ltnd__garage-table-wrap">
                                    <div className="ltn__select-availability-table  d-none d-md-block">
                                        <ul className="ltn__select-availability-table-head">
                                            <li className="table-data-5">Policy no.</li>
                                            <li className="table-data-5">Claim no.</li>
                                            <li className="table-data-10">Policy Holder Name</li>
                                            <li className="table-data-10">Car Brand</li>
                                            <li className="table-data-4">Time</li>
                                            <li className="table-data-4">Date</li>
                                            <li className="table-data-4"></li>
                                            <li className="table-data-4"></li>
                                            <li className="table-data-4"></li>
                                        </ul>


                                        {search_text && search_option ? list.filter((recrd) => recrd[search_option]?.toString()?.toUpperCase()?.startsWith(search_text.toUpperCase())).map((record, index) => {
                                                return _returnColumn(record)
                                            }) : list.map((record, index) => {
                                                return _returnColumn(record)
                                            }) || []}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }


            {/* <Pagination recordsCount={count} pageIndex={page_index} recordsPerPage={records_per_page} handler={_paginationHandler} className="mt-3" /> */}
        </React.Fragment>
    )
}

export default ScheduledCallGrid;
