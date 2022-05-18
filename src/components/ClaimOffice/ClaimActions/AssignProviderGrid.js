import React, { useEffect } from 'react'
import carImg from 'assets/img/icons/mc/png/3.png';
import Loader from 'components/Loader/Loader';
import Pagination from 'components/Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getAllowActions } from 'functions';
import LoaderAnimation from 'components/Loader/AnimatedLoaded';
import { getAssignProvider, changeHandlerAssignProvider, assignClaimToSurveyor } from 'store/actions/taskList/assign';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const AssignProviderGrid = () => {
    let { id, claim_id } = useParams();
    const navigate = useNavigate()
    //Permissions Controlling
    const { permissions } = useSelector(state => state.authReducer);


    const dispatch = useDispatch();
    const {
        record,
        search_option,
        search_text,
        sort_type,
        sort_name,
    } = useSelector(state => state.assignProviderScreenReducer);


    const {
        list,
        loading,
        records_per_page,
        page_index,
        count,
    } = record;


    const _paginationHandler = (pageIndex) => {
        let modeule = "record";
        let key = "page_index";
        let val = pageIndex;
        dispatch(changeHandlerAssignProvider({ modeule, key, val }));
    }


    const _getList = () => {
        dispatch(getAssignProvider({
            provider_id: id,
            records_per_page, page_index, search_option,
            search_text,
            sort_type,
            sort_name,
        }));
    }

    const _assignClaimToSurveyorCallback = () => {
        navigate(`/claim/claim_detail/${claim_id}`);
    }

    const _assignClaimToSurveyor = (surveyorId) => {
        dispatch(assignClaimToSurveyor({
            SurveyourId:surveyorId,
            CS_Id:claim_id,
            providerId:id,
            ClaimId: claim_id,
            ReplacementCarAgencyId: claim_id,
        }, _assignClaimToSurveyorCallback));
        
    }



    useEffect(() => {
        _getList();
    }, [page_index]);


    useEffect(() => {
        _paginationHandler(1);
    }, []);








    return (
        <React.Fragment>
            {
                loading ? <LoaderAnimation /> :
                    <div className="ltn__apartments-tab-content-inner">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="ltn__select-availability-table-wrap ltnd__policies-table-wrap ltnd__garage-table-wrap">
                                    <div className="ltn__select-availability-table  d-none d-md-block">
                                        <ul className="ltn__select-availability-table-head">
                                            <li className="table-data-1">Name</li>
                                            {/* <li className="table-data-1">POC Name</li> */}
                                            <li className="table-data-2">Pending</li>
                                            <li className="table-data-2">Under Assesment</li>
                                            <li className="table-data-2">Close</li>
                                            <li className="table-data-2 float-end"></li>
                                            <li className="table-data-2"></li>

                                        </ul>
                                        {list.map(record => {
                                            return (
                                                <ul className="ltn__select-availability-table-row">

                                                    <li className="table-data-1">
                                                        <strong>
                                                            <img src={record.Image && `${process.env.REACT_APP_API_ENVIROMENT}/${record.Image}`} alt="" />
                                                            {record?.Name || ""}
                                                        </strong>
                                                    </li>
                                                    {/* <li className="table-data-1">
                                                        <strong>
                                                            {record?.POCName || ""}
                                                        </strong>
                                                    </li> */}

                                                    <li className="table-data-2 dot_pending">
                                                        <span class="dot_assign_provider "></span>
                                                        <b>{record?.Pending || 0}</b>
                                                    </li>
                                                    <li className="table-data-2 dot_under_assesment">
                                                        <span class="dot_assign_provider "></span>
                                                        <b>{record?.Under_Repair || 0}</b>
                                                    </li>
                                                    <li className="table-data-2 dot_close">
                                                        <span class="dot_assign_provider "></span>
                                                        <b>{record?.Closed || 0}</b>
                                                    </li>
                                                    <li className="table-data-2 text-primary float-end">
                                                        <strong>
                                                            <Link to={`/claim/view_assign_details/${id}/${record.AgencyGarageId}`} >View Details</Link>
                                                        </strong>
                                                    </li>
                                                    {id < 3 ?
                                                        <li className="table-data-2 text-primary float-end">
                                                            <strong>
                                                                <Link to={`/claim/assign_to_branch/${record.AgencyGarageId}/${claim_id}`}>Branches</Link>
                                                            </strong>
                                                        </li> :
                                                        <li className="table-data-2 text-primary float-end">
                                                            <strong>
                                                                <a
                                                                    onClick={() => _assignClaimToSurveyor(record.AgencyGarageId)}
                                                                    role="button">Assign</a>
                                                            </strong>
                                                        </li>
                                                    }


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


            <Pagination recordsCount={count} pageIndex={page_index} recordsPerPage={records_per_page} handler={_paginationHandler} className="mt-3" />
        </React.Fragment>
    )
}

export default AssignProviderGrid;
