import React, { useEffect } from 'react'
import carImg from 'assets/img/icons/mc/png/3.png';
import Loader from 'components/Loader/Loader';
import Pagination from 'components/Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getAllowActions } from 'functions';
import LoaderAnimation from 'components/Loader/AnimatedLoaded';
import { getAssignProvider, changeHandlerAssignProvider } from 'store/actions/taskList/assign';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const AssignProviderGrid = () => {
    let { id } = useParams();

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
            provider_id:id,
            records_per_page, page_index, search_option,
            search_text,
            sort_type,
            sort_name,
        }));
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
                                            <li className="table-data-1">Agency</li>
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
                                                            {record.FullName}
                                                        </strong>
                                                        </li>
                                                    <li className="table-data-1">
                                                        <strong>
                                                            <img src={record.Image && `${process.env.REACT_APP_API_ENVIROMENT}/${record.Image}`} alt="" />
                                                            {record.Name}
                                                        </strong>
                                                    </li>
                                                    <li className="table-data-2 dot_pending">
                                                        <span class="dot_assign_provider "></span>
                                                        <b>12</b>
                                                    </li>
                                                    <li className="table-data-2 dot_under_assesment">
                                                        <span class="dot_assign_provider "></span>
                                                        <b>14</b>
                                                    </li>
                                                    <li className="table-data-2 dot_close">
                                                        <span class="dot_assign_provider "></span>
                                                        <b>12</b>
                                                    </li>
                                                    <li className="table-data-2 text-primary float-end">
                                                        <strong>
                                                            <Link to={`/admin/view_provider/garage/${record.Id}?tab=0`} >View Details</Link>
                                                        </strong>
                                                    </li>
                                                    <li className="table-data-2 text-primary float-end">
                                                        <strong>
                                                            <Link to={`/claim/assign_to_branch/${record.Id}`}>Assign</Link>
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


            <Pagination recordsCount={count} pageIndex={page_index} recordsPerPage={records_per_page} handler={_paginationHandler} className="mt-3" />
        </React.Fragment>
    )
}

export default AssignProviderGrid;
