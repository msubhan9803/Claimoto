import React, { useEffect } from 'react'
import carImg from 'assets/img/icons/mc/png/3.png';
import Loader from 'components/Loader/Loader';
import Pagination from 'components/Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllowActions } from 'functions';
import LoaderAnimation from 'components/Loader/AnimatedLoaded';
import { getInitials, changeHandlerRule } from 'store/actions/rules';
import { formatDateTime } from 'functions';

const InitialRuleList = () => {

    //Permissions Controlling
    const { permissions } = useSelector(state => state.authReducer);
    let initial_rules_actions = getAllowActions({ permissions, module_name: "IAR" });




    const dispatch = useDispatch();
    const {
        initials,
        search_option,
        search_text,
        sort_type,
        sort_name,
    } = useSelector(state => state.rulesScreenReducer);


    const {
        list,
        loading,
        records_per_page,
        page_index,
        count,
    } = initials;


    const _paginationHandler = (pageIndex) => {
        let modeule = "initials";
        let key = "page_index";
        let val = pageIndex;
        dispatch(changeHandlerRule({ modeule, key, val }));
    }


    const _getList = () => {
        dispatch(getInitials({
            records_per_page, page_index, search_option,
            search_text,
            sort_type,
            sort_name,
        }));
    }


    useEffect(() => {
        _getList();
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
                                            <li className="table-data-5">Name</li>
                                            <li className="table-data-5">Year</li>
                                            <li className="table-data-10">Assigned To</li>
                                            <li className="table-data-10">Created Date</li>
                                            <li className="table-data-7">View</li>
                                            <li className="table-data-7">EDIT</li>
                                        </ul>
                                        {list.filter((recrd) => recrd.AM_Assign_Name.toUpperCase().startsWith(search_text.toUpperCase())).map(record => {
                                            return (
                                                <ul className="ltn__select-availability-table-row">
                                                    <li className="table-data-1">
                                                        <strong>
                                                            {record.AM_Assign_Name}
                                                        </strong>
                                                    </li>
                                                    <li className="table-data-3">{`${record?.AM_Assign_YearFrom}-${record?.AM_Assign_YearTo}`}</li>
                                                    <li className="table-data-6">
                                                        {record?.AM_Assign_ToUser || ""}
                                                    </li>
                                                    <li className="table-data-6">
                                                        {formatDateTime(record?.CreatedDate)?.dateTime || ""}
                                                    </li>
                                                    <li className="table-data-7">
                                                        {!initial_rules_actions?.includes("VIEW") &&
                                                            <strong>
                                                                <Link to={`/admin/view_rule/1/${record.AM_Assign_ID}`} >View</Link>
                                                            </strong>
                                                        }
                                                    </li>
                                                    <li className="table-data-7">
                                                        {!initial_rules_actions?.includes("UPDATE") &&
                                                            <strong>
                                                                <Link to={`/admin/edit_rule/1/${record.AM_Assign_ID}`} >Edit</Link>
                                                            </strong>
                                                        }
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

export default InitialRuleList;
