import React, { useEffect } from 'react'
import carImg from 'assets/img/icons/mc/png/3.png';
import Loader from 'components/Loader/Loader';
import Pagination from 'components/Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllowActions } from 'functions';
import LoaderAnimation from 'components/Loader/AnimatedLoaded';
import { getNotifications, changeHandlerNotifications } from 'store/actions/notifications';

const NotificationList = () => {

    //Permissions Controlling
    const { permissions } = useSelector(state => state.authReducer);
    let garage_actions = getAllowActions({ permissions, module_name: "PG" });




    const dispatch = useDispatch();
    const {
        notifications,
        search_option,
        search_text,
        sort_type,
        sort_name,
    } = useSelector(state => state.notificationsScreenReducer);


    const {
        list,
        loading,
        records_per_page,
        page_index,
        count,
    } = notifications;


    const _paginationHandler = (pageIndex) => {
        let module = "notifications";
        let key = "page_index";
        let val = pageIndex;
        dispatch(changeHandlerNotifications({ module: module, key, val }));
    }


    const _getList = () => {
        dispatch(getNotifications({
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
                                            <li className="table-data-1"> # </li>
                                        </ul>
                                        {list.map(record => {
                                            return (
                                                <ul className="ltn__select-availability-table-row">
                                                    <li className="table-data-1">
                                                        <strong>
                                                            {/* <img src={record.Image && `${process.env.REACT_APP_API_ENVIRONMENT}/${record.Image}`} alt="" />
                                                            {record.Name} */}
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

export default NotificationList
